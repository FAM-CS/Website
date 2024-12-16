
import { FC } from 'react'
import styled from '@emotion/styled'


const Scene = styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: end;
    align-content: end;

    position: absolute;
    font-size: 20px;
    bottom: 0;
    height: 100vh;
    width: 100%;
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
        bottom: 0;
        height: 100%;
        width: 100%;
        background: bottom center / contain no-repeat url("/dunes.svg");
        @media (max-width: 900px) {
            background: bottom center / contain no-repeat url("/med/dunes.svg");
        }
        @media (max-width: 500px) {
            background: bottom center / contain no-repeat url("/tall/dunes.svg");
        }
        /* @media (min-width: 3000px) {
            background: bottom center / contain no-repeat url("/wide/dunes.svg");
        } */
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
    return <Scene>
        {/* <div className='sky'></div> */}
        <div className='dunes'></div>
        {/* <div className='arch'></div> */}
    </Scene>
}

export default DoorScene