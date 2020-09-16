 
//virtual fortune cookie
var fortuneCookies = [
    "Conquer your fears or they will conquer you.",
    "Rivers need springs.",
    "Do not fear what you don't know.",
    "You will have a pleasant surprise.",
    "Whenever possible, keep it simple.",
];
//modularize getFortune function
exports.getFortune = function(){ //glo var exports makes visible outside of module.
    var idx = Math.floor(Math.random() * fortuneCookies.length);
    return fortuneCookies[idx]; //though arr fortunecookies remains hidden. Encapsulation.
}