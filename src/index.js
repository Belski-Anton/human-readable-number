module.exports = function toReadable (number) {
   const nameNumbers = {
      units: ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
      fromTenToTwenty: ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
      dozens: ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
  }

  let arrayOfNumbers = String(number).split('');

  switch (arrayOfNumbers.length) {
      case 1: 
          return nameNumbers.units[arrayOfNumbers[0]];
      case 2:
          if (arrayOfNumbers[0] === '1') { 
              return nameNumbers.fromTenToTwenty[arrayOfNumbers[1]];
          } else { 
              let numberToTwenty = nameNumbers.dozens[arrayOfNumbers[0] - 2];
              return arrayOfNumbers[1] === '0' ? numberToTwenty : `${numberToTwenty} ${nameNumbers.units[arrayOfNumbers[1]]}`;
          }
      case 3: 
          let remainder = number % 100;
         
          let hundreds = `${nameNumbers.units[arrayOfNumbers[0]]} hundred`;
          return remainder === 0 ? hundreds : `${hundreds} ${toReadable(remainder)}`;
  }
}
