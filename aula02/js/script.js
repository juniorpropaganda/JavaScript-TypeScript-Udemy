let umaString = "Um Texto";
let outraString = "O Rato Roeu a Roupa do Rei de Roma.";

// concatenação de string, pode ser feita com o + ou com o concat. O template string é o mais usado.
console.log(umaString.concat(' em um lindo dia.'));
console.log(umaString.concat(' ', 'em', ' ','um',' ', 'lindissimo',' ', 'dia.'));
console.log(umaString + ' em um lindo dia.');
console.log(`${umaString} em um lindo dia.`); //isso aqui é uma template string
console.log(umaString[3]);
console.log(umaString.charAt(4));
console.log(umaString.indexOf('o')); // o 0 é o indice inicial, se não achar ele retorna -1'));
console.log(umaString.lastIndexOf('m'));
console.log(umaString.match(/[a-z]/g)); // retorna um array com todas as letras minusculas
console.log(umaString.replace('Um', 'Outro')); // substitui a primeira palavra pela segunda
console.log(outraString.replace(/R/g, 'rabuda'));
console.log(umaString.toUpperCase()); // deixa tudo em maiusculo
console.log(umaString.toLowerCase()); // deixa tudo em minusculo
console.log(outraString.length); // conta quantos caracteres tem a string
console.log(outraString.slice(2, 6)); // fatia a string, o primeiro numero é o inicio e o segundo é o fim
console.log(outraString.split(' ', 3)); // divide a string em um array, o que estiver dentro do parenteses é o divisor








// para rodar o codigo é só pressionar o play na barra, perto do botão fechar

// convert string em in number parseInt (inteiro), parseFloat (decimais), cerverte automatique number

// Language: javascript isso é um comentário
/* isso também pode ser um 
comentário de varias linhas */
