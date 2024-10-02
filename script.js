function saudacao() {
    alert("♣ Bem-vindo ao site sobre a história do Javascript!! ♥");
}

function solicitarNome() {
    var nome = prompt("Qual é o seu nome?");
    
    if (nome != null && nome !== "") {
        alert("Olá, " + nome + "!");
    } else {
        alert("Você não inseriu seu nome .");
    }
}

function mostrarData() {
    document.getElementById("data").innerHTML = Date();
}



function saida() {
    alert("♣ Muito obrigado por comparecer ao site sobre a história do Javascript!! ♥");
}
function imagem1() {
    alert("♣ JavaScript e HTML estão interligados na criação de páginas web. O HTML é a estrutura que define o conteúdo e a organização da página, enquanto o JavaScript é uma linguagem de programação que permite adicionar interatividade e dinamismo a esse conteúdo. ♥");
}
function imagem2(){
    alert("♣JavaScript e CSS se complementam na construção de páginas web interativas. Enquanto o CSS define a aparência visual, o JavaScript permite modificar estilos e animações dinamicamente, controlar a exibição de elementos e interagir com o layout. Juntos, eles possibilitam uma experiência de usuário mais rica e responsiva..♣")
}
function imagem3(){
    alert("♣JavaScript e PHP se complementam no desenvolvimento web. PHP é uma linguagem do lado do servidor, usada para processar dados e gerar conteúdo dinâmico, enquanto JavaScript é executado no lado do cliente, proporcionando interatividade. Juntos, eles permitem que aplicações web atualizem conteúdo em tempo real, enviem e recebam dados, e criem uma experiência de usuário mais fluida e dinâmica.♣")
}

