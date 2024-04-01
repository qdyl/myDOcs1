import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,b as t}from"./app-LQCnbNa2.js";const e={},i=t(`<h2 id="技巧-效率" tabindex="-1"><a class="header-anchor" href="#技巧-效率" aria-hidden="true">#</a> 技巧~效率</h2><h3 id="vue-组件跳转" tabindex="-1"><a class="header-anchor" href="#vue-组件跳转" aria-hidden="true">#</a> vue 组件跳转</h3><blockquote><p>不知道是不是 vscode 版本升级的原因，现在可以直接在组件名上，按住 ctrl + 鼠标左键 ， 可以进行文件跳转（vue-cli 3.x 前端工程中）。</p></blockquote><ul><li>在 .vue 页面中，点击引入的子组件路径 或 在子组件上 ，点击可以进行跳转。</li><li>在router.js 中点击组件的路径进行跳转。</li></ul><p><img src="https://gitee.com/qdshaonianlang/imgs/raw/master/img/image-20240312113136472.png" alt="image-20240312113136472" width="200" height="110" loading="lazy"><img src="https://gitee.com/qdshaonianlang/imgs/raw/master/img/1111556933888856895662355521.gif" alt="1111556933888856895662355521" width="200" height="110" loading="lazy"><img src="https://gitee.com/qdshaonianlang/imgs/raw/master/img/11115589666933888856895662355521.gif" alt="11115589666933888856895662355521" width="200" height="110" loading="lazy"></p><p>注意：<br><img src="https://gitee.com/qdshaonianlang/imgs/raw/master/img/image-20240313111013743.png" alt="image-20240313111013743" width="200" height="110" loading="lazy"></p><h3 id="复制相对路径" tabindex="-1"><a class="header-anchor" href="#复制相对路径" aria-hidden="true">#</a> 复制相对路径</h3><blockquote><p>文件-》首选项-》设置-》搜索 copy relative path -》 选择 /</p></blockquote><p><img src="https://gitee.com/qdshaonianlang/imgs/raw/master/img/image-20230830104215084.png" alt="image-20230830104215084" width="200" height="110" loading="lazy"><img src="https://gitee.com/qdshaonianlang/imgs/raw/master/img/image-20230830104310810.png" alt="image-20230830104310810" width="200" height="110" loading="lazy"></p><h2 id="配置模板" tabindex="-1"><a class="header-anchor" href="#配置模板" aria-hidden="true">#</a> 配置模板</h2><h3 id="vue-模板" tabindex="-1"><a class="header-anchor" href="#vue-模板" aria-hidden="true">#</a> vue 模板</h3><blockquote><p>打开编辑器，点击文件 —— 首选项 —— 用户代码片段，会弹出来一个输入框 <img src="https://gitee.com/qdshaonianlang/imgs/raw/master/img/image-20240329152529892.png" alt="image-20240329152529892" width="200" height="110" loading="lazy"></p></blockquote><details><summary>折叠/展开</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;Vue2.x快速生成模板&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue2&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;&lt;!-- $1 --&gt;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;&lt;template&gt;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;\\t&lt;div class=\\&quot;\\&quot;&gt;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;\\t\\t$3&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;\\t&lt;/div&gt;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;&lt;/template&gt;\\n&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;&lt;script&gt;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;\\texport default {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;\\t\\tdata(){return {}}&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;\\t}&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;\\t$2&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;&lt;/script&gt;\\n&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;&lt;style lang=\\&quot;scss\\&quot; scoped&gt;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;\\t$4&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;&lt;/style&gt;&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Vue2.x&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;Vue3.2快速生成模板&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue3&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;&lt;!-- $1 --&gt;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;&lt;template&gt;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;\\t&lt;div class=\\&quot;\\&quot;&gt;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;\\t\\t$3&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;\\t&lt;/div&gt;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;&lt;/template&gt;\\n&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;&lt;script setup&gt;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;import {} from &#39;vue&#39;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;\\t$2&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;&lt;/script&gt;\\n&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;&lt;style lang=\\&quot;scss\\&quot; scoped&gt;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;\\t$4&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;&lt;/style&gt;&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Vue3.x&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,13),o=[i];function p(l,u){return s(),a("div",null,o)}const d=n(e,[["render",p],["__file","page2.html.vue"]]);export{d as default};
