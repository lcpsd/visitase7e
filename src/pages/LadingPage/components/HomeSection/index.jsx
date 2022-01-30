import Link from 'next/link'
import styles from './styles.module.scss'

export default function HomeSection(){

    function handleRegisterWaitList(){

    }

    return(
        <section className={styles.homeSection} id='homeSection'>
            <div className={styles.container}>
                <div className={styles.text}>
                    <div className={styles.header}>
                        <h1>
                            una o <span className={styles.textSerif}>passado </span>
                            ao <span className={styles.textDisplay}>futuro</span>
                        </h1>

                        <p>
                            cartões digitais se7e
                        </p>
                    </div>

                    {/* <Link href="/login">
                        <button>entrar</button>
                    </Link> */}
                    
                    <div className={styles.waitingList}>
                        <p>Cadastre-se na lista de espera</p>
                        <div>
                            <input type="text" placeholder='Digite seu e-mail'/>

                            <Link href="#">
                                <button>Cadastrar</button>
                            </Link>
                        </div>

                        <p>Ou confira o plano <a href="#plansSection">custom</a></p>

                    </div>
                </div>

                <div className={styles.smartphone}>
                    <img src="/image/smartphone.png" alt="smartphone" />
                </div>
            </div>
        </section>
    )
}