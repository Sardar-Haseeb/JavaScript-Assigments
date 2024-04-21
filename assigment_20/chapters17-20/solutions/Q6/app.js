// a. Counting
let counting = "";
for (let i = 1; i <= 15; i++) {
  counting += i + ", ";
}
console.log("a. Counting:", counting);

// b. Reverse counting
let reverseCounting = "";
for (let i = 10; i >= 1; i--) {
  reverseCounting += i + ", ";
}
console.log("b. Reverse counting:", reverseCounting);

// c. Even
let even = "";
for (let i = 0; i <= 20; i += 2) {
  even += i + ", ";
}
console.log("c. Even:", even);

// d. Odd
let odd = "";
for (let i = 1; i <= 19; i += 2) {
  odd += i + ", ";
}
console.log("d. Odd:", odd);

// e. Series
let series = "";
for (let i = 2; i <= 20; i += 2) {
  series += i + "k, ";
}
console.log("e. Series:", series);
    