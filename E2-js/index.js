const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

//PIZZAS CON ID IMPAR
const pizzasIdImpar = pizzas.filter(pizza => pizza.id % 2 !== 0);

console.log('Pizzas con id impar:');
pizzasIdImpar.forEach(pizza => {
    console.log(`id: ${pizza.id}, nombre: ${pizza.nombre}`);
});

//PIZZA MENOS DE $600

const pizzasBarata = pizzas.filter(pizza => pizza.precio <= 600);

console.log('Estas pizzas valen menos de $600:');
pizzasBarata.forEach(pizza =>{
  console.log(`-> ${pizza.nombre}`);
});

//NOMBRE DE CADA PIZZA CON SU RESPECTIVO PRECIO
console.log('Pizzas con sus respectivos precios:');
pizzas.forEach(pizza => {
  console.log(`La ${pizza.nombre} vale $${pizza.precio}`);
});

//TODOS LOS INGREDIENTES DE CADA PIZZA
console.log('Ingredientes de cada pizza:');

pizzas.forEach(pizza => {
  console.log(`${pizza.nombre} tiene: ${pizza.ingredientes}`);
});