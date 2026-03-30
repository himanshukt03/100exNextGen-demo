import BreadCrumb from "../common/BreadCrumb"
import FooterOne from "@/layouts/footers/FooterOne"
import ContactArea from "./ContactArea"
import ContactMap from "./ContactMap"
import HeaderSix from "@/layouts/headers/HeaderSix"
import Cta from "./Cta"

const Contact = () => {
   return (
      <>
         <HeaderSix />
         <main className="main-area fix">
            <BreadCrumb title='Contact With Us' sub_title='Contact' />
            <ContactMap />
            <ContactArea />
            <Cta />
         </main>
         <FooterOne style={true} />
      </>
   )
}

export default Contact
