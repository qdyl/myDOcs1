import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o,c,b as l,w as i,d as n,f as s}from"./app-E2yLQ0Pc.js";const p={},r=n("h3",{id:"解析url参数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#解析url参数","aria-hidden":"true"},"#"),s(" 解析URL参数")],-1),u=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[s("    "),n("span",{class:"token keyword"},"const"),s(" pageHref "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"String"),n("span",{class:"token punctuation"},"("),s("window"),n("span",{class:"token punctuation"},"."),s("location"),n("span",{class:"token punctuation"},"."),s("href"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" url "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"URL"),n("span",{class:"token punctuation"},"("),s("pageHref"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" searchParams "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"URLSearchParams"),n("span",{class:"token punctuation"},"("),s("url"),n("span",{class:"token punctuation"},"."),s("search"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token comment"},"// 解析出 title 参数的值"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" title "),n("span",{class:"token operator"},"="),s(" searchParams"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"get"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"adv"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("title"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 输出: hello"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),k=n("figure",null,[n("img",{src:"https://gitee.com/qdshaonianlang/imgs/raw/master/img/image-20240202160335798.png",alt:"image-20240202160335798",width:"200",height:"110",tabindex:"0",loading:"lazy"}),n("figcaption",null,"image-20240202160335798")],-1);function d(m,g){const a=t("CodeDemo");return o(),c("div",null,[r,l(a,{id:"code-demo-3",type:"normal",title:"%E6%BC%94%E7%A4%BA",code:"eJyrVsoqVrJSUgCC5Py84hKFgsT0VI+i1DQFW4XgkqLMvHSN8sy8lPxyvZz85MSSzPw8vQygrGZMHkJLaVEOUHVearlCaJCPBswATWtkNcWpiUXJGQGJRYm5xQjFwUiiGkBj9CDKYFr19RVeLF/8bN6Ep+27FEoyS3JSFZ72Nz2buuH5rJanDXuQzYfI2qLYo5eeWqIRo5SYUhajhOya/JxUoG/SNcB6NK3B1uybDLTDSiEjNScnPyZPqRYAL9tmTg=="},{default:i(()=>[u]),_:1}),k])}const f=e(p,[["render",d],["__file","page2.html.vue"]]);export{f as default};
