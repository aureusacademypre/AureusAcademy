/* Modular Registration Page */
const Register = ({ onRegister, setView }) => {
    const { Button, Input } = window.LMS_UI;

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here we would call the registration API
        onRegister();
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-radial-gradient">
            <div className="w-full max-w-md animate-fade">
                <div className="text-center mb-10">
                    <div className="inline-flex w-24 h-24 bg-[#225e47] rounded-[2rem] items-center justify-center shadow-2xl mb-6 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                        <i data-lucide="user-plus" className="w-12 h-12 text-[#aabe5c]"></i>
                    </div>
                    <h1 className="text-4xl font-black text-[#225e47] fira-sans mb-2 tracking-tight">Únete a la Academia</h1>
                    <p className="text-[#6b7280] font-medium">Crea tu perfil académico hoy</p>
                </div>

                <div className="bg-white rounded-[2.5rem] p-10 shadow-soft border border-white/50 backdrop-blur-sm">
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <Input
                            label="Nombre Completo"
                            type="text"
                            placeholder="Nombre y Apellido"
                            required
                        />
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
                        <Input
                            label="Confirmar Contraseña"
                            type="password"
                            placeholder="••••••••"
                            required
                        />

                        <div className="text-xs text-[#6b7280] font-medium py-2">
                            Al registrarte, aceptas nuestros <a href="#" className="text-[#568c75] font-bold">términos de servicio</a>.
                        </div>

                        <Button className="w-full !py-4 shadow-heavy" type="submit">
                            Crear Cuenta <i data-lucide="arrow-right" className="ml-2 w-4 h-4 inline"></i>
                        </Button>
                    </form>

                    <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                        <button
                            onClick={() => setView('login')}
                            className="text-sm font-bold text-[#568c75] hover:text-[#aabe5c] transition-colors"
                        >
                            ¿Ya tienes cuenta? Inicia sesión
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

window.RegisterPage = Register;
