define("a_report-1.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/appmsg/a_report.js*/,["ajax-1.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/biz_wap/utils/ajax.js*/],function(t){
"use strict";
function o(t,o){
var i="https:"==top.location.protocol?1500:1200,p="/mp/advertisement_report?r="+Math.random()+"&",a=[],s=!1;
for(var c in t)t.hasOwnProperty(c)&&a.push(c+"="+t[c]);
p+=a.join("&"),r({
url:p,
type:"GET",
success:function(){
n&&n(56+e);
},
error:function(){
n&&n(57+e);
},
complete:function(){
s||(s=!0,!!o&&o());
},
async:!0
}),setTimeout(function(){
s||(s=!0,!!o&&o());
},i);
}
var r=t("ajax-1.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/biz_wap/utils/ajax.js*/),n=window.__report,i=top.location.protocol,e="https:"==i?5:0;
return{
AdClickReport:o
};
});