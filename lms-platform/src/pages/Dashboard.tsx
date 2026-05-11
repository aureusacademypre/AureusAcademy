/* Modular Dashboard Page */
const Dashboard = () => {
    const { CourseCard } = window.LMS_UI;
    const stats = [
        { label: "Horas de Estudio", value: "124h", icon: "clock", color: "#aabe5c" },
        { label: "Cursos Completos", value: "8/12", icon: "check-circle", color: "#225e47" },
        { label: "Nivel Actual", value: "Avanzado", icon: "zap", color: "#568c75" }
    ];

    const courses = [
        { title: "Matemáticas Aplicadas", desc: "Resolución de problemas complejos para exámenes de admisión.", progress: 75 },
        { title: "Razonamiento Lógico", desc: "Desarrollo de habilidades cognitivas y análisis crítico.", progress: 40 },
        { title: "Física General", desc: "Fundamentos de mecánica y termodinámica clásica.", progress: 90 },
        { title: "Química Pro", desc: "Introducción a la química orgánica y enlaces moleculares.", progress: 15 }
    ];

    return (
        <div className="max-w-7xl mx-auto px-6 py-10">
            {/* Header Section */}
            <header className="bg-gradient-to-br from-[#225e47] to-[#1a3a2d] rounded-[3rem] p-12 text-white shadow-heavy mb-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#aabe5c]/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
                <div className="relative z-10 animate-fade">
                    <h1 className="text-4xl font-black mb-2 fira-sans">Hola, Fernando 👋</h1>
                    <p className="text-white/70 font-medium">Bienvenido de nuevo a tu espacio de excelencia académica.</p>
                </div>
            </header>

            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-28 mb-16 relative z-10 px-4">
                {stats.map((s, i) => (
                    <div key={i} className="bg-white p-6 rounded-2xl shadow-soft flex items-center gap-5 border border-white animate-fade" style={{ animationDelay: `${i * 100}ms` }}>
                        <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ backgroundColor: `${s.color}15`, color: s.color }}>
                            <i data-lucide={s.icon} className="w-7 h-7"></i>
                        </div>
                        <div>
                            <p className="text-[10px] uppercase font-black tracking-widest text-gray-400 mb-1">{s.label}</p>
                            <p className="text-xl font-black text-[#225e47] fira-sans">{s.value}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Courses Section */}
            <section className="animate-fade" style={{ animationDelay: '300ms' }}>
                <div className="flex justify-between items-end mb-8">
                    <div>
                        <h2 className="text-3xl font-black text-[#225e47] fira-sans">Tus Cursos Activos</h2>
                        <p className="text-[#6b7280] font-medium">Continúa tu camino hacia la excelencia</p>
                    </div>
                    <button className="text-sm font-bold text-[#568c75] hover:text-[#aabe5c] flex items-center gap-1 group">
                        Ver catálogo completo <i data-lucide="chevron-right" className="w-4 h-4 group-hover:translate-x-1 transition-transform"></i>
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {courses.map((c, i) => <CourseCard key={i} {...c} />)}
                </div>
            </section>
        </div>
    );
};

window.DashboardPage = Dashboard;
