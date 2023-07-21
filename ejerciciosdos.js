//Tenemos un array de alumnos, con su nombre y su nota. Encontrar al alumno de menor nota y al de mayor nota. ¿Qué sucede si tenemos dos alumnos con 10?

const alumnos = [
    {
      nombre: "Jose",
      nota: 9,
    },
    {
      nombre: "pepe",
      nota: 10,
    },
    {
      nombre: "Carlos",
      nota: 5,
    },
    {
      nombre: "Maria",
      nota: 10,
    },
  ];
  
  let notaMayor = 0;
  let nombreNotaMayor = "";
  
  alumnos.forEach((alumno) => {
    if (alumno.nota > notaMayor) {
      notaMayor = alumno.nota;
      nombreNotaMayor = alumno.nombre;
    }
  });
  
  console.log(
    "La nota mayor es de ",
    nombreNotaMayor,
    " con ",
    notaMayor,
    " puntos."
  );

//Ordenar el siguiente array sin usar sort: [3, 23, 11, 15, 6, 19, 32, 9]



//Dado el siguiente string, obtener las letras que estén en mayúscula: “LaCrOmbiNeTa”
let string = 'LaCrOmbiNeTa'
let letrasMayusculas = []
string.split('').filter(item => {
    if (item === item.toUpperCase()) {
        letrasMayusculas.push(item)
    }
})
console.log(letrasMayusculas)