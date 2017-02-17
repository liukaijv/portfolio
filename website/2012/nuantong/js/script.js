$(document).ready(function(){
	
	$('.tool_tip .submit_sty').click(function(){
		
		var elem = $(this).closest('.item');
		
		$.confirm({
			'title'		: '',
			'message'	: '',
			'buttons'	: {
				'完成'	: {
					'class'	: 'blue',
					'action': function(){
						elem.slideUp();
					}
				},
				'继续购物'	: {
					'class'	: 'gray',
					'action': function(){}	// Nothing to do in this case. You can as well omit the action property.
				}
			}
		});
		
	});
	
});