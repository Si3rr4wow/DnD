const resolver = ({ numDice, numSides }) => {
  return Array(numDice).fill(null).map(() =>
    1 + Math.floor(Math.random() * (numSides || 6))
  )
}

module.exports = resolver
