import { A11y, Pagination, Scrollbar } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Styles from './styles'
import { ToolCard } from './ToolCard'

export function ToolsSection(){

    const cardInfo = [
        {
            title: "3 Em 1",
            text: "Crie até 3 cartões com uma única conta."
        },
        {
            title: "Layout Personalizado",
            text: "Tenha à sua disposição diferentes layouts para o seu cartão."
        },
        {
            title: "As Princpais Informações",
            text: "Exiba sua logo, informações de horário, endereço, redes sociais e outros."
        },
        {
            title: "Mude de Plano",
            text: "Evolua para o plano full assim que se sentir confortável, mude a qualquer momento."
        },
        {
            title: "Mostre Serviço",
            text: "Deixe amostra todos os produtos e serviços oferecidos, modificando sempre que necessário."
        },
        
    ]

    return(
        <Styles id='toolsSection'>
            <div className="container">
                <p>principais
                    <br />
                    <span>ferramentas</span>
                </p>

                <div className="carouselDiv">
                    <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    modules={[Pagination, Scrollbar, A11y]}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        768: {
                        width: 768,
                        slidesPerView: 3,
                        modules:[]
                        },
                    }}
                    >
                        {
                            cardInfo.map((item, index) => (
                                <SwiperSlide className="cardDiv" key={index}>
                                    <ToolCard title={item.title} text={item.text}/>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>

                
            </div>

        </Styles>
    )
}