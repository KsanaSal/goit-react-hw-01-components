const randomColor = () => Math.floor(Math.random() * 16777215).toString(16);
function invertHex(hex) {
    return (Number(`0x1${hex}`) ^ 0xFFFFFF).toString(16).substr(1).toUpperCase()
}
  
export { randomColor, invertHex };
