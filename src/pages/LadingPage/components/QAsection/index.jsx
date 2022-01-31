import CollapseCard from './CollapseCard'
import styles from './styles.module.scss'

export default function QAsection(){

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
            text: "Você poderá ter até 3 cartões por conta."
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
    ]

    return(
        <section className={styles.qaSection} id='QAsection'>
            <div className={styles.container}>
                <p>tire suas
                    <br />
                    <span>dúvidas</span>
                </p>

                <div className={styles.questions}>
                {
                    questions.map((item, index) => (
                        <CollapseCard title={item.title} text={item.text} key={index}/>
                    ))
                }
                </div>
            </div>
        </section>
    )
}