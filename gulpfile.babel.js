import gulp from 'gulp';
import path from 'path';

const PATH = {
    SOURCE: path.join(__dirname, './src'),
    TARGET: path.join(__dirname, './dist'),
    PUBLIC: path.join(__dirname, './public')
};

gulp.task('copy', copyTask({
    source: './public/',
    destinations: ['./dist/public'],
    // pattern: '/*',
}));

gulp.task('build', ['copy']);

function copyTask(opts) {
    const {
        source,
        destination,
        destinations = [destination],
        pattern = '**/*'
    } = opts;

    return () => {
        let stream = gulp.src(source + pattern, {base: source});
        destinations.forEach((destination) => {
            stream = stream.pipe(gulp.dest(destination))
        });

        return stream
    }
}