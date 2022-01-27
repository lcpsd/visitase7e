import Styles from './styles'
import {Swiper, SwiperSlide} from 'swiper/react'
import { A11y, Navigation, Pagination } from 'swiper'

import {
    AiOutlinePhone,
    AiOutlineMail,
    AiOutlineInstagram,
    AiOutlineClockCircle
} from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'
import { useModalContext } from '../../context/modalContext'
import Modal from '../modal'
import PhoneModal from '../PhoneModal'

export default function Card(){

    const {isModalVisible,
        setIsModalVisible,
        setModalData, 
        isPhoneModalVisible,
        setIsPhoneModalVisible} = useModalContext()

    function handleClockModal(){
        setModalData(["Seg 13h ás 19h", "Ter-Sex 08h ás 19h", "Sab 07h ás 13h"])
        setIsModalVisible(!isModalVisible)
    }

    function handleLocationModal(){
        setModalData(["Rua Josè Gomes Domjngues, N°1377. Bairro: Santa Fé"])
        setIsModalVisible(!isModalVisible)
    }

    let documentHeight = "100vh"

    if(process.browser){
        documentHeight = window.innerHeight + "px"
    }

    return(
        <Styles documentHeight={documentHeight}>

            {isModalVisible && <Modal/>}
            {isPhoneModalVisible && <PhoneModal/>}

            <video autoPlay muted loop className="videoBackground">
                <source src='/foryou/video/BG01.mp4' type='video/mp4'/>
            </video>

            <img src="/foryou/image/logo.jpg" alt="" className="logo" />

            <Swiper
            modules={[Pagination, A11y]}
            slidesPerView={1}
            spaceBetween={10}
            pagination={{ clickable: true }}
            className="cards">

                <SwiperSlide>
                    <img src="/foryou/image/logo.jpg" alt="" />
                    <div>
                        Pedras Quentes
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <img src="/foryou/image/logo.jpg" alt="" />
                    <div>
                        Pedras Quentes
                    </div>
                </SwiperSlide>

            </Swiper>

            <Swiper
            modules={[Navigation, A11y]}
            slidesPerView={4}
            navigation
            className="social">
                <SwiperSlide>
                    <a href='#' onClick={() => setIsPhoneModalVisible(!isPhoneModalVisible)}>
                        <AiOutlinePhone/>
                    </a>
                </SwiperSlide>

                <SwiperSlide>
                    <a href='mailto:clinicaforyou.cg@gmail.com' target="_blank">
                        <AiOutlineMail/>
                    </a>
                </SwiperSlide>

                <SwiperSlide>
                    <a href='https://instagram.com/clinicaforyou.cg' target="_blank">
                        <AiOutlineInstagram/>
                    </a>
                </SwiperSlide>

                <SwiperSlide>
                    <a onClick={handleClockModal}>
                        <AiOutlineClockCircle/>
                    </a>
                    
                </SwiperSlide>

                <SwiperSlide>
                    <a onClick={handleLocationModal}>
                        <GoLocation/>
                    </a>
                    
                </SwiperSlide>

            </Swiper>
        </Styles>
    )
}
