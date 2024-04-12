export default {
    jump: new KeyboardEvent('keydown', { key: ' ', code: 'Space' }),
    dispatch(event) {
        document.dispatchEvent(this[event])
    }
}