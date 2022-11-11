import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import { SearchCityInput, SuggestionContainer, SuggestionItem } from './styles';

function LocationSearchInput({searchCoords, setSearchCoords, setCityQuery}: Props): JSX.Element {
  const [address, setAddress] = React.useState('');
  const router = useRouter();

  const handleSelect = async (value: string) => {
    setCityQuery(value);
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    const url = new URL(window.location.href);
    url.searchParams.set('city', value);
    window.history.replaceState(null, "", url);
    setSearchCoords(latLng);
  };

  useEffect(() => {
    if (router.query.city) {
      handleSelect(router.query.city as string);
      setAddress(router.query.city as string);
    }
  }, [router.query])
  

  return (
    <PlacesAutocomplete
      value={address}
      onChange={setAddress}
      onSelect={handleSelect}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div style={{position: "relative"}}>
          <SearchCityInput {...getInputProps({ placeholder: 'Ingrese por ciudad' })} />

          <SuggestionContainer>
            {loading ? <div>Cargando...</div> : null}

            {suggestions.map((suggestion) => {
              return (
                // eslint-disable-next-line react/jsx-key
                <SuggestionItem {...getSuggestionItemProps(suggestion)}>
                  {suggestion.description}
                </SuggestionItem>
              );
            })}
          </SuggestionContainer>
        </div>
      )}
    </PlacesAutocomplete>
  );
}

export default LocationSearchInput;