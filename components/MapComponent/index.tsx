import GoogleMapReact from "google-map-react";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import useSWR from "swr";
import Image from "next/image"
import { CloseButton, HouseInfo, HouseInfoLayout, MarkerInfo, MarkerInfoLayout, MarkerParent, MarkerStyled, ShowPropertiesButton } from "./styles";
import LocationSearchInput from "./LocationSearchInput";
import { useRouter } from "next/router";
import { formatPrice, stringToCoordinate } from "../../lib/utils";


const { MAPS_API, URL } = process.env;
const fetcher = (url: string) => fetch(url).then(r => r.json())

const MarkerLayout = ({ children }: { children: React.ReactNode, lat: number, lng: number }) => <MarkerParent>{children}</MarkerParent>

const Marker = ({ text, onClick }: { text: React.ReactNode, onClick: any }) => <MarkerStyled onClick={onClick}>{text}</MarkerStyled>;

interface Props {
  setDataQuery: Dispatch<SetStateAction<never[]>>;
  order: string;
  skip: number;
  setSkip: Dispatch<SetStateAction<number>>;
}

export default function MapComponent({ setDataQuery, order, skip, setSkip }: Props): JSX.Element {
  const [prevCoords, setPrevCoords] = useState({lat: 0, lng: 0});
  const [searchCoords, setSearchCoords] = useState({lat: 0, lng: 0});
  const [cityQuery, setCityQuery] = useState("");
  const router = useRouter();
  const {data, error} = useSWR(`/api/get-data-coord?city=${cityQuery}&order=${order}&page=${skip}`, fetcher)

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
    if(router.query.page){
      setSkip(Number(router.query.page))
    }
  }, [router.query])

  useEffect(() => {
    setDataQuery(data);
  }, [data])
  
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

interface MarkerItemProps {
  item: any;
}

function MarkerItem({item}: MarkerItemProps) {
  const [showInfo, setShowInfo] = useState(false);
  const router = useRouter();

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
            <ShowPropertiesButton onClick={() => router.push(`/houses-and-apartments/${item.id}`)}>Ver propiedad</ShowPropertiesButton>
          </HouseInfoLayout>
        </MarkerInfoLayout>
      </MarkerInfo>
    </>
  )
}