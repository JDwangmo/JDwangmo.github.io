define("nav-1.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/emotion/appmsg/emotion/nav.js*/,["common-2.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/emotion/appmsg/emotion/common.js*/,"dom-2.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/emotion/appmsg/emotion/dom.js*/],function(n,o){
"use strict";
var t=n("common-2.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/emotion/appmsg/emotion/common.js*/),a=n("dom-2.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/emotion/appmsg/emotion/dom.js*/),m=a.each,o={};
return o.activeNav=function(n){
t.currentPage=n;
var o=t.navs;
m(o,function(t,a){
a===n?o[a].attr("class","emotion_nav current"):o[a].attr("class","emotion_nav");
});
},o;
});