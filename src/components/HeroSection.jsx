import React from 'react';

function HeroSection() {
    return (
        <section className="bg-purple-200 text-white w-full min-w-screen min-h-[12rem] md:min-h-[15rem] lg:min-h-[18rem] flex flex-col justify-center items-center text-center p-4 sm:p-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 font-playfair">
                Photo Gallery
            </h1>
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-800 font-playfair mt-2">
                Store your memories
            </h2>
        </section>
    );
}

export default HeroSection;
