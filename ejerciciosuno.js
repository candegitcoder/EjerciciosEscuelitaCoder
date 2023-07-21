//Hacer una función que devuelva el área de un círculo si le paso por parámetro el radio del mismo.

function devuelvoAreaDeUnCirculo(radio){
    return Math.PI * Math.pow(radio,2) 
}

console.log("El area es: ", devuelvoAreaDeUnCirculo(5))

//Hacer una función que dado el listado de profesores devuelva el segundo y el último.

const profes = ["lauti", "juani", "giuls", "fran"];

console.log("El primer profe:", profes[0], "El ultimo profe:", profes[profes.length-1]);

function mostrarProfesores(listado_profes){
    console.log(
        "el primer profe es:",
        profes[0],
        "el ultimo profe es",
        profes[3]
    )
}

mostrarProfesores(profes[0]);

//Crear un objeto alumno con nombre, apellido, lenguaje de programación y edad. Luego crear una función que reciba como parámetro al objeto, y el campo que queramos obtener del alumno, por ejemplo su edad o lenguaje de programación. La función deberá consologear el nombre del alumno y el campo que pasamos por parámetro.
const Alumno = {
    nombre : "Candela",
    apellido : "Alvarez",
    lenguaje : "JavaScript",
    edad : 25,
}

console.log(Alumno.edad, Alumno.lenguaje);