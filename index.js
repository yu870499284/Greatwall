$(function(){

    var timer = setInterval(lbt,3000);
    function lbt (){
        var width = $('.lun .lul li').width();
        // index = $('.lun .lul li').first().index();
        // $('.lun .point li').eq(index).addClass('yes').siblings().removeClass('yes');
        $('.lun .lul').animate({'left':-width},1500,function(){
            $(this).css('left','0').children().first().appendTo($('.lun .lul'));
        });
    }

    $('.lun').hover(function(){
        clearInterval(timer);
    },function(){
     timer =  setInterval(lbt,3000);
    })

    $('.lun .point li').hover(function(){
        index = $(this).index();
       $('.lun .lul li').eq(index).prependTo($('.lun .lul'));
       $('.lun .lul').css('left',0);
       $(this).addClass('yes').siblings().removeClass('yes');                                         
    })
    
    $('#pics .pic').hover(function(){
    	$(this).css('border-color','orangered');
    	$(this).find('img').stop().animate({'width':'110%'},1000);
    },function(){
    	$(this).css('border-color','white');
    	$(this).find('img').stop().animate({'width':'100%'},1000);
    })
    
})