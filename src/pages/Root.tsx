import { FC } from 'react'
import styled from '@emotion/styled'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'
import Scene from '../components/DoorScene'
import Footer from '../components/Footer'


const Main = styled.main`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    overflow-x: hidden;

    height: 100%;
    scrollbar-color: ${({ theme }) => theme.colors.backgroundDark} ${({ theme }) => theme.colors.background};
    scrollbar-width: thin;
    /* gap: 20px; */
`


const Root: FC<{ children?: React.ReactNode }> = ({ children }) => {
    return <>
        <NavBar />
        <Scene />
        <Main>{children || <Outlet />}</Main>
        <Footer />
    </>
}

export default Root