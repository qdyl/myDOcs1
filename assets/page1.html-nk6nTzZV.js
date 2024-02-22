import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as e,a as i,e as a}from"./app-E2yLQ0Pc.js";const t={},p=a('<h2 id="搭建知识库" tabindex="-1"><a class="header-anchor" href="#搭建知识库" aria-hidden="true">#</a> 搭建知识库</h2><h2 id="问题汇总" tabindex="-1"><a class="header-anchor" href="#问题汇总" aria-hidden="true">#</a> 问题汇总</h2><h3 id="图标-icon-显示不了" tabindex="-1"><a class="header-anchor" href="#图标-icon-显示不了" aria-hidden="true">#</a> 图标 icon 显示不了</h3><p>在我使用 vuepress-theme-hope的过程中，发现 图标的几个问题</p><ul><li>部分内置的图标显示不了<br><img src="https://gitee.com/qdshaonianlang/imgs/raw/master/img/image-20240207111640714.png" alt="image-20240207111640714" width="200" height="110" loading="lazy"><img src="https://gitee.com/qdshaonianlang/imgs/raw/master/img/image-20240207112358296.png" alt="image-20240207112358296" width="200" height="110" loading="lazy"></li></ul>',5),o=a(`<ul><li><p>图标不稳定：在 Edge 浏览器可以显示， 在 chrome 浏览器显示不了 <br><img src="https://gitee.com/qdshaonianlang/imgs/raw/master/img/image-20240122140126600.png" alt="image-20240122140126600" width="200" height="110" loading="lazy"></p></li><li><p>图标使用<br><img src="https://gitee.com/qdshaonianlang/imgs/raw/master/img/image-20240123162805589.png" alt="image-20240123162805589" width="200" height="110" loading="lazy"></p></li></ul><h3 id="自动生成侧边栏" tabindex="-1"><a class="header-anchor" href="#自动生成侧边栏" aria-hidden="true">#</a> 自动生成侧边栏</h3><p><img src="https://gitee.com/qdshaonianlang/imgs/raw/master/img/image-20240207094535601.png" alt="image-20240207094535601" width="200" height="110" loading="lazy"><img src="https://gitee.com/qdshaonianlang/imgs/raw/master/img/image-20240207103553722.png" alt="image-20240207103553722" width="200" height="110" loading="lazy"></p><h3 id="侧边栏排序" tabindex="-1"><a class="header-anchor" href="#侧边栏排序" aria-hidden="true">#</a> 侧边栏排序</h3><p><img src="https://gitee.com/qdshaonianlang/imgs/raw/master/img/image-20240124140016195.png" alt="image-20240124140016195" width="200" height="110" loading="lazy"><img src="https://gitee.com/qdshaonianlang/imgs/raw/master/img/image-20240124144911260.png" alt="image-20240124144911260" width="200" height="110" loading="lazy"></p><p><img src="https://gitee.com/qdshaonianlang/imgs/raw/master/img/image-20240207111204302.png" alt="image-20240207111204302" width="200" height="110" loading="lazy"><img src="https://gitee.com/qdshaonianlang/imgs/raw/master/img/image-20240207111233859.png" alt="image-20240207111233859" width="200" height="110" loading="lazy"></p><h3 id="外部图片显示不了" tabindex="-1"><a class="header-anchor" href="#外部图片显示不了" aria-hidden="true">#</a> 外部图片显示不了</h3><p><img src="https://gitee.com/qdshaonianlang/imgs/raw/master/img/image-20240202110753028.png" alt="image-20240202110753028" width="200" height="110" loading="lazy"><img src="https://gitee.com/qdshaonianlang/imgs/raw/master/img/image-20240202111114315.png" alt="image-20240202111114315" width="200" height="110" loading="lazy"><img src="https://gitee.com/qdshaonianlang/imgs/raw/master/img/image-20240202112421452.png" alt="image-20240202112421452" width="200" height="110" loading="lazy"></p><details><summary>查看详情</summary><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 文件目录： src/.vuepress/config.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> theme <span class="token keyword">from</span> <span class="token string">&quot;./theme.js&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">6401</span><span class="token punctuation">,</span> <span class="token comment">// 设置项目的启动端口号</span>
  <span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token string">&quot;/myDocs1/&quot;</span><span class="token punctuation">,</span>

  <span class="token literal-property property">lang</span><span class="token operator">:</span> <span class="token string">&quot;zh-CN&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;前端文档&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">&quot;vuepress-theme-hope 的文档演示&quot;</span><span class="token punctuation">,</span>

  theme<span class="token punctuation">,</span>

  <span class="token comment">// 解决外部图片不显示的问题，图片报 302</span>
  <span class="token literal-property property">head</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
      <span class="token string">&quot;meta&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;referrer&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&quot;no-referrer&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token comment">// 和 PWA 一起启用</span>
  <span class="token comment">// shouldPrefetch: false,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="目录页-标题重复" tabindex="-1"><a class="header-anchor" href="#目录页-标题重复" aria-hidden="true">#</a> 目录页，标题重复</h3><figure><img src="https://gitee.com/qdshaonianlang/imgs/raw/master/img/image-20240124145455529.png" alt="image-20240124145455529" width="200" height="110" tabindex="0" loading="lazy"><figcaption>image-20240124145455529</figcaption></figure><h3 id="开发环境下-显示-贡献者、更新时间" tabindex="-1"><a class="header-anchor" href="#开发环境下-显示-贡献者、更新时间" aria-hidden="true">#</a> 开发环境下，显示[贡献者、更新时间]</h3><blockquote><p>开启如下.<br> 不推荐这么做，这样会影响性能。</p></blockquote><p><img src="https://gitee.com/qdshaonianlang/imgs/raw/master/img/image-20240207102702784.png" alt="image-20240207102702784" width="200" height="110" loading="lazy"><img src="https://gitee.com/qdshaonianlang/imgs/raw/master/img/image-20240207103151312.png" alt="image-20240207103151312" width="200" height="110" loading="lazy"></p><h3 id="项目启动报错-没有提示具体的文件" tabindex="-1"><a class="header-anchor" href="#项目启动报错-没有提示具体的文件" aria-hidden="true">#</a> 项目启动报错，没有提示具体的文件</h3><blockquote><p>这个问题，不是特别友好，我启动项目的时候，没有给出具体的文件。比较难搞，不知道这个问题后续会优化不？</p></blockquote><figure><img src="https://gitee.com/qdshaonianlang/imgs/raw/master/img/image-20240207093523335.png" alt="image-20240207093523335" width="200" height="110" tabindex="0" loading="lazy"><figcaption>image-20240207093523335</figcaption></figure>`,17);function r(l,c){return s(),e("div",null,[p,i(" ![image-20240207112025145](https://gitee.com/qdshaonianlang/imgs/raw/master/img/image-20240207112025145.png =200x110) "),o])}const d=n(t,[["render",r],["__file","page1.html.vue"]]);export{d as default};
