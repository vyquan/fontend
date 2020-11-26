window.onload=function(){
    wait_HTML();
}
function wait_HTML(){
 
    var image_origin=document.getElementById("image_origin1");
    var image_clone=document.querySelector("#big_img >img");
    var name_clone=document.querySelector("#big_img >p");
    image_origin.onclick=function(){
       
        document.getElementById("big_img").style.display="block";
        image_clone.src=this.src;
        name_clone.innerText=this.alt;
    }

    document.getElementById("next").onclick=function(){
        document.getElementById("big_img").style.display="none";
    }
}
