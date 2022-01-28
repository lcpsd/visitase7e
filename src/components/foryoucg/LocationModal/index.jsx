import { useModalContext } from '../context/ModalContext'
import {IoMdClose} from 'react-icons/io'
import styles from './styles.module.scss'

export default function LocationModal({location}){

    const {isLocationModalVisible, setIsLocationModalVisible, modalData} = useModalContext()

    return(
        <div className={styles.modal}>
            <span onClick={() => setIsLocationModalVisible(!isLocationModalVisible)}>
                <IoMdClose/>
            </span>
            {
                modalData.map(item => (
                    <p key={item}>{item}</p>
                ))
            }

            <a href={location}>
                <img src="/foryou/image/location.jpg" alt="" />
            </a>

            <a href={location}>
                <button>Abrir Maps</button>
            </a>
        </div>
    )
}