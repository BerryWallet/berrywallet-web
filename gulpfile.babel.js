import gulp from 'gulp';
import Path from 'path';

const PATH = {
    SOURCE: Path.join(__dirname, './src'),
    TARGET: Path.join(__dirname, './dist'),
    PUBLIC: Path.join(__dirname, './public')
};

gulp.task('copy', copyTask({
    source: './public/',
    destinations: [
        './dist/public'
    ],
    // pattern: '/*',
}));


gulp.task('watch', ['copy'], function () {
    gulp.watch('./public', ['copy']);
});

function copyTask(opts) {
    const {
        source,
        destination,
        destinations = [destination],
        pattern = '**/*'
    } = opts;

    return () => {
        let stream = gulp.src(source + pattern, { base: source });
        destinations.forEach((destination) => {
            stream = stream.pipe(gulp.dest(destination))
        });

        return stream
    }
}