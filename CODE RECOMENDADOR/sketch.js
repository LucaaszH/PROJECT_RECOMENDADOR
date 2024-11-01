// Filmes e classificação indicativa

let Recomendacao;
let Idade;
let Resposta;

function setup() {
  createCanvas(1240, 450);
  createElement("h2", "Recomendador De Séries/Animes");
  createSpan("Digite sua idade:");
  Resposta = createInput(" ");
}

function draw() {
  background("darkred");
  let Idade = Resposta.value();
  Recomendacao = Gerador(Idade);
  if (Idade == false){
  TelaLimpa();
  }
  else if (Idade => 1){
  text (Recomendacao, width/2, height/2);
  }
  textSize(50);
  textAlign(CENTER, CENTER);
  fill("#FFFFFF");
}

function TelaLimpa(){
  text (" ");
}

function Gerador(Idade) {
  if(Idade <= 9){
    return "Pokémon / Os Cavaleiros do Zodíaco";
  }
  else if(Idade >= 10 && Idade <=13){
    return "Naruto / Bleach";
  }
  else if(Idade >= 14 && Idade <=17){
    return "Death Note / Supernatural";
  }
  else if(Idade >= 18){
    return "13 Reasons Why / The Boys";
  }

}
