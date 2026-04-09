export interface InsightItem {
   id: number
   num: string
   source: string
   title: string
   color: string
   href: string
}

const insightsData: InsightItem[] = [
   {
      id: 1,
      num: '01',
      source: 'Boston Consulting Group (BCG)',
      title: 'Your Growth Strategy Depends on Your Starting Point',
      color: '#1565C0',
      href: 'https://www.bcg.com/publications/2024/your-revenue-strategy-depends-on-your-starting-point',
   },
   {
      id: 2,
      num: '02',
      source: 'First Round Review',
      title: 'The PMF Framework: How to Measure Product-Market Fit',
      color: '#0047FF',
      href: 'https://review.firstround.com/how-to-measure-product-market-fit/',
   },
   {
      id: 3,
      num: '03',
      source: 'Springer Nature',
      title: 'Why Early-Stage Software Startups Fail: A Behavioral Framework',
      color: '#2E7D32',
      href: 'https://link.springer.com/chapter/10.1007/978-3-319-08738-2_3',
   },
   {
      id: 4,
      num: '04',
      source: 'Y Combinator (Library)',
      title: 'How to Build a Great Series A Pitch and Deck',
      color: '#0047FF',
      href: 'https://www.ycombinator.com/library/8d-how-to-build-a-great-series-a-pitch-and-deck',
   },
   {
      id: 5,
      num: '05',
      source: 'McKinsey & Company',
      title: 'The Next Normal: The Future of Industries',
      color: '#1565C0',
      href: 'https://www.mckinsey.com/featured-insights/the-next-normal',
   },
   {
      id: 6,
      num: '06',
      source: 'Deloitte Insights',
      title: 'The Path to Profitability for High-Growth Startups',
      color: '#2E7D32',
      href: 'https://www.deloitte.com/uk/en/services/deloitte-private/blogs/2024/the-path-to-profitability.html',
   },
   {
      id: 7,
      num: '07',
      source: 'Harvard Business Review',
      title: 'When and How Founders Should Think About Scaling',
      color: '#8E24AA',
      href: 'https://hbr.org/2021/05/start-ups-that-last',
   },
   {
      id: 8,
      num: '08',
      source: 'Sequoia Capital',
      title: 'Company Design: Building Enduring Startups',
      color: '#EF6C00',
      href: 'https://www.sequoiacap.com/article/company-design/',
   },
   {
      id: 9,
      num: '09',
      source: 'a16z',
      title: 'The GTM Guide for Early-Stage Startups',
      color: '#00897B',
      href: 'https://a16z.com/growth/',
   },
]

export default insightsData
