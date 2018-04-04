// Copyright 2013 The Obvious Corporation.

var cp = require('child_process')
var path = require('path')
var mkdirp = require('mkdirp')
var download = require('./download')

function launch(options, callback) {

  options = options || {};

  options.port = options.port || 8000;

  download(options.version, function(err, info) {
    if (err && callback) return callback(err);

    var opts = {
      env: process.env,
      detached: (options.detached || false),
      stdio: (options.stdio || 'ignore')
    };

    var args = [
      '-Djava.library.path=' + info.lib,
      '-server',
    ];

    if (options.heap) {
      args.push('-Xmx' + options.heap);
    }

    args.push('-jar', info.jar, '--port', options.port);

    if (options.cors) {
      var origins = options.cors;

      if (Array.isArray(origins)) {
        origins = origins.join(',');
      }

      args.push('--cors', origins);
    }

    if (options.dir) {
      opts.cwd = path.resolve(options.dir)
      mkdirp.sync(opts.cwd)
    } else {
      args.push('--inMemory')
    }

    var result = cp.spawn('java', args, opts);
    if(callback) callback(null, result);
    return result;
  })
}

module.exports = {
  launch: launch
}
