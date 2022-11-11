var allVideos = $('.video');
var allplay = $('#play-all');
var video;

// 누구.hover(function()
// {
//     누구에게 마우스를 올렸을 때 할일
// }, function()
// {
//     누구에게서 마우스를 내렸을 때 할일
// });

allVideos.hover(function()
{
    video=$(this).find('video');
    console.log(video.get(0))
    // html요소(body, header, div, h1, em...)
    // get(0) > html 요소중에서 첫번째 요소를 부름
    video.get(0).play();
}, function()
{
    video.get(0).pause();
});

allplay.click(function()
{
    if(allplay.hasClass('on'))
    {
        var vd = $('video');
        allplay.removeClass('on');
        $('.play-all').text('PAUSE ALL')
        // for(초기값; 조건문; 증가감식){실행문}
        for(var i=0 ; i<vd.length ; i++)
        {
            vd.get(i).play();
        }
        vd.get(0).play();
    }else
    {
        var vd = $('video');
        allplay.addClass('on');
        $('.play-all').text('PLAY ALL')
        for(var i=0 ; i<vd.length ; i++)
        {
            vd.get(i).pause();
        }
    }
});