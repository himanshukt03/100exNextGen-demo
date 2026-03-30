import HeaderSix from "@/layouts/headers/HeaderSix"
import ErrorArea from "./ErrorArea"
import FooterOne from "@/layouts/footers/FooterOne"

const NotFound = () => {
   return (
      <>
         <HeaderSix />
         <main className="main-area fix">
            <ErrorArea />
         </main>
         <FooterOne />
      </>
   )
}

export default NotFound
