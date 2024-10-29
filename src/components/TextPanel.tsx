import { FC } from 'react'
import styled from '@emotion/styled'

const Container = styled.div`
    height: auto;
    overflow: scroll;

    padding: 8px;
    /* border: 4px solid red; */
`

const Panel = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    background-color: ${({ theme }) => theme.colors.background};
    backdrop-filter: blur(4px);
    border-top: 4px solid ${({ theme }) => theme.colors.secondary};
    border-radius: 20px;
    padding: 8px;

    & p {
        margin: 0;
    }
`


const TextPanel: FC<{ children?: React.ReactNode }> = ({ children }) => {
    return <Container className='TextPanel'>
        <Panel>
            { children }
        </Panel>
    </Container>
}

export default TextPanel