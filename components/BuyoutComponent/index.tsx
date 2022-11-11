import Image from "next/image";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction, useEffect } from "react";
import { FaBath, FaBed, FaCube } from "react-icons/fa";
import { formatPrice, LinkCreator } from "../../lib/utils";
import { ButtonsLayout, CardItem, CardsLayout, HouseInfoLayout, HouseInfoText, HousesLayout, ImageWrapper, NextButton, OrderLabel, OrderLayout, OrderOption, OrderSelect, PrevButton, PriceBuyout, QueryInfoLayout, QueryLength, TitleBuyout, TitleLayout } from "./styles";

interface Props {
    dataQuery: Record<string, string>[];
    setOrder: Dispatch<SetStateAction<string>>;
    setSkip: Dispatch<SetStateAction<number>>;
    skip: number;
}

export default function BuyoutComponent({ dataQuery, setOrder, setSkip, skip }: Props): JSX.Element {
    const router = useRouter();

    return (
        <HousesLayout>
            <TitleLayout>
                <TitleBuyout>
                    Compra y renta de casas y apartamentos
                </TitleBuyout>
            </TitleLayout>
            <QueryInfoLayout>
                <QueryLength>{`${dataQuery?.length || 0} propiedades encontradas`}</QueryLength>
                <OrderLayout>
                    <OrderLabel htmlFor="order">Ordenar por:</OrderLabel>
                    <OrderSelect name="order" onChange={(e) => {
                        setOrder(e.target.value)
                        const url = new URL(window.location.href);
                        url.searchParams.set('order', e.target.value);
                        window.history.replaceState(null, "", url);
                        }}>
                        <OrderOption value="newest">Más reciente</OrderOption>
                        <OrderOption value="oldest">Más antigua</OrderOption>
                        <OrderOption value="mostPrice">Mayor precio</OrderOption>
                        <OrderOption value="lessPrice">Menor precio</OrderOption>
                        <OrderOption value="lessBath">Menor cant. baños</OrderOption>
                        <OrderOption value="mostBath">Mayor cant. baños</OrderOption>
                        <OrderOption value="lessBedrooms">Menor cant. habitaciones</OrderOption>
                        <OrderOption value="mostBedrooms">Mayor cant. habitaciones</OrderOption>
                        <OrderOption value="lessArea">Menor área</OrderOption>
                        <OrderOption value="mostArea">Mayor área</OrderOption>
                    </OrderSelect>
                </OrderLayout>
            </QueryInfoLayout>
            <CardsLayout>
                {dataQuery?.map((item: any) => (
                    <CardItem
                        key={item.id}
                        id={item.id}
                        onClick={() => {
                            router.push({
                                pathname: "/houses-and-apartments/[hid]",
                                query: { hid: item.id },
                            })
                        }}
                    >
                        <ImageCard
                            src={`https://res.cloudinary.com/demo/image/fetch/${JSON.parse(item.json_data).photos[0] || "https://savannahquarters.com/wp-content/uploads/2020/12/placeholder-home.png"}`}
                            alt={item.address}
                        />
                        <PriceBuyout>{formatPrice(JSON.parse(item.json_data).listPrice)}</PriceBuyout>
                        <HouseInfoLayout>
                            <FaBath /> <HouseInfoText>{`${item.property_bathsFull != "NULL" ? item.property_bathsFull : "---"}ba`}</HouseInfoText>
                            <FaBed /> <HouseInfoText>{`${item.property_bedrooms != "NULL" ? item.property_bedrooms : "---"}hb`}</HouseInfoText>
                            <FaCube /> <HouseInfoText>{`${item.property_area != "NULL" ? item.property_area : "---"}sqft`}</HouseInfoText>
                        </HouseInfoLayout>
                        <HouseInfoText style={{marginLeft: "20px"}}>{`${item.address || "---"} ${item.geo_county || "---"}`}</HouseInfoText>
                        <HouseInfoText style={{marginLeft: "20px"}}>{`${item.state} ${item.postalCode}`}</HouseInfoText>
                    </CardItem>
                ))}
            <ButtonsLayout>
                {skip > 2 ? <PrevButton onClick={() => {
                    setSkip((prev: number) => prev - 1);
                    const url = new URL(window.location.href);
                    url.searchParams.set('page', `${skip - 1}`);
                    window.history.replaceState(null, "", url);
                }}>Anterior</PrevButton> : null }
                {dataQuery?.length > 49 ? 
                <NextButton onClick={() => {
                    setSkip((prev: number) => prev + 1);
                    const url = new URL(window.location.href);
                    url.searchParams.set('page', `${skip + 1}`);
                    window.history.replaceState(null, "", url);
                }}>Siguiente</NextButton> : null }
            </ButtonsLayout>
            </CardsLayout>
        </HousesLayout>
    )
}

function ImageCard({src, alt}: any) {
    return (
        <ImageWrapper>
             <Image
                src={`https://res.cloudinary.com/demo/image/fetch/${src || ""}`}
                alt={alt}
                style={{borderRadius: "10px"}}
                height={180}
                width={300}
            />
        </ImageWrapper>
    )
}