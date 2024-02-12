function change_theme(){
    let arr=["red","orange","#f25f4c","#f9bc60","#004643"]
    let x=Math.ceil(Math.random()*5)
    document.getElementById("aside").style.backgroundColor=arr[x];
}