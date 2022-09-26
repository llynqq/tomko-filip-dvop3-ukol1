const arr = ["Lodash", "React", "Next", "Strapi", "Axios", "Typescipt"];
// arr.forEach(function (item) {
//   console.log(item);
// });

// const arr2 = arr.reverse()
// arr2.forEach(function (item) {
//     console.log(item);
//   });

arr.sort().forEach(function (item) {
    console.log(item);
});

const car  = {
    brand: "Fiat",
    model: "500",
    year: 50,
};

let { brand, model, year } = car;

console.log(brand, model, year);


let rnd = Math.random() * 555;

console.log(`Náhodné číslo je: ${rnd}`)