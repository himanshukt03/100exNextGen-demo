"use client"
import Link from "next/link"
import Arrow from "@/components/common/Arrow"

const About = () => {
   return (
      <section id="about" className="about__area-six section-py-130" style={{ backgroundColor: "#FFFFFF" }}>
         <div className="container">
            <div className="row align-items-center">
               <div className="col-lg-6 mb-40">
                  <div className="about__content-six">
                     <div className="section__title mb-25">
                        <span className="sub-title" style={{
                           color: "var(--tg-theme-primary)",
                           fontWeight: 600,
                           textTransform: "uppercase",
                           letterSpacing: "2px",
                           fontSize: "13px",
                           marginBottom: "12px",
                           display: "inline-block",
                        }}>Who We Are</span>
                        <h2 className="title" style={{
                           fontSize: "clamp(32px, 4vw, 48px)",
                           color: "#1A1A1A",
                           lineHeight: 1.15,
                           marginBottom: "24px",
                           fontWeight: 700,
                           letterSpacing: "-1px",
                        }}>A New Breed of<br />Holding Company</h2>
                     </div>
                     <p style={{ fontSize: "17px", color: "#555", lineHeight: 1.7, marginBottom: "16px" }}>
                        100exNextGen is driven by the mission to amplify scaling for high-potential businesses across technology, infrastructure, and service sectors.
                     </p>
                     <p style={{ fontSize: "17px", color: "#555", lineHeight: 1.7, marginBottom: "32px" }}>
                        Our philosophy centres on creating an ecosystem where vision meets velocity— enabling exceptional founders and teams to realize breakthrough success.
                     </p>
                     <Link href="/#model" className="tg-btn tg-btn-seven">Explore Our Model <Arrow /></Link>
                  </div>
               </div>
               <div className="col-lg-6">
                  <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                     {[
                        { num: "01", title: "Vision", desc: "We identify high-potential businesses before the market does, positioning for exponential returns.", color: "#0047FF" },
                        { num: "02", title: "Velocity", desc: "Speed is our competitive edge. We move fast, deploy capital efficiently, and scale relentlessly.", color: "#1565C0" },
                        { num: "03", title: "Partnership", desc: "We're builders, not just investors. We roll up our sleeves and work alongside founders.", color: "#2E7D32" },
                     ].map((card, i) => (
                        <div key={i} className="about-card" style={{
                           background: "#fff",
                           border: "1px solid #f0f0f0",
                           borderRadius: "12px",
                           padding: "28px 30px",
                           display: "flex",
                           alignItems: "flex-start",
                           gap: "20px",
                           transition: "all 0.3s ease",
                           cursor: "default",
                           borderLeft: `4px solid ${card.color}`,
                        }}>
                           <div style={{
                              fontSize: "36px",
                              fontWeight: 800,
                              color: card.color,
                              opacity: 0.2,
                              lineHeight: 1,
                              minWidth: "48px",
                           }}>{card.num}</div>
                           <div>
                              <h4 style={{ fontSize: "18px", fontWeight: 700, color: "#1a1a1a", marginBottom: "8px" }}>{card.title}</h4>
                              <p style={{ fontSize: "15px", color: "#666", lineHeight: 1.6, margin: 0 }}>{card.desc}</p>
                           </div>
                        </div>
                     ))}
                  </div>
                  <style jsx>{`
                     .about-card:hover {
                        transform: translateY(-3px);
                        box-shadow: 0 12px 30px rgba(0,0,0,0.06) !important;
                        border-color: transparent !important;
                     }
                  `}</style>
               </div>
            </div>
         </div>
      </section>
   )
}

export default About
