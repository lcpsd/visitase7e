import Header from '/src/components/landingPage/Header'
import HomeSection from '/src/components/landingPage/HomeSection'
import ToolsSection from '/src/components/landingPage/ToolsSection'
import PlansSection from '/src/components/landingPage/PlansSection'
import QAsection from '/src/components/landingPage/QAsection'
import ContactSection from '/src/components/landingPage/ContactSection'
import Footer from '/src/components/landingPage/Footer'
import Goback from '/src/components/landingPage/Goback'

export default function LandingPage(){

    return(
        <>
            <Header />
            <HomeSection/>
            <ToolsSection/>
            <PlansSection/>
            <QAsection/>
            <ContactSection/>
            <Footer/>
            <Goback/>
        </>
    )
}