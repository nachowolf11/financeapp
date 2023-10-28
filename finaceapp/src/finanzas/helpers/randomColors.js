export const randomColors = ( array ) => {
    const backgroundColor = [];
    const borderColor = [];

    for (let i = 0; i < array.length; i++) {
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        backgroundColor.push('rgb('+r+', '+g+', '+b+')');
    }
    return backgroundColor
}