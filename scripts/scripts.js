
$(document).ready(function(){

	$('.button').click(function() {
		var my_image = $(this).closest('.column').html();
		
		$('.column').html(my_image);
		//alert(my_image);
		
	});

});


