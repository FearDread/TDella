/* Module script to execute php scripts via backend */
class ExecPHP {

  constructor() {

    if ( arguments.phpPath !== undefined ) {
      this.phpPath = arguments.phpPath; 
    } else {
      this.phpPath = '';
    }

    this.phpFolder = '';
  } 

  parseFile(fileName, callback) {
    var file, exec, cmd;

    file = this.phpFolder + fileName;
    exec = require('child_process').exec;
    cmd = this.phpPath + ' ' + file;

    console.log('parsing file: ' + file);
          
    exec(cmd, function (error, stdout, stderr) {
      callback(stdout);
    });
  }
}

exports.php = function () {
  return new ExecPHP(); 
};
