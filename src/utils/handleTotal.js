export const handleSumTotal = (cart) => {
    const reducer = (accomulator, currentValue) => accomulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
}