import React from 'react';
const About = () => {
    return (
        <section className="min-h-screen border-0 w-full flex flex-col relative">
            <div className="w-full mx-auto flex flex-col sm:flex-row sm:mt-36 mt-20 c-space gap-3">
                <div className="p-20 sm:w-1/2 w-full flex flex-col gap-3">
                    <p className="text-orange-600 font-bold font-italic sm:text-6xl text-4xl">That's me!</p>
                    <p className="text-neutral-800 sm:text-4xl text-2xl py-8">A multifacted developer with expertise in mobile and game development, and an occasional data scientist and designer.</p>
                </div>
                <div className="sm:w-1/2 w-full flex justify-center items-center">
                    <img src="path/to/your/image.jpg" alt="Maria Seiser" className="rounded-full sm:w-3/4 w-full" />
                </div>
            </div>
        </section>
    );
}

export default About