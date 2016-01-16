define("position-2.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/biz_wap/utils/biz_wap/utils/position.js*/,[],function(){
"use strict";
function t(e,f){
var n=e.offsetLeft;
return e.offsetParent.className!=f&&(n+=t(e.offsetParent,f)),n;
}
function e(t,f){
var n=t.offsetTop;
return t.offsetParent.className!=f&&(n+=e(t.offsetParent,f)),n;
}
return{
getX:t,
getY:e
};
});