// import { log } from 'console';
import path from 'path';

//join
console.log(path.join('/foo', 'bar', 'baz', 'server/asdf', 'quux', '..'));
//output: \foo\bar\baz\server\asdf


//resolve
console.log(path.resolve('/foo/bar', './baz'))
//output:  D:\foo\bar\baz
console.log(path.resolve('foo/bar', '../baz'))
//output:  D:\node\foo\baz


//parse
console.log(path.parse('/home/user/dir/file.txt'))
//output:
// {
//     root: '/',
//     dir: '/home/user/dir',
//     base: 'file.txt',
//     ext: '.txt',
//     name: 'file'
//  }

console.log(path.parse('C:\\path\\dir\\file.txt'))
//output:
// {
//     root: 'C:\\',
//     dir: 'C:\\path\\dir',
//     base: 'file.txt',
//     ext: '.txt',
//     name: 'file'
// }
// console.log(path.parse('pkl/dir/file.txt'))



// normalize 
console.log(path.normalize('foo/bar//baz/asdf/quux/..'))
// ouput: foo\bar\baz\asdf

console.log(path.normalize('C:\\temp\\\\foo\\bar\\..\\'))
// output: C:\temp\foo\

console.log(path.normalize('C:////temp\\\\/\\/\\/foo/bar'))
// output: C:\temp\foo\bar


// basename
console.log(path.basename('/foo/bar/baz/asdf/quux.html'))
// output: quux.html

console.log(path.basename('/foo/bar/baz/asdf/quux.html', '.html'))
// output: quux



// dirname
console.log(path.dirname('/foo/bar/baz/asdf/quux'))
// ouput: '/foo/bar/baz/asdf'


// extname
console.log(path.extname('index.html'))
// output: '.html'

console.log(path.extname('index.coffee.md'))
// output: '.md'

console.log(path.extname('index.'))
// output: '.'

console.log(path.extname('index'))
// output: ''

console.log(path.extname('.index'))
// output: ''

console.log(path.extname('.index.md'))
// output: '.md'


// Relative 

console.log(path.relative('/data/orandea/test/aaa', '/etc/data/orandea/impl/bbb'))
// output: '../../impl/bbb'