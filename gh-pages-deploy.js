require('shelljs/global');
//
//if (!which('git')) {
//    echo('Sorry, this script requires git to be available on the command line');
//    exit(1);
//}
//
//exec('git stash');
var commitDate = new Date().toString().replace(/\s/g,'_').replace(/\W/g, '');
//cp('-f', 'lib/staticSite.html', 'build/public/index.html');
//exec('git branch gh-pages');
//exec('git checkout gh-pages');
console.log(cp)

cp('-rf', './build/public/*', pwd());
exec('git add .');
console.log(commitDate)
exec('git commit -m "Automated commit on' + commitDate+ '"');
