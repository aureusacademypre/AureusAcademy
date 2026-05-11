/* Modular Navbar Component */
const Navbar = ({ activeView, setView }) => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#225e47]/95 backdrop-blur-md h-20 shadow-lg border-b border-[#568c75]/20">
            <div className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center text-white">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-[#aabe5c] rounded-lg flex items-center justify-center font-bold text-[#225e47] text-xl shadow-inner">A</div>
                    <div>
                        <h1 className="font-extrabold text-sm uppercase tracking-widest fira-sans leading-none">Aureus Academy</h1>
                        <p className="text-[#aabe5c] text-[8px] uppercase tracking-[0.2em] mt-1">Plataforma Educativa</p>
                    </div>
                </div>

                <div className="hidden md:flex items-center gap-10">
                    {['dashboard', 'cursos', 'admin'].map((v) => (
                        <button
                            key={v}
                            onClick={() => setView(v)}
                            className={`text-sm font-bold uppercase tracking-wider fira-sans transition-colors ${activeView === v ? 'text-[#aabe5c]' : 'text-white/70 hover:text-[#aabe5c]'}`}
                        >
                            {v}
                        </button>
                    ))}
                    <Button variant="secondary" className="!py-2 !px-4 text-xs" onClick={() => setView('login')}>
                        Cerrar Sesión
                    </Button>
                </div>

                {/* Mobile Menu Icon Placeholder */}
                <div className="md:hidden">
                    <i data-lucide="menu" className="w-6 h-6 text-[#aabe5c]"></i>
                </div>
            </div>
        </nav>
    );
};

window.Navbar = Navbar;
