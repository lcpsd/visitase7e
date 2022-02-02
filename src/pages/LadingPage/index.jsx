import Header from '/src/components/landingPage/Header'
import HomeSection from '/src/components/landingPage/HomeSection'
import ToolsSection from '/src/components/landingPage/ToolsSection'
import PlansSection from '/src/components/landingPage/PlansSection'
import QAsection from '/src/components/landingPage/QAsection'
import ContactSection from '/src/components/landingPage/ContactSection'
import Footer from '/src/components/landingPage/Footer'
import GoBack from '/src/components/landingPage/GoBack'
import { HeaderContextProvider } from '/src/contexts/landingPage/HeaderContext'

export default function LandingPage(){

    return(
        <HeaderContextProvider>
            <Header />
            <HomeSection/>
            <ToolsSection/>
            <PlansSection/>
            <QAsection/>
            <ContactSection/>
            <Footer/>
            <GoBack/>
        </HeaderContextProvider>
    )
}