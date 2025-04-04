"use strict";(self.webpackChunkt_t=self.webpackChunkt_t||[]).push([[3371],{7932:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>m,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>n,toc:()=>u});const n=JSON.parse('{"type":"mdx","permalink":"/componentPlayground","source":"@site/src/pages/componentPlayground.mdx","description":"\u8a02\u95b1\u8868\u55ae","frontMatter":{},"unlisted":false}');var o=t(4848),i=t(8453),a=t(4996),s=t(5363),c=t(7683);const l={},d=void 0,m={},u=[{value:"\u8a02\u95b1\u8868\u55ae",id:"\u8a02\u95b1\u8868\u55ae",level:3},{value:"SubstackFeed",id:"substackfeed",level:3}];function p(e){const r={h3:"h3",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.h3,{id:"\u8a02\u95b1\u8868\u55ae",children:"\u8a02\u95b1\u8868\u55ae"}),"\n","\n",(0,o.jsx)(s.A,{children:()=>(0,o.jsx)(a.A,{})}),"\n",(0,o.jsx)(r.h3,{id:"substackfeed",children:"SubstackFeed"}),"\n","\n",(0,o.jsx)(c.A,{})]})}function h(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},5363:(e,r,t)=>{t.d(r,{A:()=>i});t(6540);var n=t(9136),o=t(4848);function i(e){let{children:r,fallback:t}=e;return(0,n.A)()?(0,o.jsx)(o.Fragment,{children:r?.()}):t??null}},4996:(e,r,t)=>{t.d(r,{A:()=>i});var n=t(6540),o=t(4848);const i=()=>{const[e,r]=(0,n.useState)(!1),[t,i]=(0,n.useState)(!1);return e?(0,o.jsxs)("div",{style:{margin:"2rem 0",padding:"1.5rem",backgroundColor:"var(--ifm-background-surface-color)",borderRadius:"8px",border:"1px solid var(--ifm-color-emphasis-200)"},children:[(0,o.jsx)("h3",{style:{marginBottom:"1rem"},children:"\u611f\u8b1d\u8a02\u95b1"}),(0,o.jsx)("p",{style:{fontSize:"0.9rem"},children:"\u53ea\u5dee\u4e00\u6b65\u4e86\uff01\u8acb\u81f3\u4fe1\u7bb1\u9a57\u8b49\u4f60\u7684\u90f5\u4ef6\u5730\u5740\u3002"})]}):(0,o.jsxs)("div",{style:{margin:"2rem 0",padding:"1.5rem",backgroundColor:"var(--ifm-background-surface-color)",borderRadius:"8px",border:"1px solid var(--ifm-color-emphasis-200)"},children:[(0,o.jsx)("h3",{style:{marginBottom:"1rem"},children:"\u8a02\u95b1\u6700\u65b0\u6587\u7ae0"}),(0,o.jsxs)("p",{style:{fontSize:"0.9rem",marginBottom:"1.5rem"},children:["\u6b61\u8fce\u4f7f\u7528\u96fb\u5b50\u4fe1\u7bb1\u63a5\u6536\u6700\u65b0\u6587\u7ae0\uff0c\u6216\u662f\u4f60\u4e5f\u53ef\u4ee5",(0,o.jsx)("a",{href:"/blog/rss.xml",children:"\u7531\u6b64\u8a02\u95b1 RSS"})]}),(0,o.jsxs)("form",{onSubmit:async e=>{e.preventDefault(),i(!0);const t=new FormData(e.target);t.get("email");try{(await fetch("https://buttondown.com/api/emails/embed-subscribe/thinking-today",{method:"POST",body:t})).ok&&r(!0)}catch(n){console.error("\u8a02\u95b1\u5931\u6557:",n)}finally{i(!1)}},style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[(0,o.jsx)("input",{type:"email",name:"email",placeholder:"\u8f38\u5165\u4f60\u7684 Email",required:!0,style:{width:"100%",padding:"0.8rem",borderRadius:"4px",border:"1px solid var(--ifm-color-emphasis-300)",backgroundColor:"var(--ifm-background-color)"}}),(0,o.jsx)("button",{type:"submit",disabled:t,style:{width:"100%",padding:"0.8rem",backgroundColor:"var(--ifm-color-primary)",color:"white",border:"none",borderRadius:"4px",cursor:t?"not-allowed":"pointer",fontWeight:"bold",opacity:t?.7:1},children:t?"\u8a02\u95b1\u4e2d...":"\u8a02\u95b1"})]})]})}},7683:(e,r,t)=>{t.d(r,{A:()=>a});var n=t(6540),o=t(4848);const i=e=>{const r=document.createElement("textarea");return r.innerHTML=e,r.value},a=()=>{const[e,r]=(0,n.useState)([]);return(0,n.useEffect)((()=>{(async()=>{try{const e=await fetch("https://cors-anywhere.herokuapp.com/https://mileyttc.substack.com/feed"),t=await e.text(),n=(new DOMParser).parseFromString(t,"text/xml"),o=Array.from(n.querySelectorAll("item")).slice(0,5).map((e=>({title:e.querySelector("title").textContent,link:e.querySelector("link").textContent,pubDate:new Date(e.querySelector("pubDate").textContent).toLocaleDateString(),description:e.querySelector("description")?i(e.querySelector("description").textContent):""})));r(o)}catch(e){console.error("Error fetching RSS feed:",e)}})()}),[]),(0,o.jsxs)("div",{style:{margin:"2rem 0",padding:"1.5rem",backgroundColor:"var(--ifm-background-surface-color)",borderRadius:"8px",border:"1px solid var(--ifm-color-emphasis-200)"},children:[(0,o.jsx)("h3",{children:"Learning to Walk Again"}),(0,o.jsx)("p",{style:{fontSize:"0.9rem",marginBottom:"1.5rem"},children:"Learning to walk again \u662f\u6a02\u5718 Foo Fighters \u7684\u6b4c\u300aWalk\u300b \u4e2d\u7684\u4e00\u53e5\u6b4c\u8a5e\uff0c\u5b83\u5e36\u9818\u4e26\u966a\u4f34\u8457\u6211\u5f9e\u6291\u9b31\u72c0\u614b\u4e2d\u6062\u5fa9\u3001\u6539\u8b8a\u6211\u7684\u8077\u6daf\u8def\u5f91\uff0c\u91cd\u65b0\u958b\u59cb\u3002\u8207 Thinking Today \u76f8\u6bd4 \uff0c\u6211\u5728\u9019\u500b Substack \u7a7a\u9593\u66f4\u6df1\u5165\u5730\u7d00\u9304\u4e86\u6211\u7d30\u5fae\u7684\u60c5\u7dd2\u3001\u500b\u4eba\u6210\u9577\u548c\u5c0d\u672a\u4f86\u7684\u60f3\u671b\u3002"}),(0,o.jsx)("h4",{children:"\u6700\u65b0\u6587\u7ae0"}),(0,o.jsx)("ul",{children:e.length>0?e.map(((e,r)=>(0,o.jsxs)("li",{children:[(0,o.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:e.title})," (",e.pubDate,")",(0,o.jsx)("p",{children:e.description})]},r))):(0,o.jsx)("p",{children:"\u8f09\u5165\u4e2d..."})}),(0,o.jsx)("button",{onClick:()=>window.open("https://mileyttc.substack.com","_blank"),style:{width:"100%",height:"46px",padding:"0.8rem",backgroundColor:"var(--ifm-color-primary)",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",fontWeight:"bold",opacity:1,erticalAlign:"middle"},children:"\u76f4\u63a5\u524d\u5f80 Substack"})]})}},8453:(e,r,t)=>{t.d(r,{R:()=>a,x:()=>s});var n=t(6540);const o={},i=n.createContext(o);function a(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);