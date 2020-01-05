import React, { Fragment, useState, useMemo, useEffect } from 'react';
import unified from 'unified';
import parse from 'remark-parse';

function useRemarkAst(markdownString = '') {
	const [ ast, setAst ] = useState({});

	useEffect(
		() => {
			unified()
				.use(parse)
				.use(function parser(options) {
					this.Compiler = (remarkAstNode) => {
						setAst(remarkAstNode);
					};
				})
				.processSync(markdownString);
		},
		[ markdownString ]
	);

	return ast;
}

export default function MarkdownScreen({ markdownString }) {
	const [ markdownValue, setMarkdownValue ] = useState(markdownString);

	const ast = useRemarkAst(markdownValue);

	return (
		<Fragment>
			<textarea onChange={(event) => setMarkdownValue(event.target.value)} value={markdownValue} />
			<pre style={{height:'300px', overflowY: 'auto'}}>{JSON.stringify(ast, null, '  ')}</pre>
		</Fragment>
	);
}
