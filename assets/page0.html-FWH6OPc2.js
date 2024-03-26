import{_ as c}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as i,o as l,c as p,d as e,w as t,b as o,e as n,f as a}from"./app-1NjjKqHv.js";const r={},u=o(`<h2 id="常用" tabindex="-1"><a class="header-anchor" href="#常用" aria-hidden="true">#</a> 常用</h2><h3 id="判断为空值" tabindex="-1"><a class="header-anchor" href="#判断为空值" aria-hidden="true">#</a> 判断为空值</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">_isEmpty</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token comment">// 如果是基本数据烈性</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;&#39;</span><span class="token punctuation">,</span><span class="token keyword">undefined</span><span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    
  <span class="token punctuation">}</span>


<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="正则" tabindex="-1"><a class="header-anchor" href="#正则" aria-hidden="true">#</a> 正则</h2><h2 id="浏览器" tabindex="-1"><a class="header-anchor" href="#浏览器" aria-hidden="true">#</a> 浏览器</h2><h3 id="解析url参数" tabindex="-1"><a class="header-anchor" href="#解析url参数" aria-hidden="true">#</a> 解析URL参数</h3>`,6),d=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[a("    "),n("span",{class:"token keyword"},"const"),a(" pageHref "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"String"),n("span",{class:"token punctuation"},"("),a("window"),n("span",{class:"token punctuation"},"."),a("location"),n("span",{class:"token punctuation"},"."),a("href"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" url "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token keyword"},"new"),a(),n("span",{class:"token class-name"},"URL"),n("span",{class:"token punctuation"},"("),a("pageHref"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" searchParams "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token keyword"},"new"),a(),n("span",{class:"token class-name"},"URLSearchParams"),n("span",{class:"token punctuation"},"("),a("url"),n("span",{class:"token punctuation"},"."),a("search"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token comment"},"// 解析出 title 参数的值"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" title "),n("span",{class:"token operator"},"="),a(" searchParams"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"get"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"adv"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),a("title"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(),n("span",{class:"token comment"},"// 输出: hello"),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),k=o(`<figure><img src="https://gitee.com/qdshaonianlang/imgs/raw/master/img/image-20240202160335798.png" alt="image-20240202160335798" width="200" height="110" tabindex="0" loading="lazy"><figcaption>image-20240202160335798</figcaption></figure><h2 id="文本-字符处理" tabindex="-1"><a class="header-anchor" href="#文本-字符处理" aria-hidden="true">#</a> 文本/字符处理</h2><h3 id="从身份证中解析信息" tabindex="-1"><a class="header-anchor" href="#从身份证中解析信息" aria-hidden="true">#</a> 从身份证中解析信息</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="移除富文本中的html标签" tabindex="-1"><a class="header-anchor" href="#移除富文本中的html标签" aria-hidden="true">#</a> 移除富文本中的html标签</h3>`,5),m=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[a("  "),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"stripHtmlTags"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"htmlString"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"return"),a(" htmlString"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"replace"),n("span",{class:"token punctuation"},"("),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},"<[^>]*>"),n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-flags"},"g")]),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`

  `),n("span",{class:"token keyword"},"var"),a(" richText "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token string"},'"<p>我是富文本内容 <strong>加粗字体</strong>你好</p>"'),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token keyword"},"var"),a(" plainText "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"stripHtmlTags"),n("span",{class:"token punctuation"},"("),a("richText"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),a("plainText"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),h=n("figure",null,[n("img",{src:"https://gitee.com/qdshaonianlang/imgs/raw/master/img/image-20240227220318302.png",alt:"image-20240227220318302",tabindex:"0",loading:"lazy"}),n("figcaption",null,"image-20240227220318302")],-1);function g(v,b){const s=i("CodeDemo");return l(),p("div",null,[u,e(s,{id:"code-demo-16",type:"normal",title:"%E6%BC%94%E7%A4%BA",code:"eJyrVsoqVrJSUgCC5Py84hKFgsT0VI+i1DQFW4XgkqLMvHSN8sy8lPxyvZz85MSSzPw8vQygrGZMHkJLaVEOUHVearlCaJCPBswATWtkNcWpiUXJGQGJRYm5xQjFwUiiGkBj9CDKYFr19RVeLF/8bN6Ep+27FEoyS3JSFZ72Nz2buuH5rJanDXuQzYfI2qLYo5eeWqIRo5SYUhajhOya/JxUoG/SNcB6NK3B1uybDLTDSiEjNScnPyZPqRYAL9tmTg=="},{default:t(()=>[d]),_:1}),k,e(s,{id:"code-demo-32",type:"normal",title:"%E7%A4%BA%E4%BE%8B",code:"eJyrVsoqVrJSUlBIK81LLsnMz1MoLinKLPAoyc0JSUwv1sgAMoKBInnpmgrVMXkKQFCUWlJalKeAkNErSi3ISUxO1dC3iY6zi9Wy00/XUVBX17QGqa+NyQNRZYlFCkWZyRkhqRUlCrYKMUo2BXbPOiY+m7H+6fqeZ9Pan81Z87St9em6nQo2QAfk56XbPe1a8HzT9Kdrpz/ZO9lGHyr4ZO+Cp0v32ugX2MUogY0HmQu0PDMPajCq62E2gpwCUp2cn1ecn5Oql5OfrgHXBZFUqgUAEYZp9Q=="},{default:t(()=>[m]),_:1}),h])}const x=c(r,[["render",g],["__file","page0.html.vue"]]);export{x as default};
