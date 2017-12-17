webpackJsonp([0xcfe5ecd394ac],{509:function(n,e){n.exports={data:{site:{siteMetadata:{title:"React 🎄",author:"Michael Chan @chantastic"}},markdownRemark:{id:"/Users/chan/learnreact/react.holiday/src/pages/2017/9.md absPath of file >>> MarkdownRemark",html:'<div class="measure">\n<p>If you want to set state dynamically, use a <strong>function</strong>.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>previousState<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">{</span> someProp<span class="token punctuation">:</span> previousState<span class="token punctuation">.</span>someProp <span class="token operator">+</span> <span class="token number">1</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<br />\n<p>We give <code>setState</code> an anonymous function to be called with <code>state</code>.\nOur function takes that <code>state</code> and returns a new object with new values derived from the old.</p>\n<h2>Concise but not clear</h2>\n<p>This is how I write <code>setState(fn)</code> in a modern code base.\nIt’s how you’re likely to see it in the real world.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">(</span>previousState<span class="token punctuation">)</span> <span class="token operator">=></span>\n  <span class="token punctuation">(</span><span class="token punctuation">{</span> clapCount<span class="token punctuation">:</span> previousState<span class="token punctuation">.</span>clapCount <span class="token operator">+</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<br />\n<p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions">Arrow functions</a> have implicit returns\nbut if the return type is an object, you must wrap it in partheses.</p>\n<h2>Why <code>previousState</code> not <code>currentState</code>?</h2>\n<p>While <code>setState</code> does update state—<strong>eventually</strong>—it does so asyncronously and in batches.</p>\n<p>Because of that implementation detail, the state that your function recieves might not be the current state.</p>\n<h2>I’m so confused…</h2>\n<p>Yeah.\nIt’s very confusing.</p>\n<p>Tomorrow let’s implement our own state setter.\nYou’ll get a better idea of how <code>setState</code> sausage is made.</p>\n<p><em>(I’ll use an actual sausage to illustrate)</em></p>\n<h2>Tinker with it</h2>\n<p>Use the workspace below and set some state with functions.</p>\n<ul>\n<li>Experiment with syntax. Use both <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function">function declarations</a> and <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions">arrow function expressions</a> to dynamically set state. Does one seem clearer than the other?</li>\n<li>For fun, use <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment">destructuring assignment</a> to unpack values from the <code>state</code> object.</li>\n</ul>\n</div>\n<iframe src="https://codesandbox.io/embed/r7pzm1p7kn" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>',frontmatter:{title:"Day 9: Set state dynamically",date:"December 09, 2017"}}},pathContext:{slug:"/2017/9/"}}}});
//# sourceMappingURL=path---2017-9-52191d36ece697579ae6.js.map