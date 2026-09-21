export const LINKEDIN_URL = 'https://www.linkedin.com/in/alexcasalboni/';

export const socialLinks = [
  { label: 'LinkedIn', href: LINKEDIN_URL, icon: 'linkedin' },
  { label: 'X / Twitter', href: 'https://twitter.com/alex_casalboni', icon: 'twitter' },
  { label: 'Bluesky', href: 'https://bsky.app/profile/alexcasalboni.bsky.social', icon: 'bluesky' },
  { label: 'GitHub', href: 'https://github.com/alexcasalboni', icon: 'github' },
  { label: 'DEV', href: 'https://dev.to/alexcasalboni', icon: 'dev' },
];

export const highlights = [
  {
    title: 'Developer Advocacy',
    copy: 'Ten years working with developer communities: demos, workshops, documentation, and product messaging.',
    accent: 'Community',
  },
  {
    title: 'Public Speaking',
    copy: 'Keynotes, deep dives, and meetups across EMEA and the US, focused on cloud architecture and DevEx.',
    accent: 'Talks',
  },
  {
    title: 'Content & Storytelling',
    copy: 'Blog posts, live streams, and podcasts that make complex systems easier to reason about.',
    accent: 'Content',
  },
];

export const writing = [
  {
    title: 'How to host Unleash on AWS: six ways to run self-hosted feature flags',
    url: 'https://www.getunleash.io/blog/self-host-unleash-aws',
    source: 'Unleash Blog',
    year: '2026',
    summary: '6 ways to self-host Unleash on AWS, from Lightsail to EKS at scale. Open source, your infrastructure, your data.',
  },
  {
    title: 'The AI Kill Switch you actually need',
    url: 'https://www.getunleash.io/blog/ai-kill-switch',
    source: 'Unleash Blog',
    year: '2026',
    summary: 'An OpenAI model went rogue. A federal AI kill switch bill followed. Here\'s the runtime control you can actually build.',
  },
  {
    title: 'Automating feature flag cleanup with Unleash, GitHub, and Copilot',
    url: 'https://www.getunleash.io/blog/automating-feature-flag-cleanup-github-copilot',
    source: 'Unleash Blog',
    year: '2026',
    summary: 'Automate feature flag cleanup with Unleash and GitHub Copilot, using webhooks and an MCP server.',
  },
  {
    title: 'From AI Code to Production: The Case for FeatureOps',
    url: 'https://devops.com/from-ai-code-to-production-the-case-for-featureops/',
    source: 'DevOps.com',
    year: '2026',
    summary: 'Learn about FeatureOps and the runtime controls you need to close the understanding gap and prevent outages.',
  },
  {
    title: 'AI Governance starts at runtime',
    url: 'https://www.getunleash.io/blog/ai-governance-starts-at-runtime',
    source: 'Unleash Blog',
    year: '2026',
    summary: 'A new report finds 60% of organizations will deploy agentic AI in 2026, but only 27% feel confident securing it. Runtime controls close the gap.',
  },
  {
    title: 'Graceful degradation in practice: how FeatureOps builds real resilience',
    url: 'https://www.getunleash.io/blog/graceful-degradation-featureops-resilience',
    source: 'Unleash Blog',
    year: '2025',
    summary: 'FeatureOps makes graceful degradation practical. Learn how feature flags keep systems resilient without slowing devs.',
  },
  {
    title: 'Accelerate Development with the Unleash MCP server',
    url: 'https://www.getunleash.io/blog/accelerate-development-mcp-server',
    source: 'Unleash Blog',
    year: '2025',
    summary: 'Unleash MCP server brings feature flag automation and best practices to your AI development.',
  },
  {
    title: 'Edge vs Cloud Computing: A Guide for Modern Developers',
    url: 'https://www.datacamp.com/blog/edge-vs-cloud-computing',
    source: 'Datacamp',
    year: '2025',
    summary: 'Explore the shift from cloud to edge computing and discover how this evolution redefines the web.',
  },
  {
    title: "5 things you didn't know about WebAssembly",
    url: 'https://www.edgee.cloud/blog/posts/web-assembly',
    source: 'Edgee Blog',
    year: '2025',
    summary: 'Learn how WebAssembly is transforming cloud, edge, and browser computing (with code examples).',
  },
  {
    title: "Implementing scalable metered billing with Stripe: How Edgee handles billions of events",
    url: 'https://stripe.dev/blog/implementing-scalable-metered-billing-with-stripe-how-edgee-handles-billions-of-events',
    source: 'Stripe Dot Dev',
    year: '2025',
    summary: 'Discover how Edgee built a usage-based billing system processing billions of requests across 100+ edge locations.',
  },
  {
    title: "Announcing the Edgee Component Registry for WebAssembly at the edge",
    url: 'https://www.edgee.cloud/blog/posts/announcing-component-registry',
    source: 'Edgee Blog',
    year: '2025',
    summary: 'Announcing a new way to create, publish, and share WebAssembly components at the edge.',
  },
  {
    title: 'Replacing Client-side JavaScript SDKs with WebAssembly Components at the Edge',
    url: 'https://www.fastly.com/blog/replacing-client-side-javascript-sdks-webassembly-components-edge',
    source: 'Fastly Blog',
    year: '2025',
    summary: 'Edgee and Fastly team up to replace client-side JavaScript SDKs with WebAssembly at the edge.',
  },
  {
    title: 'Announcing AWS Lambda Function URLs',
    url: 'https://aws.amazon.com/blogs/aws/announcing-aws-lambda-function-urls-built-in-https-endpoints-for-single-function-microservices/',
    source: 'AWS News Blog',
    year: '2022',
    summary: 'Announcing AWS Lambda Function URLs, a new way to create HTTPS endpoints for your Lambda functions.',
  },
  {
    title: 'Deep dive: finding the optimal resources allocation for your Lambda functions',
    url: 'https://dev.to/aws/deep-dive-finding-the-optimal-resources-allocation-for-your-lambda-functions-35a6',
    source: 'DEV Community',
    year: '2020',
    summary: 'Practical benchmarks and guidance to tune AWS Lambda memory and cost for production workloads.',
  },
  {
    title: 'How to live-stream meetups on Twitch without any special equipment',
    url: 'https://dev.to/aws/how-to-live-stream-meetups-on-twitch-without-any-special-equipment-56cb',
    source: 'DEV Community',
    year: '2020',
    summary: 'A step-by-step guide to live-streaming events from home during the early COVID-19 lockdowns.',
  },
  {
    title: 'Design patterns for high-volume, time-series data in Amazon DynamoDB',
    url: 'https://aws.amazon.com/blogs/database/design-patterns-for-high-volume-time-series-data-in-amazon-dynamodb/',
    source: 'AWS Database Blog',
    year: '2019',
    summary: 'How to design for time-series data in DynamoDB using adaptive capacity, GSIs, and TTLs.',
  },
  {
    title: 'Machine Learning, Recommendation Systems, and Data Analysis at Cloud Academy',
    url: 'https://aws.amazon.com/blogs/aws/machine-learning-recommendation-systems-and-data-analysis-at-cloud-academy/',
    source: 'AWS News Blog',
    year: '2016',
    summary: 'How Cloud Academy mixes technology and content, using recommendation systems running on AWS.',
  },
];

export const talks = [
  {
    title: 'Feature Flags vs Canary Deployments',
    event: 'DevOps Paradox Podcast',
    year: '2026',
    videoId: 'sL4-NJywAgA',
    theme: 'DevOps & Feature Flags',
  },
  {
    title: 'FeatureOps: Designing for Failure and Speed in Agentic AI Workflows',
    event: 'Python Italy',
    year: '2026',
    videoId: 'y04Qf1vLlLo',
    theme: 'FeatureOps & AI',
  },
  {
    title: 'From Cloud to Edge computing - Unleashing the power of WebAssembly at the edge',
    event: 'Wasm.io',
    year: '2025',
    videoId: 'WEWMVFQjHcw',
    theme: 'WebAssembly & Edge Computing',
  },
  {
    title: 'Interview @ Stripe: The challenges (and the solution) to collecting web analytics data',
    event: 'Stripe Developers',
    year: '2025',
    videoId: 'AaX057035Q0',
    theme: 'Edgee & Stripe',
  },
  {
    title: 'From Cloud to Edge computing - WebAssembly at the edge',
    event: 'Conf42 Golang',
    year: '2025',
    videoId: 'tp61nlI8DDw',
    theme: 'Cloud & Edge Computing',
  },
  {
    title: 'From Polimi to AWS: Tech Talk with Alex Casalboni',
    event: 'Polimi Data Scientists association',
    year: '2021',
    videoId: 'hmx1EG6vU2c',
    theme: 'Getting started with AWS',
  },
  {
    title: 'Optimize your Lambda functions',
    event: 'FooBar Serverless',
    year: '2020',
    videoId: 'tyFYq35RCb0',
    theme: 'Serverless Architectures',
  },
  {
    title: 'Configuration management and service discovery in a serverless world',
    event: 'DevOps Fest Kyiv',
    year: '2019',
    videoId: '8fJlO7Eblms',
    theme: 'Microservices & cloud',
  },
  {
    title: 'How to build a global serverless service',
    event: 'AWS Dev Day Kyiv',
    year: '2019',
    videoId: 'Q19B-NTkMfk',
    theme: 'Resilience & Scalability',
  },
  {
    title: 'Advanced Serverless Architectural Patterns on AWS',
    event: 'ITkonekt',
    year: '2019',
    videoId: 'zELyqCZhwFI',
    theme: 'Serverless Architectures',
  },
  {
    title: 'Porting your Python web app to serverless in 30 minutes',
    event: 'Pycon Italy',
    year: '2019',
    videoId: 'qk4rkxA7NaU',
    theme: 'Web & Serverless',
  },
];

export const callsToAction = [
  {
    label: 'Connect on LinkedIn',
    href: LINKEDIN_URL,
    style: 'solid',
  },
  {
    label: 'Suggest a collaboration',
    href: 'mailto:alex@alexcasalboni.com?subject=Let\'s collaborate',
    style: 'ghost',
  },
];
