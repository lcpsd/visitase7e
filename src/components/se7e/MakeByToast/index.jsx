import { useEffect } from "react"
import { Slide, toast, ToastContainer } from "react-toastify"
import Styles from './styles'

export function MakeByToast(){
    useEffect(() => {
        ( () => toast(
        <>
            <a href="http://www.visitase7e.com/">
                <p>Desenvolvido Pela Se7e</p>
            </a>
        </>, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
            className: "makeByToast",
            transition: Slide,
        }))()
    })
    return(
        <Styles>
            <ToastContainer className="makeByToastContainer"/>
        </Styles>
    )
}