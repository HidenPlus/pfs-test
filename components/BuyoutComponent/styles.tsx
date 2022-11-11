import styled from "styled-components";

export const MapAndHousesLayout = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 0 2rem;
    height: 100%;
    @media (max-width: 768px) {
        flex-direction: column-reverse;
    }
`;

export const HousesLayout = styled.div`
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-height: 100vh;
    height: 100vh;
    overflow-x: auto;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const TitleLayout = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
`;

export const OrderLayout = styled.div`
    display: flex;
    flex-direction: row;
    margin-right: 6rem;
    justify-content: center;
    align-items: center;
`;

export const OrderLabel = styled.label`
    font-family: "gotham", sans-serif;
    font-size: 16px;
    font-weight: 400;
    margin-right: 0.5rem;
    color: #404040;
`;

export const OrderSelect = styled.select`
    color: #666;
    border: 1px solid #eee;
    padding: 5px;
    border-radius: 0;
    font-size: 16px;
    font-weight: 400;
`;

export const OrderOption = styled.option`
    color: #666;
    font-size: 13px;
    font-weight: 400;
`;

export const TitleBuyout = styled.h1`
    font-size: 18px;
    margin: 0 0 20px;
    text-align: center;
    font-weight: 700;
    color: #262624;
    font-family: gotham,sans-serif;
`;

export const QueryInfoLayout = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const QueryLength = styled.p`
    color: #404040;
    font-family: gotham,sans-serif;
    font-size: 14px;
    line-height: 1.5;
    margin: 10px 35px;
`;

export const CardsLayout = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    min-width: 100%;
    flex-wrap: wrap;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const CardItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 46%;
    margin: 10px;
    min-height: 250px;
    cursor: pointer;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const ImageWrapper = styled.div`
    width: 370px;
    text-aling: center;
    margin: auto;
`;

export const PriceBuyout = styled.p`
    font-size: 18px;
    font-family: gotham,sans-serif;
    font-weight: 700;
    margin: 5px 20px;
`;

export const HouseInfoLayout = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: baseline;
    margin: 0px 20px;
    width: 100%;
`;

export const HouseInfoText = styled.p`
    font-size: 15px;
    font-family: gotham,sans-serif;
    font-weight: 400;
    margin-left: 3px;
    margin-right: 10px;
    line-height: 1.5;
`;

export const ButtonsLayout = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin: 0px 20px;
    width: 100%;
`;

export const NextButton = styled.button`
    background: #f9097d;
    color: #000;
    width: auto;
    border-radius: 5px;
    height: 35px;
    padding: 0 10px;
    font-size: 14px;
    font-weight: 700;
    font-family: gotham,sans-serif;
    border: none;
    cursor: pointer;
    margin: 10px 20px;
    &::after {
        content: ">";
        margin-left: 5px;
    }
`;

export const PrevButton = styled.button`
    background: #f9097d;
    color: #000;
    width: auto;
    border-radius: 5px;
    height: 35px;
    padding: 0 10px;
    font-size: 14px;
    font-weight: 700;
    font-family: gotham,sans-serif;
    border: none;
    cursor: pointer;
    margin: 10px 20px;
    &::before {
        content: "<";
        margin-left: 5px;
    }
`;
