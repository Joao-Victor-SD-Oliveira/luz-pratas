/* ========================================================
   ARQUIVO: cart.js - LÓGICA COMPLETA E DEFINITIVA DA SACOLA
   ======================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // --- Seleção dos Elementos do DOM ---
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartBackdrop = document.getElementById('cart-backdrop');
    const cartItemsContainer = document.getElementById('cart-items-container');
    const cartCountElement = document.getElementById('cart-item-count');
    const cartTotalPriceElement = document.getElementById('cart-total-price');
    const cartFooter = document.getElementById('cart-footer');
    const notificationToast = document.getElementById('add-to-cart-toast');
    
    let cart = []; // Nosso carrinho, um array em memória

    // --- FUNÇÃO MESTRE DE ATUALIZAÇÃO ---
    // Uma única função para redesenhar tudo com base nos dados do carrinho
    const updateCartUI = () => {
        // Atualiza o contador no ícone do header
        if (cartCountElement) {
            cartCountElement.textContent = cart.length;
            cartCountElement.classList.toggle('hidden', cart.length === 0);
        }

        // Atualiza o painel da sacola
        if (cartItemsContainer && cartFooter) {
            cartItemsContainer.innerHTML = ''; // Limpa a lista visual
            if (cart.length === 0) {
                cartItemsContainer.innerHTML = '<p class="text-center text-gray-500 pt-10">Sua sacola está vazia.</p>';
                cartFooter.classList.add('hidden');
            } else {
                cartFooter.classList.remove('hidden');
                let totalPrice = 0;
                cart.forEach(item => {
                    totalPrice += item.price;
                    const itemHTML = `
                        <div class="flex items-center space-x-4 mb-4">
                            <img src="${item.image}" alt="${item.alt}" class="w-16 h-16 object-cover rounded">
                            <div class="flex-grow">
                                <p class="font-semibold text-sm">${item.name}</p>
                                <p class="text-gray-600 text-sm">${item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                            </div>
                            <button data-product-id="${item.id}" class="remove-from-cart-btn text-gray-400 hover:text-red-500" aria-label="Remover item">
                                <svg class="w-5 h-5 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                            </button>
                        </div>
                    `;
                    cartItemsContainer.insertAdjacentHTML('beforeend', itemHTML);
                });
                cartTotalPriceElement.textContent = totalPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            }
        }
    };

    // --- Funções de Ação ---
    const showNotification = (message) => {
        if (notificationToast) {
            notificationToast.textContent = message;
            notificationToast.classList.add('show');
            setTimeout(() => notificationToast.classList.remove('show'), 2500);
        }
    };

    const loadCartFromStorage = () => {
        const savedCart = JSON.parse(localStorage.getItem('luz_joias_cart') || '[]');
        cart = savedCart;
        updateCartUI();
    };

    const saveCartToStorage = () => {
        localStorage.setItem('luz_joias_cart', JSON.stringify(cart));
    };
    
    const addItemToCart = (productId) => {
        const product = products.find(p => p.id == productId);
        if (!product) return;

        if (cart.some(item => item.id == productId)) {
            showNotification('Este item já está na sacola.');
            return;
        }

        cart.push(product);
        saveCartToStorage();
        updateCartUI();
        showNotification(`${product.name} foi adicionado à sacola!`);
    };

    const removeItemFromCart = (productId) => {
        const removedItem = cart.find(item => item.id == productId);
        cart = cart.filter(item => item.id != productId);
        saveCartToStorage();
        updateCartUI();
        if (removedItem) {
            showNotification(`${removedItem.name} removido da sacola.`);
        }
    };
    
    // --- Lógica de Eventos ---
    function openCartPanel() {
        cartSidebar?.classList.remove('translate-x-full');
        cartBackdrop?.classList.remove('hidden');
    }

    function closeCartPanel() {
        cartSidebar?.classList.add('translate-x-full');
        cartBackdrop?.classList.add('hidden');
    }

    // Ouvintes de eventos principais
    document.body.addEventListener('click', (event) => {
        // Adicionar ao Carrinho
        if (event.target.matches('.add-to-cart-btn')) {
            addItemToCart(event.target.dataset.productId);
        }
        // Remover do Carrinho
        if (event.target.matches('.remove-from-cart-btn')) {
            removeItemFromCart(event.target.dataset.productId);
        }
        // Abrir/Fechar painel
        if (event.target.matches('#cart-toggle-button, #cart-toggle-button *')) {
            openCartPanel();
        }
        if (event.target.matches('#close-cart-button, #close-cart-button *, #cart-backdrop')) {
            closeCartPanel();
        }
        // Finalizar Compra
        if (event.target.matches('#cart-checkout-button')) {
            handleCheckout();
        }
    });

    function handleCheckout() {
        if (cart.length === 0) return;
        const phoneNumber = "5511985842013";
        let message = "Olá! Gostaria de comprar as seguintes pratas:\n\n";
        cart.forEach(product => { message += `- ${product.name}\n`; });
        const total = cart.reduce((sum, p) => sum + p.price, 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        message += `\n*Total: ${total}*`;
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    }

    // --- Inicialização ---
    loadCartFromStorage();

});