var array = [

    { dp: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story: "https://images.unsplash.com/photo-1606220838315-056192d5e927?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    

    { dp: "https://images.unsplash.com/photo-1617109887854-f661d37fca2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story: "https://images.unsplash.com/photo-1626840362735-afb64615318d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },


    { dp: "https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?q=80&w=2008&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story: "https://images.unsplash.com/photo-1468327768560-75b778cbb551?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },


    { dp: "https://images.unsplash.com/photo-1594232352231-11a0958d131c?q=80&w=2100&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story: "https://images.unsplash.com/flagged/photo-1560177776-55a762c5c000?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    

    { dp: "https://images.unsplash.com/flagged/photo-1560177776-55a762c5c000?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story: "https://images.unsplash.com/photo-1627135345338-a2024b1aea9d?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    

    {
        dp: "https://images.unsplash.com/photo-1466695108335-44674aa2058b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGdpcmxzfGVufDB8MXwwfHx8MA%3D%3D", story: "https://images.unsplash.com/photo-1528916451049-e5d097b61db2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdpcmxzfGVufDB8MXwwfHx8MA%3D%3D"
    }
]
var clutter = "";
array.forEach(function (elem,idx) {
    clutter += `<div class="story">
               <img id="${idx}" src="${elem.dp}" alt="">
                </div>`
})
document.querySelector("#stories").innerHTML = clutter;
document.querySelector("#stories").addEventListener("click",function(dets){
    // console.log(array[dets.target.id].story);
    document.querySelector(".full-screen").style.display = "flex";
    document.querySelector(".full-screen").style.backgroundImage = `url(${array[dets.target.id].story})`
    setTimeout(function(){
        document.querySelector(".full-screen").style.display = "none";
    },3000)
});
 