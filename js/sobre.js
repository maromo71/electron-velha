const { ipcRenderer } = require("electron");

let linkSobre = document.querySelector("[data-js='sobre']");


linkSobre.addEventListener('click', (event)=>{
    event.preventDefault();
    ipcRenderer.send('abrir-janela-sobre');
});

