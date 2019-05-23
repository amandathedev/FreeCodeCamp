let phrase = "wooooow look at that!";

let regexPlus = /wo+w/;
let regexStar = /wo*w/;

regexPlus.test(phrase); // returns true
regexStar.test(phrase); // returns true