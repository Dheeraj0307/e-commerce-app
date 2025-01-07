const FormatPrice = ({ price, exchangeRate = 84.91 }) => {

    return Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 2,
    }).format(price * exchangeRate);
};

export default FormatPrice;