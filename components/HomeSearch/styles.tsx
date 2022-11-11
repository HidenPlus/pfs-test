import styled from "styled-components";

export const HomeSearchContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50vh;
    background-image: url("https://pfsrealty.com/wp-content/uploads/2022/09/pfsrealty-home-slide-bg-main.jpg");
    background-size: cover;
    border-radius: 10px;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    z-index: 1;
`

export const SearchBarTitle = styled.h1`
    font-family: gotham, sans-serif;
    font-size: 3.4rem;
    font-weight: 300;
    line-height: 1em;
    text-align: left;
    color: #fff;
    text-align: center;
    margin: 0;
    margin-top: 2rem;
    padding: 0;
    z-index: 2;
    text-align: left;
`

export const SearchBarContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: relative;
`

export const SearchBar = styled.input`
    margin-top: 1rem;
    width: 560px;
    height: 50px;
    border: none;
    border-radius: 5px;
    padding: 0 1rem;
    font-size: 1.5rem;
    font-family: gotham, sans-serif;
    font-weight: 300;
    color: #404040;
    &::placeholder{
        font-size: 1rem;
        color: #404040;
        font-family: gotham, sans-serif;
        font-weight: 300; 
    }
    &:focus{
        outline: none;
    }
`

export const SearchBarButton = styled.button`
    border: 0;
    width: 60px;
    vertical-align: top;
    text-align: center;
    margin-top: 1rem;
    margin-left: -3px;
    height: 50px;
    background-color: #a80552;
    color: #fff;
    font-weight: 600;
    border-radius: 0 5px 5px 0;
    z-index: 3;
    cursor: pointer;
`