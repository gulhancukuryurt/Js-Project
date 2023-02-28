const win = document.querySelector(".inputevent");

window.addEventListener("keydown", (e)=> {
    win.innerHTML = `
    <div class="key">
        ${e.key === "" ? "Space" : e.key}
        <small>e.key</small>
    </div> 
    
    <div class="key">
        ${e.keyCode}
        <small>event.keyCode</small>
    </div> 

    <div class="key">
        ${e.code}
        <small>event.code</small>
    </div> 

    `
})