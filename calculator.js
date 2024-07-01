 /* Déclaration des variables */
 let variable1;
 let variable2;
 let operation;
 let resultat;

 /* Récupérations des éléments HTML */
 let input = document.querySelector("input");
 let boutonEgal = document.querySelector(".result");
 let nombres = document.querySelectorAll(".number");
 let operators = document.querySelectorAll(".operator");

 /* Déactivation du champ de saisie  */
 input.disabled = true; 

 /* Events listeners  */
 nombres.forEach((nombre) => nombre.addEventListener("click", affiche));

 operators.forEach((operator) => {
   operator.addEventListener("click", () => {
     /* Cette fonction récupère la variable 1 et l'opérateur */
     variable1 = parseInt(getInput());
     clean();
     operators.forEach((operator) => (operator.disabled = true));
     affiche();
     operation = getInput();
   });
 });

 boutonEgal.addEventListener("click", () => {
   /* Cette fonction récupère la variable 2 et effectue le calcul */
   variable2 = parseInt(getInput());
   operators.forEach((operator) => (operator.disabled = true));
   nombres.forEach((nombre) => (nombre.disabled = true));
   input.value = faireCalcul(variable1, operation, variable2 );
   boutonEgal.disabled = true; 
 });

 /* Définition des fonctions de la calculatrice */
 function clean() {
   input.value = "";
   operators.forEach((operator) => (operator.disabled = false));
   nombres.forEach((nombre) => (nombre.disabled = false));
   boutonEgal.disabled = false;
 }

 function getInput() {
   return input.value;
 }

 function affiche() {
   if (
     input.value === "" ||
     input.value === "+" ||
     input.value === "-" ||
     input.value === "/" ||
     input.value === "*"
   ) {
     input.value = event.target.innerHTML;
   } else {
     input.value += event.target.innerHTML;
   }
 }

 function faireCalcul(var1, op, var2) {
   switch (op) {
     case "+":
       resultat = var1 + var2; 
       return resultat;
     case "-":
       resultat = var1 - var2; 
       return resultat;
     case "*":
       resultat = var1 * var2; 
       return resultat;
     case "/":
       resultat = var1 / var2; 
       return resultat;
   }
 }