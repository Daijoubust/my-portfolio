import React, { useState,useEffect } from 'react'

import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import reactImage from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import boostStrap from '../assets/bootstrap-5-1.svg'
import sass from '../assets/sass.png'
import github from '../assets/github.png'
import typescript from '../assets/typescript-2.svg'

import './experience.css'

const Experience = () => {

    const [scrollTop, setScrollTop] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollTop(window.scrollY)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])


    const techs = [
        {
            id:1,
            src: html,
            title: 'HTML',
            level: 'Advance',
            style: 'shadow-orange-500',
            lvlStyle: 'shadow-red-500'
        },
        {
            id:2,
            src: css,
            title: 'CSS',
            level: 'Advance',
            style: 'shadow-blue-500',
            lvlStyle: 'shadow-red-500'
        },
        {
            id:3,
            src: javascript,
            title: 'JavaScript',
            level: 'Intermediate',
            style: 'shadow-yellow-500',
            lvlStyle: 'shadow-yellow-500'
        },
        {
            id:4,
            src: reactImage,
            title: 'React',
            level: 'Intermediate',
            style: 'shadow-sky-600',
            lvlStyle: 'shadow-yellow-500'
        },
        {
            id:5,
            src: tailwind,
            title: 'Tailwind',
            level: 'Intermediate',
            style: 'shadow-sky-500',
            lvlStyle: 'shadow-yellow-500'
        },
        {
            id:6,
            src: boostStrap,
            title: 'Bootstrap',
            level: 'Entry-level',
            style: 'shadow-purple-500',
            lvlStyle: 'shadow-green-500'
        },
        {
            id:7,
            src: sass,
            title: 'Sass',
            level: 'Intermediate',
            style: 'shadow-pink-400',
            lvlStyle: 'shadow-yellow-500'
        },
        {
            id:8,
            src: github,
            title: 'Github',
            level: 'Intermediate',
            style: 'shadow-gray-400',
            lvlStyle: 'shadow-yellow-500'
        },
        {
            id: 9,
            src: typescript,
            title: 'TypeScript',
            level: 'Entry-level',
            style: 'shadow-blue-600',
            lvlStyle: 'shadow-green-500'
        }
    ]

    return (
    <div name="experience" className=' bg-gradient-to-b from-gray-800 to-black w-full h-full py-24
    '>
        <div className=' max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white mb-4'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
                <p className='py-6'>These are the technologies I've worked with</p>
            </div>

            <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

            {
                techs.map(({id,src,title,style,level,lvlStyle}) => (
                <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${scrollTop > 2250 ? 'animate' : ''} ${style}`}>
                    <img src={src} alt="" className=' w-20 h-20 mx-auto'/>
                    <p className='mt-4'>{title}</p>
                    <p className={`my-3 mx-16 shadow-md text-white font-bold rounded-2xl sm:text-sm bg-gradient-to-b from-gray-800 to-black ${lvlStyle}`}>{level}</p>
                </div>
                ))
            }

            </div>
        </div>
    </div>
    )
}

export default Experience