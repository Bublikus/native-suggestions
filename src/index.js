import NativeSuggestions from './native-suggestions'

document.addEventListener('DOMContentLoaded', mounted)

console.log('I was executed')

function mounted () {
  const form = document.getElementById('form')
  const inputs = Array.from(form.querySelectorAll('input'))

  console.log(inputs)

  inputs.forEach(input => new NativeSuggestions(input))
}
