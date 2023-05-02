import{_ as e,c as a,o as t,R as r}from"./chunks/framework.90d196c2.js";const m=JSON.parse('{"title":"Architecture","description":"A breakdown of the Superscribe platform architecture.","frontmatter":{"description":"A breakdown of the Superscribe platform architecture.","readTime":"2 min read"},"headers":[],"relativePath":"getting-started/architecture.md","lastUpdated":1683042286000}'),o={name:"getting-started/architecture.md"},s=r('<h1 id="architecture" tabindex="-1">Architecture <a class="header-anchor" href="#architecture" aria-label="Permalink to &quot;Architecture&quot;">​</a></h1><blockquote><p>Superscribe is a wrapper for both your database and file asset storage system.</p></blockquote><p>At first glance, it may be tempting to think of Superscribe as an app-centric platform. But that&#39;s not the case. The app is just a GUI powered by the API, which allows developers, business users, and data analysts equal access to data and asset storage, all in one place.</p><p>Here&#39;s how the platform architecture breaks down.</p><p><img src="https://cdn.superscribe.io/docs/v9/getting-started/architecture/architecture-20220512/superscribe-architecture-20220512A.webp" alt="Superscribe Architecture Graphic"></p><h2 id="the-database" tabindex="-1">The Database <a class="header-anchor" href="#the-database" aria-label="Permalink to &quot;The Database&quot;">​</a></h2><p>Superscribe is plug-and-play. Once linked, it doesn&#39;t <em>own</em> your data or file assets, but it does create about 20 new data tables which are required for platform operation. These tables do not intermingle with the rest of your data, so you can remove Superscribe without a trace. You also have the freedom to access the database with raw SQL queries, link up any other service to your database, and access your file assets with CLI commands.</p><h2 id="database-introspection" tabindex="-1">Database Introspection <a class="header-anchor" href="#database-introspection" aria-label="Permalink to &quot;Database Introspection&quot;">​</a></h2><p>At the lowest layer, the platform introspects the database and abstracts away specific SQL details. Regardless of SQL vendor you choose, the platform works seamlessly. Similarly, Superscribe syncs with your configured file storage service, providing control over file assets.</p><h2 id="the-data-engine" tabindex="-1">The Data Engine <a class="header-anchor" href="#the-data-engine" aria-label="Permalink to &quot;The Data Engine&quot;">​</a></h2><p>The next layer contains logic to access, transmit, query, and transform data, including event triggers, data querying operations, and file transformations <em>(like image cropping)</em>. After that, your data and assets get cached for efficient user access.</p><h2 id="access-control" tabindex="-1">Access Control <a class="header-anchor" href="#access-control" aria-label="Permalink to &quot;Access Control&quot;">​</a></h2><p>Superscribe provides secure user access methods. Choose access token format and configure authentication as desired. You can set SSO and allow login through Google, Facebook, etc.</p><h2 id="the-api" tabindex="-1">The API <a class="header-anchor" href="#the-api" aria-label="Permalink to &quot;The API&quot;">​</a></h2><p>Finally, a complete set of REST and GraphQL endpoints are generated dynamically, based on your data model as well as your configured roles and associated access permissions.</p><p>The Superscribe JS-SDK is <a href="https://www.npmjs.com/package/superscribe" target="_blank" rel="noreferrer">available via NPM</a>. You also have access to two Command-Line Interfaces (CLI). One enables server-side actions relating to your on-prem instance, like migrating the database or resetting a user. The other allows you to interact with a Superscribe instance as you would with an SDK.</p><h2 id="the-data-studio" tabindex="-1">The Data Studio <a class="header-anchor" href="#the-data-studio" aria-label="Permalink to &quot;The Data Studio&quot;">​</a></h2><p>The Superscribe Data Studio is a no-code dashboard that brings the whole team together.</p><ul><li>Build your data model and manage data, content, users, and file assets.</li><li>Create roles and permissions for your users, with granular and conditional logic.</li><li>Design flows for task automation and data processing with a low-code GUI.</li></ul><h2 id="open-source" tabindex="-1">Open Source <a class="header-anchor" href="#open-source" aria-label="Permalink to &quot;Open Source&quot;">​</a></h2><p>Superscribe is 100% open-source, modular, and extensible, ensuring you will never hit a hard feature ceiling within the platform. Built entirely in crispy clean Typescript, mostly on Node.js and Vue.js, you have the power to add or modify <em>any feature</em> with your own custom extensions. <a href="https://github.com/superscribe/superscribe" target="_blank" rel="noreferrer">⭐ Star us on GitHub! ⭐</a></p><h2 id="versioning" tabindex="-1">Versioning <a class="header-anchor" href="#versioning" aria-label="Permalink to &quot;Versioning&quot;">​</a></h2><p>Superscribe follows a SemVer-like versioning structure, but it&#39;s important to note that it does not follow SemVer precisely. For complex systems like Superscribe, SemVer doesn&#39;t really scale as any tweak to any part of the codebase could be considered a breaking change for a fraction of use cases. We rely on an 80/20 approach to breaking changes: If the change affects the vast majority of users, it&#39;s a major breaking change. Otherwise, we accept minor breaking changes as part of the minor release cycle.</p><p><code>xx.xx.xx</code> -&gt; <code>major.minor.patch</code></p><ul><li><strong>Major</strong> — A &quot;big deal&quot; release: <em>big breaking changes, big features, big re-designs.</em></li><li><strong>Minor</strong> — A new feature or meaningful improvement to an existing feature: <em>may or may not be breaking.</em></li><li><strong>Patch</strong> — Bugfixes and tweaks that are backwards compatible: <em>but no new features.</em></li></ul>',25),i=[s];function n(c,l,h,d,u,p){return t(),a("div",null,i)}const g=e(o,[["render",n]]);export{m as __pageData,g as default};