import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as a,a as s,d as e}from"./app-_yw3Vdmw.js";const t={},l=e(`<h2 id="保留页面滚动条位置" tabindex="-1"><a class="header-anchor" href="#保留页面滚动条位置" aria-hidden="true">#</a> 保留页面滚动条位置</h2><h3 id="方式1-路由配置" tabindex="-1"><a class="header-anchor" href="#方式1-路由配置" aria-hidden="true">#</a> 方式1：路由配置</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 文件： src/router/index.js 
const createRouter = () =&gt;
  new Router({
    scrollBehavior: (to, from, savedPosition) =&gt; {
      if (savedPosition) {
        return savedPosition
      } else {
        return { x: 0, y: 0 }
      }
    },
    routes: constantRouterMap
  })

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>正常效果</summary><figure><img src="https://gitee.com/qdshaonianlang/imgs/raw/master/img/111155655521.gif" alt="111155655521" tabindex="0" loading="lazy"><figcaption>111155655521</figcaption></figure></details><p><strong>存在的问题：</strong></p><blockquote><p>问题描述：页面的返回的时候，能正确打印出 savedPosition 的值，但是页面还是将滚动条置顶了？ <br> 原因：如果在页面切换过程中，列表页面的内容发生了变化（比如异步加载数据），可能会影响滚动条位置的保存和恢复。</p></blockquote><p><img src="https://gitee.com/qdshaonianlang/imgs/raw/master/img/1119999911.gif" alt="1119999911" width="200" height="110" loading="lazy"><img src="https://gitee.com/qdshaonianlang/imgs/raw/master/img/image-20240311121050462.png" alt="image-20240311121050462" width="200" height="110" loading="lazy"><img src="https://gitee.com/qdshaonianlang/imgs/raw/master/img/image-20240311102458807.png" alt="image-20240311102458807" width="200" height="110" loading="lazy"></p>`,7),d=e(`<p><strong>解决方式1：</strong> 给页面加上一个高度 。</p><details><summary>解决后的效果</summary><figure><img src="https://gitee.com/qdshaonianlang/imgs/raw/master/img/1111556895662355521.gif" alt="1111556895662355521" tabindex="0" loading="lazy"><figcaption>1111556895662355521</figcaption></figure></details><p><strong>解决方式2：</strong> 参照： 路由配置 + keep-alive （即方式3）</p><h3 id="方式2-keep-alive" tabindex="-1"><a class="header-anchor" href="#方式2-keep-alive" aria-hidden="true">#</a> 方式2： keep-alive</h3><blockquote><p>好像不能解决 缓存页面滚动条的的问题（这个问题待定）<br></p></blockquote><figure><img src="https://gitee.com/qdshaonianlang/imgs/raw/master/img/image-20240311140143521.png" alt="image-20240311140143521" tabindex="0" loading="lazy"><figcaption>image-20240311140143521</figcaption></figure><h3 id="方式3-路由配置-keep-alive" tabindex="-1"><a class="header-anchor" href="#方式3-路由配置-keep-alive" aria-hidden="true">#</a> 方式3：路由配置 + keep-alive</h3><blockquote><p>这种方式，也不能 100% 缓存页面滚动条。 具体原因还在研究中 2024.03.11</p></blockquote><details><summary>详情</summary><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 文件： src/router/index.js 
const createRouter = () =&gt;
  new Router({
    scrollBehavior: (to, from, savedPosition) =&gt; {
      if (savedPosition) {
        return savedPosition
      } else {
        return { x: 0, y: 0 }
      }
  },
  routes: constantRouterMap
})

// 文件： src/App.vue
  &lt;keep-alive :exclude=&quot;excludeRoutes&quot;&gt;
        &lt;router-view v-if=&quot;$route.meta.keepAlive&quot;&gt;&lt;/router-view&gt;
          &lt;!-- 这里是会被缓存的视图组件，比如 Home！ --&gt;
    &lt;/keep-alive&gt;
    &lt;router-view v-if=&quot;!$route.meta.keepAlive&quot;&gt;
        &lt;!-- 这里是不被缓存的视图组件，比如 Edit！ --&gt;
    &lt;/router-view&gt;

// 文件：路由配置

{
    path: &#39;/position&#39;,
    name: &#39;position&#39;,
    component: () =&gt; import(&#39;@/views/xxx/index.vue&#39;),
    meta: { title: &#39;找工作&#39;, keepAlive: true,  }
  },
  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://gitee.com/qdshaonianlang/imgs/raw/master/img/image-20240311141833764.png" alt="image-20240311141833764" tabindex="0" loading="lazy"><figcaption>image-20240311141833764</figcaption></figure></details>`,9);function r(o,v){return n(),a("div",null,[l,s(" - 页面内容变化：如果在页面切换过程中，列表页面的内容发生了变化（比如异步加载数据），可能会影响滚动条位置的保存和恢复。 "),d])}const u=i(t,[["render",r],["__file","page1.html.vue"]]);export{u as default};
