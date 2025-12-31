export const SUBSTACK_URL = 'https://startupengineeringnotes.substack.com';

export const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/alexcasalboni/', icon: 'linkedin' },
  { label: 'X / Twitter', href: 'https://twitter.com/alex_casalboni', icon: 'twitter' },
  { label: 'Bluesky', href: 'https://bsky.app/profile/alexcasalboni.bsky.social', icon: 'bluesky' },
  { label: 'GitHub', href: 'https://github.com/alexcasalboni', icon: 'github' },
  { label: 'DEV', href: 'https://dev.to/alexcasalboni', icon: 'dev' },
  { label: 'Substack', href: SUBSTACK_URL, icon: 'substack' },
];

export const highlights = [
  {
    title: 'Developer Advocacy',
    copy: '10+ years of supporting technical communities, building engaging demos, and crafting product messaging for builders worldwide.',
    accent: 'Community',
  },
  {
    title: 'Public Speaking',
    copy: 'Keynotes, technical deep dives, and meetups across Europe and the US with a focus on cloud architectures and developer experience.',
    accent: 'Talks',
  },
  {
    title: 'Content & Storytelling',
    copy: 'Blogs, newsletters, live-streams, and podcasts that make products and complex topics approachable for newcomers and experts.',
    accent: 'Content',
  },
];

export const writing = [
  {
    title: 'Graceful degradation in practice: how FeatureOps builds real resilience',
    url: 'https://www.getunleash.io/blog/graceful-degradation-featureops-resilience',
    source: 'Unleash Blog',
    year: '2025',
    summary: 'FeatureOps makes graceful degradation practical. Learn how feature flags keep systems resilient without slowing development.',
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
    summary: 'Edgee and Fastly team up to replace client-side JavaScript SDKs with WebAssembly at the edge, improving performance, security, and data collection.',
  },
  {
    title: 'Announcing AWS Lambda Function URLs',
    url: 'https://aws.amazon.com/blogs/aws/announcing-aws-lambda-function-urls-built-in-https-endpoints-for-single-function-microservices/',
    source: 'AWS News Blog',
    year: '2022',
    summary: 'Announcing AWS Lambda Function URLs, a new way to create HTTPS endpoints for your Lambda functions without needing to set up API Gateway.',
  },
  {
    title: 'Deep dive: finding the optimal resources allocation for your Lambda functions',
    url: 'https://dev.to/aws/deep-dive-finding-the-optimal-resources-allocation-for-your-lambda-functions-35a6',
    source: 'DEV Community',
    year: '2020',
    summary: 'Practical benchmarks and guidance to tune AWS Lambda memory and cost for production workloads.',
  },
  {
    title: 'Design patterns for high-volume, time-series data in Amazon DynamoDB',
    url: 'https://aws.amazon.com/blogs/database/design-patterns-for-high-volume-time-series-data-in-amazon-dynamodb/',
    source: 'AWS Database Blog',
    year: '2019',
    summary: 'How to design for time-series data in DynamoDB using adaptive capacity, GSIs, and TTLs.',
  },
  
];

export const talks = [
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
    label: 'Subscribe on Substack',
    href: SUBSTACK_URL,
    style: 'solid',
  },
  {
    label: 'Suggest a collaboration',
    href: 'mailto:alex@alexcasalboni.com?subject=Let\'s collaborate',
    style: 'ghost',
  },
];
