
$(document).ready(function(){
	
	$('.controls a').click(function() {
		var cur_slide = $('.slide.current');
		var cur_index = $(cur_slide).index('.slide');
		var num_slides = $('.slide').size() - 1 ;
		
		//alert(cur_index);
		
		if ( $(this).hasClass('next') ) {
			//alert('next');
			
			$(cur_slide).fadeOut(200, function () {
				//fade in the next slide
				
				if (cur_index >= num_slides) {
					//if last
					var next_slide = $('.slide').first();
				} else {
					//everything else
					var next_slide = $(cur_slide).next('.slide');
				};
				
				
				
				$(next_slide).fadeIn(200);
				
				$(cur_slide).removeClass('current');
				$(next_slide).addClass('current');
				
				
			});
			
		} else if ( $(this).hasClass('prev') ) {
			//alert('prev');	
			
			$(cur_slide).fadeOut(200, function () {
				//fade in the next slide
				
				if (cur_index <= 0) {
					//if last
					var next_slide = $('.slide').last();
				} else {
					//everything else
					var next_slide = $(cur_slide).prev('.slide');
				};
				
				
				
				$(next_slide).fadeIn(200);
				
				$(cur_slide).removeClass('current');
				$(next_slide).addClass('current');
				
				
			});
			
		};
		
	});
	
	


	/*
	$('.slide-click').click(function() {
		var cur_slide = $(this).closest('.slide');
		var cur_index = $(cur_slide).index('.slide');
		
		var target_slide = $('.slide').eq(cur_index - 1);
		
		$(target_slide).addClass('highlighted');
		
	});
	
	
	
	$('.controls a').click(function() {
		var num_slides = $('.slide').size() -1;
		var cur_slide = $('.current');
		var cur_index = $(cur_slide).index('.slide');
		
		if ($(this).hasClass('next')){
			var target_slide = $('.slide').eq(cur_index + 1);
			
			//alert('next');
			if (cur_index >= num_slides ) {
				alert('go to first');
			}
			
			$(cur_slide).fadeOut(200, function () {
			
				$(cur_slide).next().fadeIn(200, function () {
					$(this).removeClass('current');
					$(this).addClass('current');
				});
		
			});
			
		
		
		} else if ($(this).hasClass('prev')) {
			//alert('prev');
			
			var target_slide = $('.slide').eq(cur_index - 1);
		}; 
		
		
		
		
	});
	
	*/
});


