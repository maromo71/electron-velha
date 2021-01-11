const { ipcRenderer } = require('electron');
let vez = 0;

module.exports = {
    jogar(botoes, botao, caixa) {
        console.log(botoes);
        console.log(botao);
        if (botao.innerHTML == "") {
            vez++;
            if (vez % 2 == 0) {
                botao.innerHTML = "X";
            } else {
                botao.innerHTML = "0";
            }
            if(vez>=5){
                this.verficarStatus(botoes, caixa);
            }
        } else {
            ipcRenderer.send('abrir-janela-msg');
        }

    }, novo(botoes) {

        botoes.forEach((btn, index)=>{
            btn.innerHTML = ""
        });
    }, verficarStatus(botoes, caixa) {
        var [bt1, bt2, bt3, bt4, bt5, bt6, bt7, bt8, bt9] = botoes;
        if(bt1.innerHTML == "X" && bt2.innerHTML == "X" && bt3.innerHTML == "X"){
            caixa.innerHTML = "Jogador X Venceu";
            vez = 0;
            return;
        }
        if(bt4.innerHTML == "X" && bt5.innerHTML == "X" && bt6.innerHTML == "X"){
            caixa.innerHTML = "Jogador X Venceu";
            vez = 0;
            return;
        }
        if(bt7.innerHTML == "X" && bt8.innerHTML == "X" && bt9.innerHTML == "X"){
            caixa.innerHTML = "Jogador X Venceu";
            vez = 0;
            return;
        }
        if(bt1.innerHTML == "X" && bt4.innerHTML == "X" && bt7.innerHTML == "X"){
            caixa.innerHTML = "Jogador X Venceu";
            vez = 0;
            return;
        }
        if(bt2.innerHTML == "X" && bt5.innerHTML == "X" && bt8.innerHTML == "X"){
            caixa.innerHTML = "Jogador X Venceu";
            vez = 0;
            return;
        }
        if(bt3.innerHTML == "X" && bt6.innerHTML == "X" && bt9.innerHTML == "X"){
            caixa.innerHTML = "Jogador X Venceu";
            vez = 0;
            return;
        }
        if(bt1.innerHTML == "X" && bt5.innerHTML == "X" && bt9.innerHTML == "X"){
            caixa.innerHTML = "Jogador X Venceu";
            vez = 0;
            return;
        }
        if(bt3.innerHTML == "X" && bt5.innerHTML == "X" && bt7.innerHTML == "X"){
            caixa.innerHTML = "Jogador X Venceu";
            vez = 0;
            return;
        }

        //jogador 0 venceu
        var [bt1, bt2, bt3, bt4, bt5, bt6, bt7, bt8, bt9] = botoes;
        if(bt1.innerHTML == "0" && bt2.innerHTML == "0" && bt3.innerHTML == "0"){
            caixa.innerHTML = "Jogador 0 Venceu";
            vez = 0;
            return;
        }
        if(bt4.innerHTML == "0" && bt5.innerHTML == "0" && bt6.innerHTML == "0"){
            caixa.innerHTML = "Jogador 0 Venceu";
            vez = 0;
            return;
        }
        if(bt7.innerHTML == "0" && bt8.innerHTML == "0" && bt9.innerHTML == "0"){
            caixa.innerHTML = "Jogador 0 Venceu";
            vez = 0;
            return;
        }
        if(bt1.innerHTML == "0" && bt4.innerHTML == "0" && bt7.innerHTML == "0"){
            caixa.innerHTML = "Jogador 0 Venceu";
            vez = 0;
            return;
        }
        if(bt2.innerHTML == "0" && bt5.innerHTML == "0" && bt8.innerHTML == "0"){
            caixa.innerHTML = "Jogador 0 Venceu";
            vez = 0;
            return;
        }
        if(bt3.innerHTML == "0" && bt6.innerHTML == "0" && bt9.innerHTML == "0"){
            caixa.innerHTML = "Jogador 0 Venceu";
            vez = 0;
            return;
        }
        if(bt1.innerHTML == "0" && bt5.innerHTML == "0" && bt9.innerHTML == "0"){
            caixa.innerHTML = "Jogador 0 Venceu";
            vez = 0;
            return;
        }
        if(bt3.innerHTML == "0" && bt5.innerHTML == "0" && bt7.innerHTML == "0"){
            caixa.innerHTML = "Jogador 0 Venceu";;
            vez = 0;
            return;
        }
    }
}
