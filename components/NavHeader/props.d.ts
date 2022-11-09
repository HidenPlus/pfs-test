
interface MenuItem {
    name: string;
    path: string;
    icon?: string;
    children?: MenuItem[];
}

interface NavHeaderProps {
    title?: any;
    onBack?: () => void;
    menuItems: MenuItem[];
}