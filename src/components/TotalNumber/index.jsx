export const TotalNumber = ({ billsList }) => {   

    const totalValue = billsList.reduce((prevValue, bill) => {
        const value = parseFloat(bill.value);
        const isEntrada = bill.valueType === "Entrada";
        return isEntrada ? prevValue + value : prevValue - value;

    }, 0);

    return (
        <p className="titlePink">R${totalValue}</p>
    );
}
