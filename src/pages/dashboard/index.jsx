import axios from "axios"
import { signOut, useSession } from "next-auth/react"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export default function Dashboard({SUPER_USER_EMAIL}){

    const [userCards, setUserCards] = useState([""])
    const [loading, setLoading] = useState(true)

    const { data: session } = useSession()
    const router = useRouter()

    // Checks admin E-mail
    useEffect(async () => {

        if(!session){
            router.push("/login")
        }

        await handleGetcards()
        
        setLoading(false)
    }, [session])

    async function handleCreateCard(){
        axios.post("/api/cards", {
            title: "",
            name: "",
            link: "",
            products: [],
            social:
                {
                    site: "",
                    phone: "",
                    email: "",
                    address: "",
                    youtube: "",
                    tiktok: "",
                    instagram:"",
                    facebook:"",
                    linkedin:""
                }
            ,
            colors: {
                primary:"",
                secondary:"",
                text:""
            },
            hours: {
                open: "",
                close: "",
                break1: "",
                endBreak1: "",
                break2: "",
                endBreak2: "",
            },
            created_by: session.user.email,
            created_at: new Date,
        })
    }

    async function handleGetcards(){
        const fetchCards = await axios.get("/api/cards").then(response => response.data.data)
        setUserCards(fetchCards)
        
    }
    
    return(
        <div>
            {JSON.stringify(session?.user, null, 2)}
            <button onClick={() => signOut()}>Sair</button>
            <button onClick={handleCreateCard}>Novo Cartãao</button>
            
            <p>
                {
                    !loading &&
                    userCards.map(item => (item._id))
                }
            </p>

        </div>
    )
}

export async function getServerSideProps(){
    return{
        props:{
            SUPER_USER_EMAIL: process.env.SUPER_USER_EMAIL
        }
    }
}