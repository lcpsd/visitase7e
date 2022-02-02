import { A11y, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Styles from './styles'
import ToolCard from './ToolCard'
import {useHeaderContext} from '../contexts/HeaderContext'

export default function ToolsSection(){

    const {currentMenu} = useHeaderContext()

    const cardInfo = [
        {
            title: "3 Em 1",
            text: "Crie até 3 cartões com uma única conta.",
            badges: ["Light", "Full"]
        },
        {
            title: "Layout Personalizado",
            text: "Tenha à sua disposição diferentes layouts para o seu cartão.",
            badges: ["Light", "Full"]
        },
        {
            title: "As Princpais Informações",
            text: "Exiba sua logo, informações de horário, endereço, redes sociais e outros.",
            badges: ["Light", "Full", "Custom"]
        },
        {
            title: "Mude de Plano",
            text: "Evolua para o plano full assim que se sentir confortável, mude a qualquer momento.",
            badges: ["Light", "Full"]
        },
        {
            title: "Mostre Serviço",
            text: "Deixe amostra todos os produtos e serviços oferecidos, modificando sempre que necessário.",
            badges: ["Light", "Full", "Custom"]
        },
        {
            title: "Do seu jeito",
            text: "Com o plano custom você deixa o cartão com a sua cara e traga a originalidade que seus concorrentes não possuem.",
            badges: ["Custom"]
        },
        {
            title: "Tecnologia",
            text: "No plano custom fornecemos 1 display de acrílico NFC e 2 cartões NFC personalizados para o seu negócio gratuitamente, e eles são seus após 6 meses de assinatura ativa.",
            badges: ["Custom"]
        },
        {
            title: "Socialize",
            text: "Seu cliente tem acesso a todos os links de suas redes sociais.",
            badges: ["Light", "Full", "Custom"]
        },
        {
            title: "Desktop ou Mobile",
            text: "Cartão responsivo para ser exibido de maneira perfeita ao seu cliente, tanto no computador quando no celular.",
            badges: ["Light", "Full", "Custom"]
        },
        {
            title: "Altere seus dados",
            text: "Tenha autonomia para mudar suas informações quando quiser.",
            badges: ["Light", "Full", "Custom"]
        },
        {
            title: "Conte com o Google",
            text: "Faça login sem ter que criar uma conta, apenas utilizando sua conta google existênte.",
            badges: ["Light", "Full"]
        },
    ]

    return(
        <Styles id='toolsSection'>
            <div className={"container " + (currentMenu == 'toolsSection' ? 'fadeIn' : "fadeOut")}>
                <p>principais
                    <br />
                    <span>ferramentas</span>
                </p>

                <div className="carouselDiv">
                    <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    modules={[Pagination, A11y]}
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
                                    <ToolCard title={item.title} text={item.text} badges={item.badges}/>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>

                
            </div>

        </Styles>
    )
}