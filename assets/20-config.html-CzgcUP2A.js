import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,f as n}from"./app-Bhv36hG8.js";const e={},l=n(`<h1 id="基本配置" tabindex="-1"><a class="header-anchor" href="#基本配置"><span>基本配置</span></a></h1><p>在开始使用 <code>Webpack</code> 之前，我们需要对 <code>Webpack</code> 的配置有一定的认识。</p><h2 id="_5-大核心概念" tabindex="-1"><a class="header-anchor" href="#_5-大核心概念"><span>5 大核心概念</span></a></h2><ol><li>entry（入口）</li></ol><p>指示 Webpack 从哪个文件开始打包</p><ol start="2"><li>output（输出）</li></ol><p>指示 Webpack 打包完的文件输出到哪里去，如何命名等</p><ol start="3"><li>loader（加载器）</li></ol><p>webpack 本身只能处理 js、json 等资源，其他资源需要借助 loader，Webpack 才能解析</p><ol start="4"><li>plugins（插件）</li></ol><p>扩展 Webpack 的功能</p><ol start="5"><li>mode（模式）</li></ol><p>主要由两种模式：</p><ul><li>开发模式：development</li><li>生产模式：production</li></ul><h2 id="准备-webpack-配置文件" tabindex="-1"><a class="header-anchor" href="#准备-webpack-配置文件"><span>准备 Webpack 配置文件</span></a></h2><p>在项目根目录下新建文件：<code>webpack.config.js</code></p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  // 入口</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  entry</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  // 输出</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  output</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: {},</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  // 加载器</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  module</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">    rules</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: [],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  },</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  // 插件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  plugins</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: [],</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  // 模式</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  mode</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Webpack 是基于 Node.js 运行的，所以采用 Common.js 模块化规范</p><h2 id="修改配置文件" tabindex="-1"><a class="header-anchor" href="#修改配置文件"><span>修改配置文件</span></a></h2><ol><li>配置文件</li></ol><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// Node.js的核心模块，专门用来处理文件路径</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> path</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;path&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  // 入口</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  // 相对路径和绝对路径都行</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  entry</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;./src/main.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  // 输出</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  output</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">    // path: 文件输出目录，必须是绝对路径</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">    // path.resolve()方法返回一个绝对路径</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">    // __dirname 当前文件的文件夹绝对路径</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">    path</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">path</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">resolve</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">__dirname</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;dist&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">),</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">    // filename: 输出文件名</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">    filename</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;main.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  },</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  // 加载器</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  module</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">    rules</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: [],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  },</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  // 插件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  plugins</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: [],</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  // 模式</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  mode</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;development&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 开发模式</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>运行指令</li></ol><div class="language-" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>npx webpack</span></span></code></pre></div><p>此时功能和之前一样，也不能处理样式资源</p><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结"><span>小结</span></a></h2><p>Webpack 将来都通过 <code>webpack.config.js</code> 文件进行配置，来增强 Webpack 的功能</p><p>我们后面会以两个模式来分别搭建 Webpack 的配置，先进行开发模式，再完成生产模式</p>`,27),t=[l];function h(p,k){return a(),s("div",null,t)}const c=i(e,[["render",h],["__file","20-config.html.vue"]]),o=JSON.parse('{"path":"/10-knowledge_base/10-webpack/10-base/20-config.html","title":"基本配置","lang":"zh-CN","frontmatter":{"description":"基本配置 在开始使用 Webpack 之前，我们需要对 Webpack 的配置有一定的认识。 5 大核心概念 entry（入口） 指示 Webpack 从哪个文件开始打包 output（输出） 指示 Webpack 打包完的文件输出到哪里去，如何命名等 loader（加载器） webpack 本身只能处理 js、json 等资源，其他资源需要借助 lo...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/10-knowledge_base/10-webpack/10-base/20-config.html"}],["meta",{"property":"og:site_name","content":"LogDict Wiki"}],["meta",{"property":"og:title","content":"基本配置"}],["meta",{"property":"og:description","content":"基本配置 在开始使用 Webpack 之前，我们需要对 Webpack 的配置有一定的认识。 5 大核心概念 entry（入口） 指示 Webpack 从哪个文件开始打包 output（输出） 指示 Webpack 打包完的文件输出到哪里去，如何命名等 loader（加载器） webpack 本身只能处理 js、json 等资源，其他资源需要借助 lo..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-12T07:20:23.000Z"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["meta",{"property":"article:modified_time","content":"2024-06-12T07:20:23.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"基本配置\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-12T07:20:23.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"5 大核心概念","slug":"_5-大核心概念","link":"#_5-大核心概念","children":[]},{"level":2,"title":"准备 Webpack 配置文件","slug":"准备-webpack-配置文件","link":"#准备-webpack-配置文件","children":[]},{"level":2,"title":"修改配置文件","slug":"修改配置文件","link":"#修改配置文件","children":[]},{"level":2,"title":"小结","slug":"小结","link":"#小结","children":[]}],"git":{"createdTime":1718176823000,"updatedTime":1718176823000,"contributors":[{"name":"bit15k","email":"sdtkin199@outlook.com","commits":1}]},"readingTime":{"minutes":1.36,"words":408},"filePathRelative":"10-knowledge_base/10-webpack/10-base/20-config.md","localizedDate":"2024年6月12日","autoDesc":true}');export{c as comp,o as data};
