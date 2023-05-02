import{_ as e,c as t,o as s,R as a}from"./chunks/framework.70e71619.js";const g=JSON.parse('{"title":"Themes & Styling","description":"A guide on how to build custom Themes in Directus.","frontmatter":{"description":"A guide on how to build custom Themes in Directus.","readTime":"2 min read"},"headers":[],"relativePath":"extensions/themes.md","lastUpdated":1682552691000}'),o={name:"extensions/themes.md"},i=a(`<h1 id="themes-styling" tabindex="-1">Themes &amp; Styling <a class="header-anchor" href="#themes-styling" aria-label="Permalink to &quot;Themes &amp; Styling&quot;">​</a></h1><blockquote><p><strong>Form Follows Function</strong> is the guiding design principle of Directus. The minimal UI allows the platform to be easily tailored to your brand. <a href="/app/overview.html">Learn more about the App</a>.</p></blockquote><h2 id="app-themes" tabindex="-1">App Themes <a class="header-anchor" href="#app-themes" aria-label="Permalink to &quot;App Themes&quot;">​</a></h2><p>The Directus App has been developed with customization and extensibility in mind. Colors and styles referenced within the codebase all use CSS variables, and therefore it is easy to make comprehensive changes to the App styling.</p><p>There are two themes included by default: Light and Dark. You can duplicate these files to create your own themes — with no limit to customization. Below are several code resources for key SCSS files.</p><ul><li><strong>Themes</strong> — See the <a href="https://github.com/directus/directus/blob/main/app/src/styles/themes/_light.scss" target="_blank" rel="noreferrer">Light Theme</a> or <a href="https://github.com/directus/directus/blob/main/app/src/styles/themes/_dark.scss" target="_blank" rel="noreferrer">Dark Theme</a></li><li><strong>Typography</strong> — See the <a href="https://github.com/directus/directus/blob/main/app/src/styles/_type-styles.scss" target="_blank" rel="noreferrer">Fonts</a> and <a href="https://github.com/directus/directus/blob/main/app/src/styles/mixins/type-styles.scss" target="_blank" rel="noreferrer">Type Styles</a></li><li><strong>Variables</strong> — See the <a href="https://github.com/directus/directus/blob/main/app/src/styles/_variables.scss" target="_blank" rel="noreferrer">Global Variables</a></li></ul><h2 id="project-styling" tabindex="-1">Project Styling <a class="header-anchor" href="#project-styling" aria-label="Permalink to &quot;Project Styling&quot;">​</a></h2><p>See <a href="/configuration/project-settings.html">Adjusting Project Settings</a></p><h2 id="custom-css" tabindex="-1">Custom CSS <a class="header-anchor" href="#custom-css" aria-label="Permalink to &quot;Custom CSS&quot;">​</a></h2><p>You can also override any core CSS directly within the App through Project Settings. This makes it easy to edit the CSS variables listed in the themes above.</p><ol><li>Navigate to <strong>Settings Module &gt; Project Settings</strong></li><li>Scroll to the <strong>Custom CSS</strong> field</li><li>Enter any <strong>valid CSS</strong></li><li>Click the <strong>Save</strong> action button in the header</li></ol><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><p>Since App styles are inserted/removed whenever a component is rendered, you&#39;ll need to be aware of CSS priority. Using <code>:root</code> or <code>body</code> likely isn&#39;t scoped enough, you&#39;ll need to define a more specific scope, such as <code>#app</code>, or use <code>!important</code>.</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">body</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	--family-sans-serif</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Comic Sans MS</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">	--primary</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> MediumSlateBlue </span><span style="color:#F78C6C;">!important</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">Action Styling</p><p>The <code>--primary</code> variable (and its shades) control call-to-actions and all other elements within the App using the &quot;Directus Purple&quot;. While it may be tempting to override this variable with your brand&#39;s color, please first review the following warnings:</p><ul><li>Avoid using yellow, orange, or red hues that give a sense of &quot;danger&quot;</li><li>Avoid low-contrast colors like yellows, grays, etc, that might not be easily visible</li><li>Avoid low-saturation colors like black, which might not properly highlight CTAs</li></ul></div>`,15),r=[i];function l(n,c,p,h,d,m){return s(),t("div",null,r)}const y=e(o,[["render",l]]);export{g as __pageData,y as default};