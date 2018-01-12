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

// // 返回顶部
{
    let totop=document.querySelector("#menu ul li.back span");
    totop.onclick=function () {
        //     document.documentElement.scrollTop=0;
        let st=document.documentElement.scrollTop;
        let speend=st*30/500;
        let t= setInterval(function () {
            st-=speend;
            if(st<=0){
                st=0;
                clearInterval(t);
            }
            document.documentElement.scrollTop=st;

        },30)
    }
}
//
{
    let topbanr=document.querySelector(".dh");
    //console.log(topbanr);
    let letbars=document.querySelector("#menu");

    let floors=document.querySelectorAll(".xyh");
    let flag=true;
    window.onscroll=function () {
        if(flag){
            let st= document.documentElement.scrollTop;
            if(st>450){
                topbanr.style.display="block";
                // topbanr.style.top="0"
            }else{
                topbanr.style.display="none"
                // topbanr.style.top="-40"
            }
            if(st>700){
                // console.log(st)
                console.log(1);
                letbars.style.display="block";
            }else{
                letbars.style.display="none";
            }

            floors.forEach(function (ele,index) {
                if(st>ele.offsetTop-160){
                    for(let i=0;i<btns.length;i++){
                        btns[i].classList.remove("active");
                    }
                    btns[index].classList.add("active");
                }

            })
        }
    }




    //  跳转楼层


    let btns=document.querySelectorAll("#menu .btn");
 //   let floors=document.querySelectorAll(".xyh");

    console.log(btns)
    btns.forEach(function (ele,index) {
        ele.onclick=function () {
            flag=false;
            let ot=floors[index].offsetTop;
            let now=document.documentElement.scrollTop;
            let speed=(ot-now)*30/300;
            let time=0;
            let t=setInterval(function () {
                now+=speed;
                time+=30;
                if(time==300){
                    clearInterval(t);
                    now=ot;
                    flag=true;
                }
                document.documentElement.scrollTop=now;
            },30)
            // document.documentElement.scrollTop=ot;
        }
    });
}

// 无缝轮播
{
    // let num=0;
    // let innerObj=document.querySelector(".yh-box");
    // let l=document.querySelectorAll(".yh22");
    // let st=setInterval(function () {
    //     num++;
    //     if(num===1){
    //         innerObj.style.transition="all 1s";
    //     }
    //     if(num==l.length){
    //         num=0;
    //         innerObj.style.transition="none";
    //     }
    //
    //     innerObj.style.marginLeft=-[num]*241+"px";
    // },3000);
    // innerObj.addEventListener("transitionend",function () {
    //     if(num===l.length-4){
    //          innerObj.style.transition="none";
    //         innerObj.style.marginLeft=0;
    //         num=0;
    //     }
    // })

    let innerobj=document.querySelector(".yh-box");
    let box=document.querySelector(".yh2");
    let nextobj=document.querySelector(".anniu-right");
    let prveobj=document.querySelector(".anniu-left");
    let st=setInterval(moveFn,2000);
    let n=4;
    let dir="right"
    function moveFn () {
        innerobj.style.transition="all 1s";
        if (dir==="right"){
            n++;
        }else {
            n--;
        }
        innerobj.style.marginLeft=-n*241+"px"
    }
    innerobj.addEventListener("transitionend",function () {
        flag=true;
        if(n===11){
            innerobj.style.transition="none";
            innerobj.style.marginLeft="-964px";
            n=4;

        }
        if(n===0){
            innerobj.style.transition="none";
            innerobj.style.marginLeft="-1687px";
            n=7;
        }
    });
    box.onmouseover=function () {
        clearInterval(st);
    };
    box.onmouseout=function () {
        st=setInterval(moveFn,2000)
    };
    window.onfocus=function () {
        st=setInterval(moveFn,2000);
    };
    window.onblur=function () {
        clearInterval(st);
    };
    let flag=true;
    nextobj.onclick=function () {
        if(flag){
            dir="right"
            flag=false;
            moveFn();
        }
    }
    //zuo
    prveobj.onclick=function () {
        if(flag){
            dir="left"
            flag=false;
            moveFn();
        }
    }

}

//咪咕视频轮播
{
    let mgbanner=document.querySelectorAll(".rg-bd ul li");
    let mgBtn=document.querySelectorAll(".jd2");
    let mgBigbox=document.querySelector(".rg1");
    mgBtn.forEach(function(ele,index){
        ele.onmouseover=function(){
            for(let i=0;i<mgBtn.length;i++){
                mgBtn[i].classList.remove("active");
                mgbanner[i].classList.remove("active");
            }
            this.classList.add("active");
            mgbanner[index].classList.add("active");
            n=index;
        }
    });
    let n=0;
    let st=setInterval(function(ele,index){
        n++;
        if(n==mgBtn.length){
            n=0;
        }
        for(let i=0;i<mgBtn.length;i++){
            mgBtn[i].classList.remove("active");
            mgbanner[i].classList.remove("active");
        }
        mgBtn[n].classList.add("active");
        mgbanner[n].classList.add("active");
    },5000)
    mgBigbox.onmouseover=function () {
        clearInterval(st);
    }
    mgBigbox.onmouseout=function () {
        setInterval(function(ele,index){
            n++;
            if(n==mgBtn.length){
                n=0;
            }
            for(let i=0;i<mgBtn.length;i++){
                mgBtn[i].classList.remove("active");
                mgbanner[i].classList.remove("active");
            }
            mgBtn[n].classList.add("active");
            mgbanner[n].classList.add("active");
        },5000)
    }
}

// ewm
{
    let tabz2=document.querySelector(".tbz2-zz");
    let tabewm=document.querySelector(".tz-ewm");
    tabz2.onmouseover=function () {
        tabewm.style.display="block";
};
    tabz2.onmouseout=function(){
        tabewm.style.display="none"
    }
}

// ce
{


        let  ce=document.querySelectorAll(".banner .bannerz li");
        let  nav=document.querySelectorAll(".nav");
        let banner=document.querySelector(".bannera")
       console.log(ce)
        ce.forEach(function (ele,index) {
            ele.onmouseover=function(){
                nav.forEach(function(ele){
                    ele.style.display="none";
                })
                nav[index].style.display="block";
                // ce[index].style.borderColor="#3eb4fa";
                ce[index].classList.add("cur");
                // ce[index].style.borderRight="#fff";
            }
            nav[index].onmouseout=function(){
                nav[index].style.display="none";
                ce[index].classList.remove("cur");
            }
            nav[index].onmouseover=function(){
                ce[index].classList.add("cur");
                nav[index].style.display="block";
            }
            ce[index].onmouseout=function(){
                ce[index].classList.remove("cur");
                nav[index].style.display="none";

                // ce[index].style.borderColor="#fff";
            }
        })
    }
    //kf
{
    let  ce=document.querySelectorAll(".kf li a.kf1");
    let  nav=document.querySelectorAll(".wz");
    console.log(ce);
    ce.forEach(function (ele,index) {
        ele.onmouseover=function(){
            nav.forEach(function(ele){
                ele.style.display="none";
            })
            nav[index].style.display="block";

            ce[index].classList.add("ass");

        }
        // nav[index].onmouseout=function(){
        //     nav[index].style.display="none";
        //     ce[index].classList.remove("ass");
        // }
        // nav[index].onmouseover=function(){
        //     ce[index].classList.add("ass");
        //     nav[index].style.display="block";
        // }
        ce[index].onmouseout=function(){
            ce[index].classList.remove("ass");
            nav[index].style.display="none";

        }
    })
}

