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
import Layout from "./components/Layout/Layout"
import GelatoConnectMenu from "./components/Menus/GelatoConnectMenu"

function App() {


  return (
    <Layout className="body">

      <div className="">
        <Banner />
        <div className="hidden lg:block">
          <BannerPartTwo />
        </div>
        <WhyCooseGelato />
        <Print />
        <Connect />
      </div>
      <GelatoConnectMenu />
    </Layout>
  )
}

export default App
