import React from 'react';
const About = () => {
    return (
        <section id="about" aria-label='section about me' className="min-h-screen border-0 w-full flex flex-col relative">
            <div className="w-full mx-auto flex flex-col sm:flex-row sm:mt-36 mt-20 c-space gap-3">
                <div className="p-20 sm:w-1/2 w-full flex flex-col gap-6 border-2 rounded-2xl m-5 border-neutral-800 overflow-x-auto" style={{
                    backgroundColor: "hsl(var(--background))"
                }}>
                    <p className="text-orange-600 font-bold font-italic sm:text-6xl text-4xl">That's me!</p>
                    <p className="text-neutral-800 sm:text-5xl text-3xl py-8">A multifacted developer with expertise in mobile and game development, and an occasional data scientist and designer.</p>
                </div>
                <div className="sm:w-1/2 w-full flex justify-center items-center">
                    <img src="assets/images/profile_picture.jpg" alt="Maria Seiser" className="rounded-full sm:w-2/4 w-full border-neutral-800 border-2" />
                </div>
            </div>
        </section>
    );
}

export default About