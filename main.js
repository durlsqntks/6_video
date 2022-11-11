// //배열

// var 변수 = 10;
// console.log(변수)//10

// var 배열 = ['일동','이동','삼동','사동']
// console.log(배열[1])//이동
// console.log(배열[3])//사동

// //배열요소(아이템) 각각할일
// //배열.forEach(할일);
// //배열.forEach(function(){실행문});
// 배열.forEach(function(item)
// {
//     console.log(item+"ㅎㅇ")
// });

var allVideos=document.querySelectorAll('.video')
var allPlay=document.querySelector('.play-all')

allVideos.forEach(function(v)
{
    v.addEventListener('mouseover',function()
    {
        var video = v.querySelector('video')
        video.play();
    })

    v.addEventListener('mouseleave',function()
    {
        var video = v.querySelector('video')
        video.pause();
    })

})

allPlay.addEventListener('click',function()
    {
        //allplay가 on이라는 클래스명 가지고 있는지 확인
        // if(조건문){조건문이 참일때 실행}
        // else{조건문이 거짓일때 실행할 일}
        if(allPlay.classList.contains('on'))
        {
            console.log('^^7')
            allPlay.classList.remove('on');
            document.querySelector('.play-all').innerHTML="PAUSE ALL";
            allVideos.forEach(function(v)
            {
                var video = v.querySelector('video');
                video.play();
            })
        }
        else
        {
            console.log('ㅠㅠ')
            allPlay.classList.add('on');
            document.querySelector('.play-all').innerHTML="PLAY ALL";
            allVideos.forEach(function(v)
            {
                var video = v.querySelector('video');
                video.pause();
            })
        }
    })