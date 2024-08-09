import { FC } from 'react'
import styled from '@emotion/styled'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import { ClassNames } from '@emotion/react'


const Main = styled.main`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
`

const DoorScene = styled.div`
    box-sizing: border-box;
    position: absolute;
    display: flex;
    justify-content: center;
    top: 10%;
    height: 90%;
    width: 90%;
    margin: 0 5%;
    /* background-color: pink; */

    background-image: url("/sunset.svg");
    background-repeat: no-repeat;
    background-position: bottom -5px center;
    background-size: contain;

    & .dunes {
        position: absolute;
        align-self: flex-end;
        height: 45%;
        width: 99%;
        background-image: url("/dunes.svg");
        background-position: bottom center;
        background-repeat: no-repeat;
        background-size: contain;
    }

    & .arch {
        position: absolute;
        height: 100%;
        width: 100%;
        background-image: url("/arch.svg");
        background-position: bottom center;
        background-repeat: no-repeat;
        background-size: contain;
    }

    &.tall {
        top: 8%;
        height: 92%;

        background-image: url("/tall/sunset.svg");
        background-repeat: no-repeat;
        background-position: bottom -5px center;
        background-size: contain;

        & .dunes {
            position: absolute;
            align-self: flex-end;
            height: 45%;
            width: 90%;
            background-image: url("/tall/dunes.svg");
            background-position: bottom center;
            background-repeat: no-repeat;
            background-size: contain;
        }

        & .arch {
            position: absolute;
            height: 100%;
            width: 100%;
            background-image: url("/tall/arch.svg");
            background-position: bottom -2px center;
            background-repeat: no-repeat;
            background-size: contain;
        }
    }

    &.wide {
        top: 5%;
        height: 95%;

        background-image: url("/wide/sunset.svg");
        background-repeat: no-repeat;
        background-position: bottom -5px center;
        background-size: contain;

        & .dunes {
            position: absolute;
            align-self: flex-end;
            height: 45%;
            width: 96%;
            background-image: url("/wide/dunes.svg");
            background-position: bottom center;
            background-repeat: no-repeat;
            background-size: contain;
        }

        & .arch {
            position: absolute;
            height: 100%;
            width: 100%;
            background-image: url("/wide/arch.svg");
            background-position: bottom -2px center;
            background-repeat: no-repeat;
            background-size: contain;
        }
    }

    &.largeTall {
        top: 5%;
        height: 95%;

        background-image: url("/largeTall/sunset.svg");
        background-repeat: no-repeat;
        background-position: bottom -5px center;
        background-size: contain;

        & .dunes {
            position: absolute;
            align-self: flex-end;
            height: 45%;
            width: 80%;
            background-image: url("/largeTall/dunes.svg");
            background-position: bottom center;
            background-repeat: no-repeat;
            background-size: contain;
        }

        & .arch {
            position: absolute;
            height: 100%;
            width: 100%;
            background-image: url("/largeTall/arch.svg");
            background-position: bottom -2px center;
            background-repeat: no-repeat;
            background-size: contain;
        }
    }

    &.largeSkinny {
        top: 5%;
        height: 95%;

        background-image: url("/largeSkinny/sunset.svg");
        background-repeat: no-repeat;
        background-position: bottom -5px center;
        background-size: contain;

        & .dunes {
            position: absolute;
            align-self: flex-end;
            height: 45%;
            width: 75%;
            background-image: url("/tall/dunes.svg");
            background-position: bottom center;
            background-repeat: no-repeat;
            background-size: contain;
        }

        & .arch {
            position: absolute;
            height: 100%;
            width: 100%;
            background-image: url("/largeSkinny/arch.svg");
            background-position: bottom -2px center;
            background-repeat: no-repeat;
            background-size: contain;
        }
    }
`

const Root: FC<{ children?: React.ReactNode }> = ({ children }) => {
    const isTallScreenAspectRatio = useMediaQuery(
        { maxAspectRatio: "1/2" }
    )

    const isPortrait = useMediaQuery(
        { orientation: 'portrait' }
    )

    const isWideScreenAspectRatio = useMediaQuery(
        { minAspectRatio: "3/4" }
    )

    const isLargeScreen = useMediaQuery(
        {
            minWidth: 800,
            minHeight: 1000
        }
    )

    const isTallLargeScreen = useMediaQuery(
        { minHeight: 1800 }
    )

    console.log("isTallScreenAspectRatio:", isTallScreenAspectRatio)
    console.log("isWideScreenAspectRatio:", isWideScreenAspectRatio)
    console.log("isPortrait:", isPortrait)
    console.log("isLargeScreen:", isLargeScreen)

    const getDoorSceneClass = (): string | undefined => {
        if (isLargeScreen && isPortrait && isTallLargeScreen) return "largeSkinny"
        if (isLargeScreen && isPortrait) return "largeTall"
        if (isTallScreenAspectRatio) return "tall"
        if (isWideScreenAspectRatio) return "wide"
        return undefined
    }

    return <>
        <NavBar />
        <DoorScene className={getDoorSceneClass()}>
            <div className='dunes'></div>
            <div className='arch'></div>
        </DoorScene>
        <Main>{children || <Outlet />}</Main>
    </>
}

export default Root