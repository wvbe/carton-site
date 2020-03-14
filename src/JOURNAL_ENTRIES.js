
import path from 'path';
import resumeMd from './blog/resume.md';
import projectsMd from './blog/projects.md';
import testMd from './blog/test.md';

export default [
	resumeMd,
	projectsMd,
	testMd
].map(fileName => ({
	fileName,
	baseName: path.basename(fileName)
}));
