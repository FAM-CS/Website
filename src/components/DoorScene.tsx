
import { FC } from 'react'
import styled from '@emotion/styled'
import { useMediaQuery } from 'react-responsive'


const Scene = styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: end;
    align-content: end;
    /* gap: 0px; */

    position: absolute;
    font-size: 20px;
    top: 3em;
    height: calc(100vh - 3em);
    width: 70%;
    margin: 0 15%;

    /* background-color: #ceb0b5; */

    & div {
        box-sizing: border-box;

        svg {
            position: absolute;
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }
    }

    & .sky {
        position: absolute;
        height: 100%;
        width: 100%;
        /* background-color: #d5ebff; */
    }

    & .dunes {
        position: absolute;
        height: 45%;
        width: 98%;
        background-image: url("/dunes.svg");
        background-position: bottom center;
        background-repeat: no-repeat;
        background-size: contain;
        /* background-color: #ffe3a3; */
    }

    & .arch {
        position: absolute;
        height: 100%;
        width: 100%;
        /* background-color: #d849ff; */
        /* border: 2px solid #fd4741; */
    }
`


const DoorScene: FC = () => {
    const isTallScreenAspectRatio = useMediaQuery(
        { maxAspectRatio: "1/2" }
    )

    const isWideScreenAspectRatio = useMediaQuery(
        { minAspectRatio: "3/4" }
    )

    const isPortrait = useMediaQuery(
        { orientation: 'portrait' }
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


    const windowWidth = window.innerWidth
    const windowHeight = window.innerHeight

    console.log("$ =====================================")
    console.log("isTallScreenAspectRatio:", isTallScreenAspectRatio)
    console.log("isWideScreenAspectRatio:", isWideScreenAspectRatio)
    console.log("isPortrait:", isPortrait)
    console.log("isLargeScreen:", isLargeScreen)

    console.log("windowWidth:", windowWidth)
    console.log("windowHeight:", windowHeight)

    const defaultSize  = {
        width: "70%",
        margin: "0 15%"
    }

    const mobileSize  = {
        width: "88%",
        margin: "0 6%"
    }

    const getDoorSceneClass = () => {
        // if (isLargeScreen && isPortrait && isTallLargeScreen) return "largeSkinny"
        // if (isLargeScreen && isPortrait) return "largeTall"
        // if (isTallScreenAspectRatio) return "tall"
        // if (isWideScreenAspectRatio) return "wide"
        if (!isLargeScreen) return mobileSize

        return undefined
    }

    const fontSize = 20
    const selectedSize = getDoorSceneClass() || defaultSize
    const svgWidth = windowWidth * (parseInt(selectedSize.width) / 100)
    const svgHeight = windowHeight - (3 * fontSize)
    const curveHeight = 40
    const archWidth = 20

    return <Scene css={selectedSize}>
        <div className='sky'>
            <svg width={svgWidth} height={svgHeight} viewBox={`0 0 ${svgWidth} ${svgHeight}`} fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d={`
                    M 0 ${0.2 * svgHeight}
                    c 0 ${-curveHeight} ${0.5 * svgWidth} ${-0.2 * svgHeight} ${0.5 * svgWidth} ${-0.2 * svgHeight}
                    c 0 0 ${0.5 * svgWidth} ${(0.2 * svgHeight)-curveHeight} ${0.5 * svgWidth} ${0.2 * svgHeight}
                    v ${0.8 * svgHeight}
                    h ${-svgWidth}
                    v ${-0.8 * svgHeight}
                    Z`}
                    fill="url(#sunset)"
                />
                <defs>
                    <linearGradient id="sunset" x1="143" y1="-80" x2="143" y2="519" gradientUnits="userSpaceOnUse">
                        <stop offset="0.18" stop-color="#4912A0"/>
                        <stop offset="0.35" stop-color="#7168FA"/>
                        <stop offset="0.70" stop-color="#F28A3A"/>
                    </linearGradient>
                </defs>
            </svg>
        </div>
        <div className={`dunes${isTallScreenAspectRatio ? ' tall' : ''}`}></div>
        <div className='arch'>
            <svg width={svgWidth} height={svgHeight} viewBox={`0 0 ${svgWidth} ${svgHeight}`} fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d={`
                    M 0 ${0.2 * svgHeight}
                    c 0 ${-curveHeight} ${0.5 * svgWidth} ${-0.2 * svgHeight} ${0.5 * svgWidth} ${-0.2 * svgHeight}
                    c 0 0 ${0.5 * svgWidth} ${(0.2 * svgHeight)-curveHeight} ${0.5 * svgWidth} ${0.2 * svgHeight}
                    v ${0.8 * svgHeight}
                    h ${-archWidth}
                    v ${(-0.8 * svgHeight)+archWidth/2}
                    c 0 ${-curveHeight} ${(-0.5 * svgWidth)+archWidth} ${(-0.2 * svgHeight)+archWidth/2} ${(-0.5 * svgWidth)+archWidth} ${(-0.2 * svgHeight)+archWidth/2}
                    c 0 0 ${(-0.5 * svgWidth)+archWidth} ${((0.2 * svgHeight)-archWidth/2)-curveHeight} ${(-0.5 * svgWidth)+archWidth} ${(0.2 * svgHeight)-archWidth/2}
                    v ${(0.8 * svgHeight)-archWidth/2}
                    h ${-archWidth}
                    Z`}
                    fill="#170632"
                />
            </svg>
        </div>
    </Scene>
}

export default DoorScene