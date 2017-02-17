// JavaScript Document
$(function(){
	
	//城市	
	$('.change_city_btn').click(function(){
		$('.city_list').show();
		return false;
	});	

	//下拉搜索
	$('.dropdown_btn').click(function(){		
		$(this).prev().find('dt').toggle();
		return false;
	});
	$('.categroy_list li').click(function(){
		var _text=$(this).text();
		$(this).parent().parent().prev().text(_text);
		$(this).parent().parent().hide();	
	}).click();
	//初使化框框
	$('.search_input_text').blur(function(){		
		if($(this).val()==''){
			$(this).val('请输入关键词');
		}
	}).focus(function(){
		if($(this).val()=='请输入关键词'){
			$(this).val('');
		}
	});	
	
	//取消焦点
	$(document).click(function(e){		
		var _target=$(e.target);
		//alert(_target);
		if(!_target.parents().hasClass('city_list')&&!_target.hasClass('city_list')){
			$('.city_list').hide();
		}
		if(!_target.parents().hasClass('categroy_list')&&!_target.hasClass('categroy_list')){
			$('.categroy_list').parent().hide();
		}
	});
	//列表布局	
	$('.cols_wrapper ul li:nth-child(4n+1)').css('margin-left','0px');
	//fuck ie6
	if($.browser='msie'&&$.browser.version=='6.0'){
		$('.cols_wrapper ul li:nth-child(4n+1)').css('margin-left','1px');
		$('.latest_msg li:even').css({'margin-left':'6px'});
		$('.latest_msg1 li:even').css({'margin-left':'6px'});
		$('.cols_wrapper1 ul li:nth-child(4n+1)').css({'margin-left':'5px'});
	}
	
	//等高
	function eq_height(obj1,obj2){			
		var obj1=$(obj1);		
		var obj2=$(obj2);						
		if(obj1.height()>=obj2.height()){
			obj2.height(obj1.height());			
		}else{			
			obj1.height(obj2.height());			
		}		
	}
	eq_height('.main_l','.bar_r');
	eq_height('.main','.bar_l');
	//eq_height('.main','.bar_l');
	
	//招聘信息列表
	$('.latest_msg li:odd').css({'margin-left':'50px'});
	$('.latest_msg1 li:odd').css({'margin-left':'50px'});
	
	//小的推荐	
	$('.cols_wrapper1 ul li').hover(function(){		
		$(this).css({'background':'#fbebdb'});
	},function(){
		$(this).css({'background':'#fafafa'});
	});
	
	//投诉
	$('.compiant_btn,.compiant_cancle').click(function(){
		$('.complain_tab').toggle();
		return false;	
	});	
	
	$('.bar_nav_wrap h2').click(function(){
		if($(this).next('ul')){
			$(this).next().toggle();	
		}
	})
	
	//$('.bar_nav01:first').css('display','block');
	$('.close_btn,.overlay').click(function(){
		$('.overlay').toggle();
		$('.alert').toggle();		
	});	
	
	$('.aaa,.comfirm_btn,.apply_vip_btn,.reg_done_btn').click(function(){
		$('.overlay').toggle();
		$('.alert').toggle();
		return false;	
	});
	
	//注册选项卡
	$('.register_tit ul li a').click(function(){
		var index=$(this).parent().index();
		$('.register_tit ul li a').removeClass('reg_tit_focus');
		$(this).addClass('reg_tit_focus');		
		$('.reg_box>div.tab_con').eq(index).show().siblings().hide();
		$('.go_login_box').show();
		return false;
	})
		
	//登陆转跳
	$('.go_login').click(function(){
		if($('.login_text').length>0){
			$(window).scrollTop(0);
			$('.login_text').eq(0).focus();
		}
		return false;	
	});

	//简历	
	$('input[name="indetity"]:first').attr('checked','checked');
	$('input[name="indetity"]').change(function(){
		if($(this).val()==1&&$(this).attr('checked')=='checked'){
			$('#student').show();
			$('#social').hide();
		}else{
			$('#student').hide();
			$('#social').show();	
		}
	});
	
	//收缩分类
	/*var less_cat=$('<a href="#" class="red less_cat">收起</a>');
	var more_cat=$('<a href="#" class="red more_cat">更多&nbsp;<span class="gray">(243)</span></a>');
	$('.category dl dt a').each(function(i){			
		if($(this).index()==20){			
			$(this).after(more_cat);
			return;	
		}
	});	
	
	more_cat.click(function(){		
		if($('.category dl dt a').length>21){
			$(this).hide();
			$('.category dl dt').css({height:'auto'}).append(less_cat);
			less_cat.show();
		}
		return false;
	});		
	less_cat.click(function(){	
		$(this).hide();
		$('.category dl dt').css({height:'44px'});
		$('.category dl dt a').each(function(i){			
			if($(this).index()==20){			
				$(this).after(more_cat);
				more_cat.show();			
			}
		});
		return false;
	});*/	
	
	//推荐展示
	var timer=null;
	var offset=5000;
	var index=0;
	var wrap=$('.slide_control');
	var len=wrap.children().length;
	var w=wrap.children().outerWidth();
	var num_wrap=$('.slide_num');
	
	//初使化
	function intlize(){		
		wrap.css({position:'relative',width:w*len+"px",height:wrap.parent().height()+'px',left:"0px"});
		wrap.children().css({float:'left'});
		for(i=0;i<len;i++){
			num_wrap.append('<li></li>');	
		}
		num_wrap.css({left:'50%','margin-left':"-"+num_wrap.width()/2+"px"});
		num_wrap.children().first().addClass('active');
		//return num_wrap.width();
	}
	
	function slideimage(i){
		wrap.animate({left:"-"+w*(i-1)+"px"},1000);		
	}
	
	function changenum(i){
		i=i-1;		
		num_wrap.children().removeClass('active').eq(i).addClass('active');
	}
	//绑定左右控制
	function hookbtn(){
    $('.slide_num_wrap').children().filter('#prev_pro,#next_pro')
        .bind('click', function(){				
            if (timer){
                clearTimeout(timer);
            }
            var id = this.id;
            if (id == 'prev_pro') {
                index--;
                if (index < 0) index = len;
            }else{
                index++;
                if (index > len) index = 0;
            }
            changenum(index);
            slideimage(index);
            timer = window.setTimeout(auto, offset);
						
        });
	}
	//绑定数字指示器
	function hooknum(){
		$('.slide_num li').bind('click',function(){			
			if (timer){
                clearTimeout(timer);
            }
			var num=$(this).index();
			wrap.animate({left:"-"+w*num+"px"},1000);
			$(this).addClass('active').siblings().removeClass('active');
            timer = window.setTimeout(auto, offset);
		});		
	}
	
	//自动运行
	function auto(){
		index++;
		if (index > len){
			index = 0;
		}
		changenum(index);
		slideimage(index);
		timer = window.setTimeout(auto, offset);
	}
	intlize();
	auto();	
	hookbtn();
	hooknum();
	

	//下拉收缩插件
	$.fn.slideUD=function(opt){		
		var defaults={
			height:44,//收起的高度
			up:'.less_cat',//下拉按钮
			down:'.more_cat',//收缩按钮
			num:10
		};
		var pram=$.extend(defaults, opt || {});
		var up_btn=$(pram.up),
			down_btn=$(pram.down);
		this.css({
			position:'relative',
			height:pram.height+"px"
			});
		var _this=this;
		down_btn.css({
			position:'absolute',
			right:'5px',
			bottom:'0px'			
		});			
		up_btn.css({
			position:'absolute',
			right:'5px',
			bottom:'0px',
			display:'none'
		});	
		if(this.children().length>10){			
			down_btn.show();
		}			
		//下拉事件	
		down_btn.live('click',function(){
			_this.css('height','auto');
			$(this).hide();
			up_btn.show();
			return false;
		});	
		//收起事件
		up_btn.live('click',function(){
			_this.css('height',pram.height+"px");
			$(this).hide();
			down_btn.show();
			return false;
		});	
	}
	$('.category dl dt').slideUD();
	
});