window.onload=function(){
    wait_HTML();
}
function wait_HTML(){
    function scroll_visible(){
        var class_top=document.getElementsByClassName("parent-filex")[0];
        var class_top2=document.querySelector(".parent-filex2 > .filex");
        
        if(window.pageYOffset >2){
            class_top.classList.add("unvisible");
        
        }else{
            class_top.classList.remove("unvisible");
           
        }
        if(window.pageYOffset > 20){
            class_top2.style.top="0px";
            // alert("xin chao");
        }else{
            class_top2.style.top="-150px";
        }
    }

    window.addEventListener("scroll",scroll_visible);
    // window.onclick=function(a){
    //     if(a.target == body){
    //         document.getElementById("mySidenav").style.width = "0";
    //         document.getElementById("main").style.marginLeft= "0";
    //         document.body.style.backgroundColor = "white";
    //     }
    // }
}