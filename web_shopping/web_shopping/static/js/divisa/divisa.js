async function cplToUsd(){
    return fetch('https://mindicador.cl/api')
    .then(response => response .json())
}

async function exchangePrices(currency) {
    const prices = document.querySelectorAll(".unit-price");
    console.log(prices);
    console.log("miauw");
    const dataExchange = await cplToUsd();
    const exchange = dataExchange.dolar.valor;
    prices.forEach((priceElement) => {
      const priceValue = parseInt(priceElement.dataset.price) / exchange;
        if (currency) {
            priceElement.innerHTML = `${priceElement.dataset.price} CPL`;
        }
        else {
            priceElement.innerHTML = `${priceValue.toFixed(2)} USD`;
        }
      console.log(priceValue);
    });
  }
  exchangePrices();