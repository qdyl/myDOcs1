import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as n,d as e}from"./app-_yw3Vdmw.js";const i={},l=e(`<h2 id="ssh拉取的项目强制推动到github" tabindex="-1"><a class="header-anchor" href="#ssh拉取的项目强制推动到github" aria-hidden="true">#</a> ssh拉取的项目强制推动到github</h2><ul><li>1、添加远程仓库地址：首先，确保你已经通过SSH方式拉取了GitHub上的项目。如果还没有添加远程仓库地址，可以使用以下命令添加：</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> remote <span class="token function">add</span> origin git@github.com:用户名/仓库名.git

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>2、提交本地更改：在确保本地仓库包含你想要推送的最新更改后，使用以下命令将更改提交到本地仓库：</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;提交信息&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>3、推送到GitHub：执行以下命令将本地更改推送到GitHub上的相应分支（假设分支名称为main）</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> push origin main

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,7),t=[l];function d(c,o){return a(),n("div",null,t)}const p=s(i,[["render",d],["__file","page1.html.vue"]]);export{p as default};
