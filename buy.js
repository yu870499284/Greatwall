$(function(){
	$('.pic-small li').click(function(){
		var index = $(this).index();
		$('.pic-small li div').removeClass('active');
		$(this).find('div').addClass('active');
		$('.pic-big a img').attr('src','img/buy/1-'+ (index+1) +'.png');
	})
})
	
	
