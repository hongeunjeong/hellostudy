$(function(){
	$('.slider_container .inner').each(function(){
		var movingBox = $('.slider_container .inner');
		var boxWidth = $('.slider_list').outerWidth(true);
		var boxCount = $('.slider_list').length;		
		var listWidth  = boxWidth * boxCount;
		
		movingBox.css("width",listWidth);
	})
	
	$('.btn_control').on('click',function(e){
		var movingBox = $('.slider_container .inner');
		var boxWidth = $('.slider_list').outerWidth(true);
		var boxCount = $('.slider_list').length;		
		var listWidth  = boxWidth * (boxCount -1);
		

		if($(this).hasClass("btn_prev") && parseInt(movingBox.css("margin-left")) < 0){
			movingBox.animate({'margin-left':'+=' + boxWidth});
		} else if($(this).hasClass("btn_next") && parseInt(movingBox.css("margin-left")) > -listWidth){
			movingBox.animate({'margin-left':'-=' + boxWidth});
		}
		
		e.preventDefault();
	})
	
})	