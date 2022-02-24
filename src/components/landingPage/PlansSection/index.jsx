import Styles from './styles'
// import Swiper core and required modules
import { Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import {useHeaderContext} from '../contexts/HeaderContext'

export default function PlansSection(){
    const {currentMenu} = useHeaderContext()

    return(
        <Styles id='plansSection'>
            <div
            className={"container " + (currentMenu == 'plansSection' ? 'fadeIn' : "fadeOut")}>
                <p>seu
                    <br />
                    <span>plano</span>
                </p>

                <Swiper
                modules={[Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                breakpoints={{
                    
                    768: {
                      width: 768,
                      slidesPerView: 2,
                    },
                    1024: {
                        width: 1024,
                        slidesPerView: 4,
                      },
                  }}
                pagination={{ clickable: true }}
                >
                    <SwiperSlide>
                        <div className="planCard shadowBox">
                            <div className="text">
                                <h4>
                                    Light
                                </h4>

                                <p>
                                Ideal para quem quer pagar 1 unica vez e ficar despreocupado 12 meses.
                                </p>

                                <span>
                                    R$50,00/Ano
                                </span>
                            </div>

                            <a href={"#"}>
                                <button>EM BREVE</button>
                            </a>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="planCard shadowBox">
                            <div className="text">
                                <h4>
                                    Custom
                                </h4>

                                <p>
                                Um cartão único criado especialmente para você, contendo suas necessidades dentro da proposta de cartão de visitas.
                                </p>

                                <span>
                                    R$50,00/Mês
                                    <p>
                                        Acompanha display de acrílico com NFC + 2 cartões de visita NFC
                                    </p>
                                </span>
                            </div>

                            <a href={"https://api.whatsapp.com/send?phone=5567996641461"} target="_blank" rel='noreferrer'>
                                <button>PEDIR AGORA</button>
                            </a>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </Styles>
    )
}