import { S, H } from '../constants_elements'

export const createCheckerKvadrant = function () {
    let oldQuadrant = []

    return {
        update ({ x, y, z}) {
            const currentQuadrant = [Math.floor(x / S), Math.floor(y / H), Math.floor(z / S)]

            if (
                currentQuadrant[0] !== oldQuadrant[0] ||
                currentQuadrant[1] !== oldQuadrant[1] ||
                currentQuadrant[2] !== oldQuadrant[2]
            ) {
                const data = {
                    isChanged: true,
                    currentQuadrant,
                    oldQuadrant,
                }
                oldQuadrant = [...currentQuadrant]

                return data
            } else {
                return { isChanged: false }
            }
        },
    }
}