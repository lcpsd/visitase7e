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
import { useModalContext } from '../context/ModalContext'
import Modal from '../modal'
import PhoneModal from '../PhoneModal'
import LocationModal from '../LocationModal'

export default function Card(){

    const {isModalVisible,
        setIsModalVisible,
        setModalData, 
        isPhoneModalVisible,
        setIsPhoneModalVisible,
        isLocationModalVisible,
        setIsLocationModalVisible
    } = useModalContext()

    const allServices = [
        {
            id: 1,
            image_link: "/foryou/image/1-spa-casais.jpg",
            title: "Spa Para Casais"
        },
        {
            id: 2,
            image_link: "/foryou/image/2-festa-spa.jpg",
            title: "Festa No Spa"
        },
        {
            id: 4,
            image_link: "/foryou/image/4-spa-pes.jpg",
            title: "Spa Para os Pés"
        },
        {
            id: 5,
            image_link: "/foryou/image/5-lanche-spa.jpg",
            title: "Lanche no Spa"
        },
        {
            id: 6,
            image_link: "/foryou/image/6-vale-presente.jpg",
            title: "Vale Presente"
        },
        {
            id: 8,
            image_link: "/foryou/image/9-massagem-modeladora.jpg",
            title: "5 tipos de Massagem"
        },
        {
            id: 10,
            image_link: "/foryou/image/10-detox-corporal.jpg",
            title: "Detox Corporal"
        },
        {
            id: 11,
            image_link: "/foryou/image/11-crio.jpg",
            title: "Criolipólise"
        },
        {
            id: 12,
            image_link: "/foryou/image/12-corrente.jpg",
            title: "Corrente Russa"
        },
        {
            id: 13,
            image_link: "/foryou/image/13-heccus.jpg",
            title: "Heccus Turbo"
        },
        {
            id: 14,
            image_link: "/foryou/image/14-radio.jpg",
            title: "Radiofrequência"
        },
        {
            id: 15,
            image_link: "/foryou/image/15-vibro.jpg",
            title: "Vibrocell"
        },
        {
            id: 16,
            image_link: "/foryou/image/16-limpeza-de-pele.jpg",
            title: "Limpeza de Pele"
        }
    ]

    function handleClockModal(){
        setModalData(["Seg: 13h ás 19h", "Ter-Sex: 08h ás 19h", "Sab: 07h ás 13h"])
        setIsModalVisible(!isModalVisible)
    }

    function handleLocationModal(){
        setModalData(["Rua José Gomes Domingues, 1377 - Santa Fe, Campo Grande - MS"])
        setIsLocationModalVisible(!isLocationModalVisible)
    }

    let documentHeight = "100vh"

    if(process.browser){
        documentHeight = innerHeight + "px"
    }

    return(
        <Styles documentHeight={documentHeight}>

            {isModalVisible && <Modal/>}
            {isPhoneModalVisible && <PhoneModal/>}
            {isLocationModalVisible && 
            <LocationModal 
            location={"https://www.google.com/maps/place/Cl%C3%ADnica+For+You+Est%C3%A9tica+%26+SPA+DAY/@-20.4502477,-54.5929753,21z/data=!4m5!3m4!1s0x9486e9f92b153217:0x462abda96756719a!8m2!3d-20.4502534!4d-54.5929533"}/>
            }

            <video autoPlay muted loop className="videoBackground">
                <source src='/foryou/video/BG01.mp4' type='video/mp4'/>
            </video>

            <div className="container">
                <img src="/foryou/image/logo.jpg" alt="" className="logo" />

                <Swiper
                modules={[Pagination, A11y]}
                slidesPerView={1}
                spaceBetween={10}
                pagination={{ clickable: true }}
                className="cards">

                    {
                        allServices.map(({title, image_link, id}) => (
                            <SwiperSlide key={id}>
                                <img src={image_link} alt={title} />
                                <div>
                                    {title}
                                </div>
                            </SwiperSlide>
                        ))
                    }

                    <SwiperSlide id='final'>
                        <div className='final'>
                            E muito mais! <br />
                            Entre em contato.
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
                        <a href='mailto:clinicaforyou.cg@gmail.com' target="_blank" rel="noreferrer">
                            <AiOutlineMail/>
                        </a>
                    </SwiperSlide>

                    <SwiperSlide>
                        <a href='https://instagram.com/clinicaforyou.cg' target="_blank" rel="noreferrer">
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
            </div>
        </Styles>
    )
}
