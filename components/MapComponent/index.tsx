import GoogleMapReact from "google-map-react";
import { useEffect, useState } from "react";
import useSWR from "swr";
import { MarkerStyled } from "./styles";

const { MAPS_API, URL } = process.env;
const fetcher = (url: string) => fetch(url).then(r => r.json())

function getDistanceFromLatLonInKm(lat1: number, lon1: number, lat2: number, lon2: number ) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; // Distance in km
  return d;
}

function deg2rad(deg: number) {
  return deg * (Math.PI/180)
}

const Marker = ({ text }: any) => <MarkerStyled>{text}</MarkerStyled>;

export default function MapComponent() {
  const [prevCoords, setPrevCoords] = useState({lat: 0, lng: 0});
  const {data, error} = useSWR("/api/get-data-coord", fetcher)

  const stringToCoordinate = (coord: string) => {
    return parseFloat(coord.replace(/^([^,]+),/, "$1.").replace(",", ""))
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('us-US', { style: 'currency', currency: 'USD' }).format(price)
  }

  const defaultProps = {
    center: {
      lat: 26.110846,
      lng: -80.234955
    },
    zoom: 10,
  };

  useEffect(() => {
    console.log(data);
  }, [data])
  
  return (
    <div style={{ height: "75vh", width: "40vw", borderRadius: "20px", marginTop: "5vh" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAQIqqGJN-VmFKp2lp0wlt7x3kMzlFs-AE" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        onChange={(change: any) => {
          console.log(change.center)
          setPrevCoords({lat: change.center.lat, lng: change.center.lng});
          console.log(getDistanceFromLatLonInKm(change.center.lat, change.center.lng, prevCoords.lat, prevCoords.lng));
        }}
      >
        {data && data.map((item: any) => {
          return (
            <Marker
              key={item._id}
              lat={stringToCoordinate(item.geo_lat)}
              lng={stringToCoordinate(item.geo_lng)}
              text={formatPrice(JSON.parse(item.json_data).listPrice)}
            />
          )
        })}
      </GoogleMapReact>
    </div>
  );
}
