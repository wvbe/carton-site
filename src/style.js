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
	alignEnd: {
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
    }
};

export const position = {
    relative: { position: 'relative' },
    fixed: { position: 'fixed' },
    absolute: { position: 'absolute' },

    absoluteCenter: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)'
    }
};

export const border = {
    harsh: {
		border: '1px solid black',
		borderRadius: '2px',
    }
};

export const connotation = {
    interactive: {
        ':hover': {
            cursor: 'pointer'
        }
    },
	immutable: {
    	userSelect: 'none'
	}
};

export const steno = {
	nowrap: {
		whiteSpace: 'nowrap'
	},
    base: {
		fontFamily: 'sans-serif',
		color: 'black'
	},
    header: {
		fontSize: '16px',
		lineHeight: '30px',
		fontWeight: 'bold'
    },
    clickable: {
		...connotation.interactive,
		textDecoration: 'none',
		color: 'inherit'
    }
};

// glamor.insertGlobal('a[data-command]:hover, a[href]:hover', theme.inverseFocused);
