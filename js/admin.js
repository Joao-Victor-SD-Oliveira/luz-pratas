document.addEventListener('DOMContentLoaded', () => {
    const tableBody = document.getElementById('product-table-body');
    const modal = document.getElementById('product-modal');
    const addProductBtn = document.getElementById('add-product-btn');
    const cancelBtn = document.getElementById('cancel-btn');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const productForm = document.getElementById('product-form');
    const modalTitle = document.getElementById('modal-title');
    const productIdInput = document.getElementById('product-id');

    // <-- CORREÇÃO AQUI: URL da API estava malformada.
    const apiUrl = 'https://api-nourluz.onrender.com/produtos';

    const loadProducts = async () => {
        tableBody.innerHTML = '';
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                if (response.status === 401 || response.status === 403) {
                    alert("Acesso negado. Por favor, faça o login.");
                    // Assume que a página de login está no mesmo nível que a admin.html
                    window.location.href = 'login.html'; 
                }
                throw new Error('Falha ao carregar os produtos.');
            }
            const products = await response.json();
            products.forEach(product => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td data-label="ID">${product.id}</td>
                    <td data-label="Nome">${product.nome}</td>
                    <td data-label="Preço">${product.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                    <td data-label="Ações" class="actions">
                        <button class="edit-btn" data-id="${product.id}">Editar</button>
                        <button class="delete-btn" data-id="${product.id}">Excluir</button>
                    </td>
                `;
                tableBody.appendChild(row);
            });
        } catch (error) {
            console.error('Erro:', error);
            tableBody.innerHTML = `<tr><td colspan="4" style="text-align:center; color:red;">Erro ao carregar produtos. Verifique se a API está rodando.</td></tr>`;
        }
    };

    const deleteProduct = async (id) => {
        try {
            const response = await fetch(`${apiUrl}/${id}`, { method: 'DELETE' });
            if (!response.ok) throw new Error('Falha ao deletar o produto.');
            alert('Produto excluído com sucesso!');
            loadProducts();
        } catch (error) {
            console.error('Erro ao deletar produto:', error);
            alert('Ocorreu um erro ao tentar excluir o produto.');
        }
    };
    
    const openModal = () => modal.style.display = 'block';
    const closeModal = () => modal.style.display = 'none';

    addProductBtn.addEventListener('click', () => {
        productForm.reset();
        productIdInput.value = '';
        modalTitle.textContent = 'Adicionar Novo Produto';
        openModal();
    });
    
    cancelBtn.addEventListener('click', closeModal);
    closeModalBtn.addEventListener('click', closeModal);

    tableBody.addEventListener('click', async (event) => {
        const target = event.target;
        const id = target.dataset.id;
        if (target.classList.contains('delete-btn')) {
            if (confirm(`Tem certeza que deseja excluir o produto com ID ${id}?`)) {
                deleteProduct(id);
            }
        }
        if (target.classList.contains('edit-btn')) {
            try {
                const response = await fetch(`${apiUrl}/${id}`);
                if (!response.ok) throw new Error('Produto não encontrado');
                const product = await response.json();
                modalTitle.textContent = 'Editar Produto';
                productIdInput.value = product.id;
                document.getElementById('nome').value = product.nome;
                document.getElementById('descricao').value = product.descricao;
                document.getElementById('preco').value = product.preco;
                document.getElementById('categoria').value = product.categoria;
                document.getElementById('imagemUrl').value = product.imagemUrl;
                openModal();
            } catch (error) {
                console.error('Erro ao buscar produto para edição:', error);
                alert('Não foi possível carregar os dados do produto para edição.');
            }
        }
    });

    productForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const id = productIdInput.value;
        const productData = {
            nome: document.getElementById('nome').value,
            descricao: document.getElementById('descricao').value,
            preco: parseFloat(document.getElementById('preco').value),
            categoria: document.getElementById('categoria').value,
            imagemUrl: document.getElementById('imagemUrl').value,
        };
        const method = id ? 'PUT' : 'POST';
        const url = id ? `${apiUrl}/${id}` : apiUrl;
        try {
            const response = await fetch(url, {
                method: method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(productData)
            });
            if (!response.ok) throw new Error('Falha ao salvar o produto.');
            alert('Produto salvo com sucesso!');
            closeModal();
            loadProducts();
        } catch (error) {
            console.error('Erro ao salvar produto:', error);
            alert('Ocorreu um erro ao salvar o produto.');
        }
    });
    
    loadProducts();
});