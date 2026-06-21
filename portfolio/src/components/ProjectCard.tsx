import React from 'react';

interface ProjectCardProps {
    title: string;
    description: string;
    imageUrl: string;
    projectUrl: string;
    technologies?: string[];
}

const ProjectCard = ({ title, description, imageUrl, projectUrl, technologies }: ProjectCardProps) => {
    return (
        <div className="bg-slate-800 rounded-lg shadow-xl overflow-hidden border border-slate-700 hover:border-cyan-400 transition-all hover:shadow-2xl hover:shadow-cyan-400/20 transform hover:-translate-y-1">
            <div className="relative overflow-hidden h-48">
                <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
                <p className="text-slate-300 mb-4 leading-relaxed">{description}</p>
                {technologies && (
                    <div className="mb-4 flex flex-wrap gap-2">
                        {technologies.map((tech, index) => (
                            <span key={index} className="text-xs bg-cyan-900 text-cyan-200 px-2 py-1 rounded-full">
                                {tech}
                            </span>
                        ))}
                    </div>
                )}
                <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="inline-block text-cyan-400 hover:text-cyan-300 font-semibold transition">
                    View Project →
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;
