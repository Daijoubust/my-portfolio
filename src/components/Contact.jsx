import React from 'react'
import './contact.css'
import { useEffect , useState } from 'react'
import './contact.css'

const Contact = () => {

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

    return (
        <div name='contact' className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
            <div className={`flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full ${scrollTop > 3000 ? 'animate' : ''}`}>
                <div className=' pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
                    <p className='py-6'>Submit the form below to contact me!</p>
                </div>

                <div className='flex justify-center items-center'>
                    <form action="https://getform.io/f/1b4a0da3-f6ac-447f-affa-106ce76ca3bb" method='POST' className=' flex flex-col w-full md:w-1/2'>
                        <input type="text" name='name' placeholder='Enter your name' className=' p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                        <input type="text" name='email' placeholder='Enter your email' className=' my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                    <textarea name="message" rows="10" placeholder='Enter your message' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>

                    <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Let's talk</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact