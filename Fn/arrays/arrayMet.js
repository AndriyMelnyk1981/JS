// let arr = [1, 2, 3, 4, 5, 6];

// let result = arr.reduce(function(sum, elem) {
// 	return sum + elem;
// }, 0);

// console.log(result);

const stringsArray = [
      'one-test', 'cat', 'parrot',
      'banana', 'test-dog', 'dog'
    ]
    var filtered = stringsArray.filter(function(e) {
        return indexOf('test') === -1;
      });
    console.log(stringsArray)  