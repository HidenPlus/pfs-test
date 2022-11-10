import styled from "styled-components";

export const MapAndHousesLayout = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100vw;
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
    height: 100%;
    min-width: 900px;
    max-width: 900px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
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
    line-height: 3px;
`;