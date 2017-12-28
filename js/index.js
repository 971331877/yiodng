{
    let items=document.querySelectorAll('.bannerv li');
    let dian=document.querySelectorAll("main > div");
    let bannerer=document.querySelector(".bannerv");
    let you=document.querySelector(".bnvy");
    let zuo=document.querySelector(".bnvz");
     console.log(items);
     console.log(dian);
    dian.forEach(function (ele,index) {
        ele.onclick=function () {
            for(let i=0;i<items.length;i++){
                dian[i].classList.remove("active");
                items[i].classList.remove("active");
            }
            this.classList.add("active");
            items[index].classList.add("active");
            n =index;
        };
    });
    //
    let n=0
    function bannerFn(dir="r") {
        if(dir==="r"){
            n++;
        }else if (dir==="l"){
            n--;
        }
        if(n===items.length){
            n=0;
        }
        if(n===-1){
            n=items.length-1;
        }
        for(let i=0;i<items.length;i++){
            dian[i].classList.remove("active");
            items[i].classList.remove("active");
        }
        dian[n].classList.add("active");
        items[n].classList.add("active");
    }
    let st=setInterval(bannerFn,3000);
    bannerer.onmouseover=function () {
        clearInterval(st);
    }
    bannerer.onmouseout=function () {
        st=setInterval(bannerFn,3000);
    }
    let flag=true;

// 轮播图箭头效果
    you.onclick=function () {
        if(flag){
            flag=false;
            bannerFn();
        }
    }
    zuo.onclick=function () {
        if(flag) {
            flag=false;
            bannerFn("l");
        }
    }
    items.forEach(function (ele,index) {
        ele.addEventListener("transitionend",
            function(){
                flag=true;
            })
    })
}