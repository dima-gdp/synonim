const project_folder = 'dist';
const source_folder = '#src';
const path = {
	build: {
		html: project_folder + "/",
		scss: project_folder + "/css/",
		libs_css: project_folder + "/css/",
		js: project_folder + "/js/",
		img: project_folder + "/img/",
		fonts: project_folder + "/fonts/",
		favicon: project_folder + "/favicon/",
	},
	src: {
		html: source_folder + "/*.html",
		scss: source_folder + "/scss/styles.scss",
		libs_css: source_folder + "/css/*",
		js: [source_folder + "/js/*.js", "!" + source_folder + "/js/_*.js"],
		img: source_folder + "/img/**/*.{jpg,png,webp,svg,gif}",
		fonts: source_folder + "/fonts/*.{woff,woff2}",
		favicon: source_folder + "/favicon/*",
	},
	watch: {
		html: source_folder + "/**/*.html",
		scss: source_folder + "/scss/**/*.scss",
		js: source_folder + "/js/**/*.js",
		img: source_folder + "/img/**/*.{jpg,png,webp,svg,gif}",
		libs_css: source_folder + "/css/*",
		fonts: source_folder + "/fonts/*.{woff,woff2}",
		favicon: source_folder + "/favicon/*",
	},
	clean: './' + project_folder + "/"
};

const { src, dest } = require('gulp');
const gulp = require('gulp');
const fileinclude = require('gulp-file-include');
const browsersync = require('browser-sync').create();
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const del = require('del');
const tinypng = require('gulp-tinypng-compress');
const media = require('gulp-group-css-media-queries');

function browserSync() {
	browsersync.init({
		server: {
			baseDir: './' + project_folder + "/"
		},
		port: 3000,
		notify: false
	})
};

function html() {
	return src(path.src.html)
		.pipe(fileinclude())
		.pipe(dest(path.build.html))
		.pipe(browsersync.stream())
}

function fonts() {
	return src(path.src.fonts)
		.pipe(dest(path.build.fonts))
		.pipe(browsersync.stream())
}

function libs_css() {
	return src(path.src.libs_css)
		.pipe(dest(path.build.libs_css))
		.pipe(browsersync.stream())
}

function scss_dev() {
	return src(path.src.scss)
		.pipe(sass({ outputStyle: 'expanded' }))
		.pipe(media())
		.pipe(autoprefixer({
			overrideBrowserslist: ['last 5 versions'],
			cascade: true
		}))
		.pipe(dest(path.build.scss))
		.pipe(browsersync.stream())
}

function js_dev() {
	return src(path.src.js)
		.pipe(dest(path.build.js))
		.pipe(browsersync.stream())
}


function images_dev() {
	return src(path.src.img)
		.pipe(dest(path.build.img))
		.pipe(browsersync.stream())
}

async function images_build() {
	return src(path.src.img)
		.pipe(tinypng({
			key: 'wySvN73qbxdm3X5Lfq62lYYxwmrglfCb',
		}))
		.pipe(dest(path.build.img))
}

function favicon() {
	return src(path.src.favicon)
		.pipe(dest(path.build.favicon))
		.pipe(browsersync.stream())
}

function watchingFiles() {
	gulp.watch([path.watch.html], html);
	gulp.watch([path.watch.scss], scss_dev);
	gulp.watch([path.watch.js], js_dev);
	gulp.watch([path.watch.img], images_dev);
	gulp.watch([path.watch.libs_css], libs_css);
	gulp.watch([path.watch.fonts], fonts);
	gulp.watch([path.watch.favicon], favicon);
}

function clean() {
	return del(path.clean);
}

const dev = gulp.series(clean, fonts, favicon, libs_css, images_dev, gulp.parallel(html, scss_dev, js_dev, watchingFiles, browserSync));
const build = gulp.series(clean, fonts, favicon, libs_css, images_build, gulp.parallel(html, scss_dev, js_dev));

exports.favicon = favicon;
exports.libs_css = libs_css;
exports.fonts = fonts;
exports.images_dev = images_dev;
exports.images_build = images_build;
exports.js_dev = js_dev;
exports.scss_dev = scss_dev;
exports.html = html;
exports.dev = dev;
exports.build = build;