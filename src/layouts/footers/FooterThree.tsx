"use client"
import Link from "next/link"

const FooterThree = () => {
   const handleContactScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
      // Check if it's the exact contact hash and we are on the homepage
      if (typeof window !== 'undefined' && window.location.pathname === '/') {
         e.preventDefault();
         document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
         window.history.pushState(null, '', '/#contact');
      }
   };
   return (
      <footer style={{
         background: "linear-gradient(135deg, #0D1117 0%, #161B22 50%, #0D1520 100%)",
         paddingTop: "80px",
         color: "#fff",
      }}>
         <div className="container">
            <div className="row gutter-y-30" style={{ paddingBottom: "60px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
               <div className="col-lg-3 col-md-6">
                  <Link href="/" style={{ fontSize: "24px", fontWeight: 800, color: "#fff", textDecoration: "none", display: "inline-block", marginBottom: "16px" }}>
                     <span style={{ color: "var(--tg-theme-primary)" }}>100ex</span><span>NextGen</span>
                  </Link>
                  <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)", lineHeight: 1.7, maxWidth: "280px" }}>
                     Designing the operating system for exponential ventures.
                  </p>
               </div>
               <div className="col-lg-2 col-md-6">
                  <h4 style={{ fontSize: "14px", fontWeight: 700, color: "rgba(255,255,255,0.9)", marginBottom: "20px", textTransform: "uppercase", letterSpacing: "1px" }}>Company</h4>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                     {[{ label: "About", href: "/#about" }, { label: "Our Model", href: "/#contact" }, { label: "Portfolio", href: "/#contact" }].map((item, i) => (
                        <li key={i}><Link href={item.href} onClick={item.href === '/#contact' ? handleContactScroll : undefined} style={{ fontSize: "14px", color: "rgba(255,255,255,0.45)", textDecoration: "none", transition: "color 0.3s" }}>{item.label}</Link></li>
                     ))}
                  </ul>
               </div>
               <div className="col-lg-2 col-md-6">
                  <h4 style={{ fontSize: "14px", fontWeight: 700, color: "rgba(255,255,255,0.9)", marginBottom: "20px", textTransform: "uppercase", letterSpacing: "1px" }}>Stakeholders</h4>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                     {[{ label: "Investors", href: "/#investors" }, { label: "Partners", href: "/#contact" }, { label: "Founders", href: "/#contact" }].map((item, i) => (
                        <li key={i}><Link href={item.href} onClick={item.href === '/#contact' ? handleContactScroll : undefined} style={{ fontSize: "14px", color: "rgba(255,255,255,0.45)", textDecoration: "none", transition: "color 0.3s" }}>{item.label}</Link></li>
                     ))}
                  </ul>
               </div>
               <div className="col-lg-2 col-md-6">
                  <h4 style={{ fontSize: "14px", fontWeight: 700, color: "rgba(255,255,255,0.9)", marginBottom: "20px", textTransform: "uppercase", letterSpacing: "1px" }}>Resources</h4>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                     {[{ label: "Advisors", href: "/#advisors" }, { label: "Insights", href: "/#insights" }, { label: "Contact", href: "/#contact" }].map((item, i) => (
                        <li key={i}><Link href={item.href} onClick={item.href === '/#contact' ? handleContactScroll : undefined} style={{ fontSize: "14px", color: "rgba(255,255,255,0.45)", textDecoration: "none", transition: "color 0.3s" }}>{item.label}</Link></li>
                     ))}
                  </ul>
               </div>
               <div className="col-lg-3 col-md-6">
                  <h4 style={{ fontSize: "14px", fontWeight: 700, color: "rgba(255,255,255,0.9)", marginBottom: "20px", textTransform: "uppercase", letterSpacing: "1px" }}>Contact</h4>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                     <li><a href="mailto:ram@100exnextgen.com" style={{ fontSize: "14px", color: "rgba(255,255,255,0.45)", textDecoration: "none" }}>ram@100exnextgen.com</a></li>
                     <li><a href="tel:+919845845616" style={{ fontSize: "14px", color: "rgba(255,255,255,0.45)", textDecoration: "none" }}>+91 98458 45616</a></li>
                     <li style={{ fontSize: "14px", color: "rgba(255,255,255,0.45)" }}>Bangalore, India</li>
                  </ul>
               </div>
            </div>
            <div style={{ padding: "24px 0", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
               <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.35)", margin: 0 }}>© {new Date().getFullYear()} 100exNextGen. All rights reserved.</p>
               <div style={{ display: "flex", gap: "24px" }}>
                  <Link href="/privacy-policy" style={{ fontSize: "13px", color: "rgba(255,255,255,0.35)", textDecoration: "none", transition: "color 0.3s" }}>Privacy Policy</Link>
                  <Link href="/terms-of-service" style={{ fontSize: "13px", color: "rgba(255,255,255,0.35)", textDecoration: "none", transition: "color 0.3s" }}>Terms of Service</Link>
               </div>
            </div>
         </div>
      </footer>
   )
}

export default FooterThree
