import { useState } from "react";
import { HomeSearchContainer, SearchBar, SearchBarButton, SearchBarContainer, SearchBarTitle } from "./styles";

export default function HomeSearch(): JSX.Element {
    const [search, setSearch] = useState("Miami");
    return (
        <HomeSearchContainer>
            <SearchBarTitle>
                PROPIEDADES <br />
                FINANCIAMIENTO <br />
                SERVICIOS <br />
            </SearchBarTitle>
            <SearchBarComponent value={search} setValue={setSearch} />
        </HomeSearchContainer>
    )
}

function SearchBarComponent({value, setValue}: {value: string, setValue: (value: string) => void}): JSX.Element {
    return (
        <SearchBarContainer>
            <SearchBar value={value} onChange={(e) => setValue(e.target.value)} placeholder="Buscar por ciudad"/>
            <SearchBarButton>Search</SearchBarButton>
        </SearchBarContainer>
    )
}