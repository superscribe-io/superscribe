import{T as pe,d as ve,w as Ce}from"./vue.runtime.esm-bundler-cc9213e5.js";import"./use-sync-0cbce98c.js";import{u as Le,a as _e,g as fe,_ as N,b as se,c as X,d as ae,e as Ve,M as De,l as oe,t as Be,f as Oe,h as Ue,i as ue,j as Ne,p as Ee,k as Me,m as te,n as Ae,o as Re,q as ce,r as de,s as je,v as Te,H as qe}from"./index.b0c463e5.entry.js";import{storeToRefs as ne}from"./pinia.88007416.entry.js";import{useI18n as F}from"./vue-i18n.92928790.entry.js";import{useRouter as me}from"./vue-router.1201dd20.entry.js";import{d as E,c as I,r as y,m as ie,w as J,a as i,C as K,D as H,o as s,e as _,z as a,b as k,F as Y,A as r,f as A,v as V,x as M,H as ge,q as U,t as B,B as Z,n as He,O as W,M as ye,l as We,g as Fe,p as Pe,u as S,I as ze,K as Ge,L as Qe,E as Xe,G as Ke}from"./runtime-core.esm-bundler-b81764e2.js";const Je=E({setup(){const{t:e}=F(),t=Le(),c=_e(),u=I(()=>{var d;return c.settings===null||!((d=c.settings)!=null&&d.project_logo)?null:`${fe()}assets/${c.settings.project_logo}`}),n=y(!1),{queueHasItems:p}=ie(t);J(()=>p.value,d=>{d&&(n.value=!0)});const o=I(()=>{var d;return(d=c.settings)==null?void 0:d.project_url}),l=I(()=>{var d;return(d=c.settings)!=null&&d.project_url?e("view_project"):!1});return{customLogoPath:u,showLoader:n,stopSpinnerIfQueueIsEmpty:v,url:o,urlTooltip:l};function v(){p.value===!1&&(n.value=!1)}}});const Ye=["src"];function Ze(e,t,c,u,n,p){const o=i("v-progress-linear"),l=K("tooltip");return H((s(),_(ge(e.url?"a":"div"),{href:e.url,target:e.url?"_blank":void 0,rel:e.url?"noopener noreferrer":void 0,class:M(["module-bar-logo",{loading:e.showLoader}])},{default:a(()=>[e.customLogoPath?(s(),k(Y,{key:0},[r(pe,{name:"fade"},{default:a(()=>[e.showLoader?(s(),_(o,{key:0,indeterminate:"",rounded:"",onAnimationiteration:e.stopSpinnerIfQueueIsEmpty},null,8,["onAnimationiteration"])):A("",!0)]),_:1}),V("img",{class:"custom-logo",src:e.customLogoPath,alt:"Project Logo"},null,8,Ye)],64)):(s(),k("div",{key:1,class:M(["logo",{running:e.showLoader}]),onAnimationiteration:t[0]||(t[0]=(...v)=>e.stopSpinnerIfQueueIsEmpty&&e.stopSpinnerIfQueueIsEmpty(...v))},null,34))]),_:1},8,["href","target","rel","class"])),[[l,e.urlTooltip,void 0,{right:!0}]])}const xe=N(Je,[["render",Ze],["__scopeId","data-v-06d0e81e"]]),et=E({setup(){const{t:e}=F(),t=se(),c=X(),{notificationsDrawerOpen:u}=ne(t),{unread:n}=ne(c),p=ae(),o=y(!1),l=I(()=>{var C;return!p.currentUser||!("avatar"in p.currentUser)||!((C=p.currentUser)!=null&&C.avatar)?null:Ve(`${fe()}assets/${p.currentUser.avatar.id}?key=system-medium-cover`)}),v=y(null),d=I(()=>{var $;return`/users/${($=p.currentUser)==null?void 0:$.id}`}),b=I(()=>"/logout"),f=p.fullName??void 0;return{t:e,userFullName:f,avatarURL:l,userProfileLink:d,signOutActive:o,signOutLink:b,notificationsDrawerOpen:u,unread:n,avatarError:v}}});const tt={class:"module-bar-avatar"},ot=["src","alt"];function nt(e,t,c,u,n,p){const o=i("v-icon"),l=i("v-button"),v=i("v-badge"),d=i("v-card-title"),b=i("v-card-actions"),f=i("v-card"),C=i("v-dialog"),$=i("v-avatar"),T=i("router-link"),O=i("v-hover"),L=K("tooltip");return s(),k("div",tt,[r(v,{value:e.unread,disabled:e.unread==0,class:"notifications-badge"},{default:a(()=>[H((s(),_(l,{tile:"",icon:"","x-large":"",class:"notifications",onClick:t[0]||(t[0]=R=>e.notificationsDrawerOpen=!0)},{default:a(()=>[r(o,{name:"notifications"})]),_:1})),[[L,e.t("notifications"),void 0,{right:!0}]])]),_:1},8,["value","disabled"]),r(O,null,{default:a(({hover:R})=>[r(C,{modelValue:e.signOutActive,"onUpdate:modelValue":t[2]||(t[2]=g=>e.signOutActive=g),onEsc:t[3]||(t[3]=g=>e.signOutActive=!1)},{activator:a(({on:g})=>[r(pe,{name:"sign-out"},{default:a(()=>[R?H((s(),_(l,{key:0,tile:"",icon:"","x-large":"",class:"sign-out",onClick:g},{default:a(()=>[r(o,{name:"logout"})]),_:2},1032,["onClick"])),[[L,e.t("sign_out"),void 0,{right:!0}]]):A("",!0)]),_:2},1024)]),default:a(()=>[r(f,null,{default:a(()=>[r(d,null,{default:a(()=>[U(B(e.t("sign_out_confirm")),1)]),_:1}),r(b,null,{default:a(()=>[r(l,{secondary:"",onClick:t[1]||(t[1]=g=>e.signOutActive=!e.signOutActive)},{default:a(()=>[U(B(e.t("cancel")),1)]),_:1}),r(l,{to:e.signOutLink},{default:a(()=>[U(B(e.t("sign_out")),1)]),_:1},8,["to"])]),_:1})]),_:1})]),_:2},1032,["modelValue"]),r(T,{to:e.userProfileLink},{default:a(()=>[H((s(),_($,{tile:"",large:"",class:M({"no-avatar":!e.avatarURL})},{default:a(()=>[e.avatarURL&&!e.avatarError?(s(),k("img",{key:0,src:e.avatarURL,alt:e.userFullName,class:"avatar-image",onError:t[4]||(t[4]=g=>e.avatarError=g)},null,40,ot)):(s(),_(o,{key:1,name:"account_circle"}))]),_:1},8,["class"])),[[L,e.userFullName,void 0,{right:!0}]])]),_:1},8,["to"])]),_:1})])}const st=N(et,[["render",nt],["__scopeId","data-v-01e2b782"]]),at=E({components:{ModuleBarLogo:xe,ModuleBarAvatar:st},setup(){const e=_e(),{modules:t}=Oe(),c=I(()=>t.value.map(n=>n.id));return{modules:I(()=>e.settings?(e.settings.module_bar??De).filter(n=>n.type==="link"?!0:n.enabled&&c.value.includes(n.id)).map(n=>{if(n.type==="link"){const o=oe.omit(n,["url"]);return n.url.startsWith("/")?o.to=n.url:o.href=n.url,Be(o)}const p=t.value.find(o=>o.id===n.id);return{...n,...t.value.find(o=>o.id===n.id),to:`/${p.id}`}}):[])}}});const it={class:"module-bar"},lt={class:"modules"};function rt(e,t,c,u,n,p){const o=i("module-bar-logo"),l=i("v-icon"),v=i("v-button"),d=i("module-bar-avatar"),b=K("tooltip");return s(),k("div",it,[r(o),V("div",lt,[(s(!0),k(Y,null,Z(e.modules,f=>H((s(),_(v,{key:f.id,icon:"","x-large":"",to:f.to,href:f.href,tile:"",style:He(f.color?{"--v-button-color-active":f.color}:null)},{default:a(()=>[r(l,{name:f.icon},null,8,["name"])]),_:2},1032,["to","href","style"])),[[b,f.name,void 0,{right:!0}]])),128))]),r(d)])}const ut=N(at,[["render",rt],["__scopeId","data-v-d5a6aca5"]]),ct=E({setup(){const{t:e}=F(),t=X(),c=ae(),u=I(()=>t.dialogs);return{t:e,notifications:u,admin:c.isAdmin,done:n};function n(p){t.remove(p)}}});const dt={class:"notification-dialogs"},pt={target:"_blank",href:"https://github.com/directus/directus/issues/new?template=bug_report.yml"};function vt(e,t,c,u,n,p){const o=i("v-card-title"),l=i("v-error"),v=i("v-card-text"),d=i("v-button"),b=i("v-card-actions"),f=i("v-card"),C=i("v-dialog");return s(),k("div",dt,[(s(!0),k(Y,null,Z(e.notifications,$=>(s(),_(C,{key:$.id,"model-value":!0,persist:""},{default:a(()=>[r(f,{class:M([$.type])},{default:a(()=>[r(o,null,{default:a(()=>[U(B($.title),1)]),_:2},1024),$.text||$.error?(s(),_(v,{key:0},{default:a(()=>[U(B($.text)+" ",1),$.error?(s(),_(l,{key:0,error:$.error},null,8,["error"])):A("",!0)]),_:2},1024)):A("",!0),r(b,null,{default:a(()=>[$.type==="error"&&e.admin&&$.code==="UNKNOWN"?(s(),_(d,{key:0,secondary:""},{default:a(()=>[V("a",pt,B(e.t("report_error")),1)]),_:1})):A("",!0),r(d,{onClick:T=>e.done($.id)},{default:a(()=>[U(B(e.t("dismiss")),1)]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1032,["class"])]),_:2},1024))),128))])}const _t=N(ct,[["render",vt],["__scopeId","data-v-1ebd500e"]]),ft=E({props:{modelValue:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e){const{t}=F(),c=se(),u=ae(),n=X(),p=Ue(),o=me(),l=y([]),v=y(0),d=y(!1),b=y(null),f=y([]),C=y(["inbox"]),{notificationsDrawerOpen:$}=ne(c),T=y([{text:t("subject"),value:"subject",sortable:!1,width:300,align:"left"},{text:t("timestamp"),value:"timestampDistance",sortable:!1,width:180,align:"left"}]);return O(),J([()=>e.modelValue,C],()=>O()),{tableHeaders:T,t,notificationsDrawerOpen:$,page:v,notifications:l,loading:d,error:b,selection:f,onRowClick:R,toggleArchive:L,tab:C};async function O(){d.value=!0;try{const g=await ue.get("/notifications",{params:{filter:{_and:[{recipient:{_eq:u.currentUser.id}},{status:{_eq:C.value[0]}}]},fields:["id","subject","collection","item","timestamp"],sort:["-timestamp"]}});await n.getUnreadCount();const P=g.data.data,q=[];for(const z of P)q.push({...z,timestampDistance:Ne(Ee(z.timestamp),new Date,{addSuffix:!0})});l.value=q}catch(g){b.value=g}finally{d.value=!1}}async function L(){await ue.patch("/notifications",{keys:f.value.map(({id:g})=>g),data:{status:C.value[0]==="inbox"?"archived":"inbox"}}),await O(),f.value=[]}function R({item:g}){var P;if(g.collection){const q=p.getCollection(g.collection);(P=q==null?void 0:q.meta)!=null&&P.singleton?o.push(`/content/${g.collection}`):o.push(`/content/${g.collection}/${g.item}`)}else String(g.item).startsWith("/")&&o.push(g.item);$.value=!1}}});function mt(e,t,c,u,n,p){const o=i("v-icon"),l=i("v-button"),v=i("v-list-item-icon"),d=i("v-list-item-content"),b=i("v-tab"),f=i("v-tabs"),C=i("v-info"),$=i("v-table"),T=i("v-drawer"),O=K("tooltip");return s(),_(T,{modelValue:e.notificationsDrawerOpen,"onUpdate:modelValue":t[3]||(t[3]=L=>e.notificationsDrawerOpen=L),icon:"notifications",title:e.t("notifications"),onCancel:t[4]||(t[4]=L=>e.notificationsDrawerOpen=!1)},{actions:a(()=>[H((s(),_(l,{icon:"",rounded:"",disabled:e.selection.length===0,secondary:"",onClick:e.toggleArchive},{default:a(()=>[r(o,{name:e.tab[0]==="inbox"?"archive":"move_to_inbox"},null,8,["name"])]),_:1},8,["disabled","onClick"])),[[O,e.tab[0]==="inbox"?e.t("archive"):e.t("unarchive"),void 0,{bottom:!0}]])]),sidebar:a(()=>[r(f,{modelValue:e.tab,"onUpdate:modelValue":t[0]||(t[0]=L=>e.tab=L),vertical:""},{default:a(()=>[r(b,{value:"inbox"},{default:a(()=>[r(v,null,{default:a(()=>[r(o,{name:"inbox"})]),_:1}),r(d,null,{default:a(()=>[U(B(e.t("inbox")),1)]),_:1})]),_:1}),r(b,{value:"archived"},{default:a(()=>[r(v,null,{default:a(()=>[r(o,{name:"archive"})]),_:1}),r(d,null,{default:a(()=>[U(B(e.t("archive")),1)]),_:1})]),_:1})]),_:1},8,["modelValue"])]),default:a(()=>[!e.loading&&e.notifications.length===0?(s(),_(C,{key:0,icon:"notifications",title:e.t("no_notifications"),center:""},{default:a(()=>[U(B(e.t("no_notifications_copy")),1)]),_:1},8,["title"])):(s(),_($,{key:1,modelValue:e.selection,"onUpdate:modelValue":t[1]||(t[1]=L=>e.selection=L),headers:e.tableHeaders,"onUpdate:headers":t[2]||(t[2]=L=>e.tableHeaders=L),"show-select":"",loading:e.loading,items:e.notifications,"item-key":"id","onClick:row":e.onRowClick},null,8,["modelValue","headers","loading","items","onClick:row"]))]),_:1},8,["modelValue","title"])}const gt=N(ft,[["render",mt],["__scopeId","data-v-b30374ad"]]),yt=E({props:{id:{type:String,required:!0},title:{type:String,required:!0},text:{type:String,default:null},icon:{type:String,default:null},type:{type:String,default:"info",validator:e=>["info","success","warning","error"].includes(e)},tail:{type:Boolean,default:!1},dense:{type:Boolean,default:!1},showClose:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},progress:{type:Number,default:void 0}},setup(e){const t=X();return{close:c};function c(){e.showClose===!0&&t.remove(e.id)}}});const $t={key:0,class:"icon"},bt={class:"content"},ht={class:"title selectable"},wt={key:0,class:"text selectable"};function kt(e,t,c,u,n,p){const o=i("v-progress-circular"),l=i("v-icon");return s(),k("div",{class:M(["notification-item",[e.type,{tail:e.tail,dense:e.dense}]]),onClick:t[0]||(t[0]=(...v)=>e.close&&e.close(...v))},[e.loading||e.progress||e.icon?(s(),k("div",$t,[e.loading?(s(),_(o,{key:0,indeterminate:"",small:""})):e.progress?(s(),_(o,{key:1,small:"",value:e.progress},null,8,["value"])):(s(),_(l,{key:2,name:e.icon},null,8,["name"]))])):A("",!0),V("div",bt,[V("p",ht,B(e.title),1),e.text?(s(),k("p",wt,B(e.text),1)):A("",!0)]),e.showClose?(s(),_(l,{key:1,name:"close",clickable:"",class:"close",onClick:e.close},null,8,["onClick"])):A("",!0)],2)}const $e=N(yt,[["render",kt],["__scopeId","data-v-747a928d"]]),St=E({components:{NotificationItem:$e},props:{sidebarOpen:{type:Boolean,default:!1}},setup(){const e=X();return{queue:ie(e).queue}}});function It(e,t,c,u,n,p){const o=i("notification-item");return s(),_(ve,{class:M(["notifications-group",{"sidebar-open":e.sidebarOpen}]),name:"slide-fade",tag:"div"},{default:a(()=>[W(e.$slots,"default",{},void 0,!0),(s(!0),k(Y,null,Z(e.queue,(l,v)=>(s(),_(o,ye({key:l.id},l,{tail:v===e.queue.length-1,dense:e.sidebarOpen===!1,"show-close":l.persist===!0&&l.closeable!==!1}),null,16,["tail","dense","show-close"]))),128))]),_:3},8,["class"])}const Ct=N(St,[["render",It],["__scopeId","data-v-96e092f9"]]),Lt=E({props:{to:{type:String,default:null},icon:{type:String,default:"box"},active:{type:Boolean,default:!1}},emits:["click"],setup(){const e=se(),{sidebarOpen:t}=ie(e);return{sidebarOpen:t}}});const Vt={class:"icon"},Dt={key:0,class:"title"};function Bt(e,t,c,u,n,p){const o=i("v-icon");return s(),_(ge(e.to?"router-link":"button"),{class:M(["sidebar-button",{active:e.active}]),onClick:t[0]||(t[0]=l=>e.$emit("click",l))},{default:a(()=>[V("div",Vt,[r(o,{name:e.icon},null,8,["name"])]),e.sidebarOpen?(s(),k("div",Dt,[W(e.$slots,"default",{},void 0,!0)])):A("",!0)]),_:3},8,["class"])}const Ot=N(Lt,[["render",Bt],["__scopeId","data-v-a096d611"]]),Ut=E({components:{SidebarButton:Ot,NotificationItem:$e},props:{sidebarOpen:{type:Boolean,default:!1},modelValue:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(){const{t:e}=F(),t=X();return{t:e,lastFour:t.lastFour}}});const Nt={class:"notifications-preview"},Et={key:0,class:"inline"},Mt={class:"padding-box"};function At(e,t,c,u,n,p){const o=i("router-link"),l=i("notification-item"),v=i("transition-expand"),d=i("sidebar-button"),b=K("tooltip");return s(),k("div",Nt,[r(v,{tag:"div"},{default:a(()=>[e.modelValue?(s(),k("div",Et,[V("div",Mt,[r(o,{class:M(["link",{"has-items":e.lastFour.length>0}]),to:"/activity"},{default:a(()=>[U(B(e.t("show_all_activity")),1)]),_:1},8,["class"]),r(ve,{tag:"div",name:"notification",class:"transition"},{default:a(()=>[(s(!0),k(Y,null,Z(e.lastFour,f=>(s(),_(l,ye({key:f.id},f),null,16))),128))]),_:1})])])):A("",!0)]),_:1}),H((s(),_(d,{active:e.modelValue,class:"toggle",icon:"pending_actions",onClick:t[0]||(t[0]=f=>e.$emit("update:modelValue",!e.modelValue))},{default:a(()=>[U(B(e.t("activity_log")),1)]),_:1},8,["active"])),[[b,!e.sidebarOpen&&e.t("activity_log"),void 0,{left:!0}]])])}const Rt=N(Ut,[["render",At],["__scopeId","data-v-ab6e3e13"]]),jt=E({setup(){const{t:e}=F(),t=Me(),c=I(()=>{const l=oe.sortBy(t.latency,["timestamp"]);return l[l.length-1]}),u=I(()=>{if(!t.latency||t.latency.length===0)return 0;const l=oe.sortBy(t.latency,["timestamp"]),v=l.slice(Math.max(l.length-5,0));let d=0;for(const{latency:b}of v)d+=b;return Math.round(d/v.length)}),n=I(()=>u.value<=250?4:u.value>250&&u.value<=500?3:u.value>500&&u.value<=750?2:1),p=I(()=>{switch(n.value){case 4:return`${e("connection_excellent")}
(${te(u.value)} ${e("latency")})`;case 3:return`${e("connection_good")}
(${te(u.value)} ${e("latency")})`;case 2:return`${e("connection_fair")}
(${te(u.value)} ${e("latency")})`;case 1:return`${e("connection_poor")}
(${te(u.value)} ${e("latency")})`;default:return null}});return{icon:I(()=>{switch(n.value){case 4:return"signal_wifi_4_bar";case 3:return"signal_wifi_3_bar";case 2:return"signal_wifi_2_bar";case 1:return"signal_wifi_1_bar";default:return null}}),lastLatency:c,latencyTooltip:p}}});const Tt={class:"latency-indicator"};function qt(e,t,c,u,n,p){const o=i("v-progress-circular"),l=i("v-icon"),v=K("tooltip");return H((s(),k("div",Tt,[e.lastLatency?(s(),_(l,{key:1,name:e.icon},null,8,["name"])):(s(),_(o,{key:0,indeterminate:""}))])),[[v,e.latencyTooltip,void 0,{bottom:!0,end:!0}]])}const Ht=N(jt,[["render",qt],["__scopeId","data-v-0c7988ea"]]),Wt=E({components:{LatencyIndicator:Ht},setup(){const e=Ae(),t=I(()=>{var u,n;return(n=(u=e.info)==null?void 0:u.project)==null?void 0:n.project_name}),c=I(()=>{var u,n;return(n=(u=e.info)==null?void 0:u.project)==null?void 0:n.project_descriptor});return{name:t,descriptor:c}}});const Ft={class:"project-info"},Pt={class:"name-container"};function zt(e,t,c,u,n,p){const o=i("latency-indicator"),l=i("v-text-overflow");return s(),k("div",Ft,[r(o),V("div",Pt,[r(l,{placement:"right",class:"name",text:e.name},null,8,["text"]),e.descriptor?(s(),_(l,{key:0,placement:"right",class:"descriptor",text:e.descriptor},null,8,["text"])):A("",!0)])])}const Gt=N(Wt,[["render",zt],["__scopeId","data-v-83fb9d28"]]),Qt=E({props:{sidebarOpen:{type:Boolean,default:!1}},setup(e){const t=y([]),c=y(!1);return J(()=>e.sidebarOpen,async u=>{u===!1?t.value=[]:(c.value=!0,await We(),c.value=!1)}),{openDetail:t,mandatory:c}}});function Xt(e,t,c,u,n,p){const o=i("v-item-group");return s(),_(o,{modelValue:e.openDetail,"onUpdate:modelValue":t[0]||(t[0]=l=>e.openDetail=l),class:"sidebar-detail-group",scope:"sidebar-detail",mandatory:e.mandatory},{default:a(()=>[W(e.$slots,"default",{},void 0,!0)]),_:3},8,["modelValue","mandatory"])}const Kt=N(Qt,[["render",Xt],["__scopeId","data-v-8d500103"]]),Jt=e=>(Xe("data-v-19f983c5"),e=e(),Ke(),e),Yt={class:"module-nav-content"},Zt={class:"flex-container"},xt=Jt(()=>V("div",{class:"spacer"},null,-1)),eo=E({__name:"private-view",props:{title:{default:null},smallHeader:{type:Boolean,default:!1},headerShadow:{type:Boolean,default:!0}},setup(e){const t=e,{t:c}=F(),u=me(),n=y(),p=y(),{width:o}=Re(),{width:l}=ce(n),{width:v}=ce(p),d=y(),{handleHover:b,onResizeHandlePointerDown:f,resetModuleNavWidth:C,onPointerMove:$,onPointerUp:T}=he();de(window,"pointermove",$),de(window,"pointerup",T);const{data:O}=je("module-nav-width");Fe(()=>{O.value&&(Number.isNaN(O.value)||(d.value.style.width=`${O.value}px`))});const{title:L}=ie(t),R=y(!1),g=ae(),P=se(),q=I(()=>{var w,m;return g.currentUser?((m=(w=g.currentUser)==null?void 0:w.role)==null?void 0:m.app_access)||!1:!0}),z=y(!1),{sidebarOpen:j,fullScreen:re}=ne(P),be=I(()=>{var w;return((w=g.currentUser)==null?void 0:w.theme)||"auto"});Pe("main-element",n),u.afterEach(()=>{var w;(w=n.value)==null||w.scrollTo({top:0}),re.value=!1}),Te(L);function he(){const w=y(!1),m=y(!1),x=y(0),ee=y(0),D=y(null),h=y(0),G=y(null);return J(D,oe.debounce(Q=>{Q===220?O.value=null:O.value=Q},300)),J([o,l,v],()=>{o.value>1260?h.value=o.value-(590+60+v.value):o.value>960?h.value=o.value-(590+60+60):h.value=o.value-(60+60),D.value&&D.value>h.value&&(D.value=Math.max(220,h.value),d.value.style.width=`${D.value}px`)},{immediate:!0}),{handleHover:w,onResizeHandlePointerDown:le,resetModuleNavWidth:ke,onPointerMove:Se,onPointerUp:Ie};function le(Q){m.value=!0,x.value=Q.pageX,ee.value=d.value.offsetWidth}function ke(){D.value=220,d.value.style.width="220px"}function Se(Q){m.value&&(G.value=window.requestAnimationFrame(()=>{D.value=Math.max(220,ee.value+(Q.pageX-x.value)),D.value>=h.value&&(D.value=h.value),D.value>220&&D.value<=230&&(D.value=220),d.value.style.width=`${D.value}px`}))}function Ie(){m.value===!0&&(m.value=!1,G.value&&window.cancelAnimationFrame(G.value))}}function we(w){w.target&&w.target.classList.contains("close")===!1&&(j.value=!0)}return(w,m)=>{const x=i("v-button"),ee=i("v-info"),D=i("v-overlay");return S(q)===!1?(s(),_(ee,{key:0,center:"",title:S(c)("no_app_access"),type:"danger",icon:"block"},{append:a(()=>[r(x,{to:"/logout"},{default:a(()=>[U(B(S(c)("switch_user")),1)]),_:1})]),default:a(()=>[U(B(S(c)("no_app_access_copy"))+" ",1)]),_:1},8,["title"])):(s(),k("div",{key:1,class:M(["private-view",{theme:S(be),"full-screen":S(re)}])},[V("aside",{id:"navigation",role:"navigation","aria-label":"Module Navigation",class:M({"is-open":R.value})},[r(ut),V("div",{ref_key:"moduleNavEl",ref:d,class:"module-nav alt-colors"},[r(Gt),V("div",Yt,[W(w.$slots,"navigation",{},void 0,!0)]),V("div",{class:M(["module-nav-resize-handle",{active:S(b)}]),onPointerenter:m[0]||(m[0]=h=>b.value=!0),onPointerleave:m[1]||(m[1]=h=>b.value=!1),onPointerdown:m[2]||(m[2]=Ce((...h)=>S(f)&&S(f)(...h),["self"])),onDblclick:m[3]||(m[3]=(...h)=>S(C)&&S(C)(...h))},null,34)],512)],2),V("div",{id:"main-content",ref_key:"contentEl",ref:n,class:"content"},[r(qe,{small:e.smallHeader,shadow:e.headerShadow,"show-sidebar-toggle":"",title:S(L),"onToggle:sidebar":m[4]||(m[4]=h=>j.value=!S(j)),onPrimary:m[5]||(m[5]=h=>R.value=!R.value)},ze({_:2},[Z(w.$slots,(h,G)=>({name:G,fn:a(le=>[W(w.$slots,G,Ge(Qe(le)),void 0,!0)])}))]),1032,["small","shadow","title"]),V("main",null,[W(w.$slots,"default",{},void 0,!0)])],512),V("aside",{id:"sidebar",ref_key:"sidebarEl",ref:p,role:"contentinfo",class:M(["alt-colors",{"is-open":S(j)}]),"aria-label":"Module Sidebar",onClick:we},[V("div",Zt,[r(Kt,{"sidebar-open":S(j)},{default:a(()=>[W(w.$slots,"sidebar",{},void 0,!0)]),_:3},8,["sidebar-open"]),xt,r(Rt,{modelValue:z.value,"onUpdate:modelValue":m[6]||(m[6]=h=>z.value=h),"sidebar-open":S(j)},null,8,["modelValue","sidebar-open"])])],2),r(D,{class:"nav-overlay",active:R.value,onClick:m[7]||(m[7]=h=>R.value=!1)},null,8,["active"]),r(D,{class:"sidebar-overlay",active:S(j),onClick:m[8]||(m[8]=h=>j.value=!1)},null,8,["active"]),r(gt),z.value===!1?(s(),_(Ct,{key:0,"sidebar-open":S(j)},null,8,["sidebar-open"])):A("",!0),r(_t)],2))}}});const ro=N(eo,[["__scopeId","data-v-19f983c5"]]);export{ro as PrivateView,ro as default};
