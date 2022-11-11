import Image from "next/image"
import { GetStaticProps, InferGetStaticPropsType } from "next";
import dynamic from "next/dynamic";
import MapComponent from "../../components/MapComponent";
import { useRouter } from "next/router";
import { MapAndHousesLayout } from "../../components/BuyoutComponent/styles";
import BuyoutComponent from "../../components/BuyoutComponent";
import { useState } from "react";

const NavHeader = dynamic<NavHeaderProps>(() => import("../../components/NavHeader"), { ssr: false });

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
  const [dataQuery, setDataQuery] = useState([]);
  const [order, setOrder] = useState("");
  const [skip, setSkip] = useState(1);
  const router = useRouter();
  return (
    <>
        <NavHeader 
          title={<Image width={180} 
          onClick={() => router.push("/")} 
          height={50} 
          src="https://pfsrealty.com/wp-content/uploads/2021/10/PFS.png" 
          alt="Logo image" />
          }
          menuItems={menuItems.result}
        />
        <>
          <MapAndHousesLayout>
            <BuyoutComponent skip={skip} setSkip={setSkip} setOrder={setOrder} dataQuery={dataQuery} />
            <MapComponent setSkip={setSkip} skip={skip} order={order} setDataQuery={setDataQuery} />
          </MapAndHousesLayout>
        </>
    </>
  )
}
