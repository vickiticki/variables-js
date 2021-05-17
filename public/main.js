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
}

document.addEventListener('DOMContentLoaded', main)
