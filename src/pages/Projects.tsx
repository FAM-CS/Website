import { FC, useEffect } from 'react'
import styled from '@emotion/styled'

interface AppProps {
    title: string
}


const Projects: FC<AppProps> = ({ title }) => {
    useEffect(() => {
        document.title = title
    }, [])

    return <>
        <h1>Projects</ h1>
    </>
}

export default Projects