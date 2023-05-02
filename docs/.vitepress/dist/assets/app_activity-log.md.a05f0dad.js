import{_ as o,c as a,o as l,R as i,z as t,a as e}from"./chunks/framework.70e71619.js";const P=JSON.parse('{"title":"Activity Log","description":"This module provides a collective timeline of all actions taken within the project. These detailed records allow for auditing user activity and enforcing accountability.","frontmatter":{"description":"This module provides a collective timeline of all actions taken within the project. These detailed records allow for auditing user activity and enforcing accountability.","readTime":"2 min read"},"headers":[],"relativePath":"app/activity-log.md","lastUpdated":1682552691000}'),n={name:"app/activity-log.md"},c=i('<h1 id="activity-log" tabindex="-1">Activity Log <a class="header-anchor" href="#activity-log" aria-label="Permalink to &quot;Activity Log&quot;">​</a></h1><blockquote><p>This module provides a collective timeline of all <em>data-changing</em> actions taken within your project. These detailed records help you audit user activity and enforce accountability.</p></blockquote><div class="tip custom-block"><p class="custom-block-title">Before You Begin</p><p>We recommend you try the <a href="/getting-started/quickstart.html">Quickstart Guide</a> to get an overview of the platform.</p></div><div class="tip custom-block"><p class="custom-block-title">Learn More</p><p>To manage the Activity Log programmatically, please see our guide on the <a href="/reference/system/activity.html">Activity Log API</a>.</p></div><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview&quot;">​</a></h2>',5),s=t("video",{title:"Activity Log Overview",autoplay:"",playsinline:"",muted:"",loop:"",controls:""},[t("source",{src:"https://cdn.directus.io/docs/v9/configuration/activity-log/activity-log-20220816/activity-log-20220816A.mp4",type:"video/mp4"})],-1),r=i('<p>The Activity Log is the only Module in Directus Core that is not found in the <a href="/app/overview.html#_1-module-bar">Module Bar</a>. Instead, it is accessed via the notifications tray of the <a href="/app/overview.html#_4-sidebar">Sidebar</a>. The Activity Log page has the same features and functionality as the <a href="/app/content/collections.html">Collection Page</a>.</p><div class="warning custom-block"><p class="custom-block-title">External Changes</p><p>The platform can only track the events which actually pass through it. Therefore, any changes made to the database <em>directly</em> are not tracked.</p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>You can also view and revert the activity of <em>specific items</em> under <strong>Item Page &gt; Sidebar &gt; Revisions</strong>. To learn more, please see <a href="/app/content/items.html#revert-an-item">Revert an Item</a>.</p></div><h2 id="view-an-activity-log-item" tabindex="-1">View an Activity Log Item <a class="header-anchor" href="#view-an-activity-log-item" aria-label="Permalink to &quot;View an Activity Log Item&quot;">​</a></h2><p><img src="https://cdn.directus.io/docs/v9/configuration/activity-log/activity-log-20220816/activity-log-default-fields-20220816A.webp" alt="Activity Log Default Fields"></p><p>Click any item in the Activity Log and a side drawer will open, displaying its logged details. The following information is stored for each item.</p><ul><li><strong>User</strong> — The user that performed the action.</li><li><strong>Action</strong> — The specific action taken <em>(e.g., Create, Update, Delete, Comment, or Login)</em>.</li><li><strong>TimeStamp</strong> — The timestamp of when the action was performed.</li><li><strong>IP Address</strong> — The IP address of the device from which the action was performed.</li><li><strong>User Agent</strong> — The description of the browser that was used to perform the action.</li><li><strong>Collection</strong> — The Collection affected by the action.</li><li><strong>Item</strong> — The ID of the item affected.</li><li><strong>Comment</strong> — The comment left by the user <em>(when applicable)</em>.</li></ul><h2 id="filter-by-activity" tabindex="-1">Filter by Activity <a class="header-anchor" href="#filter-by-activity" aria-label="Permalink to &quot;Filter by Activity&quot;">​</a></h2>',8),d=t("video",{title:"Filter by Activity",autoplay:"",playsinline:"",muted:"",loop:"",controls:""},[t("source",{src:"https://cdn.directus.io/docs/v9/configuration/activity-log/activity-log-20220816/filter-by-activity-20220817A.mp4",type:"video/mp4"})],-1),h=t("p",null,[e("In addition to the filter and display functionality inherited from the "),t("a",{href:"/app/content/collections.html"},"Collection Page"),e(", you can also filter items by activity from the Navigation Bar.")],-1),p=t("h2",{id:"modify-an-activity",tabindex:"-1"},[e("Modify an Activity "),t("a",{class:"header-anchor",href:"#modify-an-activity","aria-label":'Permalink to "Modify an Activity"'},"​")],-1),m=t("video",{title:"Filter by Activity",autoplay:"",playsinline:"",muted:"",loop:"",controls:""},[t("source",{src:"https://cdn.directus.io/docs/v9/configuration/activity-log/activity-log-20220816/modify-an-activity-20220817A.mp4",type:"video/mp4"})],-1),v=t("p",null,[e("To ensure proper accountability, system collections are "),t("strong",null,"read only"),e(" by design. However, users with an Admin role have the ability to reopen, view, and modify an item's values in activities from non-system collections (where the name does not begin with "),t("code",null,"directus_"),e("). To view or modify an activity, follow these steps.")],-1),y=t("ol",null,[t("li",null,"Navigate to the Activity Log page."),t("li",null,"Click the desired item. A drawer will open, displaying its activity log."),t("li",null,[e("Click "),t("span",{mi:"",btn:""},"launch"),e(" to reopen the item page and make modifications as desired.")]),t("li",null,[e("In the page header, click "),t("span",{mi:"",btn:""},"check"),e(" to confirm.")])],-1),u=t("p",null,"Once confirmed, any updates to an item will be logged as a new activity.",-1),g=[c,s,r,d,h,p,m,v,y,u];function f(_,b,w,T,A,k){return l(),a("div",null,g)}const C=o(n,[["render",f]]);export{P as __pageData,C as default};
