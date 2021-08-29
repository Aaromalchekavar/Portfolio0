let a;
function hide(){

    if(a==1){
        document.getElementById("menu-button").className  = "fa fa-times"
        document.getElementById("hdr").style.left = "0%";
        document.getElementById("home").style.display  = "none"
        return a=0;
    }else{
        document.getElementById("menu-button").className  = "fa fa-bars"
        document.getElementById("hdr").style.left = "-120%";
        document.getElementById("home").style.display  = "block"
        return a=1;
    }
    
}