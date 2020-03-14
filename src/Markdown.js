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

const loggedTypes = [];
function MarkdownNodes({ nodes }) {
	return (nodes || []).map((node, i) => <MarkdownNode key={i} node={node} />);
}

function MarkdownNode({ node }) {
	if (node.type === 'text') {
		return node.value;
	}

	if (node.type === 'paragraph') {
		return (
			<p>
				<MarkdownNodes nodes={node.children} />
			</p>
		);
	}
	if (node.type === 'heading') {
		return React.createElement(
			'h' + node.depth,
			{ style: { position: 'relative' } },
			// <div style={{ position: 'absolute', right: 'calc(100% + 1em)' }}>
			// 	{Array.from(new Array(node.depth)).map(() => '#').join('') + ' '}
			// </div>,
			<MarkdownNodes nodes={node.children} />
		);
	}
	if (node.type === 'emphasis') {
		return (
			<em>
				<MarkdownNodes nodes={node.children} />
			</em>
		);
	}
	if (node.type === 'strong') {
		return (
			<strong>
				<MarkdownNodes nodes={node.children} />
			</strong>
		);
	}
	if (node.type === 'inlineCode') {
		return <code>{node.value}</code>;
	}
	if (node.type === 'code') {
		return <pre>{node.value}</pre>;
	}
	if (node.type === 'link') {
		return (
			<a href={node.url} target={node.url.startsWith('http') ? '_blank' : '_self'}>
				<MarkdownNodes nodes={node.children} />
			</a>
		);
	}
	if (node.type === 'list') {
		return node.ordered ? (
			<ol>
				<MarkdownNodes nodes={node.children} />
			</ol>
		) : (
			<ul>
				<MarkdownNodes nodes={node.children} />
			</ul>
		);
	}
	if (node.type === 'listItem') {
		return (
			<li>
				<MarkdownNodes nodes={node.children} />
			</li>
		);
	}
	if (node.type === 'thematicBreak') {
		return <hr />;
	}

	if (!loggedTypes.includes(node.type)) {
		console.log(node.type, node);
		loggedTypes.push(node.type);
	}

	return <MarkdownNodes nodes={node.children} />;
}

export default function MarkdownScreen({ markdownString }) {
	const ast = useRemarkAst(markdownString);

	return <MarkdownNode node={ast} />;
}
