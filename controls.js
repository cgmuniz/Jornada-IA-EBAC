export default {
    jump: new KeyboardEvent('keydown', { key: ' ', code: 'Space' }),
    dispatch(event) {
        document.dispatchEvent(this[event])
    },
    crouch: new KeyboardEvent('keydown', { key: 'ArrowDown', code: 'ArrowDown' }),
    dispatch(event) {
        document.dispatchEvent(this[event])
    },
}