"use client"
import menu_data from "@/data/MenuData";
import Link from "next/link.js";
import { usePathname } from "next/navigation";

const NavMenu = () => {
   const currentRoute = usePathname();

   const handleContactScroll = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
      if (link === '/#contact' && typeof window !== 'undefined' && window.location.pathname === '/') {
         e.preventDefault();
         document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
         window.history.pushState(null, '', '/#contact');
      }
   };

   const isMenuItemActive = (menuLink: string) => {
      return currentRoute === menuLink;
   };

   const isSubMenuItemActive = (subMenuLink: string) => {
      return currentRoute === subMenuLink;
   };

   return (
      <ul className="navigation">
         {menu_data.map((menu) => (
            <li key={menu.id} className={menu.has_dropdown ? "menu-item-has-children" : ""}>
               <Link href={menu.link} onClick={(e) => handleContactScroll(e, menu.link)} className={`${(isMenuItemActive(menu.link) || (menu.sub_menus && menu.sub_menus.some((sub_m) => sub_m.link && isSubMenuItemActive(sub_m.link)))) ? "active" : ""}`}>
                  {menu.title}
               </Link>
               {menu.has_dropdown && (
                  menu.sub_menus && (
                     <ul className="sub-menu">
                        {menu.sub_menus.map((sub_m, i) => (
                           <li key={i} className={sub_m.inner_sub_menus ? "menu-item-has-children" : ""}>
                              <Link href={sub_m.link} onClick={(e) => handleContactScroll(e, sub_m.link)} className={sub_m.link && isSubMenuItemActive(sub_m.link) ? "active" : ""}>
                                 {sub_m.title}
                              </Link>
                              {sub_m.inner_sub_menus && (
                                 <ul className="sub-menu">
                                    {sub_m.inner_sub_menus.map((inner_sub_m, i) => (
                                       <li key={i}>
                                          <Link
                                             href={inner_sub_m.link}
                                             onClick={(e) => handleContactScroll(e, inner_sub_m.link)}
                                             className={
                                                inner_sub_m.link && isSubMenuItemActive(inner_sub_m.link) ? "active" : ""}>
                                             {inner_sub_m.title}
                                          </Link>
                                       </li>
                                    ))}
                                 </ul>
                              )}
                           </li>
                        ))}
                     </ul>
                  )
               )}
            </li>
         ))}
      </ul>
   );
};

export default NavMenu;