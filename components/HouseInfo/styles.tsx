import styled from "styled-components";

export const InfoLayout = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 20px;
    width: 70%;
    height: 100%;
    margin: auto;
`;

export const InfoTitleLayout = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const InfoTitle = styled.h1`
    font-family: "gotham", sans-serif;
    color: #262624;
    font-size: 2em;
    text-align: left;
    margin-bottom: 0;
    padding-bottom: 0;
    font-weight: 700;
    display: inline;
    margin-right: 20rem;
`;

export const InfoAddress = styled.p`
    font-family: "gotham", sans-serif;
    color: #999 !important;
    font-size: 0.7em !important;
    text-align: left;
    margin-bottom: 0;
    padding-bottom: 0;
    display: inline;
    font-weight: 300 !important;
`;

export const InfoPrice = styled.h2`
    font-family: "gotham", sans-serif;
    color: #262624;
    font-size: 1.5em;
    text-align: left;
    margin-bottom: 0;
    padding-bottom: 0;
    font-weight: 300;
`;