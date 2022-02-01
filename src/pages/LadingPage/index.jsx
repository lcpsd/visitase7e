import Header from '/src/components/se7e/landingPage/Header'
import HomeSection from '/src/components/se7e/landingPage/HomeSection'
import ToolsSection from '/src/components/se7e/landingPage/ToolsSection'
import PlansSection from '/src/components/se7e/landingPage/PlansSection'
import QAsection from '/src/components/se7e/landingPage/QAsection'
import ContactSection from '/src/components/se7e/landingPage/ContactSection'
import Footer from '/src/components/se7e/landingPage/Footer'
import Goback from '/src/components/se7e/landingPage/Goback'

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