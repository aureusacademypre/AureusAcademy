// aureus-select.js
// Custom Select Dropdown UI logic to replace native selects with beautiful dark-mode-ready variants.

class AureusSelect {
    constructor(selectElement) {
        this.select = selectElement;
        this.select.setAttribute('data-aureus-select', 'true');
        
        // Ocultar select nativo y su envoltura previa si la hay
        this.wrapper = this.select.parentElement;
        if (this.wrapper.classList.contains('relative')) {
            this.wrapper.style.display = 'none';
        } else {
            this.select.style.display = 'none';
        }

        this.createUI();
        this.setupBindings();
        this.observeChanges();
    }

    createUI() {
        this.container = document.createElement('div');
        this.container.className = 'relative w-full';

        // Botón principal
        this.trigger = document.createElement('div');
        // Copiar las clases estéticas del select original
        let baseClasses = this.select.className.replace('appearance-none', '').replace('hidden', '').trim();
        if (!baseClasses.includes('border')) baseClasses = 'w-full border border-gray-200 dark:border-white/10 rounded-xl p-3 bg-slate-50 dark:bg-white/5 dark:text-white text-slate-800 text-sm font-bold';
        
        this.trigger.className = baseClasses + ' flex justify-between items-center cursor-pointer';
        
        const labelText = this.select.options[this.select.selectedIndex]?.text || 'Seleccionar...';
        this.trigger.innerHTML = `
            <span class="aureus-select-label truncate mr-2">${labelText}</span>
            <svg class="w-4 h-4 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
        `;

        // Menú desplegable
        this.dropdown = document.createElement('div');
        this.dropdown.className = 'hidden absolute left-0 right-0 top-full mt-2 bg-white dark:bg-[#18181b] rounded-xl shadow-2xl border border-gray-100 dark:border-white/10 max-h-60 overflow-y-auto z-[1000]';
        
        this.renderOptions();

        this.container.appendChild(this.trigger);
        this.container.appendChild(this.dropdown);
        
        if (this.wrapper.classList.contains('relative')) {
            this.wrapper.parentElement.insertBefore(this.container, this.wrapper);
        } else {
            this.select.parentElement.insertBefore(this.container, this.select);
        }
    }

    renderOptions() {
        this.dropdown.innerHTML = '';
        Array.from(this.select.options).forEach((option, index) => {
            const item = document.createElement('div');
            item.className = 'px-4 py-3 cursor-pointer hover:bg-[#aabe5c]/10 hover:text-[#225e47] dark:hover:bg-white/10 dark:hover:text-white border-b border-gray-50 dark:border-white/5 last:border-0 transition-colors text-slate-800 dark:text-slate-300 text-sm font-medium';
            if (this.select.selectedIndex === index) {
                item.classList.add('bg-[#aabe5c]/5', 'text-[#225e47]', 'dark:text-white');
            }
            item.textContent = option.text;
            
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                this.select.selectedIndex = index;
                this.trigger.querySelector('.aureus-select-label').textContent = option.text;
                this.dropdown.classList.add('hidden');
                
                // Disparar evento para que funcione cualquier lógica onChange preexistente
                const event = new Event('change', { bubbles: true });
                this.select.dispatchEvent(event);
                
                this.renderOptions(); // Update active state
            });
            this.dropdown.appendChild(item);
        });
    }

    setupBindings() {
        this.trigger.addEventListener('click', (e) => {
            e.stopPropagation();
            // Cerrar otros
            document.querySelectorAll('.aureus-select-dropdown:not(.hidden)').forEach(d => {
                if (d !== this.dropdown) d.classList.add('hidden');
            });
            this.dropdown.classList.toggle('hidden');
            this.dropdown.classList.add('aureus-select-dropdown');
        });
    }

    observeChanges() {
        // Observacion de cambios en el select original (por si un JS añade options)
        const observer = new MutationObserver(() => {
            this.renderOptions();
            const labelText = this.select.options[this.select.selectedIndex]?.text || 'Seleccionar...';
            this.trigger.querySelector('.aureus-select-label').textContent = labelText;
        });
        observer.observe(this.select, { childList: true, subtree: true });

        // Escuchar cambios forzados por Javascript
        this.select.addEventListener('change', () => {
            this.renderOptions();
            const labelText = this.select.options[this.select.selectedIndex]?.text || 'Seleccionar...';
            this.trigger.querySelector('.aureus-select-label').textContent = labelText;
        });
    }
}

// Inicializar automáticamente en toda la página
document.addEventListener('DOMContentLoaded', () => {
    // Cerrar al hacer clic fuera
    document.addEventListener('click', () => {
        document.querySelectorAll('.aureus-select-dropdown').forEach(d => d.classList.add('hidden'));
    });

    // Iniciar
    const initSelects = () => {
        document.querySelectorAll('select:not([data-aureus-select])').forEach(sel => {
            new AureusSelect(sel);
        });
    }
    
    initSelects();
    
    // Y observar si se inyectan nuevos selects a futuro
    const bodyObserver = new MutationObserver((mutations) => {
        mutations.forEach(mut => {
            if(mut.addedNodes.length > 0) {
                 setTimeout(initSelects, 50);
            }
        });
    });
    bodyObserver.observe(document.body, { childList: true, subtree: true });
});
