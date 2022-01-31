import Link from 'next/link'
import Styles from './styles'
// import Swiper core and required modules
import { Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

export default function PlansSection(){

    return(
        <Styles id='plansSection'>
            <div className="container">
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
                                Ideal para quem deseja manter o controle dos gastos mês a mês, este modo permite efetuar pagamentos de mensalidade.
                                </p>

                                <span>
                                    R$25,00/Mês
                                </span>
                            </div>

                            <Link href={"#"}>
                                <button>EM BREVE</button>
                            </Link>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="planCard filled">

                            <span className="offCircle">
                                30% OFF
                            </span>

                            <div className="text">
                                <h4>
                                    Full
                                </h4>

                                <p>
                                Ideal para quem não deseja se preocupar com mensalidade todos os meses e ainda pagar mais barato em sua assinatura.
                                </p>

                                <span>
                                    R$200,00/Ano
                                    <p>+50% Off em cartões premium físicos com qr-code</p>
                                </span>
                            </div>

                            <Link href={"#"}>
                                <button className='outlined'>EM BREVE</button>
                            </Link>
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
                                </span>
                            </div>

                            <Link href={"https://api.whatsapp.com/send?phone=5567996641461"}>
                                <button>Peça Agora</button>
                            </Link>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </Styles>
    )
}