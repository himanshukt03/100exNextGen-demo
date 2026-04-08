import About from "@/components/pages/about";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "About | 100exNextGen",
};
const page = () => {
  return (
    <Wrapper>
      <About />
    </Wrapper>
  )
}

export default page