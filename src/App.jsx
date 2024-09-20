import Banner from "./components/Banner/Banner"
import './App.css'
import BannerPartTwo from "./components/Banner/BannerPartTwo"
import WhyCooseGelato from "./components/Body/WhyCooseGelato"
import Print from "./components/Body/Print"
import Connect from "./components/Body/Connect"
import Layout from "./components/Layout/Layout"

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

    </Layout>
  )
}

export default App
