$(function(){
	$(".gnb_menu > li").on("mouseenter",function(){
		 $(this).find(".gnb_in").css('display','block');
	});

	$(".gnb_menu > li").on("mouseleave",function(){
		 $(this).find(".gnb_in").css('display','none');
	});

	$('.btn_search').on('click',function(){
		$('.search_area').addClass('on');
	});

	$('.search_area .btn_close').on('click',function(){
		$('.search_area').removeClass('on');
	});

	$('.pdt_list li').on('mouseenter',function(){
		$(this).find('.pdt_detail').css('display','block');
	});

	$('.pdt_list li').on('mouseleave',function(){
		$(this).find('.pdt_detail').css('display','none');
	});
});