
import path from 'path';
import resumeMd from './resume.md';
import projectsMd from './projects.md';
import testMd from './test.md';

export default [
	resumeMd,
	projectsMd,
	testMd
].map(fileName => ({
	fileName,
	baseName: path.basename(fileName)
}));
