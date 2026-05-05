export const EXCHANGE_RATE = 4300; // 1 EUR = ~4300 COP

export const getPrices = (price: number, formattedPrice: string, quantity: number = 1) => {
  const isEuro = formattedPrice.includes('€');
  const total = price * quantity;
  
  let priceCOP = 0;
  let priceEUR = 0;

  if (isEuro) {
    priceEUR = total;
    priceCOP = total * EXCHANGE_RATE;
  } else {
    priceCOP = total;
    priceEUR = total / EXCHANGE_RATE;
  }

  return {
    cop: priceCOP,
    eur: priceEUR,
    formattedCop: `$ ${Math.round(priceCOP).toLocaleString('es-CO').replace(',', '.')}`,
    formattedEur: `€ ${priceEUR.toFixed(2).replace('.', ',')}`
  };
};
