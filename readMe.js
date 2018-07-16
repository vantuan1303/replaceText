'use strict';
var fs = require('fs');

//fs.open(path, flags, [mode], callback)
//flag : r,r+,w,w+,a,a+ // r= read, w= write, a= append, + = thêm mới nếu k có sẵn
// fs.open('demo.html','r', function (err, fd) {
//     if (err) {
//         return console.log(err);
//     }
//     fs.close(fd);
// })

//fs.read(fd, buffer, offset, length, position, callback)

//fs.readFile(path, [options], callback)

//fs.createReadStream(path, [options])
//
// fs.readFile('demo.html', function (err,result) {
//     if (err) {
//         return console.log(err);
//     }
//     console.log(result);
// })
//
fs.readFile('demo.html', {encoding : 'utf8'}, function (err,result) {
    if(err) {
        return console.log(err);
    }
    console.log(result);
})

//fs.write(fd, buffer, offset, length, position, callback)

//fs.writeFile(path, data, [options], callback)

//fs.appendFile(path, data, [options], callback)

//fs.createWriteStream(path, [options])
//
// fs.writeFile('demo2.html','Hello', function (err) {
//     if(err){
//         return console.log(err);
//     }
//     console.log('done');
// })
//
//
// fs.readFile('demo.html', {encoding : 'utf8'}, function (err,result) {
//     if(err) {
//         return console.log(err);
//     }
//     fs.writeFile('demo2.html',result, function (err) {
//         if(err){
//             return console.log(err);
//         }
//         console.log('done');
//     })
// })