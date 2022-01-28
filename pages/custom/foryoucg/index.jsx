import Card from "./components/Card";
import { ModalContextProvider } from "./context/ModalContext";

export default function Index(){
    return(
        <ModalContextProvider>
            <Card/>
        </ModalContextProvider>
    )
}