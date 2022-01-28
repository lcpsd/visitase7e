import Card from "./components/Card";
import { ModalContextProvider } from "./components/context/ModalContext";

export default function Index(){
    
    return(
        <ModalContextProvider>
            <Card/>
        </ModalContextProvider>
    )
}