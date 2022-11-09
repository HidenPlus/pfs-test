import Image from "next/image"
import { GetStaticProps, InferGetStaticPropsType } from "next";
import dynamic from "next/dynamic";
import MapComponent from "../components/MapComponent";

const NavHeader = dynamic<NavHeaderProps>(() => import("../components/NavHeader"), { ssr: false });

type PageProps = {
    menuItems: {result: MenuItem[]};
    title: string;
    description: string;
  }
  
  export const getStaticProps: GetStaticProps<PageProps> = async () => {
    const {URL} = process.env
    const menuFetch = await fetch(URL + "/api/get-menu");
    const menuItems = await menuFetch.json();
    return {
      props: {
        menuItems,
        title: "Compra y renta de casas y apartamentos" ,
        description: "Asesoramos a nuestros clientes con la compra y venta de inmuebles en Miami Florida. Somos expertos en bienes raices en Miami y Miami Beach."
      }
    }
  }

export default function HousesAndApartments({menuItems}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  return (
    <>
        <NavHeader 
        title={<Image width={180} height={50} src="https://pfsrealty.com/wp-content/uploads/2021/10/PFS.png" alt="Logo image" />}
        menuItems={menuItems.result}
        />
        <>
        <MapComponent />
        </>
    </>
  )
}
