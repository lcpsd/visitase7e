import {VscMenu} from 'react-icons/vsc'
import {IoMdClose} from 'react-icons/io'
import styles from './styles.module.scss'
import { useState } from 'react'

export default function Header(){

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [currentMenu, setCurrentMenu] = useState("homeSection")
    
    if(typeof window !== 'undefined'){

        if(screen.width <= 768){
            const allMenus = document.querySelectorAll("li")

            allMenus.forEach(item => {
                item.addEventListener("click", () => {
                    setIsMenuOpen(!isMenuOpen)
                })
            })
        }
        
        // checks current menu while scrolling
        const allSections = document.querySelectorAll('section')

        window.onscroll = () => {

            allSections.forEach(section => {
    
                const sectionOffsetTop = section.offsetTop
                const sectionOffsetBottom = sectionOffsetTop + section.offsetHeight
                const windowOffsetTop = window.scrollY + 80

                if(sectionOffsetBottom >= windowOffsetTop && sectionOffsetTop <= windowOffsetTop){
                    currentMenu !== section.id && section.id && setCurrentMenu(section.id)
                }   
            })        
        }
    }

    return(
        <header className={styles.header} id='header'>
            <div className={styles.container}>
                <img src="/image/logo.png" alt="logo" />
                
                <span className={styles.hamburguer}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <VscMenu/>
                </span>

                <ul className={ isMenuOpen ? styles.opened : styles.closed}>
                    <span className={styles.close}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >  
                        <IoMdClose/>
                    </span>
                    <li>
                        <a href="#homeSection" 
                        className={currentMenu == "homeSection" ? styles.active : ""}>
                        início</a>
                    </li>
                    <li>
                        <a href="#plansSection" 
                        className={currentMenu == "plansSection" ? styles.active : ""}>
                        planos</a>
                    </li>
                    <li>
                        <a href="#toolsSection" 
                        className={currentMenu == "toolsSection" ? styles.active : ""}>
                        ferramentas</a>
                    </li>
                    <li>
                        <a href="#QAsection" 
                        className={currentMenu == "QAsection" ? styles.active : ""}>
                        dúvidas</a>
                    </li>
                    <li>
                        <a href="#contactSection" 
                        className={currentMenu == "contactSection" ? styles.active : ""}>
                        contato</a>
                    </li>
                </ul>
            </div>
        </header>
    )
}