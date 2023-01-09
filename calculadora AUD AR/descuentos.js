
  function onClickButtonPriceDiscount() {
  const inputPrice = document.getElementById("InputPrice");
  const priceValue = inputPrice.value;

  const InputDiscount = document.getElementById("InputDiscount");
  const usdValue = parseInt(InputDiscount.value);
  
  let dolarTargeta1 = usdValue + (usdValue * 0.3);
  let dolarTargeta = dolarTargeta1 + (usdValue * 0.45);
  /* let dolarTargeta = (dolarTargeta1 * 45 / 100) + dolarTargeta1; */
  let UsdAu = 0.69

  let valorEnPesos = parseInt(dolarTargeta * UsdAu);

  const resultP = document.getElementById("ResultP");
  resultP.innerText = "El precio en pesos es: $" + valorEnPesos +  ", con un dolar tarjeta de  $" + dolarTargeta + ("!");
  
  console.log(priceValue)
  console.log(usdValue)
  console.log(dolarTargeta)

  }
