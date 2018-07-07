import colorJs from 'color-js';

export { merge } from 'glamor';

export function color (input) {
    return colorJs(input);
}


export const flex = {
    horizontal: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap'
    },
    vertical: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap'
    },
    spaceBetween: {
        justifyContent: 'space-between'
    },
    alignStart: {
        alignItems: 'flex-start'
    },
    alignCenter: {
        alignItems: 'center'
    },
    justifyEnd: {
        justifyContent: 'flex-end'
    },
    fluid: {
        flex: '1 1 auto'
    },
    fixed: {
        flex: '0 0 auto'
    }
};

export const display = {
    block: {
        display: 'block'
    },
    inlineBlock: {
        display: 'inline-block'
    }
};

export const position = {
    relative: { position: 'relative' },
    fixed: { position: 'fixed' },
    absolute: { position: 'absolute' }
};

export const border = {
    harsh: {
		border: '1px solid black',
		borderRadius: '2px',
    }
};

const fg = color('#666666'),
    bg = color('#eeeeee');

export const palette = {
    fg: fg,
    fgDim: color('#999999'),
    //fgAlt: color('red'),
    bg: bg,
    bgAlt: color('#6c6cff'), //color('#008c39'),

    bgError: color('#ffd942'),
    error: fg
};

export const connotation = {
    interactive: {
        ':hover': {
            cursor: 'pointer'
        }
    }
};

export const steno = {
    base: {
		fontFamily: 'sans-serif'
	},
    header: {
		fontSize: '16px',
		lineHeight: '30px',
		fontWeight: 'bold'
    },
    clickable: {
		textDecoration: 'none',
		cursor: 'pointer',
		color: 'black'
    }
};

// glamor.insertGlobal('a[data-command]:hover, a[href]:hover', theme.inverseFocused);
