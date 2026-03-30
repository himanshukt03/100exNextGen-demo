import NotFound from "@/components/pages/error";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "404 || Beeko - Business Consulting React Next js Template",
};
const NotFoundPage = () => {
   return (
      <Wrapper>
         <NotFound />
      </Wrapper>
   )
}

export default NotFoundPage