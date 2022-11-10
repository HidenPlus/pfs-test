import GoogleMapReact from "google-map-react";
import { useEffect, useRef, useState } from "react";
import useSWR from "swr";
import Image from "next/image"
import { CloseButton, HouseInfo, HouseInfoLayout, MarkerInfo, MarkerInfoLayout, MarkerParent, MarkerStyled, ShowPropertiesButton } from "./styles";
import LocationSearchInput from "./LocationSearchInput";
import { useRouter } from "next/router";
import { formatPrice } from "../../lib/utils";


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

const MarkerLayout = ({ children }: any) => <MarkerParent>{children}</MarkerParent>

const Marker = ({ text, onClick }: any) => <MarkerStyled onClick={onClick}>{text}</MarkerStyled>;

export default function MapComponent({setDataQuery}: any): JSX.Element {
  const [prevCoords, setPrevCoords] = useState({lat: 0, lng: 0});
  const [searchCoords, setSearchCoords] = useState({lat: 0, lng: 0});
  const [cityQuery, setCityQuery] = useState("");
  const router = useRouter();
  const {data, error} = useSWR(`/api/get-data-coord?city=${cityQuery}`, fetcher)

  const stringToCoordinate = (coord: string) => {
    return parseFloat(coord.replace(/^([^,]+),/, "$1.").replace(",", ""))
  }

  const defaultProps = {
    center: {
      lat: 26.110846,
      lng: -80.234955
    },
    zoom: 10,
  };

  useEffect(() => {
    if(router.query.city) {
      setCityQuery(router.query.city as string)
    }
  }, [router])

  useEffect(() => {
    setDataQuery(data);
  }, [data])

  useEffect(() => {
    console.log(searchCoords);
  }, [searchCoords])
  
  return (
    <div style={{ height: "75vh", width: "40vw", borderRadius: "20px", marginTop: "5vh" }}>
      <LocationSearchInput 
        setCityQuery={setCityQuery} 
        searchCoords={searchCoords} 
        setSearchCoords={setSearchCoords} />
      <GoogleMapReact
        bootstrapURLKeys={{ key:  `${process.env.NEXT_PUBLIC_MAPS_API}`, libraries: "places", language: "es" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        center={searchCoords.lat !== 0 ? searchCoords : prevCoords}
        yesIWantToUseGoogleMapApiInternals
        onChange={(change: any) => {
          setPrevCoords({lat: change.center.lat, lng: change.center.lng});
        }}
      >
        {data && data.map((item: any) => {
          return (
          <MarkerLayout
            key={item._id}
            lat={stringToCoordinate(item.geo_lat)}
            lng={stringToCoordinate(item.geo_lng)}
          >
            <MarkerItem item={item} />
          </MarkerLayout>
          )
        })}
      </GoogleMapReact>
    </div>
  );
}

function MarkerItem({item}: any) {

  const [showInfo, setShowInfo] = useState(false);

  return (
    <>
      <Marker
        onClick={() => {setShowInfo(false); setShowInfo(true)}}
        text={formatPrice(JSON.parse(item.json_data).listPrice)}
      />
      <MarkerInfo show={showInfo}>
        <MarkerInfoLayout>
          <Image width={50} height={50} src={`https://res.cloudinary.com/demo/image/fetch/${JSON.parse(item.json_data).photos[0] || ""}`} alt={item.address} />
          <HouseInfoLayout>
            <CloseButton onClick={() => setShowInfo(false)}>X</CloseButton>
            <HouseInfo>{item.address}</HouseInfo>
            <p>{formatPrice(JSON.parse(item.json_data).listPrice)}</p>
            <ShowPropertiesButton>Ver propiedad</ShowPropertiesButton>
          </HouseInfoLayout>
        </MarkerInfoLayout>
      </MarkerInfo>
    </>
  )
}