FastClick.attach(document.body);

~function () {
    var desW = 320,
        winW = document.documentElement.clientWidth,
        ratio = winW / desW,
        oMain = document.querySelector('.main');
    if (winW > desW) {
        oMain.style.margin = '0 auto';
        oMain.style.width = desW + 'px';
        return;
    }
    document.documentElement.style.fontSize = ratio * 100 + 'px';
}();
new Swiper(".swiper-container",{
    direction:"vertical",
    loop: true,
    onSlideChangeEnd:function(swiper){
        var swiperAry=swiper.slides,
            swiperIndex=swiper.activeIndex,
            total=swiperAry.length;
        var curId="page";
        switch(swiperIndex){
            case 0:
                curId+=total-2;
                break;
            case (total-1):
                curId+=1;
                break;
            default :
                curId+=swiperIndex;
        }
        [].forEach.call(swiperAry,function(item,index){
            if(swiperIndex==index){
                item.id=curId;
                return
            }
            item.id=null;
        })
    }
});
(function(){
    var myMusic =document.getElementById('myMusic'),
        musicMove=document.getElementById("musicMove");
    myMusic.addEventListener('click',function(){
        if(musicMove.paused){
            musicMove.play();
            myMusic.className = 'music on';
            return
        }
        musicMove.pause();
        myMusic.className="music"
    },false)
    function controlMusic(){
        musicMove.valume=0.4;
        musicMove.play();
        musicMove.addEventListener('canplay',function(){
            myMusic.style.display='block';
            myMusic.className="music on"
        },false)
    }
    window.setTimeout(controlMusic,1000);
})()
