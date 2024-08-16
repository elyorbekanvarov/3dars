// Juft karrali
// Sizga n soni beriladi. Uning eng kichik juft karralisini toping.
// Kiruvchi malumotlar:
// Kirish faylida 1000 dan oshmaydigan natural son beriladi.
// Chiquvchi malumotlar:
// Chiqish faylida berilgan sonning eng kichik juft karralisi yagona natural sonni chop eting.

// 1 - masala

// let n = 999;
// let res = n * 2;
// console.log(res);

// To'rtburchak
// Sizga togri totburchakning tomonlari a va b beriladi, siz uning yuzasi va perametrini topib quyidagi shartga tekshirishingiz kerak boladi.
// Agar yuzasi perimetridan katta bolsa yuzasini aks holda peremetrini chiqaring,

// 2 - masala

// let a = 10;
// let b = 10;
// let res = a * b;
// let p = 2 *  (a + b);
// if (res > p) {
//     console.log(res);
// } else {
//     console.log(p);
// }

// Kechikkan poyezd
// RoboBoyning poyezdi soat // t
// t da ketishi kerak edi, ammo u // T // T soatga kechikdi. Uni poyezdi nechchada ketishini topuvchi dastur tuzing.

// 3 - masala

// let t = 6;
// let T = 3;
// let res = (t + T) % 24;
// console.log(res);

// Tizimda jarima hisoblash
// RoboContest.uz da yangi bolgan kopchilik bazida jarima tizimi qanday ishlashini tushunishmaydi.
// Bunda jarima quyidagicha baholanadi: Har bir xato yuborilgan urinish uchun 5 daqiqa jarima hisoblanadi
// va togri javobni yuborgan vaqtini daqiqa sifatida yaxlitlab qoshiladi.
// Aytaylik foydalanuvchi togri javob yuborishdan oldin 5 ta xato urinishga yol qoydi.
// Togri javobni esa 21-daqiqada yubordi.Unutmang 21 daqiqa deganda misol uchun 20:SS nazarda tutuiladi. Unda bu masala uchun jarima

// 6 - masala

// Kirish ma'lumotlarini olish
// let input = prompt("Xato urinishlar soni va to'g'ri javob yuborilgan vaqtni kiriting (X M formatida):");
// let [X, M] = input.split(' ').map(Number);
// let res = M + (X * 5);
// console.log(res);

// Garoyib yigindi
// Sizga ikkita natural son beriladi. Sizning vazifangiz shu sonlar orasidagi 3ga bolinadigan ammo
// 7 bolinmaydigan sonlar yigindisini topish. Bunda ikkala chegara ham kiradi.

// 9 - masala

// let a = 5;
// let b = 10;
// function sonlar(son) {
//     let sum = 0;
//     for (let i = 1; i <= son; i++) {
//         if (i % 3 === 0 && i % 7 !== 0) {
//             sum += i;
//         }
//     }
//     return sum;
// }
// console.log(sonlar(a,b));

// Karralilar yigindisi
// Doskaga 1 dan n gacha sonlar yozib chiqildi. Ulardan faqat 3,5,7 ga karralilari qolib qolganlari ochirib tashlandi.
// Osha qolgan sonlar yigindisini toping.
// Kiruvchi malumotlar:
// Kirish faylida 1000 dan oshmaydigan natural son kiritiladi.

// 12 - masala

// let n = parseInt(prompt("1 dan n gacha sonni kiriting:"));
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//   if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
//     sum += i;
//   }
// }
// console.log(sum);

// Nollar soni
// Jonibek matematika darsida faktorial darsini otdi va u shunday dastur yaratmoqchiki,
// uning dasturiga ikkita n va m sonlari kiritiladi va dastur n dan m gacha bolgan sonlar
// kopaytmasida oxirida hosil bolgan nollar sonini chop etishi kerak. Ammo Jonibek sizning yordamingizga muhtoj.

// 13 - masala

// const n = parseInt(prompt("N sonini kiriting:"));
// const m = parseInt(prompt("M sonini kiriting:"));
// let nollarSoni = 0;
// for (let i = n; i <= m; i++) {
//   let son = i;
//   while (son % 5 === 0) {
//     nollarSoni++;
//     son /= 5;
//   }
// }
// console.log(nollarSoni);

// Ali va Vali
// Bilmasvoy ukalari Ali va Valining yoshini esidan chiqarib qoydi.
// Ali Bilmasvoyga Validan N yoshga kattaligini aytdi. Lekin Bilmasvoy ukalarini yoshini topa olmadi.
// Keyin Vali Alidan K marta kichikligni aytdi. Bilamsvoy vanihoyat ukalarining yoshini topdi. Siz ham topingchi!?

// 14 - masala

// const n = parseInt(prompt("Ali Validan necha yosh katta?"));
// const k = parseInt(prompt("Vali Alidan necha marta kichik?"));
// let aliYoshi = 1;
// let valiYoshi = 1;
// while (true) {
//   if (aliYoshi - valiYoshi === n && aliYoshi / valiYoshi === k) {
//     break;
//   }
//   aliYoshi++;
//   valiYoshi++;
// }
// console.log(aliYoshi);
// console.log(valiYoshi);

// konspekt: https://docs.google.com/document/d/1qGeNL9_fz4pGmfs3ym_aKBW0VYnwKZ7G8iDoUgMTEm4/edit?usp=sharing