import styles from './styles.module.scss'
import {AiOutlineInstagram, AiOutlineWhatsApp, AiOutlineMail} from 'react-icons/ai'

export default function Se7e(){

    const products = [
        {
            id: 1,
            text: "cartões de visita físicos"
        },
        {
            id: 2,
            text: "cartões de visita digitais"
        },
        {
            id: 3,
            text: "logomarca"
        },
        {
            id: 4,
            text: "sacolas pers."
        },
        {
            id: 5,
            text: "flyers"
        },
        {
            id: 6,
            text: "canecas pers."
        },
        {
            id: 7,
            text: "media posts"
        },
        {
            id: 8,
            text: "cardápios físicos"
        },
        {
            id: 9,
            text: "cardápios online"
        },
        {
            id: 10,
            text: "adesivos"
        },
        {
            id: 11,
            text: "banners"
        },
        {
            id: 12,
            text: "canetas pers."
        },
        {
            id: 13,
            text: "envelopes pers."
        },
        {
            id: 14,
            text: "abridores pers."
        },
        {
            id: 15,
            text: "chaveiros pers."
        },
        {
            id: 16,
            text: "squeezes"
        },
        {
            id: 17,
            text: "mouse pads pers."
        },
        {
            id: 18,
            text: "displays p/ mesa"
        },
        {
            id: 19,
            text: "brooches pers."
        },
        {
            id: 20,
            text: "adesivos de parede"
        },
        {
            id: 21,
            text: "canecas mágicas"
        }
    ]

    //Video Speed and card height
    if(process.browser){
        document.querySelector('.businessCard .videoBackground').style.height = window.innerHeight + "px"
        document.querySelector('video').playbackRate = 0.5;
    }

    return(
        <div className={styles.businessCard + " businessCard"}>
            <video autoPlay muted loop className={styles.videoBackground + " videoBackground"}>
                <source src='/se7e/video/BWBG1.mp4' type='video/mp4'/>
            </video>

            <div className={styles.container}>
                <div>

                    <div className={styles.profile}>
                        <img src="/se7e/image/logo.png" alt="" />
                        
                        <div className={styles.title}>
                            <h1>se7e</h1>
                            <p>Estúdio de Design</p>
                        </div>

                        <div className={styles.list}>
                            {
                                products.map(product => (
                                    <span key={product.id} className={styles.productCard}>
                                        {product.text}
                                    </span>
                                ))
                            }
                        </div>

                    </div>

                    <div className={styles.social}>
                        <span className={styles.socialButton}>
                            <a href="https://www.instagram.com/se7e.estudio"
                            rel="noreferrer"
                            target="_blank">
                                <AiOutlineInstagram/>
                            </a>
                        </span>

                        <span className={styles.socialButton}>
                            <a href="https://api.whatsapp.com/send?phone=5567996641461"
                            rel="noreferrer"
                            target="_blank">
                                <AiOutlineWhatsApp/>
                            </a>
                        </span>

                        <span className={styles.socialButton}>

                            <a href="mailto:se7eestudiodedesign@gmail.com"
                            rel="noreferrer"
                            target="_blank">
                                <AiOutlineMail/>
                            </a>
                            
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}