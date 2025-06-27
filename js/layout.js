/* ========================================================
   ARQUIVO: layout.js - O Maestro do Layout
   Responsável pelo menu, navegação e transições.
   NÃO CONTÉM LÓGICA DE CARRINHO.
   ======================================================== */

const renderProducts = (category) => {
    const productGrid = document.getElementById('product-grid');
    if (!productGrid) return;

    // A lista 'products' vem do arquivo products.js
    const filteredProducts = category ? products.filter(p => p.category.includes(category)) : products;

    productGrid.innerHTML = filteredProducts.map(product => `
        <div class="product-card bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="${product.image}" alt="${product.alt}" class="w-full h-56 object-cover">
            <div class="p-4 md:p-6">
                <p class="text-gray-700 text-sm mb-4">${product.name}</p>
                <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <span class="text-xl sm:text-2xl font-semibold text-[#2f2f2f]">${product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                    <button 
                        data-product-id="${product.id}"
                        class="add-to-cart-btn w-full sm:w-auto text-center buy-button bg-[var(--cor-destaque)] text-white px-4 py-2 rounded hover:bg-[var(--cor-destaque-hover)] transition-colors duration-300">
                        Adicionar à sacola
                    </button>
                </div>
            </div>
        </div>
    `).join('');
};


document.addEventListener("DOMContentLoaded", function() {

    // --- Funções de Inicialização do Layout ---
    (function initializeLayout() {
        // Menu Mobile
        const menuButton = document.getElementById('menu-button');
        const closeMenuButton = document.getElementById('close-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        const menuBackdrop = document.getElementById('mobile-menu-backdrop');
        if (menuButton && mobileMenu) {
            const openMenu = () => { mobileMenu.classList.remove('-translate-x-full'); menuBackdrop.classList.remove('hidden'); };
            const closeMenu = () => { mobileMenu.classList.add('-translate-x-full'); menuBackdrop.classList.add('hidden'); };
            menuButton.addEventListener('click', openMenu);
            closeMenuButton.addEventListener('click', closeMenu);
            menuBackdrop.addEventListener('click', closeMenu);
        }

        // Navegação Dinâmica
        const desktopNav = document.getElementById('desktop-nav-links');
        const mobileNav = document.getElementById('mobile-nav-links'); 
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = [
            { name: 'Início', href: 'index.html' }, { name: 'Loja', href: 'todos-os-produtos.html' }, { name: 'Brincos', href: 'brincos.html' },
            { name: 'Colares', href: 'colares.html' }, { name: 'Anéis', href: 'aneis.html' }, { name: 'Pulseiras', href: 'pulseiras.html' }, { name: 'Assinaturas', href: 'assinaturas.html' }
        ];
        if (desktopNav) { desktopNav.innerHTML = navLinks.map(l => `<a href="${l.href}" class="transition-colors duration-200 ${l.href === currentPage ? 'text-[var(--cor-destaque)] font-semibold' : 'hover:text-[var(--cor-destaque)]'}">${l.name}</a>`).join(''); }
        if (mobileNav) { mobileNav.innerHTML = navLinks.map(l => `<a href="${l.href}" class="block py-2 hover:text-[var(--cor-destaque)] ${l.href === currentPage ? 'text-[var(--cor-destaque)] font-bold' : 'text-gray-700'} text-lg uppercase">${l.name}</a>`).join(''); }

        // Transições de Página
        document.body.classList.add('body-fade-in');
        document.body.addEventListener('click', function(event) {
            const link = event.target.closest('a');
            if (link && link.href && !link.target && !link.href.includes('#') && link.getAttribute('href').endsWith('.html')) {
                if(new URL(link.href).hostname === location.hostname) {
                    event.preventDefault();
                    document.body.classList.add('body-fade-out');
                    setTimeout(() => { window.location.href = link.href; }, 400);
                }
            }
        });

        // Lógica da Página Inicial
        const newArrivalsGrid = document.getElementById('new-arrivals-grid');
        if (newArrivalsGrid) {
            const categoriesToShow = ['brincos', 'colares', 'aneis', 'pulseiras'];
            const latestProductByCategory = {};
            for (const product of products) {
                for (const categoryOfProduct of product.category) {
                    if (categoriesToShow.includes(categoryOfProduct)) {
                        latestProductByCategory[categoryOfProduct] = product;
                    }
                }
            }
            const featuredProducts = Object.values(latestProductByCategory);
            newArrivalsGrid.innerHTML = featuredProducts.map(product => `
                <div class="product-card bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:-translate-y-2">
                    <a href="${product.category[0]}.html" class="block">
                        <img src="${product.image}" alt="${product.alt}" class="w-full h-56 object-cover">
                    </a>
                    <div class="p-6 text-center">
                        <p class="text-gray-800 text-base mb-2">${product.name}</p>
                        <span class="text-xl font-semibold text-[var(--cor-texto)]">${product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                    </div>
                </div>
            `).join('');
        }
    })();
});