import './assets/css/styles.css'
import Features from './components/Features'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Functions from './components/Functions'
import SimpleTransfer from './components/SimpleTransfer'
import Recieve from './components/Recieve'
import Reviews from './components/Reviews'
import FAQ from './components/FAQ'
import Newsletter from './components/Newsletter'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      
      <Functions />
      <SimpleTransfer />
      <Recieve />
      <Reviews />
      <FAQ />
      <Newsletter />

      <Footer />
    </>
  )
}

export default App