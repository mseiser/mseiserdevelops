import React from 'react'

const ProjectCard = ({ key, project }) => {
    const { title, description, videoUrl } = project;
    return (
        <div className={`bento-item ${project.style}`} key={key}>
            <h3>{title}</h3>
            <p>{description}</p>
            {videoUrl && (
                <video
                    src={videoUrl}
                    onMouseOver={event => event.target.play()}
                    onMouseOut={event => event.target.pause()}
                    controls
                    width="300"
                />
            )}
        </div>
    )
}

export default ProjectCard
