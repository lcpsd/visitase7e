import CollapseCard from './CollapseCard'
import Styles from './Styles'
import {useHeaderContext} from '../contexts/HeaderContext'

export default function QAsection(){

    const {currentMenu} = useHeaderContext()

    const questions = [
        {
            title: "Posso pedir reembolso?",
            text: "No plano mensal não é possível pedir reembolso. No plano anual o reembolso é feito se solicitado em até 30 dias após o pagamento."
        },
        {
            title: "Posso cancelar minha conta?",
            text: "Sim, sua conta pode ser cancelada a qualquer momomento e todos os dados serão deletados."
        },
        {
            title: "Quantos cartões posso ter?",
            text: "Você poderá ter até 3 cartões por conta no plano light ou full."
        },
        {
            title: "O plano custom possuí painel administrativo?",
            text: "Não, por se tratar de um cartão altamente customizado, ainda não possuímos a capacidade de fornecer um painel administrativo para os mesmos, sendo preciso entrar em contato para que façamos a atualização dos dados."
        },
        {
            title: "Existe algum custo extra?",
            text: "Não, uma vez que o pacote é pago, nenhuma cobrança adicional sobre o serviço será feita."
        },
        {
            title: "E se eu não pagar?",
            text: "Seu cartão ficará inativo até que o pagamento seja efetuado."
        },
        {
            title: "Como funciona o login?",
            text: "O login é feito exclusivamente utilizando uma conta Google."
        },
        {
            title: "Como é feita a cobrança?",
            text: "A cobrança é feita via cartão de crédito ou boleto."
        },
        {
            title: "Posso alterar meu plano?",
            text: "Sim, seu plano poderá ser alterado a qualquer momento. Note que após o período de reembolso do plano anual, não haverá devolução do valor pela mudança de plano para o light (Plano mensal)."
        },
        {
            title: "O que é NFC?",
            text: "NFC é uma tecnologia que permite a transferência de pequenas quantidades de dados através da aproximação. É a mesma tecnologia utilizada por cartões de crédito e débito para efetuar pagamentos em máquinas de cartão. Poranto, quando o cliente aproxima um celular que suporte esta tecnologia ao seu display de acrílico ou cartão, ele é levado automáticamente para o seu cartão digital."
        },
        {
            title: "E se o celular não suportar NFC?",
            text: "Na mesmo cartão e display onde está presente a tecnologia, disponibilizamos um qr-code para que aqueles que não tenham um celular com NFC, possam escanear e serem levados ao cartão digital."
        },
        {
            title: "Posso regravar dados nos chips NFC?",
            text: "Até que se complete 6 meses de assinatura, não é possível efetuar regravações nos chips fornecidos. Após 6 meses a regravação torna-se livre, pois até o fim deste prazo, os chips, cartões e displays de acrílico pertencem à se7e."
        }
    ]

    return(
        <Styles className="qaSection" id='QAsection'>
            <div className={"container " + (currentMenu == 'QAsection' ? 'fadeIn' : "fadeOut")}>
                <p>tire suas
                    <br />
                    <span>dúvidas</span>
                </p>

                <div className="questions">
                {
                    questions.map((item, index) => (
                        <CollapseCard title={item.title} text={item.text} key={index}/>
                    ))
                }
                </div>
            </div>
        </Styles>
    )
}