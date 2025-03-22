"use strict";(self.webpackChunkt_t=self.webpackChunkt_t||[]).push([[1554],{2859:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"tech-notes/AI/AI-limitation/AI-limitation","title":"AI \u7684\u5148\u5929\u9650\u5236","description":"\u5373\u4f7f AI \u7684\u767c\u5c55\u8d8a\u4f86\u8d8a\u9032\u6b65\uff0c\u5b83\u4f9d\u7136\u9762\u81e8\u4e00\u4e9b\u5148\u5929\u6027\u7684\u9650\u5236\uff0c\u8b93\u5b83\u5728\u5be6\u969b\u61c9\u7528\u4e2d\u53ef\u80fd\u7522\u751f\u8aa4\u5dee\u6216\u4e0d\u6e96\u78ba\u7684\u60c5\u6cc1\u3002","source":"@site/docs/03-tech-notes/AI/AI-limitation/AI-limitation.mdx","sourceDirName":"03-tech-notes/AI/AI-limitation","slug":"/tech-notes/AI/AI-limitation/","permalink":"/garden/tech-notes/AI/AI-limitation/","draft":false,"unlisted":false,"tags":[{"inline":false,"label":"2024","permalink":"/garden/tags/2024"},{"inline":false,"label":"AI","permalink":"/garden/tags/ai"},{"inline":false,"label":"Note","permalink":"/garden/tags/note"}],"version":"current","lastUpdatedAt":1731168000000,"frontMatter":{"title":"AI \u7684\u5148\u5929\u9650\u5236","tags":["2024","ai","note"],"keywords":["AI","\u4eba\u5de5\u667a\u6167","\u9650\u5236"],"last_update":{"date":"2024/11/10"}},"sidebar":"tutorialSidebar","previous":{"title":"\u79d1\u6280\u7b46\u8a18","permalink":"/garden/category/\u79d1\u6280\u7b46\u8a18"},"next":{"title":"LLM \u662f AI \u7684\u4e00\u500b\u5b50\u96c6\u5408","permalink":"/garden/tech-notes/AI/LLM/"}}');var l=i(4848),s=i(8453);const a={title:"AI \u7684\u5148\u5929\u9650\u5236",tags:["2024","ai","note"],keywords:["AI","\u4eba\u5de5\u667a\u6167","\u9650\u5236"],last_update:{date:"2024/11/10"}},r=void 0,d={},c=[{value:"AI \u7684\u9650\u5236\uff1a\u77e5\u8b58\u622a\u6b62\u9ede\u3001\u77e5\u8b58\u98c4\u79fb\u3001\u504f\u8aa4\u3001\u5e7b\u89ba",id:"ai-\u7684\u9650\u5236\u77e5\u8b58\u622a\u6b62\u9ede\u77e5\u8b58\u98c4\u79fb\u504f\u8aa4\u5e7b\u89ba",level:2},{value:"\u77e5\u8b58\u622a\u6b62\u9ede\uff08Knowledge cutoff\uff09",id:"\u77e5\u8b58\u622a\u6b62\u9edeknowledge-cutoff",level:3},{value:"\u77e5\u8b58\u98c4\u79fb\uff08Drift\uff09",id:"\u77e5\u8b58\u98c4\u79fbdrift",level:3},{value:"\u504f\u8aa4\uff08Bias\uff09",id:"\u504f\u8aa4bias",level:3},{value:"\u7cfb\u7d71\u6027\u504f\u8aa4\uff08Systemic Bias\uff09",id:"\u7cfb\u7d71\u6027\u504f\u8aa4systemic-bias",level:3},{value:"\u6578\u64da\u504f\u8aa4\uff08Data Bias\uff09",id:"\u6578\u64da\u504f\u8aa4data-bias",level:3},{value:"\u5e7b\u89ba\uff08Hallucinations\uff09",id:"\u5e7b\u89bahallucinations",level:3},{value:"\u91cd\u9ede\u6574\u7406",id:"\u91cd\u9ede\u6574\u7406",level:2}];function o(e){const n={h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:"\u5373\u4f7f AI \u7684\u767c\u5c55\u8d8a\u4f86\u8d8a\u9032\u6b65\uff0c\u5b83\u4f9d\u7136\u9762\u81e8\u4e00\u4e9b\u5148\u5929\u6027\u7684\u9650\u5236\uff0c\u8b93\u5b83\u5728\u5be6\u969b\u61c9\u7528\u4e2d\u53ef\u80fd\u7522\u751f\u8aa4\u5dee\u6216\u4e0d\u6e96\u78ba\u7684\u60c5\u6cc1\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u7121\u8ad6\u662f\u5c07\u5b83\u61c9\u7528\u65bc\u4e0d\u540c\u7522\u54c1\u4e0a\u7684\u958b\u767c\u7aef\uff0c\u9084\u662f\u4f7f\u7528\u61c9\u7528\u76f8\u95dc\u6280\u8853\u5de5\u5177\u7684\u7528\u6236\u7aef\uff0c\u77ad\u89e3\u4ed6\u7684\u9650\u5236\u4e26\u57f9\u990a\u8fa8\u8a8d AI \u63d0\u4f9b\u7684\u54ea\u4e9b\u5167\u5bb9\u662f\u771f\u5be6\u6709\u6548\u90fd\u662f\u5fc5\u8981\u7684\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"ai-\u7684\u9650\u5236\u77e5\u8b58\u622a\u6b62\u9ede\u77e5\u8b58\u98c4\u79fb\u504f\u8aa4\u5e7b\u89ba",children:"AI \u7684\u9650\u5236\uff1a\u77e5\u8b58\u622a\u6b62\u9ede\u3001\u77e5\u8b58\u98c4\u79fb\u3001\u504f\u8aa4\u3001\u5e7b\u89ba"}),"\n",(0,l.jsx)(n.h3,{id:"\u77e5\u8b58\u622a\u6b62\u9edeknowledge-cutoff",children:"\u77e5\u8b58\u622a\u6b62\u9ede\uff08Knowledge cutoff\uff09"}),"\n",(0,l.jsx)(n.p,{children:"\u77e5\u8b58\u622a\u6b62\u9ede\u6307\u7684\u662f AI \u7684\u8a13\u7df4\u6578\u64da\u50c5\u66f4\u65b0\u5230\u67d0\u4e00\u7279\u5b9a\u6642\u9593\u9ede\u4e4b\u5f8c\u4fbf\u4e0d\u518d\u66f4\u65b0\u3002\u56e0\u6b64\uff0cAI \u5c0d\u65bc\u9019\u4e4b\u5f8c\u7684\u6700\u65b0\u8cc7\u8a0a\u4e00\u7121\u6240\u77e5\uff0c\u7121\u6cd5\u4e86\u89e3\u8a13\u7df4\u65e5\u671f\u5f8c\u767c\u751f\u7684\u4e8b\u4ef6\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u5047\u8a2d\u4e00\u500b AI \u6a21\u578b\u7684\u77e5\u8b58\u622a\u6b62\u9ede\u70ba 2023 \u5e74 10 \u6708\uff0c\u90a3\u9ebc\u5728 2024 \u5e74\u554f\u9019\u500b AI \u7576\u524d\u7684\u4e16\u754c\u5927\u4e8b\uff0c\u5b83\u53ef\u80fd\u6703\u56de\u7b54\u8207\u73fe\u5be6\u4e0d\u7b26\u7684\u5167\u5bb9\u3002\u4f8b\u5982\uff0c\u5c0d\u65bc\u525b\u767c\u751f\u7684\u9078\u8209\u7d50\u679c\u6216\u79d1\u6280\u9032\u5c55\uff0c\u5b83\u53ef\u80fd\u7121\u6cd5\u6b63\u78ba\u56de\u7b54\u3002"}),"\n",(0,l.jsx)(n.h3,{id:"\u77e5\u8b58\u98c4\u79fbdrift",children:"\u77e5\u8b58\u98c4\u79fb\uff08Drift\uff09"}),"\n",(0,l.jsx)(n.p,{children:"\u77e5\u8b58\u6f02\u79fb\u662f\u6307 AI \u6a21\u578b\u7684\u6e96\u78ba\u6027\u96a8\u8457\u6642\u9593\u4e0b\u964d\u7684\u73fe\u8c61\uff0c\u9019\u901a\u5e38\u662f\u56e0\u70ba AI \u6240\u7528\u7684\u8a13\u7df4\u6578\u64da\u5df2\u7d93\u4e0d\u518d\u53cd\u6620\u7576\u524d\u7684\u771f\u5be6\u60c5\u6cc1\u3002\u77e5\u8b58\u622a\u6b62\u9ede\u5f80\u5f80\u662f\u5c0e\u81f4\u77e5\u8b58\u6f02\u79fb\u7684\u539f\u56e0\uff0c\u56e0\u70ba AI \u7121\u6cd5\u66f4\u65b0\u65b0\u8cc7\u8a0a\uff0c\u81ea\u7136\u6703\u96a8\u8457\u6642\u9593\u63a8\u79fb\u9010\u6f38\u8207\u7576\u4e0b\u60c5\u5883\u812b\u7bc0\uff0c\u5c0e\u81f4\u932f\u8aa4\u6216\u4e0d\u9069\u7576\u7684\u5efa\u8b70\uff0c\u5f71\u97ff\u5176\u6e96\u78ba\u6027\u548c\u9069\u7528\u6027\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u5047\u8a2d\u4e00\u500b\u91d1\u878d AI \u9810\u6e2c\u6a21\u578b\u5728\u904e\u53bb\u7684\u7d93\u6fdf\u6578\u64da\u4e0a\u8a13\u7df4\uff0c\u4f46\u7531\u65bc\u5e02\u5834\u689d\u4ef6\u96a8\u6642\u9593\u8b8a\u5316\uff0c\u904e\u53bb\u7684\u6578\u64da\u53ef\u80fd\u4e0d\u518d\u9069\u7528\u65bc\u73fe\u6cc1\uff0c\u9019\u6703\u5c0e\u81f4\u6a21\u578b\u7684\u9810\u6e2c\u5931\u6e96\u3002\u4f8b\u5982\uff0c\u4e00\u500b\u623f\u5730\u7522\u50f9\u683c\u9810\u6e2c\u6a21\u578b\u82e5\u7121\u6cd5\u8003\u91cf\u6700\u65b0\u7684\u7d93\u6fdf\u8b8a\u52d5\uff0c\u53ef\u80fd\u7121\u6cd5\u6b63\u78ba\u9810\u6e2c\u672a\u4f86\u7684\u623f\u50f9\u3002"}),"\n",(0,l.jsx)(n.h3,{id:"\u504f\u8aa4bias",children:"\u504f\u8aa4\uff08Bias\uff09"}),"\n",(0,l.jsx)(n.p,{children:"\u504f\u8aa4\u662f\u6307 AI \u5728\u751f\u6210\u7d50\u679c\u6642\uff0c\u6703\u53d7\u5230\u8a13\u7df4\u6578\u64da\u4e2d\u6f5b\u5728\u7684\u504f\u898b\u5f71\u97ff\uff0c\u53ef\u80fd\u6703\u51fa\u73fe\u4e0d\u516c\u6b63\u6216\u626d\u66f2\u7684\u7d50\u679c\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u504f\u8aa4\u53ef\u4f9d\u7167\u7522\u751f\u4f86\u6e90\u5206\u70ba\u4ee5\u4e0b\u5169\u7a2e\u985e\u578b\uff1a"}),"\n",(0,l.jsx)(n.h3,{id:"\u7cfb\u7d71\u6027\u504f\u8aa4systemic-bias",children:"\u7cfb\u7d71\u6027\u504f\u8aa4\uff08Systemic Bias\uff09"}),"\n",(0,l.jsx)(n.p,{children:"\u4f86\u81ea\u793e\u6703\u3001\u7d44\u7e54\u6216\u5236\u5ea6\u7684\u504f\u597d\uff0c\u4f7f\u5f97 AI \u5728\u8655\u7406\u6578\u64da\u6642\u5f9e\u5e36\u6709\u504f\u898b\u7684\u8a13\u7df4\u6578\u64da\u4e2d\u5b78\u5230\u4e86\u7279\u5b9a\u504f\u597d\uff0c\u4e26\u5728\u7121\u610f\u4e2d\u5ef6\u7e8c\u4e86\u904e\u53bb\u5b58\u5728\u7684\u504f\u898b\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u5047\u8a2d\u67d0\u516c\u53f8\u958b\u767c\u4e86\u4e00\u500b AI \u7cfb\u7d71\u4f86\u81ea\u52d5\u7be9\u9078\u61c9\u8058\u8005\u7684\u5c65\u6b77\uff0c\u4e26\u6839\u64da\u61c9\u8058\u8005\u7684\u80cc\u666f\u3001\u7d93\u6b77\u548c\u6280\u80fd\u9032\u884c\u8a55\u5206\u3002\u9019\u500b AI \u7cfb\u7d71\u7684\u8a13\u7df4\u6578\u64da\u4e3b\u8981\u4f86\u81ea\u65bc\u516c\u53f8\u904e\u53bb\u591a\u5e74\u7684\u62db\u8058\u8a18\u9304\uff0c\u4f46\u9019\u4e9b\u8a18\u9304\u4e2d\u5305\u542b\u4e86\u9577\u671f\u4ee5\u4f86\u5f62\u6210\u7684\u6027\u5225\u504f\u898b\u2014\u2014\u4f8b\u5982\uff0c\u8a72\u516c\u53f8\u7684\u904e\u5f80\u8058\u7528\u8a18\u9304\u4e2d\u7537\u6027\u5019\u9078\u4eba\u6bd4\u4f8b\u8f03\u9ad8\u3002\u5728\u9019\u7a2e\u60c5\u6cc1\u4e0b\uff0cAI \u7cfb\u7d71\u53ef\u80fd\u6703\u4e0d\u81ea\u89ba\u5730\u5b78\u7fd2\u5230\u300c\u7537\u6027\u66f4\u9069\u5408\u67d0\u4e9b\u8077\u4f4d\u300d\u7684\u504f\u898b\uff0c\u5f9e\u800c\u5728\u7be9\u9078\u904e\u7a0b\u4e2d\u81ea\u52d5\u5c0d\u5973\u6027\u61c9\u8058\u8005\u6253\u4f4e\u5206\uff0c\u5373\u4f7f\u5979\u5011\u7684\u8cc7\u6b77\u3001\u7d93\u9a57\u548c\u6280\u80fd\u90fd\u76f8\u7576\u512a\u79c0\u3002\u9019\u6a23\u7684\u7cfb\u7d71\u6027\u504f\u8aa4\u4f7f\u5f97 AI \u7be9\u9078\u6d41\u7a0b\u4e2d\u5b58\u5728\u4e0d\u516c\u5e73\u7684\u6027\u5225\u6b67\u8996\uff0c\u5f9e\u800c\u5f71\u97ff\u4e86\u5973\u6027\u61c9\u8058\u8005\u7684\u6a5f\u6703\u3002"}),"\n",(0,l.jsx)(n.h3,{id:"\u6578\u64da\u504f\u8aa4data-bias",children:"\u6578\u64da\u504f\u8aa4\uff08Data Bias\uff09"}),"\n",(0,l.jsx)(n.p,{children:"\u7531\u65bc\u8a13\u7df4\u6578\u64da\u672c\u8eab\u5b58\u5728\u504f\u898b\u6216\u932f\u8aa4\uff0cAI \u6a21\u578b\u7684\u8f38\u51fa\u4e5f\u56e0\u6b64\u4e0d\u6e96\u78ba\u6216\u6709\u504f\u5411\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u4f8b\u5982\u4e00\u500b\u4eba\u81c9\u8fa8\u8b58\u7cfb\u7d71\u7684\u8a13\u7df4\u6578\u64da\u4e3b\u8981\u4f86\u81ea\u65bc\u67d0\u500b\u65cf\u7fa4\u7684\u4eba\uff0c\u6bd4\u5982\u767d\u4eba\uff0c\u9019\u500b\u7cfb\u7d71\u53ef\u80fd\u6703\u5c0d\u9ec3\u7a2e\u4eba\u3001\u9ed1\u4eba\u7b49\u5176\u4ed6\u65cf\u7fa4\u7684\u8fa8\u8b58\u8f03\u4e0d\u6e96\u78ba\uff0c\u5c0e\u81f4\u8aa4\u5224\u6027\u5225\u6216\u5e74\u9f61\u3002"}),"\n",(0,l.jsx)(n.h3,{id:"\u5e7b\u89bahallucinations",children:"\u5e7b\u89ba\uff08Hallucinations\uff09"}),"\n",(0,l.jsx)(n.p,{children:"\u5e7b\u89ba\u662f\u6307 AI \u751f\u6210\u7684\u7b54\u6848\u770b\u4f3c\u5408\u7406\u4f46\u5be6\u969b\u4e0d\u6b63\u78ba\uff0c\u6216\u662f\u7de8\u9020\u51fa\u7121\u6839\u64da\u7684\u5167\u5bb9\u3002\u9019\u7a2e\u932f\u8aa4\u53ef\u80fd\u662f\u56e0\u70ba AI \u5728\u8a13\u7df4\u6578\u64da\u4e2d\u627e\u4e0d\u5230\u76f4\u63a5\u53c3\u8003\uff0c\u65bc\u662f\u300c\u5275\u9020\u300d\u4e86\u5167\u5bb9\u3002\u5e7b\u89ba\u53ef\u80fd\u6703\u8aa4\u5c0e\u4f7f\u7528\u8005\uff0c\u4f7f\u4ed6\u5011\u76f8\u4fe1 AI \u7684\u932f\u8aa4\u7b54\u6848\uff0c\u56e0\u6b64\u5728 AI \u56de\u7b54\u5f8c\u9700\u9032\u884c\u4eba\u70ba\u5be9\u67e5\uff0c\u4ee5\u78ba\u4fdd\u8cc7\u8a0a\u6b63\u78ba\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"\u91cd\u9ede\u6574\u7406",children:"\u91cd\u9ede\u6574\u7406"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u77e5\u8b58\u622a\u6b62\u9ede\u4f86\u81ea AI \u7121\u6cd5\u7372\u53d6\u6700\u65b0\u8cc7\u8a0a\uff0c\u662f\u77e5\u8b58\u7684\u975c\u614b\u9650\u5236"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u98c4\u79fb\u662f\u77e5\u8b58\u9010\u6f38\u812b\u7bc0\u7684\u52d5\u614b\u5f71\u97ff\uff0c\u4f7f AI \u56de\u61c9\u7684\u77e5\u8b58\u4e0d\u7b26\u5408\u73fe\u6cc1"}),"\n",(0,l.jsx)(n.li,{children:"\u5e7b\u89ba\u662f\u77e5\u8b58\u622a\u6b62\u9ede\u548c\u98c4\u79fb\u9020\u6210\u7684\u7d50\u679c\u4e4b\u4e00\uff0c\u7576 AI \u7121\u6cd5\u63d0\u4f9b\u771f\u5be6\u7b54\u6848\u6642\uff0c\u53ef\u80fd\u70ba\u4e86\u586b\u88dc\u7a7a\u7f3a\u800c\u7de8\u9020\u51fa\u932f\u8aa4\u7684\u56de\u61c9"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u504f\u8aa4\u548c\u5e7b\u89ba\u90fd\u53ef\u80fd\u4f86\u81ea AI \u8a13\u7df4\u6578\u64da\u7684\u54c1\u8cea\u554f\u984c"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u7576\u6578\u64da\u672c\u8eab\u5b58\u5728\u504f\u898b\u6216\u932f\u8aa4\uff0cAI \u5c31\u53ef\u80fd\u5728\u56de\u7b54\u4e2d\u53cd\u6620\u9019\u4e9b\u504f\u898b"}),"\n",(0,l.jsx)(n.li,{children:"\u504f\u898b\u53ef\u80fd\u5c0e\u81f4\u5e7b\u89ba\u4e2d\u7684\u4e0d\u516c\u5e73\u8868\u73fe\uff0c\u8b93 AI \u7de8\u9020\u51fa\u6709\u504f\u5411\u7684\u7b54\u6848"}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>r});var t=i(6540);const l={},s=t.createContext(l);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);