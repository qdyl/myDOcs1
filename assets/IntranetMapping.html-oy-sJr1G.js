import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as s,o as r,c as o,e as a,d as n,f as i,b as p}from"./app-b_Dxr_FD.js";const l={},g={href:"https://github.com/lazy-luo/smarGate",target:"_blank",rel:"noopener noreferrer"},c={id:"natapp-链接",tabindex:"-1"},d=a("a",{class:"header-anchor",href:"#natapp-链接","aria-hidden":"true"},"#",-1),m={href:"https://natapp.cn/",target:"_blank",rel:"noopener noreferrer"},h=p(`<ul><li>添加隧道</li><li>获取token</li><li>使用命令行进行内网映射</li></ul><p><img src="https://gitee.com/qdshaonianlang/imgs/raw/master/img/image-20240221180632301.png" alt="image-20240221180632301" width="200" height="110" loading="lazy"><img src="https://gitee.com/qdshaonianlang/imgs/raw/master/img/image-20240221180424218.png" alt="image-20240221180424218" width="200" height="110" loading="lazy"></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 在natapp.exe 目录下</span>
natapp <span class="token operator">-</span>authtoken<span class="token operator">=</span>xxxxxxxxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意事项</strong><br></p><blockquote><p>如果用公司网络不行的话。可以先使用热点，并执行natapp -authtoken=xxxxxxxxx， 再切换回公司的网络。这样就可以了。</p></blockquote><figure><img src="https://gitee.com/qdshaonianlang/imgs/raw/master/img/image-20240221181918014.png" alt="image-20240221181918014" width="200" height="110" tabindex="0" loading="lazy"><figcaption>image-20240221181918014</figcaption></figure><h2 id="贝锐花生壳" tabindex="-1"><a class="header-anchor" href="#贝锐花生壳" aria-hidden="true">#</a> 贝锐花生壳</h2><p><img src="https://gitee.com/qdshaonianlang/imgs/raw/master/img/image-20240221181018878.png" alt="image-20240221181018878" width="200" height="110" loading="lazy"><img src="https://gitee.com/qdshaonianlang/imgs/raw/master/img/image-20240221180111459.png" alt="image-20240221180111459" width="200" height="110" loading="lazy"></p><h2 id="vue项目映射注意事项" tabindex="-1"><a class="header-anchor" href="#vue项目映射注意事项" aria-hidden="true">#</a> vue项目映射注意事项</h2><h3 id="存在的问题" tabindex="-1"><a class="header-anchor" href="#存在的问题" aria-hidden="true">#</a> 存在的问题</h3><p><strong>情况1</strong></p><blockquote><p>使用贝锐花生壳，内网映射，页面提示 Invalid Host header</p></blockquote><p><img src="https://gitee.com/qdshaonianlang/imgs/raw/master/img/image-20240221173333407.png" alt="image-20240221173333407" width="200" height="110" loading="lazy"><img src="https://gitee.com/qdshaonianlang/imgs/raw/master/img/image-20240221173532048.png" alt="image-20240221173532048" width="200" height="110" loading="lazy"></p><p><strong>情况2</strong></p><blockquote><p>使用 natapp 进行内网映射，页面提示 Invalid Host header</p></blockquote><figure><img src="https://gitee.com/qdshaonianlang/imgs/raw/master/img/image-20240221174057328.png" alt="image-20240221174057328" width="200" height="110" tabindex="0" loading="lazy"><figcaption>image-20240221174057328</figcaption></figure><h3 id="原因" tabindex="-1"><a class="header-anchor" href="#原因" aria-hidden="true">#</a> 原因</h3><p>这个问题通常是由于 Vue 项目的配置中出现了一些不匹配的主机头导致的。你可以尝试在 vue.config.js 文件中添加如下配置来解决这个问题：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">disableHostCheck</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个配置会禁用主机检查，允许不匹配的主机头通过。添加这个配置后，重新启动 Vue 项目，然后再尝试通过内网穿透访问项目，应该就不会再出现 &quot;Invalid Host header&quot; 的提示了。</p><figure><img src="https://gitee.com/qdshaonianlang/imgs/raw/master/img/image-20240221174235183.png" alt="image-20240221174235183" width="200" height="110" tabindex="0" loading="lazy"><figcaption>image-20240221174235183</figcaption></figure><h3 id="成功" tabindex="-1"><a class="header-anchor" href="#成功" aria-hidden="true">#</a> 成功</h3><p><strong>使用 natapp</strong></p><blockquote><p>进行内网映射可以这样设置</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code> <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">disableHostCheck</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://gitee.com/qdshaonianlang/imgs/raw/master/img/image-20240221175353768.png" alt="image-20240221175353768" tabindex="0" loading="lazy"><figcaption>image-20240221175353768</figcaption></figure><p><strong>使用 花生壳</strong></p><blockquote><p>花生壳的要付费开通会员，我就没有进行测试了。</p></blockquote><figure><img src="https://gitee.com/qdshaonianlang/imgs/raw/master/img/image-20240221175742937.png" alt="image-20240221175742937" width="200" height="110" tabindex="0" loading="lazy"><figcaption>image-20240221175742937</figcaption></figure>`,29);function u(v,b){const e=s("ExternalLinkIcon");return r(),o("div",null,[a("p",null,[a("a",g,[n(e)])]),a("h2",c,[d,i(" natapp "),a("a",m,[i("链接"),n(e)])]),h])}const x=t(l,[["render",u],["__file","IntranetMapping.html.vue"]]);export{x as default};
