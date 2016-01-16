define("report-3.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/appmsg/report.js*/,["event-1.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/biz_common/dom/event.js*/,"huatuo-1.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/biz_common/utils/huatuo.js*/,"ajax-1.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/biz_wap/utils/ajax.js*/,"cdn_img_lib-1.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/appmsg/cdn_img_lib.js*/,"mmversion-1.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/biz_wap/utils/mmversion.js*/,"report-4.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/biz_common/utils/report.js*/,"monitor-1.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/biz_common/utils/monitor.js*/],function(e){
"use strict";
function t(){
var t=(e("mmversion-1.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/biz_wap/utils/mmversion.js*/),e("report-4.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/biz_common/utils/report.js*/),e("monitor-1.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/biz_common/utils/monitor.js*/)),a=!1,s=window.performance||window.msPerformance||window.webkitPerformance;
return function(){
return;
}(),s&&s.timing&&s.timing.navigationStart?(a=s.timing.navigationStart,function(){
return;
}(),function(){
function e(){
if(-1==n.indexOf("NetType/"))return!1;
for(var e=["2G","cmwap","cmnet","uninet","uniwap","ctwap","ctnet"],t=0,i=e.length;i>t;++t)if(-1!=n.indexOf(e[t]))return!0;
return!1;
}
var i=write_sceen_time-a,s=first_sceen__time-a,d=page_endtime-a,m=window.logs.jsapi_ready_time?window.logs.jsapi_ready_time-a:void 0,w=window.logs.a8key_ready_time?window.logs.a8key_ready_time-a:void 0,g=c&&c.connectEnd-c.connectStart,p=c&&c.secureConnectionStart&&c.connectEnd-c.secureConnectionStart;
if(window.logs.pagetime.wtime=i,window.logs.pagetime.ftime=s,window.logs.pagetime.ptime=d,
window.logs.pagetime.jsapi_ready_time=m,window.logs.pagetime.a8key_ready_time=w,
Math.random()<.01){
var c=window.performance&&window.performance.timing,u={
28:d,
29:s,
30:i,
31:m,
32:w,
33:g,
34:p
};
o.setFlags(1636,1,1);
for(var f in u)!u[f]||u[f]<0||o.setPoint(f,u[f]);
o.report();
}
if(need_report_cost&&r({
url:"/mp/report_cost",
type:"post",
data:{
id_key_list:["1,1,"+d,"1,2,"+s,"1,3,"+i,"1,4,"+m,"1,5,"+w,"1,6,"+g,"1,7,"+p].join(";")
}
}),!(Math.random()>.2||0>i||0>s||0>d)){
if(m&&t.setAvg(27822,15,m),w&&t.setAvg(27822,17,w),d>=15e3)return t.setAvg(27822,29,d),
void t.send();
t.setAvg(27822,1,d).setAvg(27822,3,i).setAvg(27822,5,s),window.isWeixinCached&&t.setAvg(27822,19,d),
e()?(t.setAvg(27822,9,d),window.isWeixinCached&&t.setAvg(27822,23,d)):"wifi"==networkType?(t.setAvg(27822,7,d),
window.isWeixinCached&&t.setAvg(27822,21,d)):"2g/3g"==networkType?(t.setAvg(27822,11,d),
window.isWeixinCached&&t.setAvg(27822,25,d)):(t.setAvg(27822,13,d),window.isWeixinCached&&t.setAvg(27822,28,d)),
t.send();
}
}(),function(){
window.logs.jsapi_ready_fail&&(t.setSum(24729,55,window.logs.jsapi_ready_fail),t.send());
}(),function(){
var e=document.getElementById("js_toobar3"),t=document.getElementById("page-content"),n=window.innerHeight||document.documentElement.clientHeight;
if(t&&!(Math.random()>.1)){
var o=function(){
var r=window.pageYOffset||document.documentElement.scrollTop,a=e.offsetTop;
if(r+n>=a){
for(var d,m,w=t.getElementsByTagName("img"),g={},p=[],c=0,u=0,f=0,l=0,v=w.length;v>l;++l){
var _=w[l];
d=_.getAttribute("data-src")||_.getAttribute("src"),m=_.getAttribute("src"),d&&(d.isCDN()?u++:f++,
c++,g[m]={});
}
if(p.push("1="+1e3*c),p.push("2="+1e3*u),p.push("3="+1e3*f),s.getEntries){
var h=s.getEntries(),y=window.logs.img.download,j=[0,0,0],A=[0,0,0];
c=u=0;
for(var l=0,b=h.length;b>l;++l){
var k=h[l],T=k.name;
T&&"img"==k.initiatorType&&g[T]&&(T.isCDN()&&(A[0]+=k.duration,u++),j[0]+=k.duration,
c++,g[T]={
startTime:k.startTime,
responseEnd:k.responseEnd
});
}
j[0]>0&&c>0&&(j[2]=j[0]/c),A[0]>0&&u>0&&(A[2]=A[0]/u);
for(var l in y)if(y.hasOwnProperty(l)){
for(var M=y[l],E=0,x=0,z=0,C=0,S=0,v=M.length;v>S;++S){
var d=M[S];
if(g[d]&&g[d].startTime&&g[d].responseEnd){
var N=g[d].startTime,W=g[d].responseEnd;
E=Math.max(E,W),x=x?Math.min(x,N):N,d.isCDN()&&(z=Math.max(E,W),C=x?Math.min(x,N):N);
}
}
j[1]+=Math.round(E-x),A[1]+=Math.round(z-C);
}
for(var I=4,P=7,l=0;3>l;l++)j[l]=Math.round(j[l]),A[l]=Math.round(A[l]),j[l]>0&&(p.push(I+l+"="+j[l]),
"wifi"==networkType?p.push(I+l+6+"="+j[l]):"2g/3g"==networkType&&p.push(I+l+12+"="+j[l])),
A[l]>0&&(p.push(P+l+"="+A[l]),"wifi"==networkType?p.push(P+l+6+"="+A[l]):"2g/3g"==networkType&&p.push(P+l+12+"="+A[l]));
}
i.off(window,"scroll",o,!1);
}
};
i.on(window,"scroll",o,!1);
}
}(),void function(){
if(!(Math.random()>.001)){
var e=document.createElement("iframe"),t=[600,800,1e3,1200,1500,2e3,3e3,5e3,1e4,18e3],i=Math.ceil(10*Math.random())-1,n=uin+mid+idx+Math.ceil(1e3*Math.random())+(new Date).getTime();
e.style.display="none",e.id="js_ajax",e.setAttribute("data-time",i),e.src="/mp/iframetest?action=page&traceid="+n+"&devicetype="+devicetype+"&timeout="+t[i];
var o=document.getElementById("js_article");
o.appendChild(e);
}
}()):!1;
}
var i=e("event-1.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/biz_common/dom/event.js*/),n=navigator.userAgent,o=e("huatuo-1.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/biz_common/utils/huatuo.js*/),r=e("ajax-1.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/biz_wap/utils/ajax.js*/);
e("cdn_img_lib-1.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/appmsg/cdn_img_lib.js*/),i.on(window,"load",function(){
if(""==networkType&&window.isInWeixinApp()){
var e={
"network_type:fail":"fail",
"network_type:edge":"2g/3g",
"network_type:wwan":"2g/3g",
"network_type:wifi":"wifi"
};
JSAPI.invoke("getNetworkType",{},function(i){
networkType=e[i.err_msg],t();
});
}else t();
},!1);
});