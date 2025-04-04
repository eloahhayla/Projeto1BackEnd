let livros = [
    {
        titulo: "Diário de um zumbi do Minecraft 8",
        autor: "Zack Zombie",
        editora: "Editora Sextante",
        ano: 2016,
        sinopse: "O zumbi enfrentará o oitavo ano e os desafios da adolescência, como voz mudando e crescimento de mofos no rosto. Com ajuda de seus amigos Esquely, Slimey, Creepy, Sally e Steve, ele tentará sobreviver ao concurso de soletrar e ao professor Matsumoto. Se tirar nota 7 em todas as matérias, ganhará um videogame novo. Além disso, precisará ser criativo na aula de susto para superar sua aparência inofensiva.",
        paginas: 144,
        genero: ["aventura", "comédia", "fantasia"],
        preco: 75.00
    },
    {
        titulo: "O Ladrão de Raios - Percy Jackson e os Olimpianos 1",
        autor: "Rick Riordan",
        editora: "Intrínseca",
        ano: 2014,
        sinopse: "Percy Jackson descobre ser um semideus, filho de Poseidon, após ser atacado por monstros mitológicos. No Acampamento Meio-Sangue, ele é acusado de roubar o raio mestre de Zeus e parte em uma missão para recuperá-lo, evitando uma guerra entre os deuses. Acompanhado por Annabeth Chase e Grover Underwood, Percy enfrenta perigos como Medusa, Fúrias e Ares. Ele descobre que Luke Castellan, filho de Hermes, é o verdadeiro ladrão, movido por vingança contra os deuses. Percy devolve o raio a Zeus, mas a traição de Luke anuncia desafios futuros. O livro explora amizade, coragem e a jornada de aceitar quem você é.",
        paginas: 400,
        genero: ["Fantasia", "Aventura", "Mitologia Grega"],
        preco: 31.41
    },
    {
        titulo: "O Hobbit",
        autor: "J. R. R. Tolkien",
        editora: "HarperCollins Brasil",
        ano: 1937,
        sinopse: "Como a maioria dos hobbits, Bilbo Bolseiro leva uma vida tranquila até o dia em que recebe uma missão do mago Gandalf. Acompanhado por um grupo de anões, ele parte numa jornada até a Montanha Solitária para libertar o Reino de Erebor do dragão Smaug.",
        paginas: 328,
        genero: ["Romance", "Literatura infantil", "Literatura fantástica", "Épico", "Conto de fadas", "Ficção épica", "Alta fantasia"],
        preco: 45.73
    },
    {
        titulo: "A princesa leal",
        autor: "Philippa Gregory",
        editora: "Record",
        ano: 2007,
        sinopse: "Apaixonada pelo príncipe, Catarina perdeu o marido em apenas cinco meses de casada. Fiel a seu destino de ser a mulher mais poderosa de uma nação, Catarina resolve se casar com o irmão mais novo de Artur, o mimado Henrique.",
        paginas: 448,
        genero: ["Romance", "Ficção histórica", "Romance biográfico"],
        preco: 78.99
    },
    {
        titulo: "A princesa e o Goblin",
        autor: "Jorge MacDonald",
        editora: "Editora Wish",
        ano: 2021,
        sinopse: "Enquanto a princesa Irene descobre que algumas escadas do castelo são encantadas, os goblins das minas subterrâneas planejam uma guerra contra os humanos. Com a ajuda de seu novo amigo, Curdie, e uma tataravó mágica, Irene embarca em uma jornada cheia de aventura e autoconhecimento.",
        paginas: 240,
        genero: ["Conto de fadas", "Romance", "Literatura infantil", "Literatura fantástica"],
        preco: 19.80
    }
]



function mostralivros(){
    livros.forEach((livro) => {
        console.log(livro.titulo + " - " + 
            livro.autor + " Ano: " + 
            livro.ano + " Páginas: " +
            livro.paginas + " Preço: R$ " +
            livro.preco
        )
    })
}
mostralivros();