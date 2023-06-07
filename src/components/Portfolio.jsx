import React , {useState , useEffect} from 'react'
import convertFigma from '../assets/portfolio/covert-design-from-figma.jpg'
import simpleLanding from '../assets/portfolio/simple-landing-page.jpg'
import snakeGame from '../assets/portfolio/snake-game.jpg'
import toDoList from '../assets/portfolio/to-do-list.jpg'
import weatherApp from '../assets/portfolio/weather-app.jpg'
import socialMediaApp1 from '../assets/portfolio/social-media-app-1.jpg'
import socialMediaApp2 from '../assets/portfolio/social-media-app-2.jpg'
import socialMediaApp3 from '../assets/portfolio/social-media-app-3.jpg'
// import socialMediaApp4 from '../assets/portfolio/social-media-app-4.jpg'
import sproutLand from '../assets/portfolio/sprout-land.png'
import pokemon from '../assets/portfolio/pokemon.png'
import revenue from '../assets/portfolio/revenue.png'
import './portfolio.css'


const Portfolio = () => {

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

    const portfolios = [
        {
            id: 1,
            src: convertFigma,
            link: "https://github.com/Daijoubust/outerspace",
            demo: "https://daijoubust-outerspace.netlify.app/"
        },
        {
            id: 2,
            src: simpleLanding,
            link: "https://github.com/Daijoubust/simple-landing-page",
            demo: "https://daijoubust-simple-landing-page.netlify.app/"
        },
        {
            id: 3,
            src: snakeGame,
            link: "https://github.com/Daijoubust/Snake-Game",
            demo: "https://daijoubust-snake-game.netlify.app/"
        },
        {
            id: 4,
            src: toDoList,
            link: "https://github.com/Daijoubust/to-do-list-but-better",
            demo: "https://daijoubust-to-do-list.netlify.app/"
        },
        {
            id: 5,
            src: weatherApp,
            link: "https://github.com/Daijoubust/weather-app"
        },
        {
            id: 6,
            src: sproutLand,
            link: "https://github.com/Daijoubust/sprout-lands-landing-page",
            demo: "https://sprout-land-by-daijoubust.netlify.app/"
        },
        {
            id: 7,
            src: socialMediaApp1,
            link: "https://github.com/Daijoubust/Social-Media-App-by-Daijoubust",
            demo: "https://daijoubust-social-media-login.netlify.app/login"
        },
        {
            id: 8,
            src: socialMediaApp2,
            link: "https://github.com/Daijoubust/Social-Media-App-by-Daijoubust",
            demo: "https://daijoubust-social-media-login.netlify.app/register"
        },
        {
            id: 9,
            src: socialMediaApp3,
            link: "https://github.com/Daijoubust/Social-Media-App-by-Daijoubust",
            demo: "https://daijoubust-social-media.netlify.app/"
        },
        {
            id: 10,
            src: pokemon,
            link: "https://github.com/Daijoubust/pokemon-randomizer",
            demo: "https://daijoubust-pokemon-list.netlify.app/"
        },
        {
            id: 11,
            src: revenue,
            link: "https://github.com/Daijoubust/revenue-app",
            demo: "https://daijoubust-revenue-app.netlify.app/"
        }
    ]

    return (
    <div name='portfolio' className=' bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-full pb-24'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className=' pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className=' py-6'>Check out some of my work right here</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                {portfolios.map(({id,src,link,demo}) => (
                    <div key={id} className={`shadow-md shadow-gray-500 rounded-lg ${scrollTop > 850 ? 'port' : ''}`}>
                        <img src={src} alt="" className='rounded-md duration-200 hover:scale-105'/>
                        <div className='flex items-center justify-center'>
                            <button className=' w-full px-6 py-3 m-4 duration-200 hover:scale-105'><a href={link}>Code</a></button>
                            <button className=' w-full px-6 py-3 m-4 duration-200 hover:scale-105'><a href={demo}>Demo</a></button>
                        </div>
                    </div>
                    ))}
            </div>
        </div>
    </div>
    )
}

export default Portfolio