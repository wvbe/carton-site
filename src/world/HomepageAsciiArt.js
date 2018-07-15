import React from 'react';
import * as css from '../style';
import fromAscii from '../world/generators/fromAscii';
import {
	Anchor,
	MonochromeBox,
} from '../lib/3d';
const ascii = {
	wybe: `
##      ## ##    ## ########  ########
##  ##  ##  ##  ##  ##     ## ##
##  ##  ##   ####   ##     ## ##
##  ##  ##    ##    ########  ######
##  ##  ##    ##    ##     ## ##
##  ##  ##    ##    ##     ## ##
 ###  ###     ##    ########  ########
    `,
	minnebo: `
##     ## #### ##    ## ##    ## ######## ########   #######
###   ###  ##  ###   ## ###   ## ##       ##     ## ##     ##
#### ####  ##  ####  ## ####  ## ##       ##     ## ##     ##
## ### ##  ##  ## ## ## ## ## ## ######   ########  ##     ##
##  #  ##  ##  ##  #### ##  #### ##       ##     ## ##     ##
##     ##  ##  ##   ### ##   ### ##       ##     ## ##     ##
##     ## #### ##    ## ##    ## ######## ########   #######
    `,
	uxJs: `
#   # #   #       ####  ###
#   # #   #          # #   #
#   #  # #    #      # # 
#   #   #    ###     #  ###
#   #  # #    #   #  #     #
#  ## #   #       #  # #   #
 ## # #   #        ##   ###
    `,
	arrow: `
`
};

export default function HomepageAsciiArt () {
	return [
		// "minnebo"
		<Anchor key={'minnebo'} x={0} y={0} z={0} crosshairSize={9}>
			{ fromAscii(ascii.minnebo, 'x').map(coord => <Anchor key={ coord.transform(0, 0, -1).toString() } { ...coord }>
				<MonochromeBox fill={css.color('#324D5C')} />
			</Anchor>) }
		</Anchor>,

		// "ux + js"
		<Anchor key={'title'} x={0} y={-38} z={0} crosshairSize={4}>
			{ fromAscii(ascii.uxJs, 'x').map(coord => <Anchor key={ coord.transform(0, 0, -1).toString() } { ...coord }>
				<MonochromeBox fill={css.color('#58E0C5')} stroke={css.color('#58E0C5').darkenByRatio(0.5)} />
			</Anchor>) }
		</Anchor>,

		// "wybe"
		<Anchor key={'wybe'} x={-7} y={-38} z={0} crosshairSize={4}>
			{ fromAscii(ascii.wybe, 'z').map(coord => <Anchor key={ coord.toString() } { ...coord }>
				<MonochromeBox fill={css.color('#324D5C')} />
			</Anchor>) }
		</Anchor>
	];
}
