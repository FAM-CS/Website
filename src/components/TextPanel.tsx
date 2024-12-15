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
    padding: 10px 20px;

    font-size: 18px;

    & p {
        margin: 0;
    }

    h1 {
        font-size: 22px;
        border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};
        margin-bottom: 0;
    }

    ul {
        margin: 0;
    }

    @media (max-width: 500px) {
        margin-bottom: 4em;
        font-size: 16px;
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