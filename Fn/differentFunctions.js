const square = (a) => a * a;

const square1 = (a) =>{      // the same as first row
return a * a
};

function square2(a, b) {
return a + b;
}
console.log(square2(2, 3));
function square3(a) {
    return a * a;
}

const square4 = function(a, cb) {
       return cb(a);
}

console.log('Function expression ', square3(15));
console.log('Fn with anonymous fn', square3(12, square1));

