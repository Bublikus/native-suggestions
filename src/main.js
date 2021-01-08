import NativeSuggestions from './native-suggestions'

document.addEventListener('DOMContentLoaded', mounted)

function mounted () {
  const form = document.getElementById('form')
  const inputs = form.querySelectorAll('input')

  inputs.forEach((input, i) => new NativeSuggestions(input, { folder: i ? null : 'personal' }))

  document.getElementById('btn').addEventListener('click', () => form.remove())
}
