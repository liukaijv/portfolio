$(document).ready(function(){
	
	$('.tool_tip .submit_sty').click(function(){
		
		var elem = $(this).closest('.item');
		
		$.confirm({
			'title'		: '',
			'message'	: '',
			'buttons'	: {
				'���'	: {
					'class'	: 'blue',
					'action': function(){
						elem.slideUp();
					}
				},
				'��������'	: {
					'class'	: 'gray',
					'action': function(){}	// Nothing to do in this case. You can as well omit the action property.
				}
			}
		});
		
	});
	
});