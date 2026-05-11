/* Modular UI Components Library */
const { useState, useEffect } = React;

// 1. Button Component
const Button = ({ children, variant = "primary", className = "", ...props }) => {
    const baseStyle = "btn fira-sans font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]";
    const variants = {
        primary: "bg-[#225e47] text-[#f8f7f2] hover:bg-[#568c75] shadow-md",
        secondary: "bg-[#568c75] text-white hover:bg-[#aabe5c] hover:text-[#225e47] shadow-sm",
        ghost: "bg-transparent text-[#225e47] hover:bg-[#225e47]/5"
    };

    return (
        <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
            {children}
        </button>
    );
};

// 2. Input Component
const Input = ({ label, icon: Icon, ...props }) => {
    return (
        <div className="space-y-2 mb-4">
            {label && <label className="block text-sm font-fira font-bold text-[#225e47]">{label}</label>}
            <div className="relative">
                {Icon && <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">{Icon}</div>}
                <input
                    className={`w-full bg-white border border-gray-200 rounded-xl px-4 py-3 ${Icon ? 'pl-11' : ''} focus:ring-2 focus:ring-[#568c75]/20 focus:border-[#568c75] outline-none transition-all`}
                    {...props}
                />
            </div>
        </div>
    );
};

// 3. Course Card Component
const CourseCard = ({ title, description, progress = 0 }) => {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-soft border border-gray-50 hover:shadow-lg hover:-translate-y-1 transition-all group animate-fade">
            <div className="w-12 h-12 bg-[#568c75]/10 rounded-xl flex items-center justify-center text-[#568c75] mb-4 group-hover:bg-[#568c75] group-hover:text-white transition-colors duration-300">
                <i data-lucide="book-open" className="w-6 h-6"></i>
            </div>
            <h3 className="text-lg font-bold text-[#225e47] mb-2 fira-sans">{title}</h3>
            <p className="text-sm text-gray-500 mb-6 leading-relaxed">{description}</p>

            <div className="space-y-3">
                <div className="flex justify-between text-[10px] font-bold text-[#568c75] uppercase tracking-wider">
                    <span>Progreso</span>
                    <span>{progress}%</span>
                </div>
                <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-[#aabe5c] transition-all duration-1000 ease-out"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>
        </div>
    );
};

// Exporting to window for direct browser usage without build step
window.LMS_UI = { Button, Input, CourseCard };
