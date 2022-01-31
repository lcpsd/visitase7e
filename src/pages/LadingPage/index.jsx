import Header from '/src/components/se7e/landingPage/Header'
import HomeSection from '/src/components/se7e/landingPage/HomeSection'
import PlansSection from '/src/components/se7e/landingPage/PlansSection'
import ToolsSection from '/src/components/se7e/landingPage/ToolsSection'
import QAsection from '/src/components/se7e/landingPage/QAsection'
import ContactSection from 'src/components/se7e/landingPage/ContactSection'
import Goback from '/src/components/se7e/landingPage/Goback'

export default function LandingPage(){

    return(
        <>
            <Header />
            <HomeSection/>
            <PlansSection/>
            <ToolsSection/>
            <QAsection/>
            <ContactSection/>
            <Goback/>
        </>
    )
}