const { ipcMain } = require("electron");

module.exports = {
  gerarMenu(app) {
    let template = [
      {
        label: "Controle",
        submenu: [
          {
            label: "Recarregar",
            role: "reload",
          },
          {
            label: "Sair",
            role: "quit",
          },
        ],
      },
      {
        label: "Janela",
        submenu: [
          {
            label: "Minimizar",
            role: "minimize",
          },
        ],
      },
      {
        label: "Sobre",
        submenu: [
          {
            label: "Sobre o Veia",
            click: () => {
              ipcMain.emit("abrir-janela-sobre");
            },
            accelerator: "Alt+S",
          },
        ],
      },
    ];
    return template;
  },
};
