import Card from "./components/Card";
import { ModalContextProvider } from "./context/modalContext";

export default function Index(){
    return(
        <ModalContextProvider>
            <Card/>
        </ModalContextProvider>
    )
}