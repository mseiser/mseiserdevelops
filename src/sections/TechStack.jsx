import React from 'react'
import { useEffect, useRef } from 'react';
import { FaReact, FaJsSquare, FaUnity, FaJava, } from 'react-icons/fa';
import { TbBrandKotlin, TbBrandCSharp } from 'react-icons/tb';
import { SiAndroidstudio } from 'react-icons/si';
import { AiOutlinePython } from 'react-icons/ai';

const TechStack = () => {
    return (
        <section id="techstack" aria-label='Tech Stack Section' className="border-0 w-full flex flex-col relative">
            <div className="w-full mx-auto flex flex-col sm:flex-row sm:mt-36 mt-20 c-space gap-3">
                <div className="px-20 py-10 w-full flex flex-col gap-2 border-2 border-dotted rounded-2xl m-5 border-neutral-800 overflow-x-auto">
                    <p className="text-orange-600 font-bold sm:text-4xl text-2xl">Frameworks & Technologies</p>

                    <div className="flex flex-col gap-2">
                        <Carousel />
                    </div>
                </div>

            </div>
        </section>
    )
}

const Carousel = () => {
    const icons = [
        { component: FaReact, url: 'https://reactjs.org/' },
        { component: FaJsSquare, url: 'https://www.javascript.com/' },
        { component: FaUnity, url: 'https://unity.com/' },
        { component: FaJava, url: 'https://www.java.com/' },
        { component: TbBrandKotlin, url: 'https://kotlinlang.org/' },
        { component: TbBrandCSharp, url: 'https://learn.microsoft.com/en-us/dotnet/csharp/' },
        { component: SiAndroidstudio, url: 'https://developer.android.com/studio' },
        { component: AiOutlinePython, url: 'https://www.python.org/' }
    ];
    const carouselRef = useRef(null);
    return (
        <div ref={carouselRef} className="flex overflow-x-auto gap-4">
            {icons.map(({ component: Icon, url }, index) => (
                <a key={index} href={url} target="_blank" rel="noopener noreferrer" className="p-4">
                    <Icon className="text-6xl text-neutral-800 hover:p-2" />
                </a>
            ))}
        </div>
    );
};

export default TechStack
