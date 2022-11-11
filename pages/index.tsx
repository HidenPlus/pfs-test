import { GetStaticProps, InferGetStaticPropsType } from "next"
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter } from "next/router";
import HomeSearch from "../components/HomeSearch";
import { menuItems } from "../lib/utils";

const NavHeader = dynamic<NavHeaderProps>(() => import("../components/NavHeader"), { ssr: false });

type PageProps = {
  menuItems: {result: MenuItem[]};
  title: string;
  description: string;
}

export const getStaticProps: GetStaticProps<PageProps> = async () => {
  return {
    props: {
      menuItems,
      title: "Inmobiliaria en Miami Florida | Bienes Raices - PFS Realty Group" ,
      description: "Asesoramos a nuestros clientes con la compra y venta de inmuebles en Miami Florida. Somos expertos en bienes raices en Miami y Miami Beach."
    }
  }
}

export default function Home({menuItems}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();
  return (
    <>
    <NavHeader 
      menuItems={menuItems.result}
      title={<Image onClick={() => router.push("/")} width={180} height={50} src="https://pfsrealty.com/wp-content/uploads/2021/10/PFS.png" alt="Logo image" />}
    />
    <HomeSearch></HomeSearch>
    </>
  )
}
