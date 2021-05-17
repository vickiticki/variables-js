function main() {
  let numberOfCupsOfCoffee = 2
  let fullName = `Victoria Tiller`
  console.log(numberOfCupsOfCoffee + ` ` + fullName)

  const aboutMe = {
    fullName: 'Victoria Tiller',
    luckyNumber: 14,
    favoriteMovies: Array('The Road to El Dorado', 'Shrek', 'A Goofy Movie'),
  }

  let userName = window.prompt('What is your name? ')
  console.log('Sup, ' + userName)

  let firstOperand = parseFloat(window.prompt('Give me a number: '))
  let secondOperand = parseFloat(window.prompt('And another number: '))

  let sum = firstOperand + secondOperand
  let difference = firstOperand - secondOperand
  let product = firstOperand * secondOperand
  let quotient = firstOperand / secondOperand
  let remainder = firstOperand % secondOperand

  console.log(`The sum of ${firstOperand} and ${secondOperand} is ${sum}.`)
  console.log(`${firstOperand} minus ${secondOperand} is ${difference}`)
  console.log(`${firstOperand} times ${secondOperand} is ${product}.`)
  console.log(`${firstOperand} divided by ${secondOperand} is ${quotient}.`)
  console.log(
    `The remainder of ${firstOperand} divided by ${secondOperand} is ${remainder}.`
  )

  let numbers = [
    27094,
    22842,
    13824,
    30401,
    13882,
    37547,
    46483,
    47108,
    43145,
    49659,
    15676,
    24427,
    29402,
    42929,
    27864,
    40485,
    29023,
    41942,
    17168,
    10366,
    20829,
    12530,
    43316,
    16086,
    26837,
    49201,
    13189,
    38282,
    18050,
    32039,
    22428,
    15267,
    11902,
    41337,
    35037,
    36080,
    30161,
    31671,
    13568,
    45735,
    41926,
    32282,
    12722,
    34162,
    35819,
    12390,
    24521,
    46586,
    21536,
    16305,
    26585,
    36174,
    29798,
    12213,
    48271,
    40735,
    39171,
    45272,
    11397,
    12968,
    39777,
    27711,
    32218,
    28588,
    24639,
    22886,
    37735,
    40973,
    20099,
    16627,
    32960,
    27456,
    42074,
    27912,
    36697,
    34162,
    28893,
    22016,
    39880,
    21980,
    29952,
    48117,
    39162,
    16009,
    41109,
    23175,
    37235,
    38394,
    27361,
    39517,
    28681,
    20635,
    27641,
    37884,
    43545,
    13326,
    22792,
    22139,
    27443,
    21473,
  ]

  for (let i = 0; i < numbers.length; i++) {
    if (i === 0) {
      var smallest = numbers[i]
    } else if (numbers[i] <= smallest) {
      smallest = numbers[i]
    }
  }

  for (let i = 0; i < numbers.length; i++) {
    if (i === 0) {
      var largest = numbers[i]
    } else if (numbers[i] >= largest) {
      largest = numbers[i]
    }
  }

  for (let i = 0; i < numbers.length; i++) {
    if (i === 0) {
      var arraySum = numbers[0]
    }
    arraySum += numbers[i]
  }

  for (let i = 0; i < numbers.length; i++) {
    if (i === 0) {
      var total = numbers[0]
    }
    total += numbers[i]
  }
  let average = total / numbers.length

  const stats = {
    smallest: smallest,
    largest: largest,
    sum: arraySum,
    average: average,
  }
  // test
  // console.log(arraySum)
  // console.log(stats.sum)
}

document.addEventListener('DOMContentLoaded', main)
