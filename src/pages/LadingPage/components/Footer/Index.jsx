import { useState } from 'react'
import styles from './styles.module.scss'

export default function Footer(){

    const [currentYear, _] = useState(new Date().getFullYear())

    const footerInfo = [
        {
            title: "Produtos",
            items: [
                {
                    title: "Light",
                    link: "#"
                },
                {
                    title: "Full",
                    link: "#"
                },
                {
                    title: "Custom",
                    link: "#"
                },
            ]
        },
        {
            title: "Suporte",
            items: [
                {
                    title: "Whatsapp",
                    link: "https://api.whatsapp.com/send?phone=5567996641461"
                },
                {
                    title: "E-mail",
                    link: "mailto:se7eestudiodedesign@gmail.com"
                },
                {
                    title: "FAQ",
                    link: "#QAsection"
                },
                {
                    title: "Contrato",
                    link: "#"
                },
            ]
        },
    ]

    return(
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div>
                    {
                        footerInfo.map(({title, items}, index) => (
                            <ul key={index}>
                                <li className={styles.listTitle}>{title}</li>
                                {
                                    items.map((item, index) => (
                                        <li key={index}>
                                            <a href={item.link}>{item.title}</a>
                                        </li>
                                    ))
                                }

                            </ul>
                        ))
                    }
                </div>

                <p>{currentYear} | Se7e - Estúdio de Design</p>
                </div>
        </footer>
    )
}