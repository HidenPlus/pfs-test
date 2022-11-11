import styled from "styled-components";

export const HouseDescriptionLayout = styled.div`
    margin-top: 0;
    padding-top: 0;
    margin-top: .5rem;
    margin-bottom: .5rem;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    border: 1px solid rgba(0,0,0,.125);
    overflow: hidden;
    width: 100%;
`;

export const HouseDescriptionTitle = styled.div`
    background: #eaeaea;
    padding: .5rem 1rem;
    border-bottom: 1px solid rgba(0,0,0,.125);
    color: #404040;
    font-family: gotham,sans-serif;
    font-size: 14px;
    line-height: 1.5;
`;

export const HouseDescriptionBody = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    flex: 1 1 auto;
    padding: 1.3em;
    color: #404040;
    font-family: gotham,sans-serif;
    font-size: 14px;
    line-height: 1.5;
`;

export const HouseDescriptionItem = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0;
    padding: 0;
    font-size: 16px;
    min-width: 50%;
`;

export const HouseDescriptionCol = styled.div`
    padding: 3px;
    text-align: left;
    color: #666;
    font-family: gotham,sans-serif;
    font-size: 18px;
    width: 50%;
    line-height: 1.5;
`;