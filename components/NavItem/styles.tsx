import Link from "next/link";
import styled from "styled-components";

export const NavLi = styled.li`
    position: relative;
    cursor: pointer;
`;

export const LinkStyled = styled(Link)<{$hasChildren: boolean}>`
    text-decoration: none;
    color: #404040;
    font-family: gotham, sans-serif;
    font-size: 12px;
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
   
    ${({$hasChildren}) => $hasChildren ? `
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

export const NavChildrenList = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: 60%;
    left: -20px;
    list-style: none;
    margin: 0;
    padding: 10px;
    background: #fff;
    border: 1px solid #ccc;
    z-index: 100;
    li {
        margin: 0 1rem;
        text-align: center;
    }
`;
