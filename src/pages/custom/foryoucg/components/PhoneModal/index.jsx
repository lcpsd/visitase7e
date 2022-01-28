import { useModalContext } from '../../../../../context/foryoucg/ModalContext'
import {IoMdClose, IoIosArrowForward} from 'react-icons/io'
import styles from './styles.module.scss'
import { BsWhatsapp } from 'react-icons/bs'

export default function PhoneModal(){

    const {setIsPhoneModalVisible, isPhoneModalVisible} = useModalContext()

    return(
        <div className={styles.modal}>
            <span onClick={() => setIsPhoneModalVisible(!isPhoneModalVisible)}>
                <IoMdClose/>
            </span>
            <a href='https://api.whatsapp.com/send?phone=5567999876779' rel="noreferrer" target="_blank">
                <BsWhatsapp/>
                <p>Não sou cliente</p>
                <div className={styles.arrow}>
                    <IoIosArrowForward/>
                </div>
            </a>
            <a href='https://api.whatsapp.com/send?phone=5567993090921' rel="noreferrer" target="_blank" className={styles.invert}>
                <BsWhatsapp/>
                <p>Já sou cliente</p>
                <div className={styles.arrow}>
                    <IoIosArrowForward/>
                </div>
            </a>
        </div>
    )
}