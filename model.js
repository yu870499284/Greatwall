
$(function(){
    var lis = $('#navbar .nav li');

    lis.click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        console.log(123);
    })
})