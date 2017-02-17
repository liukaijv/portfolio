$(function(){
	//fixie6
	if($.browser.msie && $.browser.version == 6.0){}
	
	function int(){
		var topHeight = $('.top_bg_repeat').outerHeight();
		var windowHeight =$(window).outerHeight();
		var footHeight = $('.footer').outerHeight();
		$('.container').height(windowHeight-topHeight);
		$('.main').height(windowHeight-topHeight-footHeight);
		$('.oa_bg').height(windowHeight-topHeight-footHeight-25);
	}
	int();
	$(window).resize(function(){
		int();
	});
	
	$('.menu_control_btn').bind('click',function(){
		if($(this).parent().next().length >=1){
			if($(this).parent().next().is(':visible')){
				$(this).text('+').attr('title','展开').parent().next().slideUp();
			}else{
				$(this).text('-').attr('title','收起').parent().next().slideDown();
			}
		}
	}).filter(':first').trigger('click');
	
	$('.topic_list th input[type=checkbox]').click(function(){
		if($(this).is(':checked')){			
			$('.topic_list td input[type=checkbox]').attr('checked','checked');	
		}else{
			$('.topic_list td input[type=checkbox]').removeAttr('checked');	
		}	
	})
	
});