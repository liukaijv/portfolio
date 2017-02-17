//js code demo

//弹出层

//首先定义一个简单的对象:
function objDIV() {
this.bgdiv ;
this.infodiv ;
} 
//遮罩
function openBackDiv(txbdiv) {
txbdiv.bgdiv = document.createElement("div");
txbdiv.bgdiv.setAttribute("id", "overDiv");
txbdiv.bgdiv.innerHTML = "<iframe frameborder=\"no\" class=\"overPanel\" id=\"ifrover\"></iframe>";
} 
//添加对象
objDIV.prototype.openBG = function() {
openBackDiv(this);
document.body.appendChild(this.bgdiv);
this.bgdiv.style.display = "block";
this.bgdiv.style.width = document.documentElement.clientWidth + "px";
this.bgdiv.style.height = document.documentElement.scrollHeight + "px";
}
//信息层 
function openLoadDiv(txbdiv) {
txbdiv.infodiv = document.createElement("div");
txbdiv.infodiv.setAttribute("id", "div_info");
txbdiv.infodiv.innerHTML = "<div style=\" line-height:1.5;background:url(../images/tips-top-bg.gif) repeat-x; height:54px; text-align:center;\"><img border=\"0\" src=\"../images/xtts.gif\" /></div><div style='padding:20px; font-size:14px; color:#b44201;'><div style='width:100px; float:left;margin:60px 0 0 60px; height:80px;'><img src='/images/business/loading.gif' width='100px' height='100' border='0'/></div><div style='float:left; width:250px;margin:90px 0 0 20px;'><p>请稍等，正在处理中...</p></div></div></div>";
document.body.appendChild(txbdiv.infodiv);
txbdiv.infodiv.style.width = "550px";
txbdiv.infodiv.style.height = "270px";
txbdiv.infodiv.style.fontSize = "14px";
txbdiv.infodiv.style.position = "absolute";
txbdiv.infodiv.style.background = "#fff";
txbdiv.infodiv.style.zIndex = "9999";
centerobject();//居中的方法
}
objDIV.prototype.openLoading = function() { this.openBG(); openLoadDiv(this); }
//移除方法
objDIV.prototype.removeBG = function() {
if (this.bgdiv || document.getElementById("overDiv")) {
if (this.bgdiv) {
document.body.removeChild(this.bgdiv);
} else {
document.body.removeChild(document.getElementById("overDiv"));
}
}
}
objDIV.prototype.removeInfo = function() {
this.removeBG();
if (this.infodiv) {
document.body.removeChild(this.infodiv);
} else {
document.body.removeChild(document.getElementById("div_info"));
}
}

//jq浮动层
$(document).ready(function(){

if($.browser.msie && $.browser.version == 6) {
FollowDiv.follow();
}
});
FollowDiv = {
follow : function(){
$('#cssrain').css('position','absolute');
$(window).scroll(function(){
var f_top = $(window).scrollTop() + $(window).height() - $("#cssrain").height() - parseFloat($("#cssrain").css("borderTopWidth")) - parseFloat($("#cssrain").css("borderBottomWidth"));
$('#cssrain').css( 'top' , f_top );
});
}
}

//tab选项卡1
function clickTab(e){
            $(".titleBar li.on").removeClass("on");
            $(this).addClass("on");
            var i=$(this).index();
            $(".tab_content > ul.on").removeClass("on");
            $(".tab_content > ul").eq(i).addClass("on");
        }
$(".TabList .titleBar li").click(clickTab3);

//tab选项卡2
function clickTab2(e){
            $(".titleBar li.on").removeClass("on");
            $(this).addClass("on");
            var i=$(this).index();
            $(".tab_content > ul.on").removeClass("on");
            $(".tab_content ul").filter("[index='"+i+"']").addClass("on")
        }
//tab选项卡3
function clickTab3(e){
            var currentContent=$(this).closest(".TabList");
            //$(".titleBar li.on",currentContent).removeClass("on");
            currentContent.find(".titleBar li.on").removeClass("on");
            $(this).addClass("on");
            var i=$(this).index();
            $(".tab_content > ul.on",currentContent).removeClass("on");
            //currentContent.find(".tab_content > ul.on").removeClass("on");
            currentContent.find(".tab_content ul").filter("[index='"+i+"']").addClass("on")
        }
		
		
//幻灯片
function click1(){
        var index=$(this).index();
        $(".focus_tab > div.on").removeClass("on");
        $(".focus_tab > div:eq("+index+")").addClass("on");
        $(this).siblings(".on").removeClass("on");
        $(this).addClass("on");
    } 
$(".sidePic li").bind('click',click1)

 function click2(){
        var index=$(this).index();
        $(".focus_tab > div").hide()
        $(".focus_tab > div:eq("+index+")").show();
        $(this).siblings(".on").removeClass("on");
        $(this).addClass("on");
    }
$(".sidePic li").bind('click',click2)
//加鼠标划过事件
$(".sidePic li").bind('click',click2).bind('mouseover',click1)

//定时函数
var mytime;
    function resetTime(){
         mytime=setInterval(play,1000);
    }
    resetTime();
    function clearTime(){        
        clearInterval(mytime);
    }
//判断位置
var curIndex=0;   //当前索引
var imgCount=$(".sidePic li").length;    //图片的总数
function play(){
        curIndex++;
        if(curIndex>=imgCount){
            curIndex=0;
        }
        //console.log($("sidePic > li:eq("+curIndex+")"))
        $(".sidePic > li:eq("+curIndex+")").click();
    }
//绑定事件
$(".sidePic li").bind('click',click2).bind('mouseover',click1).bind('mouseover',clearTime).bind('mouseout',resetTime);

//幻灯片滑动
$("#addList").click(addList);
    function addList(){
        var temp=$(".focusPic:eq(0)").clone();
        //$("body").append(temp);
        temp.appendTo("body")
        temp.find(".focus_tab .normal").show();
        temp.css({"overflow":"hidden","margin-left":"350px"});
        temp.find(".focus_tab").css({"position":"relative"})
        temp.find(".focus_tab .normal").css("margin-right","10px");
        var itemWidth=temp.find(".focus_tab .normal").width()+10;
        temp.find(".focus_tab").width(itemWidth*imgCount);    
        var curIndex=0;
        function play(){
            curIndex++;
            if(curIndex>=imgCount){
                curIndex=0;
            }
            temp.find(".sidePic > li:eq("+curIndex+")").click();
        }
        var startIndex=0;
        setInterval(play,2000);
        temp.find(".sidePic li").click(function(){
            $(this).siblings(".on").removeClass("on");
            $(this).addClass("on")
            curIndex=$(this).index();
            var step = startIndex-curIndex;//步长，移动了多少张图片
            console.log(step);
            temp.find(".focus_tab").animate({left:step*itemWidth+"px"},"slow");
        });
    }
	
//左右不间断滚动
$(function(){
    var itemWidth=$(".focus_tab > .normal").width()+10;
    var sumWidth=itemWidth*$(".focus_tab > .normal").length;
    var temp=$(".focus_tab > div").clone();
    temp.appendTo(".focus_tab");
    $(".focus_tab").width(sumWidth*2);
    var i=0;
    setInterval(play,18);
    function play(){
        //$(".focus_tab").offset({left:i,top:$(".focus_tab").offset().top});
        $(".focus_tab").css("left",i)
        i-=1;
        //if(Math.abs($(".focus_tab").offset().left)>=sumWidth)
        if(Math.abs($(".focus_tab").css("left"))>=sumWidth)
        i=0;
    }
 });

//鼠标滚动放大缩小图片
$(function(){
    $(".body img").each(function(){
        if($.browser.msie){
            $(this).bind("mousewheel",function(e){
                var e=e||event,v=e.wheelDelta||e.detail;
                if(v>0)
                    resizeImg(this,false);//放大图片呗
                    else
                    resizeImg(this,true);//缩小图片喽
                    window.event.returnValue = false;//去掉浏览器默认滚动事件
                    //e.stopPropagation();
                    return false;
            })
        }else{
        $(this).bind("DOMMouseScroll",function(event){
            if(event.detail<0)
            resizeImg(this,false);
            else
            resizeImg(this,true);
            event.preventDefault()//去掉浏览器默认滚动事件
          //event.stopPropagation();
		   })
        }
    });
    function resizeImg(node,isSmall){
        if(!isSmall){
            $(node).height($(node).height()*1.2);
        }else
        {
            $(node).height($(node).height()*0.8);            
        }
    }
});

//自行添加删除行
//开始
(function($) {
})(jQuery);
//命名
$.fn.autoAdd = function(options) {}
//参数
var settings = { changeInput: $("#input"), tempRowClass: "tempRow", min: 1, max: 90, addButtonClass: "addbtn", delButtonClass: "delbtn", addCallBack: null, delCallBack: null, indexClass: "index", insertClass: "insertbtn", moveUpClass: "moveupbtn", moveDownClass: "movedownbtn" };
        if (options) $.extend(settings, options);
//方法
function addRow(num, isInsert, target) {
            for (var i = 0; i < num - count; i++) {
                var temp = content.find("." + settings.tempRowClass).first().clone(true);
                temp.find("input").val("");
                temp.find("select").val("-1");
                temp.find("textarea").val("");
                temp.find(":checkbox").attr("checked", false);
                temp.attr("id", "");
                temp.find("input,tr,textarea,select,:checkbox,tbody").attr("id", "");
                if (temp.find(".richText").length > 0) {
                    temp.find(".ke-container").remove();
                }
                temp.find(".richText,input").each(function() {
                    $(this).attr("id", "txt_" + Math.round(Math.random() * new Date().getTime()))
                    $(this).show();
                });
                if (isInsert) {
                    temp.insertBefore(target.closest("." + settings.tempRowClass));
                } else {
                    content.append(temp);
                }
            }
            if (num < count) {
                for (var j = count - 1; j >= num; j--) {
                    delRow(content.find("."+settings.tempRowClass).eq(j));
                }
            } else {
                if (settings.addCallBack)
                    settings.addCallBack($(temp));
            }
            count = content.find("." + settings.tempRowClass).length;
            settings.changeInput.val(count);
            sumIndex();
            showhideBtn();
        };
//删除方法
function delRow(row) {
            row.remove();
            count = content.find("." + settings.tempRowClass).length;
            settings.changeInput.val(count);
            if (settings.delCallBack)
                settings.delCallBack(content.children().eq(j));
            showhideBtn();
            sumIndex();
        }
//控制按钮
content.find("." + settings.moveUpClass).bind("click", function() {
            $(this).closest("." + settings.tempRowClass).insertBefore($(this).closest("." + settings.tempRowClass).prev("." + settings.tempRowClass));
            showhideBtn();
            sumIndex();
            return false;
        });
        content.find("." + settings.moveDownClass).bind("click", function() {
            $(this).closest("." + settings.tempRowClass).insertAfter($(this).closest("." + settings.tempRowClass).next("." + settings.tempRowClass));
            showhideBtn();
            sumIndex();
            return false;
        });

//等比宿放图片

function autoResizeImage(max_Width,max_Height,imgObj) {
    var image = new Image();
    image.src = imgObj.src;
    var cur_w = image.width;
    var cur_h = image.height;
    var radio = 1;
    var w_radio = max_Width/cur_w;
    var h_radio = max_Height/cur_h;
    if(max_Width == 0 || max_Height == 0) {
          radio = 1;
    }else {
          radio = w_radio <=h_radio ? w_radio :h_radio;
    }
    imgObj.width =  cur_w * radio;
    imgObj.height = cur_h * radio;    
}