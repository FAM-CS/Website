import { FC, useEffect } from 'react'
import styled from '@emotion/styled'

interface AppProps {
    title: string
}

const About: FC<AppProps> = ({ title }) => {
    useEffect(() => {
        document.title = title
    }, [])

    return <>
        <h1>About</ h1>
    </>
}

export default About