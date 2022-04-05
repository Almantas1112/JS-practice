                // Pirmas uzdavinys

// let n = 20;

// if (n > 0){
//     console.log("Geras");
// }
// else if (n < 0){
//     console.log("Blogas");
// }

                // Antras uzdavinys

// let n = 2;

// if (n == 1){
//     console.log("Eikite");
// }
// else if (n == 2 || n == 3){
//     console.log("Palaukite");
// }

                // Trecias uzdavinys

// (pirmasis patikrinimas)
// let n = 5; // knygu talpa tarp vienos dezes
// let k = 8; // turimos knygos
// let d = 2; // turimos dezes

// (antrasis patikrinimas)
// let n = 5; // knygu talpa tarp vienos dezes
// let k = 15; // turimos knygos
// let d = 3; // turimos dezes

// checker = Math.floor(n * d);

// if (checker >= k){
//     console.log("Knygos telpa į dėžes")
// }
// else if (checker < k){
//     console.log("Knygos netelpa į dėžes")
// }

                // Ketvirtas uzdavinys

// let a = 2;
// let b = 8;

// if (a > b){
//     a--;
//     b++;
// }
// else if (a < b){
//     a++;
//     b--;
// }

// console.log(a);
// console.log(b);

                // Penktas uzdavinys

// let c = 50; // sutaupyti centai
// let p = 20; //ledu kaina centais
// let k = 0; // ledu porcijos
// let m = 0; // centu graza (kiek liko)

// k = Math.floor(c / p); // porciju apskaiciavimas
// m = Math.floor(c - (k * p)); // grazos apskaiciavimas
// console.log("Saulius nusipirks " + k + " procijas, liks centų " + m + ".")

                // Sestas uzdavinys

// let n = 6; // Turimi degtukai

// if(Number.isInteger(n / 3)){
//     console.log("Trikampį sudėlioti galimą.");
// }
// else
// {
//     console.log("Trikampio sudėlioti negalimą.");
// }

                // Septintas uzdavinys

// let n = 2; //Menesio numeris

// if (n == 1 || n == 3 || n == 5 || n == 7 || n == 8 || n == 10 || n == 12){
//     console.log("Turi 31 dieną.")
// }
// else if (n == 4 || n == 6 || n == 9 || n == 11){
//     console.log("Turi 30 dienų.")
// }
// else if (n == 2){
//     console.log("Turi 28 dienas.")
// }

                // Astuntas uzdavinys

// let k = 4; // kauliuko skaičius

// if (k == 1 || k == 3 || k == 5){
//     alert("Kambarį tvarko jaunėlis");
// }
// else if (k == 2 || k == 4 || k == 6){
//     alert("Kambarį tvarko vyresnėlis");
// }

                // Devinas uzdavinys

// let firstYear = 1896; // pirmieji žaidynių metai
// let queue = 1; // eilės numeris
// let year = 2005; // pasirenkamieji metai

// olympicChecker = Math.floor(year - firstYear);
// olympics = Number.isInteger(olympicChecker / 4);
// queueLine = Math.floor((year - firstYear) / 4)

// if(olympics && olympics > 0){
//     queue = queueLine + 1;
//     console.log("Tai yra " + queue + " žaidynės.");
// }
// else{
//     console.log("Metai neolimpiniai.");
// }

                // Desimtas uzdavinys

// // išėjimo iš namų laikas
// let v1 = 8; // valandos
// let m1 = 29; // minutės
// let m2 = 43; // kelionės trukmė
// // pamokų laikas
// let v = 9; // valandos
// let m = 5; //minutės
// let time = 0;

// check = m1 + m2;
// if (check > 60){
//     v1++;
//     time = check - 60;
// }

// lateH = v1 - v;
// lateM = time - m;

// if (lateH >= 0 && lateM >= 0){
//     console.log("Petras pavėluos " + lateH + " valandomis ir " + lateM + " minutėmis.")
// }
// else{
//     console.log("Petras nepavėluos!")
// }