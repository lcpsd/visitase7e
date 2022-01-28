import { ModalContextProvider } from "../../../components/foryoucg/context/ModalContext";
import Card from '../../../components/foryoucg/Card'

export default function Index(){

    return(
        <ModalContextProvider>
            <Card/>
        </ModalContextProvider>
    )
}