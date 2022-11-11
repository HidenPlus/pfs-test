import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import Carousel from "../../components/Carousel";
import HouseInfo from "../../components/HouseInfo";
import NavHeader from "../../components/NavHeader";

type Props = {
    menuItems: {result: MenuItem[]};
    house: Record<string, string>;
 }
 
 interface Params extends ParsedUrlQuery {
    id: string,
 }

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
    return {
        paths: [], //indicates that no page needs be created at build time
        fallback: 'blocking' //indicates the type of fallback
    }
}

export const getStaticProps: GetStaticProps<Props, Params> = async (ctx) => {
    const { URL } = process.env;
    const menuFetch = await fetch(URL + "/api/get-menu");
    const menuItems = await menuFetch.json();
    const houseFetch = await fetch(URL + `/api/get-house${ctx.params?.hid ? `?id=${ctx.params.hid}` : ""}`);
    const house = await houseFetch.json();
    return {
        props: {
            menuItems,
            house,
            title: "Compra y renta de casas y apartamentos",
            description: "Asesoramos a nuestros clientes con la compra y venta de inmuebles en Miami Florida. Somos expertos en bienes raices en Miami y Miami Beach.",
        },
    };
};

export default function Page({ menuItems, house }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
    const router = useRouter();
    return (
    <>
        <NavHeader title={<Image width={180} 
          onClick={() => router.push("/")} 
          height={50} 
          src="https://pfsrealty.com/wp-content/uploads/2021/10/PFS.png" 
          alt="Logo image" />
          }
          menuItems={menuItems.result} />
         <Carousel dataImages={JSON.parse(house.json_data).photos}/>
         <HouseInfo house={house}/>
    </>
    )
}