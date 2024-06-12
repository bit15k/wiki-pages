import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as o,o as t,f as l}from"./app-CXeoR3m2.js";const i={},a=l('<h1 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h1><p>我们从 4 个角度对 webpack 和代码进行了优化：</p><ol><li>提升开发体验</li></ol><ul><li>使用 <code>Source Map</code> 让开发或上线时代码报错能有更加准确的错误提示。</li></ul><ol start="2"><li>提升 webpack 提升打包构建速度</li></ol><ul><li>使用 <code>HotModuleReplacement</code> 让开发时只重新编译打包更新变化了的代码，不变的代码使用缓存，从而使更新速度更快。</li><li>使用 <code>OneOf</code> 让资源文件一旦被某个 loader 处理了，就不会继续遍历了，打包速度更快。</li><li>使用 <code>Include/Exclude</code> 排除或只检测某些文件，处理的文件更少，速度更快。</li><li>使用 <code>Cache</code> 对 eslint 和 babel 处理的结果进行缓存，让第二次打包速度更快。</li><li>使用 <code>Thead</code> 多进程处理 eslint 和 babel 任务，速度更快。（需要注意的是，进程启动通信都有开销的，要在比较多代码处理时使用才有效果）</li></ul><ol start="3"><li>减少代码体积</li></ol><ul><li>使用 <code>Tree Shaking</code> 剔除了没有使用的多余代码，让代码体积更小。</li><li>使用 <code>@babel/plugin-transform-runtime</code> 插件对 babel 进行处理，让辅助代码从中引入，而不是每个文件都生成辅助代码，从而体积更小。</li><li>使用 <code>Image Minimizer</code> 对项目中图片进行压缩，体积更小，请求速度更快。（需要注意的是，如果项目中图片都是在线链接，那么就不需要了。本地项目静态图片才需要进行压缩。）</li></ul><ol start="4"><li>优化代码运行性能</li></ol><ul><li>使用 <code>Code Split</code> 对代码进行分割成多个 js 文件，从而使单个文件体积更小，并行加载 js 速度更快。并通过 import 动态导入语法进行按需加载，从而达到需要使用时才加载该资源，不用时不加载资源。</li><li>使用 <code>Preload / Prefetch</code> 对代码进行提前加载，等未来需要使用时就能直接使用，从而用户体验更好。</li><li>使用 <code>Network Cache</code> 能对输出资源文件进行更好的命名，将来好做缓存，从而用户体验更好。</li><li>使用 <code>Core-js</code> 对 js 进行兼容性处理，让我们代码能运行在低版本浏览器。</li><li>使用 <code>PWA</code> 能让代码离线也能访问，从而提升用户体验。</li></ul>',10),c=[a];function r(d,n){return t(),o("div",null,c)}const m=e(i,[["render",r],["__file","60-summary.html.vue"]]),u=JSON.parse('{"path":"/10-knowledge_base/10-webpack/20-senior/60-summary.html","title":"总结","lang":"zh-CN","frontmatter":{"description":"总结 我们从 4 个角度对 webpack 和代码进行了优化： 提升开发体验 使用 Source Map 让开发或上线时代码报错能有更加准确的错误提示。 提升 webpack 提升打包构建速度 使用 HotModuleReplacement 让开发时只重新编译打包更新变化了的代码，不变的代码使用缓存，从而使更新速度更快。 使用 OneOf 让资源文件一...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/10-knowledge_base/10-webpack/20-senior/60-summary.html"}],["meta",{"property":"og:site_name","content":"LogDict Wiki"}],["meta",{"property":"og:title","content":"总结"}],["meta",{"property":"og:description","content":"总结 我们从 4 个角度对 webpack 和代码进行了优化： 提升开发体验 使用 Source Map 让开发或上线时代码报错能有更加准确的错误提示。 提升 webpack 提升打包构建速度 使用 HotModuleReplacement 让开发时只重新编译打包更新变化了的代码，不变的代码使用缓存，从而使更新速度更快。 使用 OneOf 让资源文件一..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-12T07:20:23.000Z"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["meta",{"property":"article:modified_time","content":"2024-06-12T07:20:23.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"总结\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-12T07:20:23.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[],"git":{"createdTime":1718176823000,"updatedTime":1718176823000,"contributors":[{"name":"bit15k","email":"sdtkin199@outlook.com","commits":1}]},"readingTime":{"minutes":1.92,"words":575},"filePathRelative":"10-knowledge_base/10-webpack/20-senior/60-summary.md","localizedDate":"2024年6月12日","autoDesc":true}');export{m as comp,u as data};
