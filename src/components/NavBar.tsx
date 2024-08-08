import { FC, useState } from 'react'
import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'



const Nav = styled.nav`
    box-sizing: border-box;
    position: sticky;
    z-index: 99;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    padding: 10px 20px;
    padding-top: 20px;
    background: linear-gradient(${({ theme }) => theme.colors.background}, rgba(256,256,256, 0));

    ul {
        width: 75%;
        @media (max-width: 720px) {
            width: 100%;
        }

        box-sizing: border-box;
        display: flex;
        justify-content: start;

        margin: 0;
        padding: 0;
        gap: 10px;
    }

    & .End {
        margin-left: auto;
    }
`

const Button = styled.button`
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
    height: 30px;

    background-color: ${({ theme }) => theme.colors.primary};
    padding: 0 0.5em;
    border-radius: 5px;

    color: ${({ theme }) => theme.colors.secondary};
    text-align: start;
    font-size: 20px;
    font-weight: 500;

    &:hover {
        background-color: ${({ theme }) => theme.colors.primaryAlt};
    }
`

const LinkHolder = styled.li`
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
    margin: 0;

    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 5px;

    color: ${({ theme }) => theme.colors.secondary};
    font-size: 20px;
    font-weight: 500;
    text-align: start;

    a {
        width: 100%;
        height: 30px;
        padding: 0 0.5em;
        color: ${({ theme }) => theme.colors.secondary};
    }

    &:hover {
        background-color: ${({ theme }) => theme.colors.primaryAlt};
    }


    &:has(.active) {
        border-bottom: 2px ${({ theme }) => theme.colors.secondary} solid;
    }
`

const Dropdown = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    width: 120px;
    gap: 4px;

    & div {
        position: absolute;
        top: 54px;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: end;
        gap: 4px;
        /* z-index: 1; */
    }

    & li {
        width: 120px;
    }
`


// TODO: Populate links by mapping data
const NavBar: FC = () => {
    const [openDropdown, setOpenDropdown] = useState(false)
    const isDesktopOrLaptop = useMediaQuery(
        { minWidth: 500 }
    )

    return <Nav>
        <ul>
            <Button>CV</Button>
            <Button>RESUME</Button>

            {isDesktopOrLaptop && <>
                <LinkHolder className='End'><NavLink to="/about">ABOUT</NavLink></LinkHolder>
                <LinkHolder><NavLink to="/projects">PROJECTS</NavLink></LinkHolder>
                <LinkHolder><NavLink to="/blog">BLOG</NavLink></LinkHolder>
            </>}
            {!isDesktopOrLaptop &&
                <Dropdown className='End'>
                    <Button onClick={() => setOpenDropdown(prev => !prev)}>
                        <FontAwesomeIcon icon={faBars} />
                    </Button>
                    {openDropdown &&
                        <div>
                            <LinkHolder><NavLink onClick={() => setOpenDropdown(false)} to="/about">ABOUT</NavLink></LinkHolder>
                            <LinkHolder><NavLink onClick={() => setOpenDropdown(false)} to="/projects">PROJECTS</NavLink></LinkHolder>
                            <LinkHolder><NavLink onClick={() => setOpenDropdown(false)} to="/blog">BLOG</NavLink></LinkHolder>
                        </div>
                    }
                </Dropdown>
            }
        </ul>
    </Nav>
}

export default NavBar
