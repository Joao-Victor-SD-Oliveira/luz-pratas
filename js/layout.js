/*
  Descrição: Este script implementa funcionalidades globais de layout.
*/

const renderProducts = (category) => {
    const productGrid = document.getElementById('product-grid');
    if (!productGrid) return;

    const filteredProducts = category 
        ? products.filter(p => p.category.includes(category)) 
        : products;

    productGrid.innerHTML = filteredProducts.map(product => `
        <div class="product-card bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="${product.image}" alt="${product.alt}" class="w-full h-56 object-cover">
            <div class="p-4 md:p-6">
                <p class="text-gray-700 text-sm mb-4">${product.name}</p>
                <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <span class="text-xl sm:text-2xl font-semibold text-[#2f2f2f]">${product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                    <a href="https://wa.me/5511985842013?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20a%20peça%20${encodeURIComponent(product.name)}." target="_blank" class="w-full sm:w-auto text-center buy-button bg-[var(--cor-destaque)] text-white px-4 py-2 rounded hover:bg-[var(--cor-destaque-hover)] transition-colors duration-300">
                        Comprar
                    </a>
                </div>
            </div>
        </div>
    `).join('');
};


document.addEventListener("DOMContentLoaded", function() {

    const loadComponent = async (selector, url) => {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error(`Erro ao carregar ${url}: ${response.statusText}`);
            const data = await response.text();
            const element = document.querySelector(selector);
            if (element) element.innerHTML = data;
        } catch (error) {
            console.error(error);
        }
    };

    const initializeMobileMenu = () => {
        const menuButton = document.getElementById('menu-button');
        const closeMenuButton = document.getElementById('close-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        const backdrop = document.getElementById('mobile-menu-backdrop');

        if (menuButton && closeMenuButton && mobileMenu && backdrop) {
            const openMenu = () => {
                mobileMenu.classList.remove('-translate-x-full');
                mobileMenu.classList.add('translate-x-0');
                backdrop.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
            };

            const closeMenu = () => {
                mobileMenu.classList.remove('translate-x-0');
                mobileMenu.classList.add('-translate-x-full');
                backdrop.classList.add('hidden');
                document.body.style.overflow = '';
            };

            menuButton.addEventListener('click', openMenu);
            closeMenuButton.addEventListener('click', closeMenu);
            backdrop.addEventListener('click', closeMenu);
        }
    };
    
    const initializeDynamicHeader = () => {
        const desktopNav = document.getElementById('desktop-nav-links');
        const mobileNav = document.getElementById('mobile-nav-links'); 
        
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        
        // ***** LINK DE ASSINATURAS ADICIONADO AQUI *****
        const navLinks = [
            { name: 'Início', href: 'index.html' },
            { name: 'Loja', href: 'todos-os-produtos.html' },
            { name: 'Brincos', href: 'brincos.html' },
            { name: 'Colares', href: 'colares.html' },
            { name: 'Anéis', href: 'aneis.html' },
            { name: 'Pulseiras', href: 'pulseiras.html' },
            { name: 'Assinaturas', href: 'assinaturas.html' }
        ];

        if (desktopNav) {
            desktopNav.innerHTML = navLinks
                .map(link => {
                    const isCurrentPage = link.href === currentPage;
                    const linkClass = isCurrentPage 
                        ? 'text-[var(--cor-destaque)] font-semibold' 
                        : 'hover:text-[var(--cor-destaque)] transition-colors duration-200';
                    return `<a href="${link.href}" class="${linkClass}">${link.name}</a>`;
                })
                .join('');
        }

        if (mobileNav) {
            mobileNav.innerHTML = navLinks.map(link => {
                const isActiveClass = link.href === currentPage ? 'text-[var(--cor-destaque)] font-bold' : 'text-gray-700';
                return `<a href="${link.href}" class="block py-2 ${isActiveClass} hover:text-[var(--cor-destaque)] text-lg uppercase">${link.name}</a>`;
            }).join('');
        }
    };

    const initializePageTransitions = () => {
        document.body.classList.add('body-fade-in');
        document.body.addEventListener('click', function(event) {
            const link = event.target.closest('a');
            if (link && link.href && !link.target && !link.href.includes('#') && new URL(link.href).hostname === location.hostname) {
                event.preventDefault();
                document.body.classList.add('body-fade-out');
                setTimeout(() => {
                    window.location.href = link.href;
                }, 400);
            }
        });
    };

    const initializeLayout = async () => {
        const headerPlaceholder = document.getElementById('header-placeholder');
        if (headerPlaceholder) {
            headerPlaceholder.classList.add('sticky', 'top-0', 'z-30', 'w-full');
        }
        
        await Promise.all([
            loadComponent('#header-placeholder', 'header.html'),
            loadComponent('#footer-placeholder', 'footer.html')
        ]);
        
        initializeDynamicHeader();
        initializeMobileMenu();
        initializePageTransitions();
    };

    initializeLayout();
});