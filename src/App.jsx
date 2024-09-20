import Banner from "./components/Banner/Banner"
import Navbar from "./components/Navbar/Navbar"
import Navbar2nd from "./components/Navbar/Navbar2nd"
import TopNav from "./components/Navbar/TopNav"
import './App.css'
import BannerPartTwo from "./components/Banner/BannerPartTwo"
import WhyCooseGelato from "./components/Body/WhyCooseGelato"
import Print from "./components/Body/Print"
import Connect from "./components/Body/Connect"
import Footer from "./components/Footer/Footer"

function App() {


  return (
    <div className="body">
      <TopNav />
      <Navbar />
      <Navbar2nd />
      <Banner />
      <BannerPartTwo />
      <WhyCooseGelato />
      <Print />
      <Connect />
      <Footer />
    </div>
  )
}

export default App
