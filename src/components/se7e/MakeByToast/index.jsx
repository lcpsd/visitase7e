import { useEffect } from "react"
import { Slide, toast, ToastContainer } from "react-toastify"
import styles from './styles.module.scss'

export function MakeByToast(){
    useEffect(() => {
        ( () => toast(
        <>
            <p>Desenvolvido Pela Se7e</p>
            <a href="http://www.visitase7e.com/">Clique e saiba mais</a>
        </>, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
            className: styles.makeByToast,
            transition: Slide
        }))()
    })
    return(
        <ToastContainer/>
    )
}