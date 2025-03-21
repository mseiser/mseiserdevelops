import React from 'react'

const ProjectCard = ({ key, project }) => {
    const { title, company, technologies, videoUrl } = project;
    const handleClick = () => {
        window.open(project.source, '_blank', 'noopener,noreferrer');
    };

    return (
        <div
            className={`bento-item ${project.style}`}
            key={key}
            onClick={handleClick}
            style={{ cursor: 'pointer' }}
        >
            <div>
                <h3>{title}</h3>
                <p>{technologies.join(', ')}</p>
            </div>
        </div>
    )
}

export default ProjectCard
