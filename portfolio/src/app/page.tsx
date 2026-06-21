import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';

export default function Home() {
    const projects = [
        {
            title: 'Optimal Rubik\'s Cube Solver',
            description: 'An intelligent algorithm that finds the optimal solution to any Rubik\'s Cube configuration. Implements advanced search techniques and heuristics to minimize the number of moves required.',
            imageUrl: '/portfolio/images/cube.png?w=400&h=200&fit=crop',
            projectUrl: 'https://github.com/Naman-Kandpal/optimal-rubiks-cube-solver',
            technologies: ['C++', 'OOPS', 'Graph Algorithms', 'Heuristic Search'],
        },
        {
            title: 'TSP Automated Tester',
            description: 'An automated testing framework for Traveling Salesperson Problem (TSP) solvers. Validates algorithm implementations against multiple test cases and benchmarks performance across different problem sizes.',
            imageUrl: '/portfolio/images/tsp.png?w=200&h=400&fit=crop',
            projectUrl: 'https://github.com/Naman-Kandpal/tsp-automated-tester',
            technologies: ['Python', 'Combinatorial Optimization', 'Graph Theory', 'Genetic Algorithms'],
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            <Header />
            <main className="container mx-auto px-4 py-12">
                <section id="about" className="my-16">
                    <h2 className="text-4xl font-bold mb-6 text-white">About Me</h2>
                    <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
                        I am a recent Computer Science graduate with a passion for solving complex problems and building beautiful, functional applications. I specialize in algorithm optimization, software development, and creating elegant solutions to challenging computational problems.
                    </p>
                </section>
                <section id="projects" className="my-16">
                    <h2 className="text-4xl font-bold mb-8 text-white">Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                        ))}
                    </div>
                </section>
                <section id="contact" className="my-16">
                    <h2 className="text-4xl font-bold mb-6 text-white">Contact</h2>
                    <div className="flex flex-col gap-4">
                        <p className="text-lg text-slate-300">
                            <span className="font-semibold">Email:</span> <a href="mailto:namankandpal3135@gmail.com" className="text-cyan-400 hover:text-cyan-300 font-semibold transition">namankandpal3135@gmail.com</a>
                        </p>
                        <p className="text-lg text-slate-300">
                            <span className="font-semibold">LinkedIn:</span> <a href="https://www.linkedin.com/in/naman-kandpal" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 font-semibold transition">linkedin.com/in/naman-kandpal</a>
                        </p>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
