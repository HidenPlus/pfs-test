import { formatPrice } from "../../lib/utils";
import HouseDescription from "../HouseDescription";
import MapInfo from "../MapInfo";
import { InfoAddress, InfoLayout, InfoPrice, InfoTitle, InfoTitleLayout } from "./styles";

export default function HouseInfo({house}: {house: Record<string,string>}): JSX.Element {
    return (
        <InfoLayout>
            <InfoTitleLayout>
                <InfoTitle>
                    {`Casas y apartamentos en venta en ${house.address}`}
                    <InfoAddress>
                        {` - ${house.city}, ${house.state} - ${house.postalCode}, ${house.subTypeText}`}
                    </InfoAddress>
                </InfoTitle>
                <InfoPrice>
                    {`${formatPrice(JSON.parse(house.json_data).listPrice)}`}
                </InfoPrice>
            </InfoTitleLayout>
            <MapInfo house={house} />
            <HouseDescription house={house} />
        </InfoLayout>
    )
}