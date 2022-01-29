import { ModalContextProvider } from "../../../components/foryoucg/context/ModalContext";
import Card from '../../../components/foryoucg/Card'
import { NextSeo } from "next-seo";

export default function Index(){

    return(
        <ModalContextProvider>
            <NextSeo title="Clínica Foryou (Campo Grande)"/>
            <Card/>
        </ModalContextProvider>
    )
}