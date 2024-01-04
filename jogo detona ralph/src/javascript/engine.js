

const state={

    view:{
        quadrado:document.querySelectorAll(".quadrado"),
        inimigo:document.querySelector(".inimigo"),
        time:document.querySelector("#Time"),
        score:document.querySelector("#Score"),
        life:document.querySelector("#Life"),
        botao:document.querySelector("#reiniciar")
    },
    value:{
        
        minuto:60,
        contador:setInterval(tempo,1000),
        intervalo:null,
        gameVelo:1000,
        hitPosition:0,
        resultado:0,
        vidas:3
    }
}

function decrementarVida() {
    state.value.vidas--;

    // Atualiza a exibição das vidas
    state.view.life.textContent = state.value.vidas;

    // Verifica se o jogador ainda tem vidas
    if (state.value.vidas === 0) {
        // Se não houver mais vidas, encerra o jogo ou executa a lógica desejada
        alert("Game Over! Suas vidas acabaram.");
        reiniciarJogo();
    }
}

function tempo(){
    state.value.minuto--
    state.view.time.textContent = state.value.minuto
    if (state.value.minuto===0) {
        clearInterval(state.value.contador);
        alert("sua pontuação foi exelente" )
                    reiniciarJogo();
            
    }    
}

function randomquadrado(){
    state.view.quadrado.forEach((quadrado)=>{
        quadrado.classList.remove("inimigo")
   })
   let randomNum = Math.floor(Math.random()*9)
   let randomquadrado=state.view.quadrado[randomNum]
   randomquadrado.classList.add("inimigo")
   state.value.hitPosition=randomquadrado.id
}

function inimigoMove(){
    state.value.intervalo=setInterval(randomquadrado, state.value.gameVelo)
}

function addListenerHitbox(){
    state.view.quadrado.forEach((quadrado)=>{
    quadrado.addEventListener("mousedown",()=>{
        if(quadrado.id===state.value.hitPosition){
            state.value.resultado++
            state.view.score.textContent = state.value.resultado
            state.value.hitPosition=null            
        }else {
            
            decrementarVida();
            if (state.value.vidas<=0) {
                reiniciarJogo();
                
            }
        }
       

    })
})

}

function reiniciarJogo() {

    state.value.minuto = 60;
    state.value.contador
    state.value.resultado = 0;
    state.view.score.textContent = 0;
    state.value.vidas=3
  
}

function inicio(){
    inimigoMove();
    addListenerHitbox(); 

    state.view.botao.addEventListener("click", reiniciarJogo);
}


inicio();