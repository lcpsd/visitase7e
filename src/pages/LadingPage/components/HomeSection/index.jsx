import axios from 'axios'
import Link from 'next/link'
import { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import styles from './styles.module.scss'

export default function HomeSection(){

    const [phoneWaiting, setPhoneWaiting] = useState("")
    const [nameWaiting, setNameWaiting] = useState("")


    async function handleRegisterWaitList(){

        if((phoneWaiting || nameWaiting) === ""){
            (() => toast.warning("Preencha nome e telefone!", {
                theme: "dark",
                autoClose: 3000,
                hideProgressBar: true,
                
            }))()

            return
        }

        await axios.post("/api/waitinglist", {
            name: nameWaiting,
            phone: phoneWaiting
        }).then(() => toast("Cadastrado com sucesso.", {
            theme: "dark",
            autoClose: 3000,
            hideProgressBar: true
        }))
        
    }

    function handlePhoneNumberInput(value){

    }

    return(
        <section className={styles.homeSection} id='homeSection'>
            <ToastContainer/>
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

                            <div className={styles.inputs}>
                                <input
                                placeholder='Nome'
                                value={nameWaiting}
                                onChange={(e) => setNameWaiting(e.target.value)}
                                />

                                <input type="tel"
                                placeholder='Whatsapp'
                                pattern='([1-9]{2})[0-9]{5}-[0-9]{4}'
                                value={phoneWaiting}
                                onChange={(e) => handlePhoneNumberInput(e.target.value)}
                                />
                            </div>

                            <button onClick={handleRegisterWaitList}>Cadastrar</button>
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