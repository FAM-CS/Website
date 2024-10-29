import { FC } from 'react'
import styled from '@emotion/styled'

const Content = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 4px;

    width: calc(88vw - 40px);
    height: calc(100vh - 60px);

    font-size: 16px;
    /* background-color: pink; */
`


const ContentHolder: FC<{ children?: React.ReactNode }> = ({ children }) => {
    return <Content>{children}</Content>
}

export default ContentHolder