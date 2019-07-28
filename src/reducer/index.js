export const reducer = (state = 0, { type, payload } ) => {

    switch ( type ) {
        case 'RND':
            return state + payload
        case 'INC':
            return state + 1
        case 'DEC':
            return state - 1
        default:
            return state
    }

}
