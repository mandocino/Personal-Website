const PROJECTS = [
  {
    title: 'ParkerStrat',
    image: '/parkerstrat-card.svg',
    description:
      'Strategic planning software for organizing decisions, scenarios, and project direction in one focused workspace.',
    tags: ['Next.js', 'Prisma', 'SaaS', 'Product Design'],
    live: 'https://parker-strat.vercel.app/',
    section: 'featured',
    featuredRank: 1,
    size: 'feature',
    accent: '#6c63ff',
    hideLiveLink: true,
  },
  {
    title: 'Screener',
    description:
      'A focused market screener for scanning opportunities and narrowing down stocks through a dedicated finance workflow.',
    tags: ['Market Data', 'Screener', 'Next.js', 'Finance'],
    live: 'https://parker-strat.vercel.app/screener',
    section: 'featured',
    featuredRank: 2,
    size: 'medium',
    accent: '#22d3ee',
    hideLiveLink: true,
  },
  {
    title: 'Algorithmic Strategy',
    description:
      'A strategy workspace for reviewing algorithmic trading logic, signals, and systematic market decision rules.',
    tags: ['Trading Algorithms', 'Strategy', 'Finance', 'Next.js'],
    live: 'https://parker-strat.vercel.app/algos',
    section: 'featured',
    featuredRank: 3,
    size: 'wide',
    accent: '#34d399',
    hideLiveLink: true,
  },
  {
    title: 'Degenerate',
    description:
      'A Unity game project built around a fast, stylized gameplay loop and polished interactive systems.',
    tags: ['Unity', 'C#', 'Game Dev', 'Interactive'],
    section: 'featured',
    featuredRank: 4,
    size: 'wide',
    accent: '#f97316',
    status: 'In Development',
    hideLiveLink: true,
  },
  {
    title: 'Info 9 Rue Conrad',
    description: 'Property and local information project for Info 9 Rue Conrad.',
    tags: ['Web App', 'Information'],
    live: 'https://info9rueconrad.vercel.app/',
    section: 'more',
    size: 'small',
  },
  {
    title: 'Cino Designs',
    description: 'Design-focused web project for Cino Designs.',
    tags: ['Design', 'Web'],
    live: 'https://cinodesigns.ca/',
    section: 'more',
    size: 'small',
  },
  {
    title: 'Stock Analyzer',
    image: '/StockAnalyzer.PNG',
    description:
      'Web app that analyzes a given stock to assess whether it is a sound purchase.',
    tags: ['Finance', 'Web App'],
    github: 'https://github.com/mandocino/Stock-Analyzer',
    live: 'https://mandoh.pythonanywhere.com/analyzeHomepage',
    section: 'more',
    size: 'medium',
  },
  {
    title: 'Stock Strategy Tester',
    image: '/backtest.PNG',
    description:
      'Creates and backtests trading strategies against various parameters using a proprietary library to measure profitability.',
    tags: ['Finance', 'Web App'],
    section: 'more',
    size: 'small',
    private: true,
    privateMessage: 'Not so fast ;)',
  },
  {
    title: 'Stock Sector Scanner',
    image: '/sectorsearch.PNG',
    description: 'Scans for all stocks within a specific market sector.',
    tags: ['Finance', 'Web App'],
    github: 'https://github.com/mandocino/Stock-Sector-Search',
    live: 'https://mandoh.pythonanywhere.com/sectorAnalyzeUSA',
    section: 'more',
    size: 'small',
  },
  {
    title: 'Stock Volume Scanner',
    image: '/volumescanner.PNG',
    description:
      'Scans for stocks with unusual volume compared to their daily average across various exchanges.',
    tags: ['Finance', 'Web App'],
    github: 'https://github.com/mandocino/Stock-Volume-Scanner',
    live: 'https://mandoh.pythonanywhere.com/volumeUSA',
    section: 'more',
    size: 'medium',
  },
  {
    title: 'Crypto API Platform',
    image: '/cryptoapi.PNG',
    description:
      'Displays information about cryptocurrencies alongside related news articles.',
    tags: ['Crypto', 'Web App'],
    github: 'https://github.com/Cinodevv/CryptoDashApi',
    live: 'https://crypto-dash-api.vercel.app/',
    section: 'more',
    size: 'medium',
  },
  {
    title: 'Crypto Holdings Dashboard',
    image: '/cryptodashboard.PNG',
    description:
      'A crypto holdings dashboard for tracking portfolio data and viewing Ethereum-focused market information.',
    tags: ['React', 'Crypto', 'Dashboard', 'Vercel'],
    github: 'https://github.com/Cinodevv/CryptoDashboard',
    live: 'https://crypto-dashboard-qjicjjfp7-cinodevv.vercel.app/overviewEthDashboard',
    section: 'more',
    size: 'medium',
  },
  {
    title: 'Transaction Bot',
    image: '/telegram-buynsell.png',
    description:
      'Scans the blockchain for a contract address and sends a Telegram message detailing each buy or sell.',
    tags: ['Blockchain', 'Automation'],
    github: 'https://github.com/mandocino/Transaction-Bot',
    section: 'more',
    size: 'small',
  },
  {
    title: 'Order Book Aggregator',
    image: '/aggregator.png',
    description:
      'Condenses many crypto exchange order books into a single unified order book and charts it.',
    tags: ['Crypto', 'Data Viz'],
    github: 'https://github.com/mandocino/Order-Book-Aggregator',
    section: 'more',
    size: 'small',
  },
  {
    title: 'Arbitrage Bot',
    image: '/arbitrage.png',
    description:
      'Scans desired crypto exchanges and identifies when an arbitrage trading opportunity exists.',
    tags: ['Crypto', 'Automation'],
    github: 'https://github.com/mandocino/Arbitrage-Bot',
    section: 'more',
    size: 'small',
  },
  {
    title: 'IKU App',
    image: '/iku.png',
    description:
      'Lets users evaluate public transit accessibility around their personal points of interest.',
    tags: ['Mobility', 'Capstone'],
    github: 'https://github.com/mandocino/SOEN490',
    section: 'more',
    size: 'small',
  },
  {
    title: 'Degen',
    description: 'Game project with details coming soon.',
    tags: ['Game Dev', 'Unity'],
    section: 'more',
    size: 'small',
    status: 'Coming Soon',
  },
  {
    title: 'Snow Sim',
    description: 'Simulation project with details coming soon.',
    tags: ['Simulation', 'Game Dev'],
    section: 'more',
    size: 'small',
    status: 'Coming Soon',
  },
  {
    title: '2D Game',
    description: '2D game project with details coming soon.',
    tags: ['Game Dev', '2D'],
    section: 'more',
    size: 'small',
    status: 'Coming Soon',
  },
  {
    title: 'App Game',
    description: 'Mobile app game project with details coming soon.',
    tags: ['Game Dev', 'Mobile'],
    section: 'more',
    size: 'small',
    status: 'Coming Soon',
  },
  {
    title: 'SeasideTowns',
    description: 'Web project with details coming soon.',
    tags: ['Web', 'Project'],
    section: 'more',
    size: 'small',
    status: 'Coming Soon',
  },
  {
    title: 'Non-Profit Organization Website',
    image: '/nksdsite.PNG',
    description:
      'A website built for a non-profit organization to educate the public on a Levy Vote.',
    tags: ['Web Design', 'WordPress'],
    live: 'https://test85908.live-website.com/',
    section: 'more',
    size: 'small',
  },
];

export const FEATURED_PROJECTS = PROJECTS.filter(
  (project) => project.section === 'featured'
).sort((a, b) => a.featuredRank - b.featuredRank);

export const SUPPORTING_PROJECTS = PROJECTS.filter(
  (project) => project.section !== 'featured'
);

export default PROJECTS;
