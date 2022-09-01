const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
let contagemEspacos = minhaString.trim();
console.log(`Quantidade de caracteres: ${minhaString.length}`);
console.log(contagemEspacos.length);

//c)
let replace = contagemEspacos.replace("________", "sticioso" )
console.log(replace);