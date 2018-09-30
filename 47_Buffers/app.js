var buffer = new Buffer("Hello World","utf8");

console.log(buffer);                // <Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64>
console.log(buffer.toString());     // Hello World
console.log(buffer.toJSON());       // { type: 'Buffer', data: [ 72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100 ] }
console.log(buffer[4]);             // 111
buffer.write("AB");                 //  ABllo World

console.log(buffer.toString());