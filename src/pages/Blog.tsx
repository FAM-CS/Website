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

const Blog: FC<AppProps> = ({ title }) => {
    useEffect(() => {
        document.title = title
    }, [])

    return <ContentHolder>
        <SectionDecorator>
            <img src="/fourpetal.svg"/>
        </SectionDecorator>
        <TextPanel>
            <h2>🚧Work in progress🚧</h2>
            ...
        </TextPanel>
    </ContentHolder>
}

export default Blog