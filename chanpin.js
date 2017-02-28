$(function(){
    // 动画效果
    $('.left-all').hover(function(){
        $(this).find('img').stop().animate({'width':'105%'},800)
    },function(){
            $(this).find('img').stop().animate({'width':'100%'},800)
        });
    // 给图片添加阴影效果
    $('.cp-pic3 ul li div').hover(function(){
    $(this).css('box-shadow','0.5rem 0.5rem  0.5rem #bbb').stop().animate({'top':'-0.5rem'},500);
        console.log('right')
    },function(){
        $(this).css('box-shadow','none').stop().animate({'top':'0'});
    })

    $('.cp-bot div').hover(function(){
    	console.log("123")
        $(this).find('img').css('border-color','orangered');   
},function(){
	$(this).find('img').css('border-color','white');    
})
    })