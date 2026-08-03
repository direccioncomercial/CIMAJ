import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

original_js = """
        // Navegación estilo SPA (Pestañas Ocultas)
        function navigate(viewId) {
            document.querySelectorAll('.view-section').forEach(section => {
                section.classList.remove('view-active');
            });

            document.getElementById('view-' + viewId).classList.add('view-active');

            document.querySelectorAll('.nav-btn').forEach(btn => {
                if(btn.dataset.target === viewId) {
                    btn.classList.add('text-[#C5A059]');
                    btn.classList.remove('text-slate-300');
                } else {
                    btn.classList.remove('text-[#C5A059]');
                    btn.classList.add('text-slate-300');
                }
            });

            const menu = document.getElementById('mobile-menu');
            const icon = document.getElementById('mobile-icon');
            if (!menu.classList.contains('translate-x-full')) {
                menu.classList.add('translate-x-full');
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }

            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Menú Hamburguesa Móvil
        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            const icon = document.getElementById('mobile-icon');

            if (menu.classList.contains('translate-x-full')) {
                menu.classList.remove('translate-x-full');
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                menu.classList.add('translate-x-full');
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        }
"""

optimized_js = """
        // Cache DOM elements para mejor rendimiento
        const cachedSections = document.querySelectorAll('.view-section');
        const cachedNavBtns = document.querySelectorAll('.nav-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileIcon = document.getElementById('mobile-icon');

        // Navegación estilo SPA (Pestañas Ocultas)
        function navigate(viewId) {
            cachedSections.forEach(section => {
                section.classList.remove('view-active');
            });

            document.getElementById('view-' + viewId).classList.add('view-active');

            cachedNavBtns.forEach(btn => {
                if(btn.dataset.target === viewId) {
                    btn.classList.add('text-[#C5A059]');
                    btn.classList.remove('text-slate-300');
                } else {
                    btn.classList.remove('text-[#C5A059]');
                    btn.classList.add('text-slate-300');
                }
            });

            if (!mobileMenu.classList.contains('translate-x-full')) {
                mobileMenu.classList.add('translate-x-full');
                mobileIcon.classList.remove('fa-xmark');
                mobileIcon.classList.add('fa-bars');
            }

            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Menú Hamburguesa Móvil
        function toggleMobileMenu() {
            if (mobileMenu.classList.contains('translate-x-full')) {
                mobileMenu.classList.remove('translate-x-full');
                mobileIcon.classList.remove('fa-bars');
                mobileIcon.classList.add('fa-xmark');
            } else {
                mobileMenu.classList.add('translate-x-full');
                mobileIcon.classList.remove('fa-xmark');
                mobileIcon.classList.add('fa-bars');
            }
        }
"""

# Strip leading/trailing whitespaces to avoid mismatch
original_js = original_js.strip()
optimized_js = optimized_js.strip()

# Replace using string replace, accounting for potential minor whitespace diffs
content = content.replace(original_js, optimized_js)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
