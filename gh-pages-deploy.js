require('shelljs/global');

if (!which('git')) {
    echo('Sorry, this script requires git to be available on the command line');
    exit(1);
}

exec('git stash')
var commitDate = new Date().toString();
cp('lib/staticSite.html', 'build/public/index.html');
exec('git branch gh-pages');
exec('git checkout gh-pages');
cp('-r', 'build/public/*', '.');
exec('git add .');
exec('git commit -m "Automated commit on' + commitDate);
