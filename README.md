# stream-files

This plugin can be dropped into a stream to display the source file names (relative to your project root) as they pass through the pipeline.

## Install

    $ npm install stream-files

## gruntfile.js

    var streamFiles = require('stream-files');

    gulp.task('stream-files', function() {
      gulp.src('/path/to/src')
        .pipe(streamFiles())
        //..
    });

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright 2014 Elliot Fleming <[http://github.com/elliotfleming](http://github.com/elliotfleming)>