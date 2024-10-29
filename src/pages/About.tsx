import { FC, useEffect } from 'react'
import styled from '@emotion/styled'
import ContentHolder from '../components/ContentHolder'
import TextPanel from '../components/TextPanel'


const Synopsis = styled.div`
    box-sizing: border-box;
    margin-top: 35%;

    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 4px;

    padding: 0px 8px;
    width: 100%;
`

const ProfilePicture = styled.div`
    border-radius: 50%;
    width: 5em;
    height: 5em;

    background-color: aliceblue;
    border: 2px solid ${({ theme }) => theme.colors.tertiary};
`

const Bio = styled.div`
    font-weight: 600;
    text-align: left;
    width: 45%;
`

interface AppProps {
    title: string
}

const About: FC<AppProps> = ({ title }) => {
    useEffect(() => {
        document.title = title
    }, [])

    return <ContentHolder>
        <Synopsis>
            <ProfilePicture />
            <Bio>
                Hi, I'm Fatima A. Moussaoui <br/>
                .Role.<br/>
                .Role.<br/>
                .Status.
            </Bio>
        </Synopsis>
        <TextPanel>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Culpa saepe ipsam, odit commodi aliquid temporibus voluptas quis atque sit nostrum?
                Quis unde rem rerum corrupti sunt deserunt id omnis dicta.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Culpa saepe ipsam, odit commodi aliquid temporibus voluptas quis atque sit nostrum?
                Quis unde rem rerum corrupti sunt deserunt id omnis dicta.
            </p>
            <p>
                THE END.
            </p>
        </TextPanel>
    </ContentHolder>
}

export default About