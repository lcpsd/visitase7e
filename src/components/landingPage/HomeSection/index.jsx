import axios from 'axios'
import Link from 'next/link'
import { useState } from 'react'
import PhoneInput from 'react-phone-number-input'
import { toast, ToastContainer } from 'react-toastify'
import Styles from './styles.js'
import { useHeaderContext } from '/src/contexts/landingPage/HeaderContext'

export default function HomeSection(){

    const [phoneWaiting, setPhoneWaiting] = useState("")
    const [nameWaiting, setNameWaiting] = useState("")

    const {currentMenu} = useHeaderContext()

    async function handleRegisterWaitList(){

        // Check empity fields
        if(!phoneWaiting || !nameWaiting){
            (() => toast.warning("Preencha nome e telefone!", {
                theme: "dark",
                autoClose: 3000,
                hideProgressBar: true,
                
            }))()

            return
        }

        // Request register 
        await axios.post("/api/waitinglist", {
            name: nameWaiting,
            phone: phoneWaiting
        }).then(response => {

            if(response.status !== 200){
                toast.error("Ocorreu um erro!", {
                    theme: "dark",
                    autoClose: 3000,
                    hideProgressBar: true
                })

                return
            }

            toast.success("Cadastrado com sucesso.", {
                theme: "dark",
                autoClose: 3000,
                hideProgressBar: true
            })
        })        
    }

    return(
        <Styles className="homeSection" id='homeSection'>
            <ToastContainer/>

            <div className={"container " + (currentMenu == 'homeSection' ? 'fadeIn' : "fadeOut")}>

                <div className="text">
                    <div className="header">
                        <h1>
                            una o <span className="textSerif">passado </span>
                            ao <span className="textDisplay">futuro</span>
                        </h1>

                        <p>
                            cartões digitais se7e
                        </p>
                    </div>

                    {/* <Link href="/login">
                        <button>entrar</button>
                    </Link> */}
                    
                    <div className="waitingList">
                        <p>Cadastre-se na lista de espera</p>
                        <div>

                            <div className="inputs">
                                <input
                                placeholder='Nome'
                                type="text"
                                value={nameWaiting}
                                onChange={(e) => setNameWaiting(e.target.value)}
                                />

                                <PhoneInput
                                placeholder='Whatsapp'
                                value={phoneWaiting}
                                onChange={setPhoneWaiting}
                                country="BR"
                                maxLength="15"
                                defaultCountry="BR"
                                className="phoneInput"
                                />
                            </div>

                            <button onClick={handleRegisterWaitList}>Cadastrar</button>
                        </div>

                        <p>Ou confira o plano <a href="#plansSection">custom</a></p>

                    </div>
                </div>

                <div className="smartphone">
                    <img src="/image/smartphone.png" alt="smartphone" />
                </div>
            </div>
        </Styles>
    )
}