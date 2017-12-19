webpackJsonp([51452700604399],{508:function(n,a){n.exports={data:{site:{siteMetadata:{title:"React 🎄",author:"Michael Chan @chantastic"}},markdownRemark:{id:"/Users/chan/learnreact/react.holiday/src/pages/2017/2.md absPath of file >>> MarkdownRemark",html:'<div class="measure">\n<p>People like to make hay about <a href="https://facebook.github.io/jsx/">JSX</a>.</p>\n<p>Don’t get your undies in a bunched. All it does is make these two lines equivalent:</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token comment">// No-JSX</span>\nReact<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">"h1"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">"Hello 🎄"</span><span class="token punctuation">)</span>\n\n<span class="token comment">// YAAAAS!!!-JSX</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Hello 🎄<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<h3>How does HTML work in JavaScript?</h3>\n<p>Don’t think of it like HTML, it isn’t.</p>\n<p>JSX is just a authoring nice-to-have.\nBut it’s not something that works in the browser.\nIt must be transformed to <code>React.createElement()</code> calls before the browser can run it.\nMost apps use projects like <a href="http://babeljs.io/">Babel</a> or\n<a href="http://www.typescriptlang.org/">TypeScript</a> to handle that.</p>\n<h3>Why JSX?</h3>\n<p>JSX is optional but it has community consensus.\nThere’s a certain harmony to spec’ing React elements in a syntax similar to HTML.</p>\n<h3>Gotchas</h3>\n<p>JSX isn’t all 🦄s and 🌈s.</p>\n<p>Lowercase attributes like <code>class</code>, <code>onclick</code>, <code>autofocus</code>, and <code>tabindex</code> become camelCased <code>className</code>, <code>onClick</code>, <code>autoFocus</code>, and <code>tabIndex</code> respectively.</p>\n<p>They can also take any JavaScript expression.</p>\n<p>This takes time to get used to.\nThe examples below are identical.</p>\n<h4>HTML</h4>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span>\n  <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span>\n  <span class="token attr-name">autofocus</span>\n  <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>some-button<span class="token punctuation">"</span></span>\n  <span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>alert(<span class="token punctuation">\'</span>HTML!<span class="token punctuation">\'</span>)<span class="token punctuation">"</span></span>\n<span class="token punctuation">></span></span>Hello 🎄<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<h4>JSX</h4>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span>\n  <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span>\n  <span class="token attr-name">autoFocus</span>\n  <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>some-button<span class="token punctuation">"</span></span>\n  <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">\'JSX!\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n<span class="token punctuation">></span></span>Hello 🎄<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<h4>JS</h4>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>\n  <span class="token string">\'button\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    type<span class="token punctuation">:</span> <span class="token string">\'button\'</span><span class="token punctuation">,</span>\n    autoFocus<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    className<span class="token punctuation">:</span> <span class="token string">\'some-button\'</span><span class="token punctuation">,</span>\n    onClick<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">\'JS!\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token string">\'Hello 🎄\'</span>\n<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<h2>Tinker with it</h2>\n<p>Use the workspace below and play with the JSX.</p>\n<ul>\n<li>Try using <code>class</code> instead of <code>className</code>. What error do you get?</li>\n<li>Nest a couple elements inside of each other. Did they render as expected? How would you write the same using <code>React.createElement()</code>?</li>\n</ul>\n</div>\n<iframe src="https://codesandbox.io/embed/jnkm0pkm7v" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>',frontmatter:{title:"Day 2: JSX 4 LYFE",date:"December 02, 2017"}}},pathContext:{slug:"/2017/2/"}}}});
//# sourceMappingURL=path---2017-2-af5e7aa437e5027e4203.js.map