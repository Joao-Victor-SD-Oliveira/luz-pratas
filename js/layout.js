/*
  Descrição: Este script implementa funcionalidades globais de layout.

  - Navegação Dinâmica: Monta os links do header de forma contextual.
*/

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
        if (menuButton && closeMenuButton && mobileMenu) {
            menuButton.addEventListener('click', () => mobileMenu.classList.remove('hidden'));
            closeMenuButton.addEventListener('click', () => mobileMenu.classList.add('hidden'));
        }
    };
    
    const initializeDynamicHeader = () => {
        const desktopNav = document.getElementById('desktop-nav-links');
        const mobileNav = document.getElementById('mobile-nav-links');
        if (!desktopNav || !mobileNav) return;
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';

        // MUDANÇA AQUI: "Todos os Produtos" foi renomeado para "Loja"
        const allLinks = [
            { name: 'Início', href: 'index.html' },
            { name: 'Loja', href: 'todos-os-produtos.html' },
            { name: 'Brincos', href: 'brincos.html' },
            { name: 'Colares', href: 'colares.html' },
            { name: 'Anéis', href: 'aneis.html' },
            { name: 'Pulseiras', href: 'pulseiras.html' }
        ];

        let navLinks = '';
        let mobileLinks = '';

        if (currentPage === 'index.html') {
            navLinks = `<a href="#loja" class="hover:text-[var(--cor-destaque)] hover:underline transition-colors duration-200">Categorias</a>`;
            mobileLinks = `<a href="#loja" class="text-gray-600 hover:text-[#2f2f2f] text-lg uppercase">Categorias</a>
                           <a href="#" class="text-gray-600 hover:text-[#2f2f2f] text-lg">Contato</a>`;
        } else {
            allLinks.forEach(link => {
                if (currentPage === 'index.html' && link.href === 'index.html') return;
                const isActiveClass = link.href === currentPage ? 'active-link' : '';
                navLinks += `<a href="${link.href}" class="hover:text-[var(--cor-destaque)] hover:underline transition-colors duration-200 ${isActiveClass}">${link.name}</a>`;
                mobileLinks += `<a href="${link.href}" class="text-gray-600 hover:text-[#2f2f2f] text-lg uppercase ${isActiveClass}">${link.name}</a>`;
            });
        }
        
        desktopNav.innerHTML = navLinks;
        mobileNav.innerHTML = mobileLinks;
    };

    const initializePageTransitions = () => {
        document.body.classList.add('body-fade-in');
        setTimeout(() => {
            const internalLinks = document.querySelectorAll('a[href]:not([target="_blank"])');
            internalLinks.forEach(link => {
                link.addEventListener('click', function(event) {
                    const href = this.getAttribute('href');
                    if (href && !href.startsWith('#') && !this.classList.contains('active-link')) {
                        event.preventDefault(); 
                        document.body.classList.add('body-fade-out'); 
                        setTimeout(() => {
                            window.location.href = href;
                        }, 400); 
                    }
                });
            });
        }, 100); 
    };

    const initializeLayout = async () => {
        const headerPlaceholder = document.getElementById('header-placeholder');
        if(headerPlaceholder) {
            headerPlaceholder.classList.add('sticky', 'top-0', 'z-50', 'w-full');
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