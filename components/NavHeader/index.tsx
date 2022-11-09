import React from "react";
import NavItem from "../NavItem";
import { Header, NavList, LinkStyled } from "./styles";

export default function NavHeader({title, onBack, menuItems}: NavHeaderProps): JSX.Element {

    return (
        <Header>
            {title ? title : null}
            <NavList>
            {menuItems.map(item => (
                <NavItem key={item.name} {...item}/>
            ))}
            </NavList>
        </Header>
    )
}