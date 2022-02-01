import Header from './components/Header'
import HomeSection  from './components/HomeSection'
import PlansSection  from './components/PlansSection/index.jsx'
import ToolsSection  from './components/ToolsSection'
import QAsection  from './components/QAsection'
import ContactSection  from './components/ContactSection'
import Goback  from './components/GoBack'
import Footer from './components/Footer/index.jsx'

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