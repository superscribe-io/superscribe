import{_ as l,c as i,o as a,z as e,a as t,R as o}from"./chunks/framework.90d196c2.js";const ge=JSON.parse('{"title":"Collections","description":"","frontmatter":{},"headers":[],"relativePath":"app/data-model/collections.md","lastUpdated":1683042286000}'),s={name:"app/data-model/collections.md"},n=e("h1",{id:"collections",tabindex:"-1"},[t("Collections "),e("a",{class:"header-anchor",href:"#collections","aria-label":'Permalink to "Collections"'},"​")],-1),r=e("blockquote",null,[e("p",null,"Collections are a set of items. This can be a 1-1 data table in SQL, a group of other collections, or a readonly view. They come with all the same power and functionality of data tables, despite the less technical name.")],-1),c=e("h2",{id:"overview",tabindex:"-1"},[t("Overview "),e("a",{class:"header-anchor",href:"#overview","aria-label":'Permalink to "Overview"'},"​")],-1),d=e("video",{title:"Overview",autoplay:"",playsinline:"",muted:"",loop:"",controls:""},[e("source",{src:"https://cdn.superscribe.io/docs/v9/configuration/data-model/data-model-20220805/collections-20220805A.mp4",type:"video/mp4"})],-1),h=e("p",null,[t("Collections are data tables. Typically, you access items within a collection in the "),e("a",{href:"/app/content.html"},"Content Module"),t(".")],-1),u=e("h2",{id:"system-collections",tabindex:"-1"},[t("System Collections "),e("a",{class:"header-anchor",href:"#system-collections","aria-label":'Permalink to "System Collections"'},"​")],-1),p=e("video",{title:"System Collections",autoplay:"",playsinline:"",muted:"",loop:"",controls:""},[e("source",{src:"https://cdn.superscribe.io/docs/v9/configuration/data-model/collections/collections-20220805/system-collections-20220805A.mp4",type:"video/mp4"})],-1),m=o("",5),f=e("video",{title:"Create a Collection",autoplay:"",playsinline:"",muted:"",loop:"",controls:""},[e("source",{src:`https://cdn.superscribe.io/docs/v9/configuration/data-model/collections/collections-20220805/create-a-collection-20220805A.mp4
`,type:"video/mp4"})],-1),g=e("p",null,"To create a collection, follow these steps.",-1),y=e("ol",null,[e("li",null,[t("Navigate to "),e("strong",null,"Settings > Data Model"),t(", click "),e("span",{mi:"",btn:""},"add"),t(" in the page header, and a drawer will open.")]),e("li",null,[t("Enter a unique "),e("strong",null,"Collection Name"),t(". This cannot be modified later, but can be translated."),e("br"),t(" This is used as the data table key, API collection key, and default collection name.")]),e("li",null,[t("Optional: Make any other configurations as desired. "),e("ul",null,[e("li",null,[e("strong",null,"Singleton"),t(" — Toggles whether the collection is a "),e("a",{href:"#collection-setup"},"Singleton"),t(".")]),e("li",null,[e("strong",null,"Primary Key Field"),t(" — Sets the name of the primary key field, defaults to "),e("code",null,"id"),t(".")]),e("li",null,[e("strong",null,"Type"),t(" — Sets the "),e("a",{href:"/configuration/data-model/fields/#keys-and-ids"},"type of ID"),t(" to use for this collection.")])])]),e("li",null,[t("Click "),e("span",{mi:"",btn:""},"arrow_forward"),t(" to confirm.")]),e("li",null,[t("Enable and rename the other Optional System Fields as desired: "),e("ul",null,[e("li",null,[e("strong",null,"Status"),t(" — Stores item status.")]),e("li",null,[e("strong",null,"Sort"),t(" — Adds a field which enables drag-and-drop sorting of items.")]),e("li",null,[e("strong",null,"Created On"),t(" — Logs the date an item was created.")]),e("li",null,[e("strong",null,"Created By"),t(" — Logs the user that created this item.")]),e("li",null,[e("strong",null,"Updated On"),t(" — Logs the date an item was last updated.")]),e("li",null,[e("strong",null,"Updated By"),t(" — Stores the last user to edit the file.")])])]),e("li",null,[t("Click "),e("span",{mi:"",btn:""},"check"),t(" to confirm and create the collection.")])],-1),b=o("",5),_=e("video",{title:"Hide a Collection",autoplay:"",playsinline:"",muted:"",loop:"",controls:""},[e("source",{src:"https://cdn.superscribe.io/docs/v9/configuration/data-model/collections/collections-20220805/toggle-collection-visibility-20220805A.mp4",type:"video/mp4"})],-1),v=e("p",null,"To toggle whether a collection is hidden by default in the Content Module, follow these steps.",-1),w=e("ol",null,[e("li",null,[t("Navigate to "),e("strong",null,"Settings > Data Model"),t(".")]),e("li",null,[t("Click "),e("span",{mi:"",icon:""},"more_vert"),t(" to open the collection's Context Menu.")]),e("li",null,[t("Select "),e("strong",null,"View Content"),t(" or "),e("strong",null,"Make Collection Hidden"),t(" to adjust visibility as desired.")])],-1),S=e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"},"TIP"),e("p",null,[t("Assuming a user has "),e("a",{href:"/configuration/users-roles-permissions.html"},"access permissions"),t(", hidden collections can still be viewed. They must right-click on the Navigation Bar and choose "),e("span",{mi:"",icon:""},"visibility"),t(),e("strong",null,"Show Hidden Collections"),t(".")])],-1),T=e("h2",{id:"create-a-folder",tabindex:"-1"},[t("Create a Folder "),e("a",{class:"header-anchor",href:"#create-a-folder","aria-label":'Permalink to "Create a Folder"'},"​")],-1),k=e("video",{title:"Create a Folder",autoplay:"",playsinline:"",muted:"",loop:"",controls:""},[e("source",{src:"https://cdn.superscribe.io/docs/v9/configuration/data-model/collections/collections-20220805/create-a-folder-20220805A.mp4",type:"video/mp4"})],-1),C=e("p",null,[t("Folders allow you to sub-nest and group how collections are displayed. This feature simply changes how the collections are displayed under "),e("strong",null,"Settings > Data Model"),t(" and in the Content Module. It has no impact on the data model. To create a folder, follow these steps.")],-1),A=e("ol",null,[e("li",null,[t("Navigate to "),e("strong",null,"Settings > Data Model"),t(".")]),e("li",null,[t("Click "),e("span",{mi:"",btn:"",muted:""},"create_new_folder"),t(" in the page header.")]),e("li",null,"Set a folder key, which will also be used as the folder's name."),e("li",null,"Optional: Set the folder icon, color, note and translations as desired."),e("li",null,[t("Click "),e("strong",null,"Save"),t(" to create your folder.")])],-1),P=e("h2",{id:"toggle-folder-display",tabindex:"-1"},[t("Toggle Folder Display "),e("a",{class:"header-anchor",href:"#toggle-folder-display","aria-label":'Permalink to "Toggle Folder Display"'},"​")],-1),D=e("video",{title:"Toggle Folder Display",autoplay:"",playsinline:"",muted:"",loop:"",controls:""},[e("source",{src:"https://cdn.superscribe.io/docs/v9/configuration/data-model/collections/collections-20220805/toggle-folder-display-20220805A.mp4",type:"video/mp4"})],-1),I=e("p",null,"To toggle folder display, follow these steps.",-1),F=e("ol",null,[e("li",null,[t("Navigate to "),e("strong",null,"Settings > Data Model"),t(".")]),e("li",null,[t("Click "),e("span",{mi:"",icon:""},"folder"),t(" on the desired collection to toggle the following displays: "),e("ul",null,[e("li",null,[e("strong",null,"Start Open")]),e("li",null,[e("strong",null,"Start Collapsed")]),e("li",null,[e("strong",null,"Always Open")])])])],-1),N=e("h2",{id:"sort-and-nest-collections",tabindex:"-1"},[t("Sort and Nest Collections "),e("a",{class:"header-anchor",href:"#sort-and-nest-collections","aria-label":'Permalink to "Sort and Nest Collections"'},"​")],-1),x=e("video",{title:"Configure a Collection",autoplay:"",playsinline:"",muted:"",loop:"",controls:""},[e("source",{src:"https://cdn.superscribe.io/docs/v9/configuration/data-model/collections/collections-20220805/sort-and-nest-collections.mp4",type:"video/mp4"})],-1),M=e("p",null,[t("To sort and nest collections in "),e("strong",null,"Settings > Data Model"),t(" and "),e("strong",null,"Content Module"),t(", follow these steps.")],-1),R=e("ol",null,[e("li",null,[t("Navigate to "),e("strong",null,"Settings > Data Model"),t(".")]),e("li",null,[t("Click and drag "),e("span",{mi:"",icon:""},"drag_handle"),t(" to position collections as desired."),e("br"),t(" To nest a collection, drag below and to the right of an intended parent folder or collection.")])],-1),V=e("h2",{id:"configure-a-collection",tabindex:"-1"},[t("Configure a Collection "),e("a",{class:"header-anchor",href:"#configure-a-collection","aria-label":'Permalink to "Configure a Collection"'},"​")],-1),q=e("video",{title:"Configure a Collection",autoplay:"",playsinline:"",muted:"",loop:"",controls:""},[e("source",{src:"https://cdn.superscribe.io/docs/v9/configuration/data-model/collections/collections-20220805/configure-a-collection-20220805A.mp4",type:"video/mp4"})],-1),O=e("p",null,"To configure a collection, follow these steps.",-1),E=e("ol",null,[e("li",null,[t("Navigate to "),e("strong",null,"Settings > Data Model"),t(" and click the desired collection."),e("br"),t(" The collection's configuration page will open.")]),e("li",null,[t("Make configurations as desired. Configuration options are broken into six categories. "),e("ul",null,[e("li",null,[e("a",{href:"#fields-layout"},"Fields and Layout")]),e("li",null,[e("a",{href:"#collection-setup"},"Collection Setup")]),e("li",null,[e("a",{href:"#archive"},"Archive")]),e("li",null,[e("a",{href:"#sort-field"},"Sort")]),e("li",null,[e("a",{href:"#accountability"},"Accountability")]),e("li",null,[e("a",{href:"#duplication"},"Duplication")])])]),e("li",null,[t("Click "),e("span",{mi:"",btn:""},"check"),t(" to confirm.")])],-1),j=e("h3",{id:"fields-layout",tabindex:"-1"},[t("Fields & Layout "),e("a",{class:"header-anchor",href:"#fields-layout","aria-label":'Permalink to "Fields & Layout"'},"​")],-1),B=e("video",{title:"Fields and Layout",autoplay:"",playsinline:"",muted:"",loop:"",controls:""},[e("source",{src:"https://cdn.superscribe.io/docs/v9/configuration/data-model/collections/collections-20220805/fields-and-layout-20220805A.mp4",type:"video/mp4"})],-1),L=e("p",null,[t("This section allows you to create and configure fields, as well as configure how fields are displayed on the "),e("a",{href:"/app/content/items.html"},"Item Details Page"),t(". To learn more, please see the documentation on "),e("a",{href:"/configuration/data-model/fields/"},"fields"),t(".")],-1),U=e("h3",{id:"collection-setup",tabindex:"-1"},[t("Collection Setup "),e("a",{class:"header-anchor",href:"#collection-setup","aria-label":'Permalink to "Collection Setup"'},"​")],-1),H=e("video",{title:"Collection Setup",autoplay:"",playsinline:"",muted:"",loop:"",controls:""},[e("source",{src:"https://cdn.superscribe.io/docs/v9/configuration/data-model/collections/collections-20220805/collection-setup-20220805A.mp4",type:"video/mp4"})],-1),W=o("",5),$=e("video",{title:"Archive",autoplay:"",playsinline:"",muted:"",loop:"",controls:""},[e("source",{src:"https://cdn.superscribe.io/docs/v9/configuration/data-model/collections/collections-20220805/archive-20220805A.mp4",type:"video/mp4"})],-1),G=o("",6),K=e("video",{autoplay:"",playsinline:"",muted:"",loop:"",controls:"",title:"Batch Edit Items"},[e("source",{src:"https://cdn.superscribe.io/docs/v9/app-guide/content/content-collections/content-collections-20220415A/manually-sort-items-20220415A.mp4",type:"video/mp4"})],-1),Q=o("",3),Y=e("ol",null,[e("li",null,[e("a",{href:"/configuration/data-model/fields/#create-a-field-standard"},"Create a Field"),t(" with an "),e("code",null,"INTEGER"),t(" data type.")]),e("li",null,[t("Choose a field from the dropdown under "),e("strong",null,"Settings > Data Model > [Collection] > Sort"),t(".")]),e("li",null,[t("Click "),e("span",{mi:"",btn:""},"check"),t(" to confirm.")])],-1),z=o("",5),J=e("video",{title:"Accountability",autoplay:"",playsinline:"",muted:"",loop:"",controls:""},[e("source",{src:"https://cdn.superscribe.io/docs/v9/configuration/data-model/collections/collections-20220805/acountability-20220805A.mp4",type:"video/mp4"})],-1),X=o("",4),Z=e("video",{title:"Duplication",autoplay:"",playsinline:"",muted:"",loop:"",controls:""},[e("source",{src:"https://cdn.superscribe.io/docs/v9/configuration/data-model/collections/collections-20220805/duplicate-20220805A.mp4",type:"video/mp4"})],-1),ee=e("p",null,[t("The "),e("strong",null,"Save as Copy"),t(" option on the Item Details Page offers a way to effectively duplicate the current item. Since there may be unique or relational data within the item, it's important to control exactly what will be copied. Duplication lets you configure which parent & relational field values will be copied when you use "),e("strong",null,"Save as Copy"),t(" on an item.")],-1),te=e("ul",null,[e("li",null,[e("strong",null,"Item Duplication Fields"),t(" — Check the field(s) to copy values for when duplicating an item.")])],-1),oe=e("h2",{id:"delete-a-collection",tabindex:"-1"},[t("Delete a Collection "),e("a",{class:"header-anchor",href:"#delete-a-collection","aria-label":'Permalink to "Delete a Collection"'},"​")],-1),le=e("video",{title:"Delete a Collection",autoplay:"",playsinline:"",muted:"",loop:"",controls:""},[e("source",{src:"https://cdn.superscribe.io/docs/v9/configuration/data-model/collections/collections-20220805/delete-a-collection-20220805A.mp4",type:"video/mp4"})],-1),ie=e("p",null,"To delete a collection, follow these steps.",-1),ae=e("ol",null,[e("li",null,[t("Navigate to "),e("strong",null,"Settings > Data Model > [Collection Name]"),t(".")]),e("li",null,[t("Click "),e("span",{mi:"",btn:"",dngr:""},"delete"),t(" in the page header.")]),e("li",null,[t("Confirm this decision by clicking "),e("strong",null,"Delete"),t(" in the dialog.")])],-1),se=e("div",{class:"danger custom-block"},[e("p",{class:"custom-block-title"},"DANGER"),e("p",null,"This action is permanent and irreversible. Please proceed with caution.")],-1),ne=[n,r,c,d,h,u,p,m,f,g,y,b,_,v,w,S,T,k,C,A,P,D,I,F,N,x,M,R,V,q,O,E,j,B,L,U,H,W,$,G,K,Q,Y,z,J,X,Z,ee,te,oe,le,ie,ae,se];function re(ce,de,he,ue,pe,me){return a(),i("div",null,ne)}const ye=l(s,[["render",re]]);export{ge as __pageData,ye as default};