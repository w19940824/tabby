(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3185],{1453:function(e,t,n){Promise.resolve().then(n.bind(n,32191)),Promise.resolve().then(n.bind(n,35590)),Promise.resolve().then(n.bind(n,80629)),Promise.resolve().then(n.t.bind(n,33070,23)),Promise.resolve().then(n.t.bind(n,84545,23)),Promise.resolve().then(n.t.bind(n,90781,23)),Promise.resolve().then(n.t.bind(n,45274,23))},32191:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var r=n(36164),s=n(11978),i=n(57288),o=n(30601);function c(e){let{children:t}=e,n=(0,s.usePathname)();return(0,r.jsxs)("div",{className:(0,i.cn)("flex min-h-screen flex-col",{"bg-background":"/chat"!==n,"bg-transparent":"/chat"===n}),children:[(0,r.jsx)(o.xc,{}),t]})}},30601:function(e,t,n){"use strict";n.d(t,{Hb:function(){return h},wt:function(){return l},xc:function(){return m},yo:function(){return f}});var r=n(36164),s=n(3546),i=n(74630),o=n(36327),c=n(80605),u=n(57288),a=n(81565);let l="3.5rem",d=s.createContext({}),f=e=>{let{children:t}=e,n=(0,c.UA)(),[o,u]=s.useState(!1);return s.useEffect(()=>{let e=window.self!==window.top;e||(0,i.Z)(n)||u(n)},[n]),(0,r.jsx)(d.Provider,{value:{isShowDemoBanner:o,setIsShowDemoBanner:u},children:t})};function h(){let{isShowDemoBanner:e,setIsShowDemoBanner:t}=s.useContext(d);return[e,t]}function m(){let[e,t]=h(),{data:n}=(0,o.Z)("https://api.github.com/repos/TabbyML/tabby",e=>fetch(e).then(e=>e.json()));return(0,r.jsxs)("div",{className:(0,u.cn)("flex items-center justify-between bg-primary px-4 text-primary-foreground transition-[opacity,height] md:px-5",{"opacity-100 pointer-events-auto":e,"opacity-0 pointer-events-none":!e}),style:e?{height:l}:{height:0},children:[(0,r.jsxs)("a",{href:"https://links.tabbyml.com/schedule-a-demo",target:"_blank",className:"flex items-center gap-x-2 text-xs font-semibold underline md:text-sm",children:[(0,r.jsx)("span",{children:"\uD83D\uDCC6"}),(0,r.jsx)("span",{children:"Book a 30-minute product demo."})]}),e&&(0,r.jsx)("img",{referrerPolicy:"no-referrer-when-downgrade",src:"https://static.scarf.sh/a.png?x-pxid=b1d0308a-b3c5-425a-972a-378d883a2bca"}),(0,r.jsxs)("div",{className:"flex items-center gap-x-4 md:gap-x-8",children:[(0,r.jsxs)("a",{href:"https://github.com/TabbyML/tabby",target:"_blank",className:"flex items-center transition-all hover:opacity-70",children:[(0,r.jsx)(a.IconGithub,{}),(0,r.jsxs)("div",{className:"ml-2 hidden md:block",children:[(0,r.jsx)("p",{className:"text-xs font-semibold",children:"TabbyML/tabby"}),(0,r.jsxs)("div",{className:(0,u.cn)("flex items-center text-xs transition-all",{"h-4 opacity-70":n,"h-0 opacity-0":!n}),children:[(0,r.jsx)(a.IconStar,{className:"mr-1 h-2.5 w-2.5"}),(0,r.jsx)("span",{children:null==n?void 0:n.stargazers_count}),(0,r.jsx)(a.IconGitFork,{className:"ml-2 mr-1 h-2.5 w-2.5"}),(0,r.jsx)("span",{children:null==n?void 0:n.forks_count})]})]})]}),(0,r.jsx)(a.IconClose,{className:"cursor-pointer transition-all hover:opacity-70",onClick:()=>t(!1)})]})]})}},90155:function(e,t,n){"use strict";n.r(t),n.d(t,{BANNER_HEIGHT:function(){return f},LicenseBanner:function(){return x},ShowLicenseBannerProvider:function(){return m},useShowLicenseBanner:function(){return p}});var r=n(36164),s=n(3546),i=n(70652),o=n.n(i),c=n(11978),u=n(29917),a=n(57288),l=n(81565),d=n(31458);let f="3.5rem",h=s.createContext({}),m=e=>{let{children:t}=e,{isExpired:n,isSeatsExceeded:i,isLicenseOK:o}=(0,u.Cz)(),[c,a]=s.useState(!1);return s.useEffect(()=>{let e=window.self!==window.top;!e&&(n||i?a(!0):o&&a(!1))},[o,n,i]),(0,r.jsx)(h.Provider,{value:{isShowLicenseBanner:c,setIsShowLicenseBanner:a},children:t})};function p(){let{isShowLicenseBanner:e,setIsShowLicenseBanner:t}=s.useContext(h);return[e,t]}function x(){let[e,t]=p(),{isExpired:n,isSeatsExceeded:i}=(0,u.Cz)(),h=(0,c.usePathname)(),m=(0,s.useMemo)(()=>n?"Your subscription is expired.":i?"You have more active users than seats included in your subscription.":"No valid license configured",[n,i]);return(0,r.jsxs)("div",{className:(0,a.cn)("flex items-center justify-between bg-secondary px-4 text-secondary-foreground transition-[height,opacity] md:px-5",{"opacity-100 pointer-events-auto border-b":e,"opacity-0 pointer-events-none":!e}),style:e?{height:f}:{height:0},children:[(0,r.jsxs)("div",{className:"flex items-center gap-1 font-semibold text-destructive",children:[(0,r.jsx)(l.IconNotice,{}),m]}),(0,r.jsxs)("div",{className:"flex items-center gap-x-4 md:gap-x-8",children:["/settings/subscription"!==h&&(0,r.jsx)(o(),{href:"/settings/subscription",className:(0,a.cn)((0,d.d)(),"gap-1"),children:"See more"}),(0,r.jsx)(l.IconClose,{className:"cursor-pointer transition-all hover:opacity-70",onClick:()=>t(!1)})]})]})}},35590:function(e,t,n){"use strict";n.r(t),n.d(t,{Providers:function(){return j}});var r=n(36164),s=n(3546),i=n(11978),o=n(28242),c=n(40055),u=n(48990),a=n(56383),l=n(80605);function d(){let e=(0,i.usePathname)(),t=(0,i.useSearchParams)(),n=(0,a.U0)();return(0,s.useEffect)(()=>{if(e&&n){let r=window.origin+e;t.toString()&&(r+="?".concat(t.toString())),n.capture("$pageview",{$current_url:r})}},[e,t,n]),null}function f(e){let{children:t}=e,n=(0,l.UA)(),[i,o]=(0,s.useState)();return(0,s.useEffect)(()=>{if(n&&!i){let e=window.self!==window.top;if(e)return;let t=u.ZP.init("phc_aBzNGHzlOy2C8n1BBDtH7d4qQsIw9d8T0unVlnKfdxB",{api_host:"https://us.i.posthog.com",person_profiles:"identified_only",capture_pageview:!1});o(t||void 0)}},[n]),(0,r.jsx)(a.zf,{client:i,children:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d,{}),t]})})}var h=n(91302),m=n(11634),p=n(29),x=n(30601),g=n(90155),v=n(38736);let b=["/chat"];function j(e){let{children:t,...n}=e,s=(0,i.usePathname)(),u=b.includes(s),a=(0,i.useSearchParams)(),l=a.get("theme"),d=a.get("client");return l&&(n.defaultTheme=l),"vscode"===d&&(n.defaultTheme="none"),(0,r.jsx)(o.f,{...n,children:(0,r.jsx)(c.zt,{value:m.Lp,children:(0,r.jsx)(p.pn,{children:(0,r.jsx)(h.Ho,{children:(0,r.jsx)(v.J,{children:(0,r.jsx)(x.yo,{children:(0,r.jsx)(g.ShowLicenseBannerProvider,{children:(0,r.jsxs)(f,{children:[!u&&(0,r.jsx)(y,{}),t]})})})})})})})})}function y(){return(0,h.av)(),(0,r.jsx)(r.Fragment,{})}},38736:function(e,t,n){"use strict";n.d(t,{J:function(){return d},U:function(){return f}});var r=n(36164),s=n(3546),i=n(7062),o=n.n(i),c=n(9010),u=n(24449),a=n(16784);let l=s.createContext({}),d=e=>{let{children:t}=e,{theme:n}=(0,c.X)(),[i,d]=s.useState(!1),[f]=(0,u.n)(i,200,{leading:!0}),h=(0,a.d)(i);s.useEffect(()=>{o().config({barColors:{0:"dark"===n?"#DC981A":"#B7942B"}})},[]);let m=s.useCallback(e=>{e&&e===h.current||d(e)},[]);return(0,r.jsxs)(l.Provider,{value:{progress:f,setProgress:m},children:[f&&(0,r.jsx)(o(),{}),t]})},f=()=>s.useContext(l)},80629:function(e,t,n){"use strict";n.r(t),n.d(t,{Toaster:function(){return o}});var r=n(36164),s=n(28242),i=n(2578);let o=e=>{let{...t}=e,{theme:n="system"}=(0,s.F)();return(0,r.jsx)(i.x,{theme:n,className:"toaster group",toastOptions:{classNames:{toast:"group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",description:"group-[.toast]:text-muted-foreground",actionButton:"group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",cancelButton:"group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"}},...t})}},29:function(e,t,n){"use strict";n.d(t,{_v:function(){return l},aJ:function(){return a},pn:function(){return c},u:function(){return u}});var r=n(36164),s=n(3546),i=n(44421),o=n(57288);let c=i.zt,u=i.fC,a=i.xz;i.h_;let l=s.forwardRef((e,t)=>{let{className:n,sideOffset:s=4,...c}=e;return(0,r.jsx)(i.VY,{ref:t,sideOffset:s,className:(0,o.cn)("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-xs font-medium text-popover-foreground shadow-md animate-in fade-in-50 data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1",n),...c})});l.displayName=i.VY.displayName},9010:function(e,t,n){"use strict";n.d(t,{X:function(){return s}});var r=n(28242);function s(){let{theme:e,systemTheme:t,setTheme:n}=(0,r.F)();return{theme:e&&"system"!==e?e:t||"light",setTheme:n,systemTheme:t}}},24449:function(e,t,n){"use strict";n.d(t,{S:function(){return c},n:function(){return u}});var r=n(3546),s=n(45391),i=n(16784);let o=e=>{let t=(0,i.d)(e);r.useEffect(()=>()=>{t.current()},[])};function c(e,t,n){let c=(0,i.d)(e),u=r.useMemo(()=>(0,s.Z)(function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return c.current(...t)},t,n),[]);return o(()=>{var e;null==n||null===(e=n.onUnmount)||void 0===e||e.call(n,u),u.cancel()}),{run:u,cancel:u.cancel,flush:u.flush}}function u(e,t,n){let[s,i]=r.useState(e),{run:o}=c(()=>{i(e)},t,n);return r.useEffect(()=>{o()},[e]),[s,i]}},16784:function(e,t,n){"use strict";n.d(t,{d:function(){return s}});var r=n(3546);function s(e){let t=r.useRef(e);return t.current=e,t}},29917:function(e,t,n){"use strict";n.d(t,{Cz:function(){return l},Gm:function(){return a},jp:function(){return u}});var r=n(11978),s=n(40055),i=n(43240),o=n(18500);let c=(0,i.BX)("\n  query GetLicenseInfo {\n    license {\n      type\n      status\n      seats\n      seatsUsed\n      issuedAt\n      expiresAt\n    }\n  }\n"),u=()=>(0,s.aM)({query:c}),a=()=>{let[{data:e}]=u();return null==e?void 0:e.license},l=e=>{var t;let[{data:n}]=u(),s=null==n?void 0:n.license,i=(0,r.useSearchParams)(),c=!!s&&(!(null==e?void 0:null===(t=e.licenses)||void 0===t?void 0:t.length)||e.licenses.includes(s.type)),a=(null==s?void 0:s.status)===o.rW.Ok,l=(null==s?void 0:s.status)===o.rW.Expired,d=(null==s?void 0:s.status)===(null===o.rW||void 0===o.rW?void 0:o.rW.SeatsExceeded),f="expired"===i.get("licenseError"),h="seatsExceed"===i.get("licenseError");return{hasLicense:!!s,isLicenseOK:a&&!(f||h),isExpired:l||f,isSeatsExceeded:d||h,hasSufficientLicense:c}}},45274:function(){}},function(e){e.O(0,[8415,7430,55,7812,4007,340,2546,1283,3449,2578,4421,1454,7497,7288,1565,3240,4656,3375,5289,1744],function(){return e(e.s=1453)}),_N_E=e.O()}]);