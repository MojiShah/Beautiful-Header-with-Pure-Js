const panels = document.querySelectorAll('.panel');

panels.forEach(item =>{
    item.addEventListener('click',()=>{
        removeActiveClass();
        // console.log(item);
        // console.log(item.classList);
        // console.log(typeof item.classList);
        // console.log(item.className);
        item.className+=" active";
        // item.claasList.add("active");
    })
})

function removeActiveClass(){
    panels.forEach(x=>x.classList.remove('active'));
}