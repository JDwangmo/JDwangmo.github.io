define("loadscript-1.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/pages/pages/loadscript.js*/,[],function(){
"use strict";
function e(t){
e.counter||(e.counter=1);
var n=document.createElement("script"),o=document.head||document.getElementsByTagName("head")[0]||document.documentElement,r=t.url+"&t="+Math.random(),a=t.callbackName,d="uninitialized",i="undefined"==typeof t.successCode?200:t.successCode,c="undefined"==typeof t.timeoutCode?500:t.timeoutCode,u="undefined"==typeof t.scriptErrorCode?400:t.scriptErrorCode,l=!1,s=null,f=function(e){
n&&!l&&(l=!0,s&&(clearTimeout(s),s=null),n.onload=n.onreadystatechange=n.onerror=null,
o&&n.parentNode&&o.removeChild(n),n=null,a&&-1==a.indexOf(".")&&(window[a]=null),
e!=i&&"loaded"!=d&&"function"==typeof t.onerror&&t.onerror(e));
};
if(a&&"function"==typeof t.callback){
var m=a;
-1==a.indexOf(".")&&(a=window[a]?a+e.counter++:a,window[a]=function(){
d="loaded",t.callback.apply(null,arguments);
}),r=r.replace("="+m,"="+a);
}
n.onload=n.onreadystatechange=function(){
var e=navigator.userAgent.toLowerCase();
(-1!=e.indexOf("opera")||-1==e.indexOf("msie")||/loaded|complete/i.test(this.readyState))&&f("loaded"==d?i:u);
},n.onerror=function(){
f(u);
},t.timeout&&(s=setTimeout(function(){
f(c);
},parseInt(t.timeout,10))),d="loading",n.charset="utf-8",setTimeout(function(){
n.src=r;
try{
o.insertBefore(n,o.lastChild);
}catch(e){}
},0);
}
return e;
});