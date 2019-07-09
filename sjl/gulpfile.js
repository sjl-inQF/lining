let gulp=require("gulp");
let connect=require("gulp-connect");
let proxy=require("http-proxy-middleware");
let concat=require("gulp-concat");
let uglify=require("gulp-uglify");
let rename=require("gulp-rename");
let babel=require("gulp-babel");
let sass=require("gulp-sass-china");

// gulp.task("sassTcss",()=>{
//     gulp.src("./sjl/sass/*.scss")
//     .pipe(sass().on("error",sass.logError))
//     .pipe(gulp.dest("ser/css"))
// })
// gulp.task("watch",()=>{
//     gulp.watch(["./sjl/sass/*.scss"],["sassTcss"])
// })

gulp.task("aa",()=>{
    gulp.src("./sjl/sass/style2.0.scss")
    .pipe(sass().on("error",sass.logError))
    .pipe(gulp.dest("css"))
})

gulp.task("bb",()=>{
    gulp.watch(["./sjl/sass/style2.0.scss","./sjl/sass/style3.0.scss","./sjl/sass/style4.0.scss"],["aa","cc","dd"])
})


gulp.task("cc",()=>{
    gulp.src("./sjl/sass/style3.0.scss")
    .pipe(sass().on("error",sass.logError))
    .pipe(gulp.dest("css"))
})

gulp.task("dd",()=>{
    gulp.src("./sjl/sass/style4.0.scss")
    .pipe(sass().on("error",sass.logError))
    .pipe(gulp.dest("css"))
})











// 开始组装自定义工具，用gulp组装
// 使用gulp的方法，封装指令
// 指令就是实现了功能的命令

// gulp是node环境，写gulp，其实就是在node
// 引入gulp
// let gulp = require("gulp");
// // 引入服务器插件
// let connect = require("gulp-connect");
// // 引入服务器代理插件
// let proxy = require("http-proxy-middleware");
// // 引入合并插件
// let concat = require("gulp-concat");
// // 引入合并插件
// let uglify = require("gulp-uglify");
// // 引入合并插件
// let rename = require("gulp-rename");
// // 引入babel插件(ES6转ES5插件)
// let babel = require("gulp-babel");
// // 引入sass转css插件
// let sass = require("gulp-sass-china");

// // gulp的方法：
//     // 1.定义指令
//         // gulp.task()
//     // 2.查找文件
//         // gulp.src()
//     // 3.连缀方法
//         // .pipe()
//     // 4.转存方法
//         // gulp.dest()
//     // 5.监听方法
//         // gulp.watch()
    

// gulp.task("hahah",()=>{
//     console.log("hello gulp");
// });

// // 实现文件的自动转存：将开发环境下的代码，转存到上线环境中
// // 转存：
// gulp.task("index",()=>{
//     gulp.src([
//         "./sjl/**/*",
//         "!./sjl/pass.txt",
//         "!./sjl/{sass,sass/**,js/es6/**,js/es6}"
//     ])
//     .pipe(gulp.dest("ser"))
//     .pipe(connect.reload());
// })

// // 监听：
// gulp.task("abc",()=>{
//     gulp.watch(["./sjl/index.html","./sjl/sass/*.scss"],["index","sassTcss"])
// })


// // gulp的插件，安装和使用，gulp-connect
// // gulp-connect服务器插件

// // 使用插件：
//     // 1.安装
//     // 2.引入
//     // 3.使用

// // 自动转存，并且浏览器自动刷新
// // 开启服务器，同时自动刷新浏览器
// gulp.task("qwe",()=>{
//     // 插件的配置代码
//     connect.server({
//         root:"ser",   //以哪个文件夹为服务器
//         port:8181,       //端口号
//         livereload:true,  //是否可以自动刷新
//         middleware: function(connect, opt) {
//             return [
//                 proxy('/api',  {
//                     target: 'http://api.icodeilife.cn:81',    //代理的目标地址
//                     changeOrigin:true,
//                     pathRewrite:{    //路径重写规则
//                         '^/api':''
//                     }
//                 })
//             ]
//         }
//     })
// })

// // 批量执行：监听和开启服务器
// gulp.task("liyang",["qwe","abc"]);

// // 合并文件
// gulp.task("hyg",()=>{
//     gulp.src("./sjl/js/*.js")
//     .pipe(concat('index.js'))
//     .pipe(gulp.dest("ser/js"))
//     .pipe(uglify())
//     .pipe(rename('index.min.js'))
//     .pipe(gulp.dest("ser/js"))
// })

// // ES6转ES5
// // gulp没有ES6转ES5
// // babel
// // gulp确有babel的插件
// // babel
// gulp.task("es6Tes5",()=>{
//     gulp.src("./sjl/js/es6/*")
//     .pipe(babel())
//     .pipe(gulp.dest("ser/js/es5"))
// })

// // sass转css指令
// gulp.task("sassTcss",()=>{
//     gulp.src("./sjl/sass/style.scss")
//     .pipe(sass().on("error",sass.logError))
//     .pipe(gulp.dest("ser/css"))
//     .pipe(connect.reload())
// })





