import { FC, useEffect } from 'react'
import styled from '@emotion/styled'
import ContentHolder from '../components/ContentHolder'
import TextPanel from '../components/TextPanel'


const SectionDecorator = styled.div`
    box-sizing: border-box;
    font-size: 18px;
    @media (max-width: 500px) {
        font-size: 16px;
    }
    margin-top: 1em;

    width: 100%;
    height: 5em;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: bottom center;
    }
`


interface AppProps {
    title: string
}


const Projects: FC<AppProps> = ({ title }) => {
    useEffect(() => {
        document.title = title
    }, [])

    return <ContentHolder>
        <SectionDecorator>
            <img src="/fourpetal.svg"/>
        </SectionDecorator>
        <TextPanel>
            <div>
                <h1>Personal Website</h1>
                <p>Working on my first proper website, designed in Figma and built with React + Typescript.</p>
                <ul>
                    <li><a href="https://github.com/FAM-CS/Website">Github repository</a></li>
                </ul>
            </div>
            <div>
            <h1>WeatherWave</h1>
                <p>A weather forecast website using OpenWeather's free API.</p>
                <ul>
                    <li><a href="https://github.com/FAM-CS/WeatherWave">Github repository</a></li>
                </ul>
            </div>
            And... more to come!
        </TextPanel>
    </ContentHolder>
}

export default Projects