interface Props {
    setSearchCoords: (coords: {lat: number, lng: number}) => void;
    searchCoords: {lat: number, lng: number};
    setCityQuery: (city: string) => void;
}