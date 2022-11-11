import { HouseDescriptionBody, HouseDescriptionCol, HouseDescriptionItem, HouseDescriptionLayout, HouseDescriptionTitle } from "./styles";

export default function HouseDescription({ house }: {house: Record<string, string>}): JSX.Element {
    const validateItem = (item: string): string => {
        if (item === "NULL" || !item) {
            return "---";
        }
        return item;
    }
    console.log(house);
    return (
        <HouseDescriptionLayout>
            <HouseDescriptionTitle>
                Detalles de la propiedad
            </HouseDescriptionTitle>
            <HouseDescriptionBody>
                <HouseDescriptionItem>
                    <HouseDescriptionCol>Área:</HouseDescriptionCol>
                    <HouseDescriptionCol>{validateItem(house.property_area)}</HouseDescriptionCol>
                </HouseDescriptionItem>
                <HouseDescriptionItem>
                    <HouseDescriptionCol>Baños:</HouseDescriptionCol>
                    <HouseDescriptionCol>{validateItem(house.property_bathsFull)}</HouseDescriptionCol>
                </HouseDescriptionItem>
                <HouseDescriptionItem>
                    <HouseDescriptionCol>Habitaciones:</HouseDescriptionCol>
                    <HouseDescriptionCol>{validateItem(house.property_bedrooms)}</HouseDescriptionCol>
                </HouseDescriptionItem>
                <HouseDescriptionItem>
                    <HouseDescriptionCol>Techo:</HouseDescriptionCol>
                    <HouseDescriptionCol>{validateItem(house.property_roof)}</HouseDescriptionCol>
                </HouseDescriptionItem>
                <HouseDescriptionItem>
                    <HouseDescriptionCol>Ventilación:</HouseDescriptionCol>
                    <HouseDescriptionCol>{validateItem(house.property_cooling)}</HouseDescriptionCol>
                </HouseDescriptionItem>
                <HouseDescriptionItem>
                    <HouseDescriptionCol>Calefacción:</HouseDescriptionCol>
                    <HouseDescriptionCol>{validateItem(house.property_heating)}</HouseDescriptionCol>
                </HouseDescriptionItem>
                <HouseDescriptionItem>
                    <HouseDescriptionCol>Estilo de piso:</HouseDescriptionCol>
                    <HouseDescriptionCol>{validateItem(house.property_flooring)}</HouseDescriptionCol>
                </HouseDescriptionItem>
                <HouseDescriptionItem>
                    <HouseDescriptionCol>Lavanderia:</HouseDescriptionCol>
                    <HouseDescriptionCol>{validateItem(house.property_laundryFeatures)}</HouseDescriptionCol>
                </HouseDescriptionItem>
                <HouseDescriptionItem>
                    <HouseDescriptionCol>Tipo:</HouseDescriptionCol>
                    <HouseDescriptionCol>{validateItem(house.property_type)}</HouseDescriptionCol>
                </HouseDescriptionItem>
                <HouseDescriptionItem>
                    <HouseDescriptionCol>Código MLS:</HouseDescriptionCol>
                    <HouseDescriptionCol>{validateItem(house.mls_id)}</HouseDescriptionCol>
                </HouseDescriptionItem>
                <HouseDescriptionItem>
                    <HouseDescriptionCol>Año de construcción:</HouseDescriptionCol>
                    <HouseDescriptionCol>{validateItem(house.property_yearBuilt)}</HouseDescriptionCol>
                </HouseDescriptionItem>
                <HouseDescriptionItem>
                    <HouseDescriptionCol>Condado:</HouseDescriptionCol>
                    <HouseDescriptionCol>{validateItem(house.geo_county)}</HouseDescriptionCol>
                </HouseDescriptionItem>
                <HouseDescriptionItem>
                    <HouseDescriptionCol>Subtipo:</HouseDescriptionCol>
                    <HouseDescriptionCol>{validateItem(house.subTypeText)}</HouseDescriptionCol>
                </HouseDescriptionItem>
                <HouseDescriptionItem>
                    <HouseDescriptionCol>Estilo:</HouseDescriptionCol>
                    <HouseDescriptionCol>{validateItem(house.property_style)}</HouseDescriptionCol>
                </HouseDescriptionItem>
                <HouseDescriptionItem>
                    <HouseDescriptionCol>Estado de la publicación:</HouseDescriptionCol>
                    <HouseDescriptionCol>{validateItem(house.mls_statusText)}</HouseDescriptionCol>
                </HouseDescriptionItem>
                <HouseDescriptionItem>
                    <HouseDescriptionCol>Subdivisión:</HouseDescriptionCol>
                    <HouseDescriptionCol>{validateItem(house.property_subdivision)}</HouseDescriptionCol>
                </HouseDescriptionItem>
                <HouseDescriptionItem>
                    <HouseDescriptionCol>Parqueo:</HouseDescriptionCol>
                    <HouseDescriptionCol>{validateItem(house.property_parking_description)}</HouseDescriptionCol>
                </HouseDescriptionItem>
                <HouseDescriptionItem>
                    <HouseDescriptionCol>Costo HOA:</HouseDescriptionCol>
                    <HouseDescriptionCol>{validateItem(house.estimated_month_fee)}</HouseDescriptionCol>
                </HouseDescriptionItem>
            </HouseDescriptionBody>
        </HouseDescriptionLayout>
    )
}