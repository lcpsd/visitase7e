import { useModalContext } from '../../context/modalContext'
import {IoMdClose} from 'react-icons/io'
import styles from './styles.module.scss'

export default function Modal(){

    const {isModalVisible, setIsModalVisible, modalData} = useModalContext()

    return(
        <div className={styles.modal}>
            <span onClick={() => setIsModalVisible(!isModalVisible)}>
                <IoMdClose/>
            </span>
            {
                modalData.map(item => (
                    <p>{item}</p>
                ))
            }
        </div>
    )
}