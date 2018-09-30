var buffer = new ArrayBuffer(16);
var view = new Int32Array(buffer); // This is used to handle the buffer.
view[0] = 4;
view[1] = 5;
view[2] = 8;
view[3] = 4;

console.log(view); // the view can store 4 32bit int since we have allocated 16byte Array