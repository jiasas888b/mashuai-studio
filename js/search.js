// 主界面搜索框的搜索脚本
function find(){
let find = document.getElementById("find").value;
    if(find == "你好"){
        alert("你好");
    }
    else if(find == "尼哥"){
        alert("你妈");
    }
    else if(find == "洞穴跑酷"){
        window.open("HoleP.html");
    }
    else if(find == "hole parkour"){
        window.open("HoleP.html");
    }
    else if(find == "马帅养殖场2"){
        window.open("MSF2.html");
    }
    else if(find == "马帅快快跑"){
        window.open("MSR.html");
    }
    else if(find == "校长模拟器"){
        HTS();
    }
    /*else if(find == "大梁lhx页面"){
        lhx();
    }
    else if(find == "大梁"){
        alert("马帅工作室成员之一");
    }
    */
    else{
        alert("我们还没有制作"+find);
    }
}
//enter搜索
document.getElementById("find").addEventListener("keydown",function(event){
    if(event.key === "Enter"){
        find();
    }
});
