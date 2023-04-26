import gulp from "gulp";
import sourcemaps from "gulp-sourcemaps";
import concat from "gulp-concat";
import ts from "gulp-typescript";
import uglify from "gulp-uglify";
import header from "gulp-header";
import footer from "gulp-footer";

gulp.task("build", function () {
    const tsProject = ts.createProject("tsconfig.json");
    const obj = tsProject.src().pipe(sourcemaps.init()).pipe(tsProject());
    return (
        obj.js
            // .pipe(header("(function(){"))
            // .pipe(footer("return exports;})();"))
            .pipe(concat("minified.js"))
            .pipe(uglify())
            .pipe(sourcemaps.write("."))
            .pipe(gulp.dest("./public/"))
    );
});
