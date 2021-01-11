const { ipcRenderer } = require("electron");

let linkFechar = document.querySelector("[data-js='fechar']");


linkFechar.addEventListener('click', (event)=>{
    event.preventDefault();
    ipcRenderer.send('fechar-janela-sobre');
});
