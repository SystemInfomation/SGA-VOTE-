import Navbar from './components/Navbar'
import Hero from './components/Hero'
import IdentityBar from './components/IdentityBar'
import About from './components/About'
import Platform from './components/Platform'
import CampaignVideo from './components/CampaignVideo'
import Testimonials from './components/Testimonials'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'

function App() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <IdentityBar />
        <About />
        <Platform />
        <CampaignVideo />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}

export default App
