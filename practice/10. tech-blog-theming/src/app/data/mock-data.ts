import { Author, BlogPost } from '../shared/models/blog.model';

export const AUTHORS: Author[] = [
    {
        id: 1,
        name: 'Sarah Johnson',
        avatar: '/images/avatars/sarah.webp',
        bio: 'Full-stack developer with a passion for web technologies and clean code. Specializes in Angular and Node.js.'
    },
    {
        id: 2,
        name: 'Mike Chen',
        avatar: '/images/avatars/mike.webp',
        bio: 'Software architect specializing in scalable applications and cloud solutions. AWS certified and microservices enthusiast.'
    },
    {
        id: 3,
        name: 'Emily Rodriguez',
        avatar: '/images/avatars/emily.webp',
        bio: 'Frontend developer and UI/UX specialist. Passionate about creating beautiful and accessible web experiences.'
    },
    {
        id: 4,
        name: 'David Kim',
        avatar: '/images/avatars/david.webp',
        bio: 'DevOps engineer and cloud architect. Experienced in CI/CD, containerization, and infrastructure automation.'
    }
];

export const BLOG_POSTS: BlogPost[] = [
    {
        id: 1,
        title: 'Understanding Angular Signals',
        content: `<h2>Introduction to Angular Signals</h2>
<p>Angular Signals represent a revolutionary approach to handling reactivity in Angular applications. Introduced in version 16 and enhanced in subsequent releases, Signals provide fine-grained reactivity and significantly better performance compared to traditional change detection mechanisms.</p>

<h3>What are Signals?</h3>
<p>At their core, Signals are special objects that:</p>
<ul>
    <li><strong>Hold Values:</strong> They wrap any value, from primitives to complex objects</li>
    <li><strong>Track Dependencies:</strong> Automatically track when and where they're used</li>
    <li><strong>Notify Subscribers:</strong> Efficiently update only the affected parts of your application</li>
</ul>

<h3>Key Benefits of Using Signals</h3>
<p>The introduction of Signals brings several significant advantages to Angular applications:</p>
<ul>
    <li><strong>Improved Performance:</strong> By providing granular updates, Signals eliminate unnecessary re-renders and reduce the overall computational overhead</li>
    <li><strong>Better Developer Experience:</strong> The explicit nature of Signals makes code more predictable and easier to debug</li>
    <li><strong>Enhanced Tooling Support:</strong> Built-in DevTools integration provides better insights into your application's reactive behavior</li>
</ul>

<h2>Implementing Signals in Your Application</h2>
<p>Here's a practical example of how to implement Signals in your Angular application:</p>

<pre><code><span class="keyword">import</span> { <span class="function">signal</span>, <span class="function">computed</span> } <span class="keyword">from</span> <span class="string">'@angular/core'</span>;

<span class="comment">// Create a signal</span>
<span class="keyword">const</span> count = <span class="function">signal</span>(<span class="number">0</span>);

<span class="comment">// Create a computed signal</span>
<span class="keyword">const</span> doubleCount = <span class="function">computed</span>(<span class="punctuation">()</span> <span class="operator">=></span> count<span class="punctuation">()</span> <span class="operator">*</span> <span class="number">2</span>);

<span class="comment">// Update the signal</span>
count.<span class="function">set</span>(<span class="number">5</span>); <span class="comment">// doubleCount automatically updates to 10</span></code></pre>

<h3>Best Practices for Signal Usage</h3>
<p>When working with Signals, consider these important guidelines:</p>
<ol>
    <li><strong>Granular State Management:</strong> Break down your state into smaller, focused signals for better performance</li>
    <li><strong>Computed Values:</strong> Use computed signals for derived state to maintain consistency</li>
    <li><strong>Effect Management:</strong> Leverage effects for handling side effects and external interactions</li>
</ol>

<p>Remember that Signals work best when used alongside other Angular features, creating a harmonious development experience that balances reactivity and performance.</p>`,
        summary: 'Explore the new Angular Signals feature and how it can improve your application\'s performance',
        imageUrl: '/images/posts/angular-signals.webp',
        publishDate: new Date('2024-03-10'),
        author: AUTHORS[0],
        tags: ['Angular', 'Web Development', 'JavaScript'],
        likes: 156,
        readTime: 8,
        comments: 23,
        isFavorite: true
    },
    {
        id: 2,
        title: 'Building Scalable Web Applications',
        content: `<h2>The Foundation of Scalable Applications</h2>
<p>When building web applications that need to scale, several key architectural decisions need to be made early in the development process. These decisions will significantly impact your application's ability to handle growth in both users and data.</p>

<h3>Key Architecture Principles</h3>
<ul>
    <li><strong>Separation of Concerns:</strong> Keep different parts of your application isolated and independent</li>
    <li><strong>Stateless Services:</strong> Design services that don't rely on stored session data</li>
    <li><strong>Caching Strategy:</strong> Implement multiple layers of caching for optimal performance</li>
</ul>

<h2>Implementing a Scalable Architecture</h2>
<p>Here's an example of a scalable service implementation using Node.js and Redis for caching:</p>

<pre><code><span class="keyword">import</span> { <span class="function">createClient</span> } <span class="keyword">from</span> <span class="string">'redis'</span>;
<span class="keyword">import</span> <span class="function">express</span> <span class="keyword">from</span> <span class="string">'express'</span>;

<span class="comment">// Initialize Redis client</span>
<span class="keyword">const</span> redis = <span class="function">createClient</span>();
<span class="keyword">const</span> app = <span class="function">express</span>();

<span class="comment">// Implement caching middleware</span>
<span class="keyword">const</span> cacheMiddleware = <span class="keyword">async</span> (req, res, next) => {
    <span class="keyword">const</span> key = <span class="string">\`cache:\${</span>req.url<span class="string">}\`</span>;
    <span class="keyword">const</span> cached = <span class="keyword">await</span> redis.<span class="function">get</span>(key);
    
    <span class="keyword">if</span> (cached) {
        <span class="keyword">return</span> res.<span class="function">json</span>(<span class="function">JSON.parse</span>(cached));
    }
    next();
};</code></pre>

<h3>Database Optimization</h3>
<p>Proper database design is crucial for scalability. Consider these best practices:</p>
<ol>
    <li><strong>Indexing Strategy:</strong> Carefully plan your indexes based on query patterns</li>
    <li><strong>Data Partitioning:</strong> Implement sharding for large datasets</li>
    <li><strong>Query Optimization:</strong> Regular monitoring and optimization of database queries</li>
</ol>

<p>Remember that scalability is not just about handling more users—it's about maintaining performance and reliability as your application grows.</p>`,
        summary: 'Learn the best practices for building scalable and maintainable web applications',
        imageUrl: '/images/posts/scalable-apps.webp',
        publishDate: new Date('2024-03-08'),
        author: AUTHORS[1],
        tags: ['Architecture', 'Scalability', 'Best Practices'],
        likes: 203,
        readTime: 12,
        comments: 45,
        isFavorite: false
    },
    {
        id: 3,
        title: 'Mastering CSS Grid Layout',
        content: `<h2>Understanding CSS Grid Fundamentals</h2>
<p>CSS Grid has revolutionized how we approach web layouts, providing a powerful two-dimensional system for creating complex designs with minimal code. This guide will help you master CSS Grid and create responsive, maintainable layouts.</p>

<h3>Grid Container Basics</h3>
<p>To start using CSS Grid, you first need to understand the basic container setup:</p>

<pre><code><span class="comment">/* Basic grid container */</span>
.grid-container {
    <span class="property">display</span>: <span class="value">grid</span>;
    <span class="property">grid-template-columns</span>: <span class="value">repeat(3, 1fr)</span>;
    <span class="property">gap</span>: <span class="value">20px</span>;
    <span class="property">padding</span>: <span class="value">2rem</span>;
}

<span class="comment">/* Responsive grid using auto-fit */</span>
.responsive-grid {
    <span class="property">display</span>: <span class="value">grid</span>;
    <span class="property">grid-template-columns</span>: <span class="value">repeat(auto-fit, minmax(250px, 1fr))</span>;
    <span class="property">gap</span>: <span class="value">2rem</span>;
}</code></pre>

<h3>Advanced Grid Techniques</h3>
<ul>
    <li><strong>Grid Areas:</strong> Name and arrange grid sections for cleaner layouts</li>
    <li><strong>Auto-placement:</strong> Let Grid automatically position items</li>
    <li><strong>Alignment:</strong> Control both grid tracks and individual items</li>
</ul>

<h2>Complex Layout Example</h2>
<p>Here's how to create a complex magazine-style layout using Grid:</p>

<pre><code>.magazine-layout {
    <span class="property">display</span>: <span class="value">grid</span>;
    <span class="property">grid-template-areas</span>: 
        <span class="string">"header header  header"</span>
        <span class="string">"main   main    sidebar"</span>
        <span class="string">"footer footer  footer"</span>;
    <span class="property">gap</span>: <span class="value">2rem</span>;
}

<span class="comment">/* Named grid areas */</span>
.header  { <span class="property">grid-area</span>: <span class="value">header</span>; }
.main    { <span class="property">grid-area</span>: <span class="value">main</span>; }
.sidebar { <span class="property">grid-area</span>: <span class="value">sidebar</span>; }</code></pre>

<p>Grid's true power comes from its ability to create both simple and complex layouts using the same consistent syntax.</p>`,
        summary: 'A comprehensive guide to mastering CSS Grid for modern web layouts',
        imageUrl: '/images/posts/css-grid.webp',
        publishDate: new Date('2024-03-05'),
        author: AUTHORS[2],
        tags: ['CSS', 'Web Design', 'Frontend'],
        likes: 178,
        readTime: 10,
        comments: 32,
        isFavorite: true
    },
    {
        id: 4,
        title: 'DevOps Best Practices with Docker',
        content: `<h2>Optimizing Docker for Production</h2>
<p>Docker has become an essential tool in modern software development, enabling consistent environments across different stages of development. This guide covers essential best practices for using Docker in production environments.</p>

<h3>Multi-stage Builds</h3>
<p>One of the most powerful features of Docker is multi-stage builds. Here's an example:</p>

<pre><code><span class="comment"># Build stage</span>
<span class="keyword">FROM</span> node:18 <span class="keyword">AS</span> builder
<span class="keyword">WORKDIR</span> /app
<span class="keyword">COPY</span> package*.json ./
<span class="keyword">RUN</span> npm install
<span class="keyword">COPY</span> . .
<span class="keyword">RUN</span> npm run build

<span class="comment"># Production stage</span>
<span class="keyword">FROM</span> nginx:alpine
<span class="keyword">COPY</span> --from=builder /app/dist /usr/share/nginx/html
<span class="keyword">EXPOSE</span> 80
<span class="keyword">CMD</span> ["nginx", "-g", "daemon off;"]</code></pre>

<h3>Security Best Practices</h3>
<ul>
    <li><strong>Use Specific Tags:</strong> Never use the 'latest' tag in production</li>
    <li><strong>Minimal Base Images:</strong> Use slim or alpine variants when possible</li>
    <li><strong>Non-root User:</strong> Always run containers as non-root users</li>
</ul>

<h2>Container Orchestration</h2>
<p>Here's an example of a Docker Compose file for a typical web application:</p>

<pre><code><span class="keyword">version</span>: <span class="string">'3.8'</span>

<span class="keyword">services</span>:
  <span class="keyword">app</span>:
    <span class="property">build</span>: .
    <span class="property">ports</span>:
      - <span class="string">"3000:3000"</span>
    <span class="property">environment</span>:
      - <span class="string">NODE_ENV=production</span>
    <span class="property">depends_on</span>:
      - <span class="string">db</span>
      - <span class="string">redis</span>

  <span class="keyword">db</span>:
    <span class="property">image</span>: <span class="string">postgres:14-alpine</span>
    <span class="property">volumes</span>:
      - <span class="string">postgres_data:/var/lib/postgresql/data</span>

<span class="keyword">volumes</span>:
  <span class="property">postgres_data</span>: {}</code></pre>

<p>Remember to always follow the principle of least privilege and regularly update your base images for security patches.</p>`,
        summary: 'Essential Docker best practices for modern DevOps workflows',
        imageUrl: '/images/posts/docker-devops.webp',
        publishDate: new Date('2024-03-03'),
        author: AUTHORS[3],
        tags: ['DevOps', 'Docker', 'CI/CD'],
        likes: 145,
        readTime: 15,
        comments: 28,
        isFavorite: false
    },
    {
        id: 5,
        title: 'TypeScript Advanced Types',
        content: `<h2>Mastering TypeScript's Type System</h2>
<p>TypeScript's type system offers powerful features that go well beyond basic type annotations. Understanding advanced types can help you write more type-safe and maintainable code.</p>

<h3>Utility Types</h3>
<p>TypeScript provides several built-in utility types that help manipulate types:</p>

<pre><code><span class="keyword">interface</span> User {
    id: <span class="type">number</span>;
    name: <span class="type">string</span>;
    email: <span class="type">string</span>;
    role: <span class="string">'admin'</span> | <span class="string">'user'</span>;
}

<span class="comment">// Make all properties optional</span>
<span class="keyword">type</span> PartialUser = <span class="type">Partial</span><User>;

<span class="comment">// Make all properties required</span>
<span class="keyword">type</span> RequiredUser = <span class="type">Required</span><User>;

<span class="comment">// Pick specific properties</span>
<span class="keyword">type</span> UserCredentials = <span class="type">Pick</span><User, <span class="string">'email'</span> | <span class="string">'role'</span>>;</code></pre>

<h3>Conditional Types</h3>
<p>Create types that depend on other types using conditional logic:</p>

<pre><code><span class="keyword">type</span> IsArray<T> = T <span class="keyword">extends</span> any[] ? <span class="type">true</span> : <span class="type">false</span>;

<span class="comment">// Examples</span>
<span class="keyword">type</span> NumberArrayCheck = IsArray<number[]>; <span class="comment">// true</span>
<span class="keyword">type</span> StringCheck = IsArray<string>;      <span class="comment">// false</span>

<span class="comment">// More complex example</span>
<span class="keyword">type</span> ArrayElementType<T> = T <span class="keyword">extends</span> (infer U)[] 
    ? U 
    : <span class="type">never</span>;</code></pre>

<h3>Mapped Types</h3>
<p>Transform existing types into new ones:</p>

<pre><code><span class="comment">// Make all properties nullable</span>
<span class="keyword">type</span> Nullable<T> = {
    [P <span class="keyword">in</span> <span class="keyword">keyof</span> T]: T[P] | <span class="type">null</span>;
};

<span class="comment">// Add validation flags</span>
<span class="keyword">type</span> Validatable<T> = {
    [P <span class="keyword">in</span> <span class="keyword">keyof</span> T]: {
        value: T[P];
        isValid: <span class="type">boolean</span>;
        errorMessage?: <span class="type">string</span>;
    };
};</code></pre>

<p>Understanding these advanced type features allows you to create more robust and maintainable TypeScript applications.</p>`,
        summary: 'Deep dive into TypeScript\'s advanced type system and its practical applications',
        imageUrl: '/images/posts/typescript-types.webp',
        publishDate: new Date('2024-02-28'),
        author: AUTHORS[0],
        tags: ['TypeScript', 'JavaScript', 'Programming'],
        likes: 189,
        readTime: 12,
        comments: 37,
        isFavorite: true
    },
    {
        id: 6,
        title: 'Microservices Architecture Patterns',
        content: `<h2>Building Resilient Microservices</h2>
<p>Microservices architecture has become the standard for building large-scale applications. This comprehensive guide explores essential patterns and practices for implementing robust microservices.</p>

<h3>Service Discovery Pattern</h3>
<p>Here's an example of implementing service discovery using Netflix Eureka:</p>

<pre><code><span class="keyword">import</span> { <span class="function">eureka</span> } <span class="keyword">from</span> <span class="string">'eureka-js-client'</span>;

<span class="keyword">const</span> client = <span class="keyword">new</span> <span class="function">eureka</span>({
    <span class="property">instance</span>: {
        <span class="property">app</span>: <span class="string">'user-service'</span>,
        <span class="property">hostName</span>: <span class="string">'localhost'</span>,
        <span class="property">ipAddr</span>: <span class="string">'127.0.0.1'</span>,
        <span class="property">port</span>: <span class="number">8080</span>,
        <span class="property">vipAddress</span>: <span class="string">'user-service'</span>,
        <span class="property">statusPageUrl</span>: <span class="string">'http://localhost:8080/info'</span>
    },
    <span class="property">eureka</span>: {
        <span class="property">host</span>: <span class="string">'eureka-server'</span>,
        <span class="property">port</span>: <span class="number">8761</span>
    }
});</code></pre>

<h3>Circuit Breaker Pattern</h3>
<p>Implement fault tolerance using the Circuit Breaker pattern:</p>

<pre><code><span class="keyword">import</span> { <span class="function">CircuitBreaker</span> } <span class="keyword">from</span> <span class="string">'opossum'</span>;

<span class="keyword">const</span> breaker = <span class="keyword">new</span> <span class="function">CircuitBreaker</span>(asyncFunctionThatMayFail, {
    <span class="property">timeout</span>: <span class="number">3000</span>,              <span class="comment">// Time in ms</span>
    <span class="property">errorThresholdPercentage</span>: <span class="number">50</span>, <span class="comment">// When to open</span>
    <span class="property">resetTimeout</span>: <span class="number">30000</span>          <span class="comment">// Time to half-open</span>
});</code></pre>

<h2>Event-Driven Architecture</h2>
<p>Implement event-driven communication between services:</p>

<pre><code><span class="keyword">import</span> { <span class="function">kafka</span> } <span class="keyword">from</span> <span class="string">'kafkajs'</span>;

<span class="keyword">const</span> producer = kafka.<span class="function">producer</span>();

<span class="keyword">async function</span> <span class="function">publishEvent</span>(event) {
    <span class="keyword">await</span> producer.<span class="function">connect</span>();
    <span class="keyword">await</span> producer.<span class="function">send</span>({
        <span class="property">topic</span>: <span class="string">'user-events'</span>,
        <span class="property">messages</span>: [{
            <span class="property">key</span>: event.id,
            <span class="property">value</span>: <span class="function">JSON.stringify</span>(event)
        }]
    });
}</code></pre>

<p>Remember that successful microservices architecture requires careful consideration of data consistency, service boundaries, and failure handling.</p>`,
        summary: 'Essential patterns and practices for building microservices architecture',
        imageUrl: '/images/posts/microservices.webp',
        publishDate: new Date('2024-02-25'),
        author: AUTHORS[1],
        tags: ['Microservices', 'Architecture', 'Backend'],
        likes: 167,
        readTime: 14,
        comments: 41,
        isFavorite: false
    },
    {
        id: 7,
        title: 'Web Accessibility Guidelines',
        content: `<h2>Building Inclusive Web Applications</h2>
<p>Creating accessible web applications is not just a good practice—it's essential for ensuring that your content can be accessed by all users, regardless of their abilities.</p>

<h3>ARIA Roles and Properties</h3>
<p>Here's an example of proper ARIA implementation:</p>

<pre><code><span class="comment"><!-- Accessible navigation menu --></span>
<span class="keyword">&lt;nav</span> <span class="property">role</span>=<span class="string">"navigation"</span> <span class="property">aria-label</span>=<span class="string">"Main menu"</span><span class="keyword">&gt;</span>
    <span class="keyword">&lt;button</span> 
        <span class="property">aria-expanded</span>=<span class="string">"false"</span>
        <span class="property">aria-controls</span>=<span class="string">"menu-list"</span><span class="keyword">&gt;</span>
        Menu
    <span class="keyword">&lt;/button&gt;</span>
    
    <span class="keyword">&lt;ul</span> <span class="property">id</span>=<span class="string">"menu-list"</span> <span class="property">role</span>=<span class="string">"menu"</span><span class="keyword">&gt;</span>
        <span class="keyword">&lt;li</span> <span class="property">role</span>=<span class="string">"menuitem"</span><span class="keyword">&gt;</span>
            <span class="keyword">&lt;a</span> <span class="property">href</span>=<span class="string">"#"</span><span class="keyword">&gt;</span>Home<span class="keyword">&lt;/a&gt;</span>
        <span class="keyword">&lt;/li&gt;</span>
    <span class="keyword">&lt;/ul&gt;</span>
<span class="keyword">&lt;/nav&gt;</span></code></pre>

<h3>Keyboard Navigation</h3>
<p>Implement proper keyboard navigation support:</p>

<pre><code><span class="keyword">const</span> <span class="function">handleKeyPress</span> = (event) => {
    <span class="keyword">if</span> (event.key === <span class="string">'Enter'</span> || event.key === <span class="string">' '</span>) {
        event.<span class="function">preventDefault</span>();
        <span class="comment">// Activate the control</span>
        <span class="function">activateControl</span>();
    }
    
    <span class="keyword">if</span> (event.key === <span class="string">'Escape'</span>) {
        <span class="comment">// Close modal or menu</span>
        <span class="function">closeControl</span>();
    }
};</code></pre>

<h2>Color Contrast and Visual Design</h2>
<p>Ensure proper color contrast ratios:</p>

<pre><code><span class="comment">/* Good contrast ratio */</span>
.text-content {
    <span class="property">color</span>: <span class="value">#333333</span>;
    <span class="property">background-color</span>: <span class="value">#ffffff</span>;
}

<span class="comment">/* Focus indicators */</span>
.interactive-element:focus {
    <span class="property">outline</span>: <span class="value">3px solid #4A90E2</span>;
    <span class="property">outline-offset</span>: <span class="value">2px</span>;
}</code></pre>

<h3>Key Accessibility Checklist</h3>
<ul>
    <li><strong>Semantic HTML:</strong> Use appropriate HTML elements for their intended purpose</li>
    <li><strong>ARIA Labels:</strong> Provide clear labels for interactive elements</li>
    <li><strong>Keyboard Navigation:</strong> Ensure all functionality is available via keyboard</li>
    <li><strong>Focus Management:</strong> Maintain a logical tab order and visible focus indicators</li>
    <li><strong>Alternative Text:</strong> Provide descriptive alt text for images</li>
</ul>

<p>Remember that accessibility is not a feature—it's a fundamental aspect of web development that benefits all users.</p>`,
        summary: 'A comprehensive guide to implementing web accessibility guidelines',
        imageUrl: '/images/posts/accessibility.webp',
        publishDate: new Date('2024-02-22'),
        author: AUTHORS[2],
        tags: ['Accessibility', 'Web Development', 'UX'],
        likes: 134,
        readTime: 11,
        comments: 25,
        isFavorite: true
    },
    {
        id: 8,
        title: 'Cloud Native Application Development',
        content: `<h2>Embracing Cloud Native Architecture</h2>
<p>Cloud native development represents a fundamental shift in how we build and deploy applications. This guide explores key concepts and best practices for developing truly cloud native applications.</p>

<h3>Kubernetes Configuration</h3>
<p>Here's an example of a Kubernetes deployment configuration:</p>

<pre><code><span class="keyword">apiVersion</span>: apps/v1
<span class="keyword">kind</span>: Deployment
<span class="property">metadata</span>:
  <span class="property">name</span>: <span class="string">web-application</span>
<span class="property">spec</span>:
  <span class="property">replicas</span>: <span class="number">3</span>
  <span class="property">selector</span>:
    <span class="property">matchLabels</span>:
      <span class="property">app</span>: <span class="string">web</span>
  <span class="property">template</span>:
    <span class="property">metadata</span>:
      <span class="property">labels</span>:
        <span class="property">app</span>: <span class="string">web</span>
    <span class="property">spec</span>:
      <span class="property">containers</span>:
      - <span class="property">name</span>: <span class="string">web</span>
        <span class="property">image</span>: <span class="string">web-app:1.0.0</span>
        <span class="property">resources</span>:
          <span class="property">limits</span>:
            <span class="property">memory</span>: <span class="string">"512Mi"</span>
            <span class="property">cpu</span>: <span class="string">"500m"</span></code></pre>

<h3>Health Checks and Monitoring</h3>
<p>Implement comprehensive health checks:</p>

<pre><code><span class="keyword">import</span> { <span class="function">prometheus</span>, <span class="function">register</span> } <span class="keyword">from</span> <span class="string">'prom-client'</span>;

<span class="comment">// Define metrics</span>
<span class="keyword">const</span> httpRequestDuration = <span class="keyword">new</span> prometheus.<span class="function">Histogram</span>({
    <span class="property">name</span>: <span class="string">'http_request_duration_seconds'</span>,
    <span class="property">help</span>: <span class="string">'Duration of HTTP requests in seconds'</span>,
    <span class="property">labelNames</span>: [<span class="string">'method'</span>, <span class="string">'route'</span>, <span class="string">'status_code'</span>]
});

<span class="comment">// Register metric</span>
register.<span class="function">registerMetric</span>(httpRequestDuration);</code></pre>

<h2>Serverless Architecture</h2>
<p>Example of an AWS Lambda function:</p>

<pre><code><span class="keyword">exports</span>.<span class="function">handler</span> = <span class="keyword">async</span> (event) => {
    <span class="keyword">try</span> {
        <span class="keyword">const</span> records = event.Records;
        
        <span class="keyword">for</span> (<span class="keyword">const</span> record <span class="keyword">of</span> records) {
            <span class="keyword">await</span> <span class="function">processRecord</span>(record);
        }
        
        <span class="keyword">return</span> {
            <span class="property">statusCode</span>: <span class="number">200</span>,
            <span class="property">body</span>: <span class="function">JSON.stringify</span>({
                <span class="property">message</span>: <span class="string">'Processing complete'</span>
            })
        };
    } <span class="keyword">catch</span> (error) {
        <span class="keyword">return</span> {
            <span class="property">statusCode</span>: <span class="number">500</span>,
            <span class="property">body</span>: <span class="function">JSON.stringify</span>({
                <span class="property">error</span>: error.message
            })
        };
    }
};</code></pre>

<p>Cloud native development requires a different mindset, focusing on scalability, resilience, and automation from the ground up.</p>`,
        summary: 'Best practices for developing cloud native applications',
        imageUrl: '/images/posts/cloud-native.webp',
        publishDate: new Date('2024-02-20'),
        author: AUTHORS[3],
        tags: ['Cloud', 'DevOps', 'Architecture'],
        likes: 198,
        readTime: 13,
        comments: 44,
        isFavorite: false
    },
    {
        id: 9,
        title: 'State Management in Angular',
        content: `<h2>Modern State Management in Angular</h2>
<p>Effective state management is crucial for building complex Angular applications. This comprehensive guide explores different approaches and helps you choose the right solution for your needs.</p>

<h3>Using Services and Signals</h3>
<p>Angular's new Signals API provides a powerful way to manage state:</p>

<pre><code><span class="keyword">import</span> { <span class="function">signal</span>, <span class="function">computed</span>, <span class="function">effect</span> } <span class="keyword">from</span> <span class="string">'@angular/core'</span>;

<span class="keyword">@Injectable</span>({
    <span class="property">providedIn</span>: <span class="string">'root'</span>
})
<span class="keyword">export class</span> <span class="class">TodoStore</span> {
    <span class="keyword">private</span> todos = <span class="function">signal</span><Todo[]>([]);
    <span class="keyword">private</span> filter = <span class="function">signal</span><string>(<span class="string">'all'</span>);

    <span class="keyword">public</span> filteredTodos = <span class="function">computed</span>(() => {
        <span class="keyword">const</span> currentFilter = <span class="keyword">this</span>.filter();
        <span class="keyword">const</span> allTodos = <span class="keyword">this</span>.todos();

        <span class="keyword">switch</span> (currentFilter) {
            <span class="keyword">case</span> <span class="string">'active'</span>:
                <span class="keyword">return</span> allTodos.<span class="function">filter</span>(todo => !todo.completed);
            <span class="keyword">case</span> <span class="string">'completed'</span>:
                <span class="keyword">return</span> allTodos.<span class="function">filter</span>(todo => todo.completed);
            <span class="keyword">default</span>:
                <span class="keyword">return</span> allTodos;
        }
    });
}</code></pre>

<h3>NgRx Implementation</h3>
<p>For larger applications, NgRx provides a robust state management solution:</p>

<pre><code><span class="comment">// Actions</span>
<span class="keyword">export const</span> addTodo = <span class="function">createAction</span>(
    <span class="string">'[Todo] Add Todo'</span>,
    <span class="function">props</span><<{ text: <span class="type">string</span> }>>()
);

<span class="comment">// Reducer</span>
<span class="keyword">export const</span> todoReducer = <span class="function">createReducer</span>(
    initialState,
    <span class="function">on</span>(addTodo, (state, { text }) => ({
        ...state,
        todos: [...state.todos, {
            id: <span class="function">generateId</span>(),
            text,
            completed: <span class="keyword">false</span>
        }]
    }))
);

<span class="comment">// Selectors</span>
<span class="keyword">export const</span> selectTodos = (state: AppState) => state.todos;
<span class="keyword">export const</span> selectActiveTodos = <span class="function">createSelector</span>(
    selectTodos,
    todos => todos.<span class="function">filter</span>(todo => !todo.completed)
);</code></pre>

<h2>Component State vs. Application State</h2>
<p>Understanding when to use different state management approaches:</p>

<ul>
    <li><strong>Component State:</strong> Use for local UI state that doesn't affect other components</li>
    <li><strong>Service State:</strong> Use for shared state between a few related components</li>
    <li><strong>NgRx:</strong> Use for complex state that affects many parts of the application</li>
</ul>

<p>Remember that the key to effective state management is choosing the right tool for your specific needs—don't over-engineer your solution.</p>`,
        summary: 'Comparing different state management approaches in Angular applications',
        imageUrl: '/images/posts/state-management.webp',
        publishDate: new Date('2024-02-18'),
        author: AUTHORS[0],
        tags: ['Angular', 'State Management', 'Frontend'],
        likes: 176,
        readTime: 10,
        comments: 38,
        isFavorite: true
    },
    {
        id: 10,
        title: 'API Design Principles',
        content: `<h2>Building Better APIs</h2>
<p>Good API design is fundamental to building successful applications. This comprehensive guide covers RESTful API design principles, versioning strategies, and documentation best practices.</p>

<h3>RESTful Resource Design</h3>
<p>Example of a well-structured API endpoint:</p>

<pre><code><span class="comment">// User resource endpoints</span>
<span class="keyword">const</span> router = <span class="function">express</span>.<span class="function">Router</span>();

<span class="comment">// List users with pagination</span>
router.<span class="function">get</span>(<span class="string">'/users'</span>, <span class="keyword">async</span> (req, res) => {
    <span class="keyword">const</span> { page = <span class="number">1</span>, limit = <span class="number">10</span> } = req.query;
    
    <span class="keyword">try</span> {
        <span class="keyword">const</span> users = <span class="keyword">await</span> User.<span class="function">find</span>()
            .<span class="function">skip</span>((page - <span class="number">1</span>) * limit)
            .<span class="function">limit</span>(limit)
            .<span class="function">select</span>(<span class="string">'-password'</span>);
            
        res.<span class="function">json</span>({
            data: users,
            page: <span class="function">Number</span>(page),
            totalPages: <span class="function">Math.ceil</span>(totalCount / limit)
        });
    } <span class="keyword">catch</span> (error) {
        res.<span class="property">status</span>(<span class="number">500</span>).<span class="function">json</span>({ 
            error: <span class="string">'Internal server error'</span> 
        });
    }
});</code></pre>

<h3>API Versioning</h3>
<p>Implement proper API versioning:</p>

<pre><code><span class="comment">// Version 1 routes</span>
app.<span class="function">use</span>(<span class="string">'/api/v1'</span>, v1Router);

<span class="comment">// Version 2 routes with breaking changes</span>
app.<span class="function">use</span>(<span class="string">'/api/v2'</span>, v2Router);

<span class="comment">// API middleware for version handling</span>
<span class="keyword">function</span> <span class="function">versionMiddleware</span>(req, res, next) {
    <span class="keyword">const</span> version = req.headers[<span class="string">'accept-version'</span>] || <span class="string">'1.0'</span>;
    req.apiVersion = version;
    next();
}</code></pre>

<h2>Error Handling</h2>
<p>Consistent error response format:</p>

<pre><code><span class="keyword">class</span> <span class="class">APIError</span> <span class="keyword">extends</span> <span class="class">Error</span> {
    <span class="function">constructor</span>(
        message: <span class="type">string</span>,
        <span class="keyword">public</span> statusCode: <span class="type">number</span> = <span class="number">500</span>,
        <span class="keyword">public</span> code: <span class="type">string</span> = <span class="string">'INTERNAL_ERROR'</span>
    ) {
        <span class="keyword">super</span>(message);
    }
}

<span class="comment">// Error handling middleware</span>
app.<span class="function">use</span>((error, req, res, next) => {
    res.<span class="property">status</span>(error.statusCode || <span class="number">500</span>).<span class="function">json</span>({
        error: {
            code: error.code,
            message: error.message,
            timestamp: <span class="keyword">new</span> <span class="function">Date</span>().<span class="function">toISOString</span>()
        }
    });
});</code></pre>

<h3>API Documentation</h3>
<p>Use OpenAPI (Swagger) for clear documentation:</p>

<pre><code><span class="keyword">const</span> swaggerSpec = {
    openapi: <span class="string">'3.0.0'</span>,
    info: {
        title: <span class="string">'My API'</span>,
        version: <span class="string">'1.0.0'</span>,
        description: <span class="string">'API documentation'</span>
    },
    paths: {
        <span class="string">'/users'</span>: {
            get: {
                summary: <span class="string">'List users'</span>,
                parameters: [{
                    name: <span class="string">'page'</span>,
                    in: <span class="string">'query'</span>,
                    schema: { type: <span class="string">'integer'</span> }
                }]
            }
        }
    }
};</code></pre>

<p>Remember that a well-designed API should be intuitive, consistent, and well-documented, making it easy for developers to integrate and use effectively.</p>`,
        summary: 'Essential principles for designing robust and scalable APIs',
        imageUrl: '/images/posts/api-design.webp',
        publishDate: new Date('2024-02-15'),
        author: AUTHORS[1],
        tags: ['API', 'Backend', 'Web Development'],
        likes: 165,
        readTime: 9,
        comments: 31,
        isFavorite: false
    }
]; 