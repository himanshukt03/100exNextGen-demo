"use client"
import Link from 'next/link';

const insights_data = [
    { id: 1, num: "01", source: "Boston Consulting Group (BCG)", title: "Your Growth Strategy Depends on Your Starting Point", color: "#1565C0", href: "https://www.bcg.com/publications/2024/your-revenue-strategy-depends-on-your-starting-point" },
    { id: 2, num: "02", source: "First Round Review", title: "The PMF Framework: How to Measure Product-Market Fit", color: "#0047FF", href: "https://review.firstround.com/how-to-measure-product-market-fit/" },
    { id: 3, num: "03", source: "Springer Nature", title: "Why Early-Stage Software Startups Fail: A Behavioral Framework", color: "#2E7D32", href: "https://link.springer.com/chapter/10.1007/978-3-319-08738-2_3" },
    { id: 4, num: "04", source: "Y Combinator (Library)", title: "How to build a great Series A pitch and deck", color: "#0047FF", href: "https://www.ycombinator.com/library/8d-how-to-build-a-great-series-a-pitch-and-deck" },
    { id: 5, num: "05", source: "McKinsey & Company", title: "The Next Normal: The future of industries", color: "#1565C0", href: "https://www.mckinsey.com/featured-insights/the-next-normal" },
    { id: 6, num: "06", source: "Deloitte Insights", title: "The Path to Profitability for High-Growth Startups", color: "#2E7D32", href: "https://www.deloitte.com/uk/en/services/deloitte-private/blogs/2024/the-path-to-profitability.html" }
];

const InsightsArea = () => {
   return (
      <section className="section-py-130" style={{ backgroundColor: "#fff", paddingTop: "120px" }}>
         <div className="container">
            <div className="row align-items-end" style={{ marginBottom: "48px" }}>
               <div className="col-lg-8">
                  <span style={{ color: "var(--tg-theme-primary)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "2px", fontSize: "13px", marginBottom: "12px", display: "inline-block" }}>Insights & Resources</span>
                  <h1 style={{ fontSize: "clamp(30px, 4vw, 44px)", fontWeight: 700, color: "#1A1A1A", letterSpacing: "-0.5px", marginBottom: 0 }}>Thought Leadership</h1>
               </div>
            </div>
            <div className="row gutter-y-30 justify-content-center">
               {insights_data.map((item) => (
                  <div key={item.id} className="col-lg-4 col-md-6">
                     <div className="insight-card" style={{
                        background: "#FAFAFA", borderRadius: "12px", padding: "32px 28px", border: "1px solid #eee",
                        transition: "all 0.35s ease", height: "100%", display: "flex", flexDirection: "column", position: "relative", overflow: "hidden",
                     }}>
                        <span style={{ position: "absolute", top: "20px", right: "20px", fontSize: "48px", fontWeight: 800, color: "rgba(0,0,0,0.03)", lineHeight: 1 }}>{item.num}</span>
                        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
                           <div style={{ width: "4px", height: "20px", background: item.color, borderRadius: "2px" }} />
                           <span style={{ fontSize: "13px", fontWeight: 600, color: item.color, textTransform: "uppercase", letterSpacing: "0.5px" }}>{item.source}</span>
                        </div>
                        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#1A1A1A", lineHeight: 1.35, marginBottom: "20px", flex: 1 }}>{item.title}</h3>
                        <a href={item.href} target="_blank" rel="noopener noreferrer" style={{ fontSize: "14px", fontWeight: 600, color: "var(--tg-theme-primary)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                           Read More
                           <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </a>
                     </div>
                  </div>
               ))}
            </div>
            <style jsx>{`
               .insight-card:hover {
                  transform: translateY(-6px);
                  box-shadow: 0 20px 40px rgba(0,0,0,0.08);
                  border-color: transparent !important;
                  background: #fff !important;
               }
            `}</style>
         </div>
      </section>
   )
}

export default InsightsArea;
