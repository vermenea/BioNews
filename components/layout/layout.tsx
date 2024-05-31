import { ChildrenProps } from "@/util/types";
import Footer from "./Footer/Footer";
import Wrapper from "./Wrapper";

export default function Layout({children} : ChildrenProps){
    return  (
        <Wrapper>
            {children}
             <Footer/>
        </Wrapper>
   
    )
}