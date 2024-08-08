import { FC } from 'react'
import styled from '@emotion/styled'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'


const Main = styled.main`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
`

const DoorScene = styled.div`
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    /* background-color: pink; */

    background-image: url("/arch.svg"), url("/dunes.svg"), url("/sunset.svg");
    background-repeat: no-repeat;
    background-position: bottom center;
`

const Root: FC<{ children ?: React.ReactNode}> = ({ children }) => {
    return <>
        <DoorScene />
        <NavBar />
        <Main>{children || <Outlet />}</Main>
    </>
}

export default Root