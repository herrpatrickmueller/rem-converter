var path = require('path')
var fs = require('fs');

var exclude = ['node_modules', 'dist']
var oldRemFactor = 16
var newRemFactor = 10

function readDir(startPath, filter){
    if (!fs.existsSync(startPath) || exclude.indexOf(startPath) > -1) {
        console.error('start directory not found')
        return;
    }

    var files = fs.readdirSync(startPath)
    for (var i = 0; i < files.length; i++) {
        var filename = path.join(startPath, files[i])
        var stat = fs.lstatSync(filename)

        if (stat.isDirectory()) {
            readDir(filename, filter)
        }

        else if (filter.indexOf(path.extname(filename)) >= 0) {
            replaceRemValues(filename)
        };
    };
};

function replaceRemValues(filename) {
    fs.readFile(filename, function (err, data) {
        if (err) throw err;

        const newData = data.toString().replace(/(\d*\.?\d*)rem/g, (value) => {
            const number = value.replace(/[^0-9.]/g, '')
            const newNumber = parseFloat(((parseFloat(number) * oldRemFactor) / newRemFactor).toFixed(4))
            const newValue = value.replace(number, newNumber)
            return newValue
        })

        fs.writeFile(filename, newData, function (err) {
            if (err) return console.error(err);
            console.log(filename + ' updated');
        });
    });
}

readDir('./', ['.scss', '.vue']);