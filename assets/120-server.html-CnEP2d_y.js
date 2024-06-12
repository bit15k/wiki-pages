import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,o as a,f as n}from"./app-Bhv36hG8.js";const l={},h=n(`<h1 id="开发服务器-自动化" tabindex="-1"><a class="header-anchor" href="#开发服务器-自动化"><span>开发服务器&amp;自动化</span></a></h1><p>每次写完代码都需要手动输入指令才能编译代码，太麻烦了，我们希望一切自动化</p><h2 id="_1-下载包" tabindex="-1"><a class="header-anchor" href="#_1-下载包"><span>1. 下载包</span></a></h2><div class="language-" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>npm i webpack-dev-server -D</span></span></code></pre></div><h2 id="_2-配置" tabindex="-1"><a class="header-anchor" href="#_2-配置"><span>2. 配置</span></a></h2><ul><li>webpack.config.js</li></ul><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> path</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;path&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> ESLintWebpackPlugin</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;eslint-webpack-plugin&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> HtmlWebpackPlugin</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;html-webpack-plugin&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  entry</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;./src/main.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  output</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">    path</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">path</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">resolve</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">__dirname</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;dist&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">    filename</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;static/js/main.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 将 js 文件输出到 static/js 目录中</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">    clean</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 自动将上次打包目录资源清空</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  module</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">    rules</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">      {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">        // 用来匹配 .css 结尾的文件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">        test</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#E06C75;"> /</span><span style="--shiki-light:#22863A;--shiki-dark:#56B6C2;--shiki-light-font-weight:bold;--shiki-dark-font-weight:inherit;">\\.</span><span style="--shiki-light:#032F62;--shiki-dark:#E06C75;">css</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#E06C75;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">        // use 数组里面 Loader 执行顺序是从右到左</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">        use</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;style-loader&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;css-loader&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">      {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">        test</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#E06C75;"> /</span><span style="--shiki-light:#22863A;--shiki-dark:#56B6C2;--shiki-light-font-weight:bold;--shiki-dark-font-weight:inherit;">\\.</span><span style="--shiki-light:#032F62;--shiki-dark:#E06C75;">less</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#E06C75;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">        use</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;style-loader&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;css-loader&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;less-loader&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">      {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">        test</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#E06C75;"> /</span><span style="--shiki-light:#22863A;--shiki-dark:#56B6C2;--shiki-light-font-weight:bold;--shiki-dark-font-weight:inherit;">\\.</span><span style="--shiki-light:#032F62;--shiki-dark:#E06C75;">s</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">[ac]</span><span style="--shiki-light:#032F62;--shiki-dark:#E06C75;">ss</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#E06C75;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">        use</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;style-loader&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;css-loader&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;sass-loader&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">      {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">        test</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#E06C75;"> /</span><span style="--shiki-light:#22863A;--shiki-dark:#56B6C2;--shiki-light-font-weight:bold;--shiki-dark-font-weight:inherit;">\\.</span><span style="--shiki-light:#032F62;--shiki-dark:#E06C75;">styl</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#E06C75;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">        use</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;style-loader&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;css-loader&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;stylus-loader&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">      {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">        test</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#E06C75;"> /</span><span style="--shiki-light:#22863A;--shiki-dark:#56B6C2;--shiki-light-font-weight:bold;--shiki-dark-font-weight:inherit;">\\.</span><span style="--shiki-light:#032F62;--shiki-dark:#E06C75;">(png</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">|</span><span style="--shiki-light:#032F62;--shiki-dark:#E06C75;">jpe</span><span style="--shiki-light:#D73A49;--shiki-dark:#D19A66;">?</span><span style="--shiki-light:#032F62;--shiki-dark:#E06C75;">g</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">|</span><span style="--shiki-light:#032F62;--shiki-dark:#E06C75;">gif</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">|</span><span style="--shiki-light:#032F62;--shiki-dark:#E06C75;">webp)</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#E06C75;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">        type</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;asset&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">        parser</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">          dataUrlCondition</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">            maxSize</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">10</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> *</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 1024</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 小于10kb的图片会被base64处理</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">          },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">        generator</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">          // 将图片文件输出到 static/imgs 目录中</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">          // 将图片文件命名 [hash:8][ext][query]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">          // [hash:8]: hash值取8位</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">          // [ext]: 使用之前的文件扩展名</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">          // [query]: 添加之前的query参数</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">          filename</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;static/imgs/[hash:8][ext][query]&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">      {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">        test</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#E06C75;"> /</span><span style="--shiki-light:#22863A;--shiki-dark:#56B6C2;--shiki-light-font-weight:bold;--shiki-dark-font-weight:inherit;">\\.</span><span style="--shiki-light:#032F62;--shiki-dark:#E06C75;">(ttf</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">|</span><span style="--shiki-light:#032F62;--shiki-dark:#E06C75;">woff2</span><span style="--shiki-light:#D73A49;--shiki-dark:#D19A66;">?</span><span style="--shiki-light:#032F62;--shiki-dark:#E06C75;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#E06C75;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">        type</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;asset/resource&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">        generator</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">          filename</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;static/media/[hash:8][ext][query]&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">      {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">        test</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#E06C75;"> /</span><span style="--shiki-light:#22863A;--shiki-dark:#56B6C2;--shiki-light-font-weight:bold;--shiki-dark-font-weight:inherit;">\\.</span><span style="--shiki-light:#032F62;--shiki-dark:#E06C75;">js</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#E06C75;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">        exclude</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#E06C75;"> /node_modules/</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 排除node_modules代码不编译</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">        loader</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;babel-loader&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  plugins</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: [</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> ESLintWebpackPlugin</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">      // 指定检查文件的根目录</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">      context</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">path</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">resolve</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">__dirname</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;src&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    }),</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> HtmlWebpackPlugin</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">      // 以 public/index.html 为模板创建文件</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">      // 新的html文件有两个特点：1. 内容和源文件一致 2. 自动引入打包生成的js等资源</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">      template</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">path</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">resolve</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">__dirname</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;public/index.html&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    }),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  ],</span></span>
<span class="line highlighted"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  // 开发服务器</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  devServer</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">    host</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;localhost&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 启动服务器域名</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">    port</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;3000&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 启动服务器端口号</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">    open</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 是否自动打开浏览器</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  mode</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;development&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-运行指令" tabindex="-1"><a class="header-anchor" href="#_3-运行指令"><span>3. 运行指令</span></a></h2><div class="language-" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>npx webpack serve</span></span></code></pre></div><p><strong>注意运行指令发生了变化</strong></p><p>并且当你使用开发服务器时，所有代码都会在内存中编译打包，并不会输出到 dist 目录下。</p><p>开发时我们只关心代码能运行，有效果即可，至于代码被编译成什么样子，我们并不需要知道。</p>`,12),t=[h];function k(e,p){return a(),i("div",null,t)}const g=s(l,[["render",k],["__file","120-server.html.vue"]]),B=JSON.parse('{"path":"/10-knowledge_base/10-webpack/10-base/120-server.html","title":"开发服务器&自动化","lang":"zh-CN","frontmatter":{"description":"开发服务器&自动化 每次写完代码都需要手动输入指令才能编译代码，太麻烦了，我们希望一切自动化 1. 下载包 2. 配置 webpack.config.js 3. 运行指令 注意运行指令发生了变化 并且当你使用开发服务器时，所有代码都会在内存中编译打包，并不会输出到 dist 目录下。 开发时我们只关心代码能运行，有效果即可，至于代码被编译成什么样子，我...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/10-knowledge_base/10-webpack/10-base/120-server.html"}],["meta",{"property":"og:site_name","content":"LogDict Wiki"}],["meta",{"property":"og:title","content":"开发服务器&自动化"}],["meta",{"property":"og:description","content":"开发服务器&自动化 每次写完代码都需要手动输入指令才能编译代码，太麻烦了，我们希望一切自动化 1. 下载包 2. 配置 webpack.config.js 3. 运行指令 注意运行指令发生了变化 并且当你使用开发服务器时，所有代码都会在内存中编译打包，并不会输出到 dist 目录下。 开发时我们只关心代码能运行，有效果即可，至于代码被编译成什么样子，我..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-12T07:20:23.000Z"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["meta",{"property":"article:modified_time","content":"2024-06-12T07:20:23.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"开发服务器&自动化\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-12T07:20:23.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"1. 下载包","slug":"_1-下载包","link":"#_1-下载包","children":[]},{"level":2,"title":"2. 配置","slug":"_2-配置","link":"#_2-配置","children":[]},{"level":2,"title":"3. 运行指令","slug":"_3-运行指令","link":"#_3-运行指令","children":[]}],"git":{"createdTime":1718176823000,"updatedTime":1718176823000,"contributors":[{"name":"bit15k","email":"sdtkin199@outlook.com","commits":1}]},"readingTime":{"minutes":1.73,"words":518},"filePathRelative":"10-knowledge_base/10-webpack/10-base/120-server.md","localizedDate":"2024年6月12日","autoDesc":true}');export{g as comp,B as data};
