import {HiOutlineMail} from 'react-icons/hi'
import {RiWhatsappLine} from 'react-icons/ri'
import {GrInstagram} from 'react-icons/gr'
import styles from './styles.module.scss'

export default function ContactSection(){
    
    return(
        <section className={styles.contact} id='contactSection'>
            <div className={styles.container}>
                <p>fale
                    <br />
                    <span>conosco</span>
                </p>

                <div className={styles.buttons}>
                    <button>
                        <a href="mailto:se7eestudiodedesign@gmail.com">
                            <span>
                                <HiOutlineMail/>
                            </span>
                            <p>E-mail</p>
                        </a>
                    </button>

                    <button>
                        <a href="https://api.whatsapp.com/send?phone=5567996641461">
                            <span>
                                <RiWhatsappLine/>
                            </span>
                            <p>whatsapp</p>
                        </a>
                    </button>

                    <button>
                        <a href="https://www.instagram.com/se7e.estudio/">
                            <span>
                                <GrInstagram/>
                            </span>
                            <p>Instagram</p>
                        </a>
                    </button>
                </div>
            </div>
        </section>
    )
}