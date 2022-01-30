import Header from '@/components/se7e/landingPage/Header'
import HomeSection from '@/components/se7e/landingPage/HomeSection'
import PlansSection from '@/components/se7e/landingPage/PlansSection'
import ToolsSection from '@/components/se7e/landingPage/ToolsSection'
import QAsection from '@/components/se7e/landingPage/QAsection'
import ContactSection from '@/components/se7e/landingPage/ContactSection'
import Goback from '@/components/se7e/landingPage/Goback'

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