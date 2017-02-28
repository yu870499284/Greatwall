$(function(){
	
	$('.sc1 ul li').hover(function(){
		console.log(123)
		$('.sc1 ul li .white').addClass('black');
		$(this).find('.white').removeClass('black');
		$(this).children().first().css('border-color','red');
	},function(){
		$('.sc1 ul li .white').removeClass('black');
		$(this).children().first().css('border-color','#999');
		
	})
	
})
