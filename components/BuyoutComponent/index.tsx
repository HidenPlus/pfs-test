import Image from "next/image";
import { FaBath, FaBed, FaCube } from "react-icons/fa";
import { formatPrice } from "../../lib/utils";
import { CardItem, CardsLayout, HouseInfoLayout, HouseInfoText, HousesLayout, ImageWrapper, PriceBuyout, QueryInfoLayout, QueryLength, TitleBuyout } from "./styles";

export default function BuyoutComponent({ dataQuery }: any): JSX.Element {
    return (
        <HousesLayout>
            <TitleBuyout>
                Compra y renta de casas y apartamentos
            </TitleBuyout>
            <QueryInfoLayout>
                <QueryLength>{`${dataQuery?.length || 0} propiedades encontradas`}</QueryLength>
            </QueryInfoLayout>
            <CardsLayout>
                {dataQuery?.map((item: any) => (
                    <CardItem
                        key={item.id}
                        id={item.id}
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
            </CardsLayout>
        </HousesLayout>
    )
}

function ImageCard({src, alt}: any) {
    return (
        <ImageWrapper>
             <Image
                src={`https://res.cloudinary.com/demo/image/fetch/${src || ""}`}
                alt={src}
                style={{borderRadius: "10px"}}
                height={180}
                width={300}
            />
        </ImageWrapper>
    )
}