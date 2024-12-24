// 1. İstifadəçi tərəfindən daxil olunan yazını console-a çıxarın
let inputText = prompt("Bir yazı daxil edin:");
console.log("Daxil olunan yazı:", inputText);

// 2. İki tərəfi məlum olan düzbucaqlının perimetrini tapıb, console-a çıxarın
let side1 = parseFloat(prompt("Düzbucaqlının bir tərəfini daxil edin:"));
let side2 = parseFloat(prompt("Düzbucaqlının digər tərəfini daxil edin:"));
let perimeter = 2 * (side1 + side2);
console.log("Düzbucaqlının perimetri:", perimeter);

// 3. Tərəfi daxil olunan kvadratın sahəsini tapıb, console-a çıxarın
let squareSide = parseFloat(prompt("Kvadratın tərəfini daxil edin:"));
let squareArea = squareSide ** 2;
console.log("Kvadratın sahəsi:", squareArea);

// 4. Daxil olunan ədədin tək və ya cüt olduğunu yoxlayın
let number = parseInt(prompt("Bir ədəd daxil edin:"));
console.log(number % 2 === 0 ? "Cütdür" : "Təkdir");

// 5. Daxil olunan ədədin modulunu tapıb, console-a çıxarın
let absNumber = parseFloat(prompt("Bir ədəd daxil edin:"));
console.log("Ədədin modulu:", Math.abs(absNumber));

// 6. Ədədin tam və ya kəsr ədəd olduğunu yoxlayın
let floatNumber = parseFloat(prompt("Bir ədəd daxil edin:"));
console.log(floatNumber % 1 === 0 ? "Tam ədəddir" : "Kəsr ədəddir");

// 7. Daxil olunan ixtiyari iki ədəddən böyüyünü tapıb, console-a çıxarın
let num1 = parseFloat(prompt("Birinci ədədi daxil edin:"));
let num2 = parseFloat(prompt("İkinci ədədi daxil edin:"));
console.log("Böyük ədəd:", num1 > num2 ? num1 : num2);