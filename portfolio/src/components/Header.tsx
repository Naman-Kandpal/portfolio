import React from 'react';

const Header = () => {
    return (
        <header className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-4 border-b border-slate-700 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Naman Kandpal</h1>
                    <p className="text-sm text-slate-400">Computer Science Graduate</p>
                </div>
                <nav className="flex items-center space-x-8">
                    <ul className="flex space-x-6">
                        <li><a href="#about" className="text-slate-300 hover:text-cyan-400 transition font-medium">About</a></li>
                        <li><a href="#projects" className="text-slate-300 hover:text-cyan-400 transition font-medium">Projects</a></li>
                        <li><a href="#contact" className="text-slate-300 hover:text-cyan-400 transition font-medium">Contact</a></li>
                    </ul>
                    <a href="/portfolio/assets/resume.pdf" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold px-4 py-2 rounded-lg transition shadow-lg hover:shadow-xl">
                        Resume
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
