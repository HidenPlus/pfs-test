import styled from "styled-components";
import Link from "next/link";


export const Header = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 0 1rem;
    padding-top: 1rem;
    height: 8rem;
    background-color: #fff;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
    z-index: 100;
`;

export const NavList = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
    li {
        margin: 0 1rem;
    }
`;

export const LinkStyled = styled(Link)<{hasChildren: boolean}>`
    text-decoration: none;
    color: #404040;
    font-family: gotham, sans-serif;
    font-size: 14px;
    font-weight: 300;
    text-transform: uppercase;
    position: relative;
    &::after{
        content: '';
        display: block;
        height: 2px;
        width: 0;
        margin: 10px 0 0;
        background: 0 0;
        transition: width .5s ease,background-color .5s ease;
    }
   
    ${({hasChildren}) => hasChildren ? `
        &::hover{
            color: #000;
        }
        &::before{
            display: block;
            content: '';
            border: 5px solid transparent;
            border-top-color: transparent;
            border-top-color: #777;
            z-index: 2;
            height: 0;
            width: 0;
            position: absolute;
            right: -12px;
            top: 5px;
        }
    ` : `
    &:hover::after{
        width: 100%;
        background: #f9097d;
    }
    `}
`