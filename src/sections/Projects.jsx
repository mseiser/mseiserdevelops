import React from 'react'
import ProjectCard from '../components/ProjectCard'

const projects = [
    {
        title: 'Catroid',
        image: 'assets/images/catrobat.png',
        company: 'Catrobat',
        technologies: ['Android', 'Java', 'Kotlin'],
        source: 'https://github.com/Catrobat/Catroid',
        style: 'item1',
    },
    {
        title: 'FemQuest',
        video: 'https://youtu.be/jEhIhl1clI0',
        company: 'GameLab Graz',
        technologies: ['Unity', 'C#'],
        source: 'https://gamelabgraz.com/projects/femquest/',
        style: 'item2',
    },
    {
        title: 'VRChances',
        video: 'https://www.youtube.com/watch?v=9bZkp7q19f0',
        company: 'GameLab Graz',
        technologies: ['Unity', 'C#'],
        source: 'https://gamelabgraz.com/projects/vrchances/',
        style: 'item3',
    },
    {
        title: 'SelfMemo2',
        video: 'https://www.youtube.com/watch?v=9bZkp7q19f0',
        company: 'Niklas Lorber, Kilian Weisl, Maria Seiser',
        technologies: ['React', 'TypeScript'],
        source: 'https://github.com/selfmemo2/SelfMemo2',
        style: 'item5',
    },
    {
        title: 'OttoTheOrb',
        video: 'https://www.youtube.com/watch?v=9bZkp7q19f0',
        company: 'Lisa Habich, Maria Seiser',
        technologies: ['Unity', 'C#'],
        source: 'https://lisahabich.github.io/OttoTheOrb/',
        style: 'item4',
    },
    {
        title: 'FamilyOfStars',
        image: 'assets/images/familyofstars.png',
        company: 'Christina Ritter, Laura Weißl, Maria Seiser',
        technologies: ['Unity', 'C#'],
        style: 'item6',
    },
    {
        title: 'this.site',
        company: 'Maria Seiser',
        technologies: ['React', 'JavaScript'],
        style: 'item5',
        source: 'https://mseiser.github.io/mseiserdevelops/',
    }
]

const Projects = () => {
    return (
        <section id="projects" className="min-h-screen border-0 w-full flex flex-col relative">
            <div className="w-full mx-auto flex flex-col sm:flex-row sm:mt-36 mt-20 pb-20">
                <div className="p-20 flex flex-col w-full min-h-100 border-2 
            rounded-2xl m-5 border-neutral-800 overflow-x-auto" style={{
                        backgroundColor: "hsl(var(--background))"
                    }}>
                    <p className="text-orange-600 font-bold font-italic sm:text-6xl text-4xl pb-10">Projects</p>

                    <div className="bento-container">
                        {projects.map((project, index) => (
                            <ProjectCard key={index} project={project} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects
