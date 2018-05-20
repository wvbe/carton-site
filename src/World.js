import React from 'react';
import color from 'color-js';
import fromAscii from './world/generators/fromAscii';
import {Anchor, Container, MonochromeBox, MonochromeTile} from './lib/3d';

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
##     ##  ##  ##  #### ##  #### ##       ##     ## ##     ##
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


export default function World () {
    return <div style={{ backgroundColor: '#F0CA4D', width: '100%', height: '100%' }}>
        <Container>
            <Anchor x={-8} y={-38}>
                    <Anchor x={8} y={38} z={0}>
                        { fromAscii(ascii.minnebo, 'x').map(coord => <Anchor key={ coord.toString() } { ...coord }>
                            <MonochromeBox fill={color('#777')} stroke={'#333'} innerStroke={'rgba(100,100,100,0.5)'} />
                        </Anchor>) }
                    </Anchor>
                    <Anchor x={8} y={0} z={0}>
                        { fromAscii(ascii.uxJs, 'x').map(coord => <Anchor key={ coord.toString() } { ...coord }>
                            <MonochromeBox fill={color('rgba(238,238,238, 1)')} stroke={'#666'} />
                        </Anchor>) }
                    </Anchor>
                    <Anchor x={0} y={1} z={0}>
                        { fromAscii(ascii.wybe, 'z').map(coord => <Anchor key={ coord.toString() } { ...coord }>
                            <MonochromeBox fill={color('#777')} stroke={'#333'} innerStroke={'rgba(100,100,100,0.5)'} />
                        </Anchor>) }
                    </Anchor>
                </Anchor>
            </Container>
    </div>
}
