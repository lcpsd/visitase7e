import Link from 'next/link'
import styles from './styles.module.scss'

export function HomeSection(){

    return(
        <section className={styles.homeSection} id='homeSection'>
            <div className={styles.container}>
                <div className={styles.text}>
                    <h1>
                        una o <span className={styles.textSerif}>passado </span>
                        ao <span className={styles.textDisplay}>futuro</span>
                    </h1>

                    <p>
                        cartões digitais se7e
                    </p>

                    {/* <Link href="/login">
                        <button>entrar</button>
                    </Link> */}

                    <Link href="#">
                        <button>EM BREVE</button>
                    </Link>
                </div>

                <div className={styles.smartphone}>
                    <img src="/image/smartphone.png" alt="smartphone" />
                </div>
            </div>
        </section>
    )
}