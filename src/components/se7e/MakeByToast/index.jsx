import { useEffect } from "react"
import { toast, ToastContainer } from "react-toastify"
import styles from './styles.module.scss'

export function MakeByToast(){
    useEffect(() => {
        ( () => toast(
        <>
            <p>Desenvolvido Pela Se7e</p>
            <a href="www.visitase7e.com">Clique e saiba mais</a>
        </>, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
            className: styles.makeByToast
        }))()
    })
    return(
        <ToastContainer/>
    )
}