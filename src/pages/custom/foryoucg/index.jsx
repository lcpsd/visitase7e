import Card from "./components/Card";
import { ModalContextProvider } from "../../../context/foryoucg/ModalContext";

export default function Index(){
    
    return(
        <ModalContextProvider>
            <Card/>
        </ModalContextProvider>
    )
}