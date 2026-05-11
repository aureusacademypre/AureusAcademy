/* Modular Login Page */
const Login = ({ onLogin, setView }) => {
    const { Button, Input } = window.LMS_UI;

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-radial-gradient">
            <div className="w-full max-w-md animate-fade">
                <div className="text-center mb-10">
                    <div className="inline-flex w-24 h-24 bg-[#225e47] rounded-[2rem] items-center justify-center shadow-2xl mb-6 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                        <i data-lucide="shield-check" className="w-12 h-12 text-[#aabe5c]"></i>
                    </div>
                    <h1 className="text-4xl font-black text-[#225e47] fira-sans mb-2 tracking-tight">Bienvenido</h1>
                    <p className="text-[#6b7280] font-medium">Ingresa a tu cuenta institucional segura</p>
                </div>

                <div className="bg-white rounded-[2.5rem] p-10 shadow-soft border border-white/50 backdrop-blur-sm">
                    <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
                        <Input
                            label="Email Institucional"
                            type="email"
                            placeholder="aureusacademypre@gmail.com"
                            required
                        />
                        <Input
                            label="Contraseña"
                            type="password"
                            placeholder="••••••••"
                            required
                        />

                        <div className="flex items-center justify-between text-xs font-bold">
                            <label className="flex items-center gap-2 cursor-pointer text-[#6b7280]">
                                <input type="checkbox" className="rounded" /> Recordarme
                            </label>
                            <a href="#" className="text-[#568c75] hover:text-[#aabe5c]">¿Olvidaste tu contraseña?</a>
                        </div>

                        <Button className="w-full !py-4 shadow-heavy" type="submit">
                            Iniciar Sesión <i data-lucide="arrow-right" className="ml-2 w-4 h-4 inline"></i>
                        </Button>
                    </form>

                    <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                        <button
                            onClick={() => setView('register')}
                            className="text-sm font-bold text-[#568c75] hover:text-[#aabe5c] transition-colors"
                        >
                            ¿No tienes cuenta? Regístrate aquí
                        </button>
                    </div>
                </div>

                <div className="mt-8 text-center text-xs text-[#6b7280] font-medium">
                    <p>Protegido por cifrado de extremo a extremo. <br /> Aureus Academy © 2026</p>
                </div>
            </div>
        </div>
    );
};

window.LoginPage = Login;
