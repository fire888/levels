import { S, H } from '../constants_elements'

export const createCheckerKvadrant = function () {
    let oldKvadrant = []

    return {
        update ({ x, y, z}) {
            const currentKvadrant = [Math.floor(x / S), Math.floor(y / H), Math.floor(z / S)]

            if (
                currentKvadrant[0] !== oldKvadrant[0] ||
                currentKvadrant[1] !== oldKvadrant[1] ||
                currentKvadrant[2] !== oldKvadrant[2]
            ) {
                const data = {
                    isChanged: true,
                    currentKvadrant,
                    oldKvadrant,
                }
                oldKvadrant = [...currentKvadrant]

                return data
            } else {
                return { isChanged: false }
            }
        },
    }
}