define("pay-2.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/biz_wap/jsapi/biz_wap/jsapi/pay.js*/,["core-1.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/biz_wap/jsapi/biz_wap/jsapi/core.js*/],function(e){
"use strict";
var a=e("core-1.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/biz_wap/jsapi/biz_wap/jsapi/core.js*/),s={
getLatest:function(e){
a.invoke("getLatestAddress",{
appId:e.appId,
scope:e.scope||"jsapi_address",
signType:e.signType||"sha1",
addrSign:e.addrSign||"mphardcodeaddrSign",
timeStamp:e.timeStamp||"",
nonceStr:e.nonceStr||""
},function(a){
return a.err_msg&&"system:function_not_exist"==a.err_msg?void(e.error&&e.error()):void(e.callback&&e.callback(a));
});
},
edit:function(e){
a.invoke("editAddress",{
appId:e.appId,
scope:e.scope||"jsapi_address",
signType:e.signType||"sha1",
addrSign:e.addrSign||"mphardcodeaddrSign",
timeStamp:e.timeStamp||"",
nonceStr:e.nonceStr||""
},function(a){
e.callback&&e.callback(a);
});
}
},n=function(e){
a.invoke("getBrandWCPayRequest",{
appId:e.app_id,
timeStamp:e.time_stamp,
nonceStr:e.nonce_str,
"package":e.package,
signType:e.sign_type||"SHA1",
paySign:e.pay_sign
},function(a){
"get_brand_wcpay_request:ok"==a.err_msg?e.success&&e.success(a):e.error&&e.error(a.err_msg);
});
};
return{
pay:n,
address:s
};
});