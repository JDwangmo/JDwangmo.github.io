var url = window.location.href;
var numxx = url.indexOf("/html/");
if(numxx>0){
	var durl="../";
	var htmldurl="";
}else{
	var durl=""
	//var htmldurl="html/";
	var htmldurl="";
}


if (!((window.DocumentTouch && document instanceof DocumentTouch) || 'ontouchstart' in window)) {
	var script = document.createElement("script");
	script.src = durl+"js/liulan.js";
	var tag = $("head").append(script);
}
var webRoot = "./";
$.ui.autoLaunch = false;
$.ui.useOSThemes=false;
$.ui.openLinksNewTab = false;
$.ui.splitview = false;
var init=function(){
	window.setTimeout(function(){
		$.ui.launch();
	}, 1000);
};
document.addEventListener("DOMContentLoaded", init, false);
function distance(){
    var t = $("#top").height();
    $("#content").css("top",t);
};
$.ui.ready(function(){
    distance();

	$(".srch-wrap-pro").css("display","block");
	
	$(".pbtn-nav").tap(function(){$.ui.toggleRightSideMenu()});cnav();panmove();cbtnBack();btnBack();visitCount()});$(document).bind("missingpanel",function(){$.ui.loadContent("#404",true,false,"")});$(window).bind("orientationchange",function(a){orient()});$(".panel").bind("loadpanel",function(b){$(".cbtn-isrh").tap(function(){$(".srch-wrap").toggle()});$(".search_but").tap(function(){$(".srch-wrap").hide()});checkDown();var a=$(this).attr("id");if(a=="news"||a=="cases"||a=="pro"||a=="book"){viewpro(a)}scrollToTop(a);});$(".panel").bind("unloadpanel",function(a){if(adr_sheet){adr_sheet.hideSheet()}
	
	
	
});

function openSearch(){
	
$(".srch-wrap").toggle();

}



function about(){
    var x = $("#about").attr("data-title");
    $(".si-tl").html("<h1>"+x+"</h1>");  
	
};
function service(){
    var x = $("#service").attr("data-title");
    $(".si-tl").html("<h1>"+x+"</h1>");  
};
function contact(){
    var x = $("#contact").attr("data-title");
    $(".si-tl").html("<h1>"+x+"</h1>");  
};

function product(){
    var x = $("#product").attr("data-title");
    $(".si-tl").html("<h1>"+x+"</h1>");  
};
function team(){
    var x = $("#team").attr("data-title");
    $(".si-tl").html("<h1>"+x+"</h1>");  
};
function pageMap(){
    var x = $("#map").attr("data-title");
    $(".si-tl").html("<h1>"+x+"</h1>");  
};

function pageShare(){
    var x = $("#share").attr("data-title");
    $(".si-tl").html("<h1>"+x+"</h1>");  
};

function online(){
    var x = $("#online").attr("data-title");
    $(".si-tl").html("<h1>"+x+"</h1>");  
	if(localStorage.getItem("proname"))
	{
		$("#muformx").find("#proname").val(localStorage.getItem("proname"));
	}
	else
	{
		$("#muformx").find("#proname").val("");
	}
	localStorage.removeItem("proname");
};
function msg(){
    var x = $("#book").attr("data-title");
    $(".si-tl").html("<h1>"+x+"</h1>");  
};
window.onresize=function(){
    distance();
};

//  左右点击按钮

function L(){
    $("#draggable").css({"left":"-100px","top":"0px"});
}

$(function(){
    n=$('#draggable li').size();
    var wh=100*n+"%";
    $('#draggable').width(wh);
    var lt=(100/n/4);
    var lt_li=lt+"%";
    $('#draggable li').width(lt_li);
    var y=0;
    var w=2;
    if(y==-lt*w){
        $("#leftbtn").hide();
    }
    if(y==0){
        $("#rightbtn").hide();
    }
    $("#leftbtn").click(function() {
        if(y!=-lt*w){
            $("#rightbtn").show();
            $("#leftbtn").show();
            console.log("y:"+y);
            y=y-lt;
            var t=y+"%";
            $("#draggable").css({'-webkit-transform':"translate("+t+")",'-webkit-transition':'300ms linear'} );
            $("#draggable").css({'-moz-transform':"translate("+t+")",'-moz-transition':'300ms linear'} );
            //console.log("y:"+y);
            console.log("t:"+t);
            if(y==-lt*w){
                $("#leftbtn").hide();
            }
        }
    });

    $("#rightbtn").click(function() {
        if(y!=0){
            $("#rightbtn").show();
            $("#leftbtn").show();
            y=y+lt;
            var t=y+"%";
            $("#draggable").css({'-webkit-transform':"translate("+t+")",'-webkit-transition':'300ms linear'} );
            $("#draggable").css({'-moz-transform':"translate("+t+")",'-moz-transition':'300ms linear'} );

            if(y==0){
                $("#rightbtn").hide();
            }
        }
    });
});



//自己添加
/***********getAjaxData***************/
function getAjaxData(url,data,ff){
	var ret = '';
	$.ajax({
		type:ff, 
		url:url,
		data:data, 
		dataType:"text",
		async:false,
		error:function(err){alert("加载错误");},
		success:function(msg){
		   // ret = msg;
			if (msg){
				ret = msg;
			}else{
				ret = 0;
			}
	}});
	return ret;
}
var numg;
function listLoad2(pageid,url,data,wrap){
	var myScroller = $(pageid).scroller({verticalScroll:true,horizontalScroll:false,autoEnable:true});
	var datastr = data;
	
	
	
	var datacut;
	myScroller.addInfinite();
	$.unbind(myScroller, "infinite-scroll");
	myScroller.enable();
	
	var flag=true;
	
	$.bind(myScroller, "infinite-scroll", function () {
		var self = this;
		
		
		if(numg<=0){
			$(self.el).find(wrap).append('<div id="infinite2" style = "text-align:center;color:#000; padding:3% 0%; clear:both; margin-bottom:2%;">没有数据可加载了...</div>');
				
					setTimeout(function () {
						// alert("没有数据可加载了");
						$(self.el).find("#infinite2").remove();
						self.clearInfinite();
					}, 1000);
					
			self.scrollToBottom();
			return false;
		}else{
			
			if(!flag)return;
				flag=false;
			
		$.bind(myScroller, "infinite-scroll-end", function () {	
			
			$(self.el).find(wrap).append('<div id="infinite" style = "text-align:center;color:#000; padding:3% 0%; clear:both; margin-bottom:2%;">正在加载...</div>');		
			$.unbind(myScroller, "infinite-scroll-end");
			self.scrollToBottom();
			
			setTimeout(function () {				
				$(self.el).find("#infinite").remove();
				self.clearInfinite();
				
				
				
				var reqData = getAjaxData(url, datastr,"post");
				
				
				if(reqData == 0){
					
					flag=true;
					
					
					$(self.el).find(wrap).find("#infinite").remove();
					//alert($("#infinite").html());
					//$(self.el).find(wrap).find("#infinite").html("没有数据可加载了...");
					$(self.el).find(wrap).append('<div id="infinite2" style = "text-align: center;color:#000; padding:3% 0%; clear:both; margin-bottom:2%;">没有数据可加载了...</div>');
					setTimeout(function () {
						$(self.el).find(wrap).find("#infinite2").remove();
						
					}, 2000);
					
					return false;
				}else if(reqData == 1){
					alert('非法操作');
					flag=true;
					return false;
				}else if(reqData){
					
					
					var arr=reqData.split("&&&");
					numg=arr[1];
					
			
					
					console.info('当前页码：'+datastr);
					datacut = datastr.split("&");
					datastr = "";
					for(var i=0;i<datacut.length;i++){
						var pagecut = datacut[i].split("=");
						if (pagecut[0] == "pageno")
						{
							pagecut[1] = parseInt(pagecut[1])+1;
						}
						datastr += (datastr==""?"":"&")+pagecut[0]+"="+pagecut[1];
						
					}
					
					
					
					$(self.el).find(wrap).append(arr[0]);
					flag=true;
					return true;
				}else {
					alert('未知错误');
					flag=true;
					return false;
				}
				
				
				self.scrollToBottom();
			}, 1000);
		});
		}
	});
}


function btnBack(){
	$(".btn-back").bind("tap",function(){
		$.ui.goBack();
		$(".btn-back").unbind("tap");
	});	
}


//---------------------访问量统计----------------------
$.ui.ready(function (){ 
	if(sessionStorage['_PAGECOUNT']){
		sessionStorage['_PAGECOUNT'] = Number(sessionStorage['_PAGECOUNT'])+1;
		console.log('加载：'+sessionStorage['_PAGECOUNT']+'次');
	}else{
		$.ajax({
			type:"POST",
			url:durl+"require/statistics.php",
			error:function(err){console.log('离线状态');},
			success:function(suc){console.log(suc);}
		});
		sessionStorage['_PAGECOUNT'] = 1;
	}
	
	
	
})
var PageTitle=$("meta#pagetitle").attr("name");

var s3,s4,s5,s6,s7,sss;



function slideShow(b,c){
	var a=document.getElementById(c).getElementsByTagName("li");
	var d=document.getElementById(b);
	window.mySwipe=Swipe(d,{auto:3000,continuous:true,stopPropagation:true,disableScroll:true,callback:function(f){var e=a.length;while(e--){a[e].removeAttribute("class","on")}a[f].setAttribute("class","on")}})}


//首页panel
function pageIndex()
{
	//slider('.big-pic-in', '.pic-list', 'a', '.slide-dot', 'span', 'slide-dot-cur', 300, 5000);
	
	
	slideShow("cslide","cslide-pos");
	
	
	$("#index_pro div").bind("tap",function(){
										   
								   
		var id=$(this).attr("id");
		localStorage.setItem("productid",id);
		localStorage.setItem("pid","306");//wutao++
		$("#index_pro div").unbind("tap");
		$.ui.loadContent("#product_view",false,false,"");
					
			$(".bnt").bind("tap",function(){			
			$.ui.loadContent("#product",false,false,"");
			$(".bnt").unbind("tap");
			});	
		
	});
	
	/*
	
	$("#index_news li").bind("tap",function(){
		var id=$(this).attr("id");
		localStorage.setItem("newsid",id);
		$("#index_news li").unbind("tap");
		$.ui.loadContent("#news_view",false,false,"");
		
	});
	
	*/
	
	
	$("#index_cuxiao li").bind("tap",function(){
											  
				
		var id=$(this).attr("id");
		localStorage.setItem("cuxiaoid",id);
		$("#index_cuxiao li").unbind("tap");
		
		$.ui.loadContent("#cuxiao_view",false,false,"");
		
	});
	
	
	$("#index_pro2 div").bind("tap",function(){
		var id=$(this).attr("id");
		localStorage.setItem("productid",id);
		localStorage.setItem("pid","306");//wutao++
		$("#index_pro2 div").unbind("tap");
		$.ui.loadContent("#product_view",false,false,"");
			$(".bnt").bind("tap",function(){
			$.ui.loadContent("#product",false,false,"");
			$(".bnt").unbind("tap");
			});	
		
	});
	
	
	//有关搜索的部分属性
	localStorage.setItem("dakai","");
	localStorage.setItem("jieguo","");
	localStorage.setItem("s20","");
}

//促销
function pageCuxiao()
{
	var x = $("#cuxiao").attr("data-title");
    $(".si-tl").html("<h1>"+x+"</h1>");  
	//$("meta#pagetitle").attr("name")
	//document.title="最新资讯_"+PageTitle;
	var num=$(".cuxiaomain").attr("id");
	if(num>0)
	numg=num;
	else
	numg=0;
	
	if(s3==undefined&&num>0){
		s3=true;
		listLoad2("#cuxiao",durl+"ajax_cuxiao.asp","pageno=2",".cuxiaomain"); 
	}
	cuxiaoid();
}

//促销详细
function pageCuxiaov()
{
	var x = $("#cuxiao_view").attr("data-title");
    $(".si-tl").html("<h1>"+x+"</h1>");  
	//document.title="最新资讯_"+PageTitle;
	var id = localStorage.getItem("cuxiaoid");
	var data=getAjaxData(htmldurl+"cuxiao_view.asp?id="+id, "","get");	
	$.ui.updatePanel("#cuxiao_view",data);
	$.ui.scrollToTop("#cuxiao_view");
	
	/*$("#newsdiv").delegate(".back","tap",function(){
		$("#newsdiv").undelegate(".back","tap");
		$.ui.loadContent("#news",false,false,"");
	})	*/
}

function cuxiaoid(){
	$(".cuxiaomain").delegate("li","tap",function(){
		var id=$(this).attr("id");
		localStorage.setItem("cuxiaoid",id);
		$(".cuxiaomain").undelegate("li","tap");
		$.ui.loadContent("#cuxiao_view",false,false,"");
		
	})	
}

//资讯
function pageNews()
{
	var x = $("#news").attr("data-title");
    $(".si-tl").html("<h1>"+x+"</h1>");  
	//$("meta#pagetitle").attr("name")
	//document.title="最新资讯_"+PageTitle;
	var num=$(".newsmain").attr("id");
	if(num>0)
	numg=num;
	else
	numg=0;
	
	if(s3==undefined&&num>0){
		s3=true;
		listLoad2("#news",durl+"ajax_news.asp","pageno=2&pid="+num,".newsmain"); 
	}
	newsid();
}

//新闻详细
function pageNewsv()
{
	var x = $("#news_view").attr("data-title");
    $(".si-tl").html("<h1>"+x+"</h1>");  
	//document.title="最新资讯_"+PageTitle;
	var id = localStorage.getItem("newsid");
	var data=getAjaxData(htmldurl+"news_view.asp?id="+id, "","get");	
	$.ui.updatePanel("#news_view",data);
	$.ui.scrollToTop("#news_view");
	
	/*$("#newsdiv").delegate(".back","tap",function(){
		$("#newsdiv").undelegate(".back","tap");
		$.ui.loadContent("#news",false,false,"");
	})	*/
}
function newsid(){
	$(".newsmain").delegate("li","tap",function(){
		var id=$(this).attr("id");
		localStorage.setItem("newsid",id);
		$(".newsmain").undelegate("li","tap");
		$.ui.loadContent("#news_view",false,false,"");
		
	})	
}
function newsUpDown(id,divname){
	localStorage.setItem(divname+"id",id);
	var idd=localStorage.getItem(divname+"id");
	if(idd!=""&&idd!=0){
		var data=getAjaxData(htmldurl+divname+"_view-"+idd+".html?r="+Math.random(), "","get");	
		$.ui.updatePanel("#"+divname+"_view",data);
		$.ui.scrollToTop("#"+divname+"_view");
		
	}
	else
	{
		alert("没有信息了");
		return;
	}
}

//师资团队
function pageTeam()
{
	var x = $("#team").attr("data-title");
    $(".si-tl").html("<h1>"+x+"</h1>");  
	var num=$(".teamlist").attr("id");
	if(num>0)
	numg=num;
	else
	numg=0;
	
	if(s7==undefined&&num>0){
		s7=true;
		listLoad2("#team",durl+"ajax/team.php","pageno=2",".teamlist"); 
	}
	
	teamid();
}
function pageTeamv()
{
	
	var x = $("#team_view").attr("data-title");
    $(".si-tl").html("<h1>"+x+"</h1>");  
	var id = localStorage.getItem("teamid");
	var data=getAjaxData(htmldurl+"team_view-"+id+".html?r="+Math.random(), "","get");	
	$.ui.updatePanel("#team_view",data);
	
	$.ui.scrollToTop("#team_view");
	
	
}

function teamid(){
	$(".teamlist").delegate("li","tap",function(){
		var id=$(this).attr("id");
		localStorage.setItem("teamid",id);
		$(".teamlist").undelegate("li","tap");
		$.ui.loadContent("#team_view",false,false,"");
		
	})
	
}
//常见问题
function pageCase()
{
	var x = $("#case").attr("data-title");
    $(".si-tl").html("<h1>"+x+"</h1>");  
	var num=$(".casemain").attr("id");
	if(num>0)
	numg=num;
	else
	numg=0;
	
	if(s6==undefined&&num>0){
		
		s6=true;
		listLoad2("#case",durl+"ajax/case.php","pageno=2",".casemain"); 
	}
	caseid();
}
function pageCasev()
{
	
	var x = $("#case").attr("data-title");
    $(".si-tl").html("<h1>"+x+"</h1>");  
	var id = localStorage.getItem("caseid");
	var data=getAjaxData(htmldurl+"case_view-"+id+".html?r="+Math.random(), "","get");	
	$.ui.updatePanel("#case_view",data);
	
	$.ui.scrollToTop("#case_view");
	
	/*$("#casediv").delegate(".back","tap",function(){
		$("#casediv").undelegate(".back","tap");
		$.ui.loadContent("#case",false,false,"");
	})	*/
	
	
}
function caseid(){
	$(".casemain").delegate("li","tap",function(){
		var id=$(this).attr("id");
		localStorage.setItem("caseid",id);
		$(".casemain").undelegate("li","tap");
		$.ui.loadContent("#case_view",false,false,"");
		
	})
	
}

//产品

function proUpDown(id,divname){
	localStorage.setItem(divname+"id",id);
	var idd=localStorage.getItem(divname+"id");
	var tid=localStorage.getItem("pid");
	if(tid)
	var datastr="&pid="+tid;
	
	if(idd!=""&&idd!=0){
		var data=getAjaxData(durl+divname+"_view.asp?r="+Math.random(), "id="+idd+datastr,"get");	
		$.ui.updatePanel("#"+divname+"_view",data);
		
		$(".protip").undelegate("a","tap");
		$(".protip").delegate("a","tap",function(){
			localStorage.removeItem("proname");
			var proname=$(this).attr("id");
			localStorage.setItem("proname",proname);
			//alert(localStorage.setItem("proname"));
			$.ui.loadContent("#online",false,false,"");
		})	
		
		if(localStorage.getItem("pid"))  //返回列表路径
		{

			if(localStorage.getItem("pid")!="306")
			{
				$(".btn-back").delegate("a","tap",function(){
				$.ui.loadContent("#products",false,false,"");
				$(".btn-back").undelegate("a","tap");									   
				});	
			
			}else{
				$(".btn-back").delegate("a","tap",function(){
				$.ui.loadContent("#product",false,false,"");
				$(".btn-back").undelegate("a","tap");									   
				});
			
			}
			
			
			
		}
		else
		{
			$(".btn-back").delegate("a","tap",function(){
				$.ui.loadContent("#product",false,false,"");
				$(".btn-back").undelegate("a","tap");									   
			});
			//localStorage.setItem("pid",0);
		}
		
		
		//$.ui.loadContent("#case_view",false,false,"");
		$.ui.scrollToTop("#"+divname+"_view");
		
	}
	else
	{
		alert("没有信息了");
		return;
	}
}

//产品列表加载
function pagePro()
{
	 var x = $("#product").attr("data-title");
    $(".si-tl").html("<h1>"+x+"</h1>");  
	var num=$(".mainpro").attr("id");
	if(num>0)
	numg=num;
	else
	numg=0;
	
	localStorage.setItem("classname","公司产品");
	
	if(s4==undefined&&num>0){
		s4=true;
		
		listLoad2("#product",durl+"ajax_product.asp","pageno=2&pid="+num,".mainpro"); 
	}
	protid(num);
	//localStorage.removeItem("pid")//wutao-
	//getpid();
}


//产品分类
function pageProclass()
{
	
	 var x = $("#pclass").attr("data-title");
    $(".si-tl").html("<h1>"+x+"</h1>");  
	
	$(".sort-title").unbind("tap");
	$(".sort-title").bind("tap",function(){
		var id=$(this).attr("id");
		var classname=$(this).attr("alt");
		localStorage.setItem("classname",classname);
		localStorage.setItem("pid",id);
		$.ui.loadContent("#products",false,false,"");
		
	})
	
	$(".sort-list a").unbind("tap");
	$(".sort-list a").bind("tap",function(){
		var id=$(this).attr("id");
		var classname=$(this).attr("alt");
		localStorage.setItem("classname",classname);
		localStorage.setItem("pid",id);
		$.ui.loadContent("#products",false,false,"");
		
	})
	
}

//产品介绍
function pageProv()
{
	var x = $("#product_view").attr("data-title");
    $(".si-tl").html("<h1>"+x+"</h1>");  
	var id = localStorage.getItem("productid");
	var tid=localStorage.getItem("pid");
	
	var data=getAjaxData(durl+"product_view.asp?r="+Math.random(), "pid="+tid+"&id="+id,"get");
	
	$.ui.updatePanel("#product_view",data);

	

	$.ui.scrollToTop("#product_view");
	
	if(localStorage.getItem("pid"))  //返回列表路径
		{

			if(localStorage.getItem("pid")!="306")
			{
				$(".btn-back").delegate("a","tap",function(){
				$.ui.loadContent("#products",false,false,"");
				$(".btn-back").undelegate("a","tap");									   
				});	
			
			}else{
				$(".btn-back").delegate("a","tap",function(){
				$.ui.loadContent("#product",false,false,"");
				$(".btn-back").undelegate("a","tap");									   
				});
			
			}
			
			
			
		}
		else
		{
			$(".btn-back").delegate("a","tap",function(){
				$.ui.loadContent("#product",false,false,"");
				$(".btn-back").undelegate("a","tap");									   
			});
			//localStorage.setItem("pid",0);
		}
	
	//产品预订
	$(".protip").undelegate("a","tap");
	$(".protip").delegate("a","tap",function(){
		localStorage.removeItem("proname");
		var proname=$(this).attr("id");
		localStorage.setItem("proname",proname);
		//alert(localStorage.setItem("proname"));
		$.ui.loadContent("#online",false,false,"");
	})	
}

function protid(pidd){
	$(".mainpro").undelegate("div","tap");
	$(".mainpro").delegate("div","tap",function(){
		var id=$(this).attr("id");
		localStorage.setItem("productid",id);
		localStorage.setItem("pid",pidd);//wutao+
		$.ui.loadContent("#product_view",false,false,"");
	})
}

//某分类下产品
function proL(pid){
		localStorage.setItem("pid",pid);
		var pid=localStorage.getItem("pid");
		//alert(cid);
		$.ajax({
			type:"get",
			url:htmldurl+"product.asp?pid="+pid,
			success:function(data){
				protid(localStorage.getItem("pid"));
				$.ui.loadContent("#products");
				$.ui.updatePanel("#products",data);
				$.ui.scrollToTop('#products');
				protid(localStorage.getItem("pid"));
				//getPro();
			}
		});
		//var num=getAjaxData(durl+"ajax/productnum.php?r="+Math.random(), "pageno=1&tid="+pid,"post");
		var num=2;
		if(num>0){
			numg=num;
			listLoad2("#products",durl+"ajax_product.asp","pageno=2&pid="+pid,".mainpro"); 
		}
}


//分类下的产品
function pageProx()
{
	var classname=localStorage.getItem("classname");
	 var x =(classname?classname:$("#product_view").attr("data-title"));
    $(".si-tl").html("<h1>"+x+"</h1>");  
	
	if(localStorage.getItem("pid"))
	{
	proL(localStorage.getItem("pid"));
	}
}


function pageSearch()
{	
	var x = $("#search").attr("data-title");
    $(".si-tl").html("<h1>"+x+"</h1>");  
	searchid();
}
function checkOSx(){
	if (/android/i.test(navigator.userAgent)){
    // todo : android
	$("#apple").hide();
	}
	else
	{
		//alert("apple");
		$("#anzhuo").hide();
	}
}

function searchUpDown(id,divname){
	localStorage.setItem(divname+"id",id);
	var idd=localStorage.getItem(divname+"id");
	//var id = localStorage.getItem("searchid");
	var SeaStr = localStorage.getItem("SeaStr");
	
	if(idd!=""&&idd!=0){
		var data=getAjaxData(durl+"search_view.php?r="+Math.random(), "id="+idd+"&SeaStr="+SeaStr,"post");
		//var data=getAjaxData(htmldurl+divname+"_view-"+idd+".html?r="+Math.random(), "","get");	
		$.ui.updatePanel("#"+divname+"_view",data);
		$.ui.scrollToTop("#"+divname+"_view");
		
	}
	else
	{
		alert("没有信息了");
		return;
	}
}


function seaForm(obj)
{
	
	var x = $("#search").attr("data-title");
    $(".si-tl").html("<h1>"+x+"</h1>");  
	
	
	
	var str = $(obj).parents("form").children("input[name='SeaStr']").val();
	
	var r = '';
	if ( str=="" || str==undefined)
	{
		alert("请输入关键词");
		return false;
	}
	
	
	
	
	
	localStorage.setItem("_SEASTR",str);		
	var data=getAjaxData(htmldurl+"search.asp?str="+str, "","get");	
	$.ui.loadContent("#search");	
	$.ui.updatePanel("#search",data);
	$.ui.scrollToTop("#search");
	
	

	
	if(sss==undefined){
		sss=true;
		
		listLoad2("#search",durl+"ajax_search.asp","pageno=2&str="+str,".mainpro"); 
	}
	

	searchid(str);
	
	return false;
	
}


function pageSeav()
{
	var x = $("#search_view").attr("data-title");
    $(".si-tl").html("<h1>"+x+"</h1>");  
	var id = localStorage.getItem("productid");
	var str=localStorage.getItem("str");
	
	var data=getAjaxData(durl+"search_view.asp?r="+Math.random(), "str="+str+"&id="+id,"get");
	
	$.ui.updatePanel("#search_view",data);

	

	$.ui.scrollToTop("#search_view");
	
	if(localStorage.getItem("str"))  //返回列表路径
		{

			$(".btn-back").delegate("a","tap",function(){
				$.ui.goBack();
				$(".btn-back").undelegate("a","tap");									   
			});	
		}
		else
		{
			$(".btn-back").delegate("a","tap",function(){
				$.ui.loadContent("#product",false,false,"");
				$(".btn-back").undelegate("a","tap");									   
			});
			//localStorage.setItem("pid",0);
		}
	
	
}

function searchid(str){
	
	
	
	$(".mainpro").undelegate("div","tap");
	$(".mainpro").delegate("div","tap",function(){
		var id=$(this).attr("id");
		localStorage.setItem("productid",id);
		localStorage.setItem("str",str);//wutao+
		
		
		$.ui.loadContent("#search_view",false,false,"");
	})
}

function proSeaUpDown(id,divname){
	localStorage.setItem(divname+"id",id);
	var idd=localStorage.getItem(divname+"id");
	var str=localStorage.getItem("str");
	if(str)
	var datastr="&str="+str;
	
	if(idd!=""&&idd!=0){
		var data=getAjaxData(durl+divname+"_view.asp?r="+Math.random(), "id="+idd+datastr,"get");	
		$.ui.updatePanel("#"+divname+"_view",data);
		
		$(".protip").undelegate("a","tap");
		$(".protip").delegate("a","tap",function(){
			localStorage.removeItem("proname");
			var proname=$(this).attr("id");
			localStorage.setItem("proname",proname);
			//alert(localStorage.setItem("proname"));
			$.ui.loadContent("#online",false,false,"");
		})	
		
		if(localStorage.getItem("str"))
		{

			$(".btn-back").delegate("a","tap",function(){
				$.ui.goBack();
				$(".btn-back").undelegate("a","tap");									   
			});	
		}
		else
		{
			$(".btn-back").delegate("a","tap",function(){
				$.ui.loadContent("#product",false,false,"");
				$(".btn-back").undelegate("a","tap");									   
			});
			//localStorage.setItem("pid",0);
		}
		
		
		//$.ui.loadContent("#case_view",false,false,"");
		$.ui.scrollToTop("#"+divname+"_view");
		
	}
	else
	{
		alert("没有信息了");
		return;
	}
}

function msgBox(msg) {
	$.ui.showMask(msg);
	window.setTimeout(function(){
		$.ui.hideMask(msg);
	}, 1000);
}

//---------------------在线留言----------------------
function msgForm(){
	var x = $("#msg").attr("data-title");
    $(".si-tl").html("<h1>"+x+"</h1>");  
	
	clearForm.msg();
	$('#msgBtn').unbind('click');
	$("#msgBtn").bind("click",function(){
		var data = "act=msg";
		var msg_mem_name = $("#msg_mem_name").val();
		var msg_telephone = $("#msg_telephone").val();
		var msg_qq = $("#msg_qq").val();
		
		var msg_content = $("#msg_content").val();
		
		var isTel=/(^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$)|(^((\(\d{3}\))|(\d{3}\-))?(1[358]\d{9})$)/ ; 
		if(msg_mem_name == ''){
			msgBox('姓名不能为空');
			return false;
		}else if(msg_telephone == '' || msg_telephone.search(/[\s]/g)!=-1){
			msgBox('手机号不能为空，不可输入空格');
			return false;
		}else if(!isTel.test(msg_telephone)){
			msgBox('手机号格式不正确');
			return false;
		}
		data += "&msg_mem_name="+msg_mem_name+"&msg_telephone="+msg_telephone+"&msg_qq="+msg_qq+"&msg_content="+msg_content;
		var ret = getAjaxData("msg.asp",data,"post");
		if(ret == 'defeat'){
			msgBox('提交失败');
			return false;
		}
		if(ret == 'ok'){
			msgBox("提交成功");
			clearForm.msg();
			return false;
		}
	});
}

//message box
function super_mask(text,fun){
	$.ui.showMask(text);
	window.setTimeout(function(){
		$.ui.hideMask();
		if(fun)fun();
	}, 2000);
	return;	
}

//clearForm
var clearForm={
	clear:function(){
		$("input[placeholder]").each(function(){
			$(this).val('');
		});	
		//$("select option[selected]").text();
		
	},
	msg:function(){
		this.clear();
		$("#m-con").val("");
		
	},
}


function newsL(cid,cname){

	
	if(cid){
			
		localStorage.setItem("classname",cname);
		localStorage.setItem("pid",cid);		
		
		proL(localStorage.getItem("pid"));
		
		
		
	}	
}