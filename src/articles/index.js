
import path from 'path';
import resumeMd from './resume.md';
import projectsMd from './projects.md';
import testMd from './test.md';
import whoMd from './who.md';

export default [
	resumeMd,
	projectsMd,
	testMd,
	whoMd
].map(fileName => ({
	fileName,
	baseName: path.basename(fileName)
}));
