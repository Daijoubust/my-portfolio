import React from 'react'
// import arrayDestruct from '../assets/port'

const About = () => {
    return (
        <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
                </div>
                <p className=' text-xl mt-14'>
                    I'm a junior frontend developer that proficiency in range of computing systems, languages that based on web development and
                associated tools. Astonishing problem solving skills, communication skills and a team player.
                </p>
                <br/>
                <p className=' text-xl mt-14'>
                How I've become frontend developer ?
                <br/>
                I was make education website about Japanese history with Dreamweaver when I was in high school and I really love to design or create something that delighted, I had using Photoshop and Illustrator before so I loved these thing and I found out that web development is suited to my skill so I decide to learn by my self. That was over 4 months since I have learned web development intensely.
                </p>
            </div>
        </div>
    )
}

export default About