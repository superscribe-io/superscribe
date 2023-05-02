import{_ as a,c as l,o as s,R as o,z as e,a as t}from"./chunks/framework.90d196c2.js";const k=JSON.parse('{"title":"Quickstart Guide","description":"Get up and running with Superscribe Cloud in minutes. Learn the basics of building your data model and managing permissions.","frontmatter":{"description":"Get up and running with Superscribe Cloud in minutes. Learn the basics of building your data model and managing permissions.","readTime":"7 min read"},"headers":[],"relativePath":"getting-started/quickstart.md","lastUpdated":1683060581000}'),n={name:"getting-started/quickstart.md"},i=o('<h1 id="quickstart-guide" tabindex="-1">Quickstart Guide <a class="header-anchor" href="#quickstart-guide" aria-label="Permalink to &quot;Quickstart Guide&quot;">​</a></h1><blockquote><p>This quickstart guide is designed to get you up and running with a Superscribe Cloud Project in a snap. Along the way, you will better understand what Superscribe is, setup your free Superscribe Cloud Account, get a <em>hands-on introduction</em> to the App and API, and find more resources to deep-dive into.</p></blockquote><h2 id="_1-create-cloud-account-and-login" tabindex="-1">1. Create Cloud Account and Login <a class="header-anchor" href="#_1-create-cloud-account-and-login" aria-label="Permalink to &quot;1. Create Cloud Account and Login&quot;">​</a></h2><p>First, you&#39;ll need to <a href="/cloud/accounts.html#create-account-and-login">create an Account and log in</a> on <a href="https://superscribe.cloud/login" target="_blank" rel="noreferrer">Superscribe Cloud</a></p><p>Your Superscribe Cloud Account allows you to create and manage any number of Projects. We&#39;ve made life easier by giving you the option to create and log in to your free Cloud Account automatically with GitHub. If you don&#39;t have a GitHub account or prefer not to use this login method, email-and-password login is available as well.</p><p>The very first time you log in to your cloud account, you will be prompted to create a Team. Teams are totally free to create. Each Superscribe Cloud Project exists within the scope of one Team. They allow you to organize Team Members, Projects and Project Billing as desired.</p><p>Once your Team is created, it&#39;s time to create your Superscribe Cloud Project!</p><div class="tip custom-block"><p class="custom-block-title">Learn More About Cloud</p><ul><li><a href="/cloud/overview.html">Overview</a></li><li><a href="/cloud/accounts.html">Cloud Accounts</a></li><li><a href="/cloud/teams.html">Cloud Teams</a></li></ul></div><h2 id="_2-create-and-access-project" tabindex="-1">2. Create and Access Project <a class="header-anchor" href="#_2-create-and-access-project" aria-label="Permalink to &quot;2. Create and Access Project&quot;">​</a></h2><p>To create a Project, follow the steps below:</p><ol><li>Open the Team Menu in the Dashboard Header and select or <a href="/cloud/teams.html#create-a-team">create</a> the desired Team.</li><li>Navigate to <strong>&quot;Projects&quot;</strong> and click <strong>&quot;Create Project&quot;</strong>.</li><li>Set the Project Name and tier.</li><li>Scroll to the bottom of the screen and choose the <strong>&quot;Empty Project&quot;</strong> Starting Template.<br> Note: The <strong>&quot;Demo Project&quot;</strong> adds in dummy data for in-depth feature demonstrations.</li><li>Click <strong>&quot;Create Project&quot;</strong>.</li></ol><p><em>It should take around 90 seconds for the Cloud Project to build out. During this time, a link will be sent to the email associated with your Cloud Account. The email will contain your Project URL as well as an email and password to login. If you used GitHub to create your account, this will be your GitHub email. Once the build is complete, it&#39;s time log in!</em></p><ol start="7"><li>You can <a href="/cloud/projects.html#access-a-project">access a Project</a> from within the Cloud Dashboard or type the URL into your browser.</li><li>Log in with your username and password from the email.</li></ol><div class="tip custom-block"><p class="custom-block-title">Check All Inbox Folders</p><p>Due to the algorithms used by some email providers, it is possible the email containing your Project login information will end up in another folder like &quot;Social&quot; or &quot;Promotions&quot;.</p></div><div class="tip custom-block"><p class="custom-block-title">Learn More About Cloud Projects</p><ul><li><a href="/cloud/overview.html">Overview</a></li><li><a href="/cloud/projects.html">Cloud Projects</a></li></ul></div><h2 id="_3-create-a-collection" tabindex="-1">3. Create a Collection <a class="header-anchor" href="#_3-create-a-collection" aria-label="Permalink to &quot;3. Create a Collection&quot;">​</a></h2><p>Once logged in, you&#39;re greeted with the option to create your first <a href="/getting-started/glossary.html#collections">Collection</a>.</p>',17),r=e("ol",null,[e("li",null,"Navigate into the Content Module."),e("li",null,[t("Click "),e("strong",null,'"Create Collection"'),t(" and a side menu will appear.")]),e("li",null,[t("Fill in a "),e("strong",null,"Name"),t("."),e("br"),t(" For the sake of this demo, we'll call ours "),e("code",null,"articles"),t(", but feel free to make it your own!")]),e("li",null,[t("Leave the other options at default. Click "),e("span",{mi:"",btn:""},"arrow_forward"),t(" and the "),e("strong",null,'"Optional System Fields"'),t(" menu will open."),e("br"),t(" Keep the values in this menu at the default, toggled off, for now. You can adjust them later.")]),e("li",null,[t("Click "),e("span",{mi:"",btn:""},"check"),t(" in the menu header.")])],-1),c=o('<div class="tip custom-block"><p class="custom-block-title">Learn More About Collections</p><ul><li><a href="/app/content.html">The Content Module</a></li><li><a href="/configuration/data-model/collections.html">Create and Manage a Collection</a></li><li><a href="/configuration/data-model/relationships.html">Build Relationships Between Collections</a></li></ul></div><h2 id="_4-create-a-field" tabindex="-1">4. Create a Field <a class="header-anchor" href="#_4-create-a-field" aria-label="Permalink to &quot;4. Create a Field&quot;">​</a></h2><p>With your first Collection created, it&#39;s time to start adding some <a href="/getting-started/glossary.html#fields">Fields</a>.</p><ol><li>Navigate to <strong>Settings Module &gt; Data Model &gt; <code>Collection-Name</code></strong>.</li><li>Click the <strong>&quot;Create Field&quot;</strong> button and select the <strong>&quot;Input&quot;</strong> Field type.</li><li>Fill in a Field name under <strong>Key</strong>. We&#39;ll be calling our Field <code>title</code>.<br> Superscribe offers powerful Field customization options, but let&#39;s stick to the defaults for now.</li><li>Select <strong>&quot;Save&quot;</strong>.</li></ol><div class="tip custom-block"><p class="custom-block-title">Learn More About Fields</p><ul><li><a href="/configuration/data-model.html">Create and Manage Fields in the App</a></li></ul></div><h2 id="_5-create-an-item" tabindex="-1">5. Create an Item <a class="header-anchor" href="#_5-create-an-item" aria-label="Permalink to &quot;5. Create an Item&quot;">​</a></h2><p>Now that we have a Collection with a Field configured, it&#39;s time to add an <a href="/getting-started/glossary.html">Item</a>.</p>',7),u=e("ol",null,[e("li",null,"Navigate to the Content Module."),e("li",null,[t("Click "),e("span",{mi:"",btn:""},"add"),t(" in the page header to open the Item Page.")]),e("li",null,"Fill in the Field Value(s) as desired."),e("li",null,[t("Click "),e("span",{mi:"",btn:""},"check"),t(" in the top-right to save your Item.")])],-1),d=o('<div class="tip custom-block"><p class="custom-block-title">Learn More About Items</p><ul><li><a href="/app/content.html">The Content Module</a></li><li><a href="/app/content/items.html">The Item Page</a></li></ul></div><h2 id="_6-set-roles-permissions" tabindex="-1">6. Set Roles &amp; Permissions <a class="header-anchor" href="#_6-set-roles-permissions" aria-label="Permalink to &quot;6. Set Roles &amp; Permissions&quot;">​</a></h2><p>Superscribe comes with two built-in roles: Public and Admin. The Public Role determines what data is returned to non-authenticated users. Public comes with all permissions turned off and can be reconfigured with fully granular control to expose exactly what you want unauthenticated Users to see. The Admin role has full permissions and this cannot be changed. Aside from these built-in Roles, any number of new Roles can be created, all with fully customized, granular permissions.</p>',3),p=e("p",null,[t("By Default, content entered into Superscribe will be considered private. So permissions always start off set to the default of "),e("span",{mi:"",icon:"",dngr:""},"block"),t(),e("strong",null,"No Access"),t(", with full ability to reconfigure as desired. So, in order to have the API return our Items, let's add some read permissions. For simplicity's sake, we'll do this on the Public Role, instead of creating a new Role.")],-1),h=e("ol",null,[e("li",null,[t("Navigate to "),e("strong",null,"Settings Module > Roles & Permissions > Public"),t(".")]),e("li",null,[t("Click "),e("span",{mi:"",icon:"",dngr:""},"block"),t(" under the "),e("span",{mi:"",icon:""},"visibility"),t(" icon on the desired Collection."),e("br"),t(" In our case, the Collection name is "),e("code",null,"article"),t(".")]),e("li",null,[t("Click "),e("strong",null,'"All Access"'),t(" to give the Public Role full read permissions to the Items in this Collection.")])],-1),m=o(`<div class="tip custom-block"><p class="custom-block-title">Learn More About Roles &amp; Permissions</p><ul><li><a href="/configuration/users-roles-permissions.html">Users, Roles and Permissions</a>.</li></ul></div><h2 id="_7-connect-to-the-api" tabindex="-1">7. Connect to the API <a class="header-anchor" href="#_7-connect-to-the-api" aria-label="Permalink to &quot;7. Connect to the API&quot;">​</a></h2><p>Now that your Project has some content in it which is exposed to the Public, it&#39;s time to start using this content externally! Data can be accessed in a number of ways, including the REST and GraphQL API endpoints. In this case, we&#39;ll use the <code>/items/</code> <a href="/reference/items.html">REST API endpoint</a> to retrieve the Item we just created.</p><ol><li>Open <code>http://your-project-url.superscribe.app/items/articles</code>.<br> You can use the browser or an API tool like <a href="http://postman.com" target="_blank" rel="noreferrer">Postman</a> or <a href="https://paw.cloud" target="_blank" rel="noreferrer">Paw</a></li></ol><p><em>And there it is! The Article Item you just created is being served in beautiful JSON, ready to be used anywhere and everywhere!</em></p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">data</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">title</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello World!</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p><em>In this example, we made a super-simple read request with the API, but there&#39;s more! The REST and GraphQL APIs provide exhaustive endpoints for the data model and every single action that you can do in the App can be done via the API. In fact, the App is just a GUI powered by the API.</em></p><div class="tip custom-block"><p class="custom-block-title">Learn More About The API</p><ul><li><a href="/reference/introduction.html">Intro to the API</a></li><li><a href="/reference/sdk.html">JS SDK</a></li></ul></div>`,8),b=[i,r,c,u,d,p,h,m];function g(f,y,C,_,A,w){return s(),l("div",null,b)}const F=a(n,[["render",g]]);export{k as __pageData,F as default};