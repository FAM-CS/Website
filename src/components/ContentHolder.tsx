import { FC } from 'react'
import styled from '@emotion/styled'

const Content = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 4px;

    width: 60%;
    height: 100%;
    overflow-y: hidden;

    @media only screen and (max-width: 800px) {
        width: 90%;
    }

    /* @media only screen and (max-width: 500px) {
        width: 90%;
    } */

    font-size: 16px;
    /* background-color: pink; */
`


const ContentHolder: FC<{ children?: React.ReactNode }> = ({ children }) => {
    return <Content className='contentHolder'>{children}</Content>
}

export default ContentHolder