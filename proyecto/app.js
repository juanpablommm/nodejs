let persona = {
    name: "juancho",
    lastName: "roiz",
    age:23,
    sons:["carlos", "maria", "jhony"]
} 

console.log("hello world, I'm runing");
console.log(persona);
console.log("my childrens are: " + persona.sons);

const calculo = {
    division: function(numero1, numero2){
        return numero1 / numero2;
    },
    multiplicacion: function(numero1, numero2){
        return numero1 * numero2;
    }
}

console.log(calculo.division(20, 2), calculo.multiplicacion(5 , 2));
