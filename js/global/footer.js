(function() {
    const injectFooter = () => {
        const footerPlaceholder = document.getElementById('footer-placeholder');
        if (footerPlaceholder) {
            // Add Styles for Floating WhatsApp and other footer elements
            if (!document.getElementById('footer-styles')) {
                const style = document.createElement('style');
                style.id = 'footer-styles';
                style.innerHTML = `
                    .wsp-float {
                        position: fixed;
                        bottom: 40px;
                        right: 40px;
                        background-color: #25d366;
                        color: #FFF;
                        border-radius: 50px;
                        text-align: center;
                        font-size: 30px;
                        width: 60px;
                        height: 60px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        z-index: 100;
                        transition: all 0.3s ease;
                    }
                    .wsp-float:hover {
                        transform: scale(1.1);
                        background-color: #128c7e;
                    }
                    .footer-social-link svg {
                        width: 18px;
                        height: 18px;
                        stroke-width: 2.5;
                    }
                `;
                document.head.appendChild(style);
            }

            footerPlaceholder.innerHTML = `
                <footer class="bg-[#1a3a2d] text-white py-20 px-6 border-t border-white/5">
                    <div class="max-w-7xl mx-auto">
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                            <div>
                                <div class="flex items-center gap-3 mb-6">
                                    <img src="../img/logo.png" alt="Aureus" class="w-10 h-10 rounded-lg" onerror="this.src='https://ui-avatars.com/api/?name=Aureus&background=aabe5c&color=1a3a2d'">
                                    <h4 class="font-bold text-lg">Aureus Academy</h4>
                                </div>
                                <p class="text-white/50 text-sm leading-relaxed">Formación académica de excelencia para tu ingreso universitario. El preuniversitario #1 del Ecuador.</p>
                            </div>
                            <div>
                                <h5 class="font-black text-[#aabe5c] text-xs uppercase tracking-widest mb-6">Plataforma</h5>
                                <ul class="space-y-4">
                                    <li><a href="simuladores.html" class="text-white/70 hover:text-white transition-colors flex items-center gap-2"><i data-lucide="layout-grid" class="w-4 h-4"></i> Simuladores</a></li>
                                    <li><a href="uni.html" class="text-white/70 hover:text-white transition-colors flex items-center gap-2"><i data-lucide="graduation-cap" class="w-4 h-4"></i> Universidades</a></li>
                                    <li><a href="login.html" class="text-white/70 hover:text-white transition-colors flex items-center gap-2"><i data-lucide="user" class="w-4 h-4"></i> Aula Virtual</a></li>
                                </ul>
                            </div>
                            <div>
                                <h5 class="font-black text-[#aabe5c] text-xs uppercase tracking-widest mb-6">Redes Sociales</h5>
                                <ul class="space-y-4">
                                    <li><a href="https://www.instagram.com/aureus.academypre/" target="_blank" class="text-white/70 hover:text-white transition-colors flex items-center gap-2 footer-social-link">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                                        Instagram</a></li>
                                    <li><a href="https://www.tiktok.com/@aureus.academypre" target="_blank" class="text-white/70 hover:text-white transition-colors flex items-center gap-2 footer-social-link">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
                                        TikTok</a></li>
                                    <li><a href="https://wa.me/593987838705" target="_blank" class="text-white/70 hover:text-white transition-colors flex items-center gap-2 footer-social-link">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                                        WhatsApp</a></li>
                                </ul>
                            </div>
                            <div>
                                <h5 class="font-black text-[#aabe5c] text-xs uppercase tracking-widest mb-6">Soporte Técnico</h5>
                                <a href="https://wa.me/593985813254" target="_blank" class="bg-white/10 p-4 rounded-xl flex items-center gap-3 hover:bg-white/20 transition-all border border-white/10">
                                    <i data-lucide="help-circle" class="text-[#25d366]"></i>
                                    <div>
                                        <p class="font-bold text-sm">Chat de Soporte</p>
                                        <p class="text-[10px] text-white/50">Asistencia técnica 24/7</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="pt-8 border-t border-white/5 text-center text-white/30 text-xs font-bold uppercase tracking-widest">
                            © 2026 Aureus Academy • Excelencia Académica Superior
                        </div>
                    </div>
                </footer>
                
                <!-- WhatsApp Flotante -->
                <a href="https://wa.me/593987838705" target="_blank" class="wsp-float shadow-2xl" title="WhatsApp">
                    <svg width="35" height="35" viewBox="0 0 448 512" fill="white">
                        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3 18.7-68.1-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27.1-16.4-14.6-27.4-32.7-30.6-38.1-3.2-5.4-.3-8.3 2.4-11.1 2.4-2.5 5.5-6.5 8.3-9.7 2.8-3.2 3.7-5.5 5.5-9.2 1.9-3.7 1-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-11-9.1-9.5-12.5-9.6-3.2-.1-6.9-.1-10.6-.1-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.8 23.5 9.2 31.5 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                    </svg>
                </a>
            `;
            
            // Force Lucide icons re-creation for other icons
            if (window.lucide) {
                window.lucide.createIcons();
            }
        }
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', injectFooter);
    } else {
        injectFooter();
    }
})();
