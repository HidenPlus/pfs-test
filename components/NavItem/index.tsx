import {useState} from "react";
import { LinkStyled, NavChildrenList, NavLi } from "./styles";

export default function NavItem({path, children, name}: MenuItem): JSX.Element {
    const [itsList] = useState(!!children?.length);
    const [open, setOpen] = useState(false);

    const handleHover = (state: boolean) => {
        setOpen(state);
    }
    //fix hover on every ul with children, it opens multiples times
    return (
        <NavLi key={path}>
            <LinkStyled 
                onMouseEnter={() => handleHover(true)} 
                onMouseLeave={() => handleHover(false)} 
                $hasChildren={itsList} href={path}>
                {name}
            </LinkStyled>
            {itsList && open ? <NavChildrenList
                                onMouseEnter={() => handleHover(true)}
                                onMouseLeave={() => handleHover(false)} 
                                >
                                    {children?.map(item => <NavItem key={item.name} {...item}/>)}
                                </NavChildrenList> : null}
        </NavLi>
    )
}