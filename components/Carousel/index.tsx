import { useEffect, useState } from "react";
import Image from "next/image";
import { CarouselContainer, CarouselItem } from "./styles";

interface Props {
    dataImages: string[]
}

export default function Carousel({dataImages}: Props): JSX.Element {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselInfiniteScroll = () => {
        if (currentIndex === dataImages.length - 1) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex(currentIndex + 1);
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            carouselInfiniteScroll();
        }, 3000);
        return () => clearInterval(interval);
    })
    return (
        <CarouselContainer>
            {dataImages.map((item: any, index: any) => (
                <CarouselItem
                    key={index}
                    style={{
                        transform: `translateX(${currentIndex * -100}%)`,
                        backgroundImage: `url(${item})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                >
                </CarouselItem>
            ))}
        </CarouselContainer>
    )
}