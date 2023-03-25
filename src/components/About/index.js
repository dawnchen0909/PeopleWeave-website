import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import './index.scss'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
            <div className="container about-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        idx={15}
                        />
                    </h1>
                    
                    <div className='small-zone'>
                        <h4>
                            <ul>
                                <li>A K-pop fan</li>
                                <li>Sweet Tooth</li>
                                <li>Gym freak</li>
                            </ul>
                        </h4>

                        <p>
                            I'm very interested in PeopleWeave because PeopleWeave has the potential to 
                            facilitate connections and collaborations between researchers who might not 
                            have met otherwise and to help individuals at all stages of their career to 
                            build their professional networks. For my instance, I have a hard time building 
                            my professional network and finding opportunities in the past. I think 
                            PeopleWeave can definitely help people just like me.
                        </p>
                        <p align="LEFT">
                            I'm always motivated to learn new things and am looking forward 
                            to contributing to PeopleWeave.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About