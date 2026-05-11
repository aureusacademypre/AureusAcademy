/* Modular Admin Page */
const Admin = () => {
    const { Button } = window.LMS_UI;
    const courses = [
        { id: 1, name: "Matemáticas Aplicadas", date: "25 Feb, 2026", students: 45 },
        { id: 2, name: "Razonamiento Lógico", date: "02 Mar, 2026", students: 38 },
        { id: 3, name: "Física General", date: "10 Mar, 2026", students: 52 }
    ];

    return (
        <div className="max-w-7xl mx-auto px-6 py-12">
            <header className="mb-12 border-b border-gray-100 pb-8 animate-fade">
                <h1 className="text-4xl font-black text-[#225e47] fira-sans mb-3">Panel Administrativo</h1>
                <p className="text-[#6b7280] font-medium text-lg">Gestión centralizada de cursos y cronogramas académicos.</p>
            </header>

            <div className="flex justify-end mb-8 animate-fade">
                <Button className="!py-3 !px-8 shadow-md">
                    <i data-lucide="plus" className="w-5 h-5 mr-2 inline"></i> Agregar Nuevo Curso
                </Button>
            </div>

            <div className="bg-white rounded-3xl shadow-soft border border-gray-50 overflow-hidden animate-fade">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-[#225e47] text-white">
                        <tr>
                            <th className="p-6 fira-sans font-bold uppercase tracking-wider text-xs">Curso / Materia</th>
                            <th className="p-6 fira-sans font-bold uppercase tracking-wider text-xs">Próximo Examen</th>
                            <th className="p-6 fira-sans font-bold uppercase tracking-wider text-xs">Estudiantes</th>
                            <th className="p-6 fira-sans font-bold uppercase tracking-wider text-xs text-right">Acciones</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {courses.map((c) => (
                            <tr key={c.id} className="hover:bg-gray-50/50 transition-colors">
                                <td className="p-6 font-bold text-[#225e47]">{c.name}</td>
                                <td className="p-6 text-[#6b7280] font-medium">{c.date}</td>
                                <td className="p-6">
                                    <span className="bg-[#568c75]/10 text-[#568c75] px-3 py-1 rounded-full text-xs font-bold uppercase">
                                        {c.students} Inscritos
                                    </span>
                                </td>
                                <td className="p-6 text-right">
                                    <div className="flex justify-end gap-4">
                                        <button className="text-gray-400 hover:text-[#568c75] transition-colors">
                                            <i data-lucide="edit" className="w-5 h-5"></i>
                                        </button>
                                        <button className="text-gray-400 hover:text-red-500 transition-colors">
                                            <i data-lucide="trash-2" className="w-5 h-5"></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Admin Stats Section Placeholder */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-[#568c75]/5 p-8 rounded-3xl border border-dashed border-[#568c75]/20 text-center">
                    <i data-lucide="bar-chart-3" className="w-10 h-10 text-[#568c75] mx-auto mb-4 opacity-50"></i>
                    <p className="text-sm font-bold text-[#568c75]">Métricas de participación bajo desarrollo</p>
                </div>
                <div className="bg-[#aabe5c]/5 p-8 rounded-3xl border border-dashed border-[#aabe5c]/20 text-center">
                    <i data-lucide="calendar" className="w-10 h-10 text-[#aabe5c] mx-auto mb-4 opacity-50"></i>
                    <p className="text-sm font-bold text-[#aabe5c]">Integración con calendario institucional</p>
                </div>
            </div>
        </div>
    );
};

window.AdminPage = Admin;
