define("card-2.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/a/a/card.js*/,["event-5.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/a/biz_common/dom/event.js*/,"report-7.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/a/biz_common/utils/report.js*/,"a_report-2.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/a/appmsg/a_report.js*/,"ajax-4.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/a/biz_wap/utils/ajax.js*/,"position-3.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/a/biz_wap/utils/position.js*/,"core-4.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/a/biz_wap/jsapi/core.js*/,"cardticket-1.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/a/biz_wap/jsapi/cardticket.js*/],function(t){
"use strict";
function i(t,i){
o("http://mp.weixin.qq.com/mp/ad_report?action=follow&type="+t+i.report_param);
}
function e(t){
var o=t.adData,r=t.pos_type||0,s=o.tid,c=o.type,_=o.url,d=o.rl,l={};
t.report_param=t.report_param||"";
var j=t.btn;
if(j){
a.on(j,"click",function(a){
if(!l[s]){
l[s]=!0;
var j,u,m=!!a&&a.target;
m&&(j=n.getX(m,"js_ad_link extra_link")+a.offsetX,u=n.getY(m,"js_ad_link extra_link")+a.offsetY),
p({
type:c,
report_type:2,
click_pos:0,
url:encodeURIComponent(_),
tid:s,
rl:encodeURIComponent(d),
__biz:biz,
pos_type:r,
pt:100,
pos_x:j,
pos_y:u
},function(){
l[s]=!1,i(37,t),e.openCardDetail(o.card_id,o.card_ext,t);
});
}
return!1;
});
}
}
var a=t("event-5.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/a/biz_common/dom/event.js*/),o=t("report-7.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/a/biz_common/utils/report.js*/),r=t("a_report-2.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/a/appmsg/a_report.js*/),p=r.AdClickReport,n=(t("ajax-4.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/a/biz_wap/utils/ajax.js*/),
t("position-3.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/a/biz_wap/utils/position.js*/)),s=(t("core-4.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/a/biz_wap/jsapi/core.js*/),t("cardticket-1.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/a/biz_wap/jsapi/cardticket.js*/));
return e.openCardDetail=function(t,e,a){
s.openCardDetail({
card_id:t,
card_ext:e,
success:function(){
!!a&&i(38,a);
},
error:function(){
!!a&&i(39,a),alert("调起卡券错误");
},
access_denied:function(){
!!a&&i(40,a),alert("异常错误[access_denied]");
}
});
},e;
});