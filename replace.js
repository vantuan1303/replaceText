const fs = require('fs');

const data = {
    'php': '<a href="http://techmaster.vn/khoa-hoc/8229/lap-trinh-phalcon-php-2">PHP</a>',
    'node' : '<a href="http://techmaster.vn/khoa-hoc/25480/nodejs-truc-tuyen">Node.js</a>'
};

function getIndexsReplaceText(document, keyword, percen) {
    var indexs = [];
    var removeAtIndex = 0;
    var index = document.indexOf(keyword);
    while (index != -1) {
        indexs.push(index + removeAtIndex);
        removeAtIndex += index + keyword.length;
        document = document.slice(index + keyword.length, document.length - 1);
        index = document.indexOf(keyword);
    }

    //30 %
    if (percen == 0) {
        percen = 100;
    }

    let indexPercen = [];
    indexs.forEach(idx => {
        (Math.random() * 100 <= percen) ? indexPercen.push(idx) : null;
    })
    console.log(indexPercen);
    return indexPercen;
}



fs.readFile('demo.html', {encoding: 'utf8'}, function (err, result) {
    if (err) {
        return console.log('err');
    }
    let indexNodes = getIndexsReplaceText(result, 'Node.js', 30);

    for (let idx = indexNodes.length - 1; idx >= 0; idx --) {
        let rs = [result.slice(0, indexNodes[idx]), data.node, result.slice(indexNodes[idx] + 'Node.js'.length)].join("");
        result = rs;
    }

    let indexPHP = getIndexsReplaceText(result, 'PHP', 30);

    for (let idx = indexPHP.length - 1; idx >= 0; idx --) {
        let rs = [result.slice(0, indexPHP[idx]), data.php, result.slice(indexPHP[idx] + 'PHP'.length)].join("");
        result = rs;
    }
    console.log(result);

    fs.writeFile('demo2.html', result, function (err) {
        if (err) {
            return console.log(err);
        }
    })
})

