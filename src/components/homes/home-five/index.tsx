import HeaderFive from "@/layouts/headers/HeaderFive"
import Banner from "./Banner"
import About from "./About"
import Service from "./Service"
import ChooseArea from "./ChooseArea"
import Cta from "./Cta"
import WorkArea from "./WorkArea"
import Estimate from "./Estimate"
import Team from "./Team"
import Brand from "./Brand"
import Testimonial from "./Testimonial"
import Blog from "./Blog"
import FAq from "./FAQ"
import FooterThree from "@/layouts/footers/FooterThree"

const HomeFive = () => {
   return (
      <>
         <HeaderFive />
         <main className="main-area fix">
            <Banner />
            <About />
            <Service />
            <ChooseArea />
            <WorkArea />
            <Estimate />
            <Team />
            <Brand />
            <Testimonial />
            <Blog />
            <Cta />
            <FAq />
         </main>
         <FooterThree />
      </>
   )
}

export default HomeFive
