/*fs = require('fs')
fs.readFile('joe.txt', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
});*/

var sizeOf = require('image-size')
var dimensions = sizeOf('D:\\Random\\pointing spoingus.jpg\\')
console.log(dimensions.width, dimensions.height)