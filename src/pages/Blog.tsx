import { FC, useEffect } from 'react'
import styled from '@emotion/styled'

interface AppProps {
    title: string
}

const Blog: FC<AppProps> = ({ title }) => {
    useEffect(() => {
        document.title = title
    }, [])

    return <>
        <h1>Blog</ h1>
    </>
}

export default Blog