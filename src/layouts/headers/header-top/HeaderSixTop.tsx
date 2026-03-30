import Icon from "@/components/common/Icon"
import Link from "next/link"

const HeaderSixTop = () => {
   return (
      <div className="tg-header__top">
         <div className="container">
            <div className="row align-items-center">
               <div className="col-lg-7">
                  <div className="tg-header__top-info">
                     <ul className="list-wrap">
                        <li><i className="flaticon-placeholder"></i>256 Avenue, Mark Street, NewYork City</li>
                        <li><i className="flaticon-envelope"></i><a href="mailto:info@gmail.com">info@gmail.com</a></li>
                     </ul>
                  </div>
               </div>
               <div className="col-lg-5">
                  <div className="tg-header__top-right">
                     <ul className="list-wrap">
                        <li><i className="flaticon-telephone"></i><Link href="tel:0123456789">+123 4884 4889</Link></li>
                        <li>
                           <div className="tg-header__top-social">
                              <ul className="list-wrap">
                                 <Icon />
                              </ul>
                           </div>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default HeaderSixTop
