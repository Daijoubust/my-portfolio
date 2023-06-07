import React from 'react'
import HeroImage from '../assets/heroImage.jpg'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll';

const Home = () => {
    return (
        <div
        name="home"
        className='h-screen w-full bg-gradient-to-b via-black
        from-black to-gray-800 py-20'>
            <div className=' max-w-screen-lg mx-auto flex flex-col
            items-center justify-center h-full px-4 md:flex-row'>
                <div className='flex flex-col justify-center h-full'>
                <div className={`flex flex-col justify-center content`}>
                    <div className='text zero'><h2 className='text-4xl sm:text-7xl font-bold text-white'>I'm a</h2></div>
                    <div className='text un'><h2 className='text-4xl sm:text-7xl font-bold text-white'>Frontend</h2></div>
                    <div className='text deux'><h2 className='text-4xl sm:text-7xl font-bold text-white'>Developer.</h2></div>
                </div>
                    <p className=' text-gray-500 py-4 max-w-md desc'>
                    I have 5 months of experience building and designing webpage.
                    Currently, I love to work on website that using React and Tailwind CSS framework.
                    </p>
                    <div>
                        <Link to='portfolio' smooth duration={600} className=' group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-400 to-blue-500 cursor-pointer'>
                            Portfolio &nbsp;
                            <span className=' group-hover:rotate-90 duration-300'>
                                <HiArrowNarrowRight size={25}/>
                            </span>
                        </Link>
                    </div>
                </div>
                <div className=' m-20'>
                    <img
                    src={HeroImage}
                    alt="my profile"
                    className='rounded-2xl mx-auto w-2/3 md:w-full'
                    />
                </div>
            </div>
        </div>
    )
}

export default Home