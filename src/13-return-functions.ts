(()=> {
  const calcTotal = (prices: number[]): string => { //Funcion retorna string explicitamente
    let total = 0;
    prices.forEach(i => total += i)
    return total.toString();
  }

  const printTotal = (total: string): void => { //void hace explicito que esta funcion no retorna valor.
    console.log(total);

  }

  const total = calcTotal([32,432,22,4,41]) // Funcion retorna number por lo que variable infiere tipo number.
  total //total es string
  const tot = printTotal('500') //tot es de tipo void

})()
