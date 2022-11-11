import GoogleMapReact from "google-map-react";
import { stringToCoordinate } from "../../lib/utils";

export default function MapInfo({house}: {house: Record<string,string>}): JSX.Element {
    const defaultProps = {
        center: {
          lat: stringToCoordinate(house.geo_lat),
          lng: stringToCoordinate(house.geo_lng)
        },
        zoom: 16,
      };

    function renderMarkers(map: any, maps: any) {
        let marker = new maps.Marker({
            position: {lat: stringToCoordinate(house.geo_lat), lng: stringToCoordinate(house.geo_lng)},
            map,
        });
    }
    return (
        <div style={{ width: "100%", height: "300px" }}>
             <GoogleMapReact
                bootstrapURLKeys={{ key:  `${process.env.NEXT_PUBLIC_MAPS_API}`, language: "es", libraries: "street-view" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                onGoogleApiLoaded={({map, maps}) => renderMarkers(map, maps)}
                yesIWantToUseGoogleMapApiInternals
             >
            
            </GoogleMapReact>
        </div>
    )
}