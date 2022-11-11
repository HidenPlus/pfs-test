import styled from "styled-components";

export const MarkerParent = styled.div`
    position: relative;
    color: #000;
    background-color: #f9097d;
    font-size: 10px;
    font-weight: 600;
    text-align: center;
    width: 80px;
    border: 1px solid #000;
    white-space: nowrap;
    cursor: pointer;
`;

export const MarkerStyled = styled.div`
    color: #000;
    background-color: #f9097d;
    font-size: 10px;
    font-weight: 700;
    text-align: center;
    width: 80px;
    border: 2px solid #000;
    white-space: nowrap;
    cursor: pointer;
`;

export const MarkerInfo = styled.div<{show: boolean}>`
    position: absolute;
    bottom: 20px;
    left: 0;
    background-color: #fff;
    border-radius: 10px;
    padding: 10px;
    width: 150px;
    height: 120px;
    display: ${props => props.show ? "flex" : "none"};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
    z-index: 1;
    &::before {
        background: #fff;
        clip-path: polygon(0% 0%,50% 100%,100% 0%);
        content: '';
        height: 12px;
        left: 40%;
        position: absolute;
        bottom: -10px;
        width: 25px;
    }
`;

export const MarkerInfoLayout = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
`;

export const HouseInfoLayout = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const HouseInfo = styled.p`
    font-size: 12px;
    font-weight: 600;
    color: #000;
    margin: 0;
    white-space: normal;
`

export const CloseButton = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    background-color: #fff;
    border: none;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover {
        color: #f9097d;
    }
`;

export const ShowPropertiesButton = styled.button`
    position: absolute;
    bottom: 5px;
    right: -10px;
    background-color: #fff;
    border: none;
    border-radius: 5px;
    margin: 0px 20px;
    width: 130px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: #f9097d;
    &:hover {
        color: #fff;
    }
`;

export const SearchCityInput = styled.input`
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    width: 38vw;
    height: 50px;
    border: 0.5px solid #999;
    border-radius: 5px;
    padding: 0 1rem;
    font-size: 1.5rem;
    font-family: gotham, sans-serif;
    background-color: #eee;
    font-weight: 300;
    color: #404040;
    &::placeholder{
        font-size: 1rem;
        color: #404040;
        font-family: gotham, sans-serif;
        font-weight: 300; 
    }
`;

export const SuggestionContainer = styled.div`
    position: absolute;
    top: 100%;
    right: 0;
    width: 38vw;
    background-color: #fff;
    border: 0.5px solid #999;
    border-radius: 5px;
    padding: 0 1rem;
    font-size: 1.5rem;
    font-family: gotham, sans-serif;
    background-color: #eee;
    font-weight: 300;
    color: #404040;
    z-index: 1;
`;

export const SuggestionItem = styled.div`
    padding: 0.5rem;
    cursor: pointer;
    &:hover {
        background-color: #f9097d;
        color: #fff;
    }
`;