(function($){
	$.fn.floatAd = function(options){
		var defaults = {
			imgSrc : "", 
			url : "", 
			openStyle : 1, 
			speed : 10 
		};
		var options = $.extend(defaults,options);
		var _target = options.openStyle == 1 ?  "target='_blank'" : '' ;
		var html = "<div id='float_ad' style='position:absolute;left:0px;top:0px;z-index:1000000;cleat:both;'>";
            html += " <img src='../../bbb/js/" + options.imgSrc + "' border='0' class='float_ad_img'/> <span href='javascript:;' id='close_float_ad' style=' color:#333;display:inline-block; line-height:16px; float:right; margin-top:182px; width:60px;text-align:center;cursor:pointer;position:relative; margin-left:-60px;'>点击关闭</span>";
            html += "</div>";

        $('body').append(html);
			
			
		function init(){
			var x = 0,y = 0 
			var xin = true, yin = true 
			var step = 1 
			var delay = 10 
			var obj=$("#float_ad") 
			obj.find('img.float_ad_img').load(function(){
				var float = function(){
				    var L = T = 0;
					var OW = obj.width();//当前广告的宽
					var OH = obj.height();//高
					var DW = $(document).width(); //浏览器窗口的宽
					var DH = $(document).height(); 

 				    x = x + step *( xin ? 1 : -1 ); 
					if (x < L) { 
						xin = true; x = L
					} 
					if (x > DW-OW-1){//-1为了ie
						xin = false; x = DW-OW-1
					} 
					
					y = y + step * ( yin ? 1 : -1 ); 
					if (y > DH-OH-1) { 
					
						yin = false; y = DH-OH-1 ;
					}
					if (y < T) {
						yin = true; y = T
					} 
					
					var left = x ; 
					var top = y; 
					
					obj.css({'top':top,'left':left});
				}
				var itl = setInterval(float,options.speed);
				$('#float_ad').mouseover(function(){clearInterval(itl)}); 
				$('#float_ad').mouseout(function(){itl=setInterval(float, options.speed)} )
			});
			// 点击关闭
			$('#close_float_ad').live('click',function(){
			    $('#float_ad').hide();
			});
		}

	   init();
	
	}; //floatAd
	

})(jQuery);