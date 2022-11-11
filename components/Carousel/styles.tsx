import styled from "styled-components";

export const CarouselContainer = styled.div`
    background-color: #f1f1f1;
    display: flex;
    flex-wrap: nowrap;
    overflow: hidden;
`;

export const CarouselItem = styled.div`
    height: 20rem;
    min-width: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 1s cubic-bezier(0.39, 0.575, 0.565, 1);
`;

