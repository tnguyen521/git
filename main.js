document.addEventListener("contextmenu",function(e){e.preventDefault()},!1),

document.onkeydown=function(e){return 123!=(e=e||window.event).keyCode&&(!e.ctrlKey||!e.shiftKey||73!=e.keyCode)&&void 0},

document.getElementById("btnSalary").onclick=function(){
    var e=document.getElementById("inputNum1").value*document.getElementById("inputNum2").value;
    
document.getElementById("txtSalary").innerHTML=e},

document.getElementById("btnTB").onclick=function(){let e=document.querySelectorAll(".bai2 .form-control"),t=0;for(let n=0;n<e.length;n++)t+=Number(e[n].value);

document.getElementById("txtTB").innerHTML=t/e.length},

document.getElementById("btnCurrency").onclick=function(){
    var e=document.getElementById("usd").value,t=new Intl.NumberFormat("vn-VN").format(23500*e);

document.getElementById("txtCurrency").innerHTMLt},


document.getElementById("btnCal").onclick=function()
    {var e=document.getElementById("width").value,t=document.getElementById("height").value,n=e*t,u=2*(Number(e)+Number(t));
    
document.getElementById("txtCal").innerHTML=`\n        Diện tích: ${n};\n        Chu vi: ${u}\n    `},

document.getElementById("btnSum").onclick=function(){
    var e=document.getElementById("number").value,t=Math.floor(e/10),n=e%10;
    
document.getElementById("txtSum").innerHTML=t+n};