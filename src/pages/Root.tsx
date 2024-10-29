import { FC } from 'react'
import styled from '@emotion/styled'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'
import Scene from '../components/DoorScene'


const Main = styled.main`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    /* gap: 20px; */
`


const Root: FC<{ children?: React.ReactNode }> = ({ children }) => {
    return <>
        <NavBar />
        <Scene />
        <Main>{children || <Outlet />}</Main>
    </>
}

export default Root