import React, { useState, useEffect } from 'react'

import useTime from '../utils/use-time'
import wait from '../utils/wait'

const quotes = [{
  text: "God not only plays dice, He also sometimes throws the dice where they cannot be seen.",
  author: "Stephen Hawking"
}, {
  text: "The dice of Zeus always fall luckily.",
  author: "Sophocles"
}, {
  text: "We have wasted History like a bunch of drunks shooting dice back in the men's crapper of the local bar.",
  author: "Charles Bukowski"
}, {
  text: "I haven't tried to buffer myself. I like rolling the dice.",
  author: "Kevin Costner"
}, {
  text: "I read Shakespeare and the Bible, and I can shoot dice. That's what I call a liberal education.",
  author: "Tallulah Bankhead"
}, {
  text: "One who doesn't throw the dice can never expect to score a six.",
  author: "Navjot Singh Sidhu"
}, {
  text: "God may not play dice but he enjoys a good round of Trivial Pursuit every now and again.",
  author: "Federico Fellini"
}, {
  text: "In racing, I wanted to be a winner and to be a winner, you have to be willing to roll the dice.",
  author: "Bobby Rahal"
}, {
  text: "With improvisation, I just do it. It might be a total failure but then you just throw the dice again",
  author: "Christian Marclay"
}, {
  text: "I moved on from dice baseball to 'MLB: The Show' on PlayStation.",
  author: "Nate Corddry"
}]

const fadeDuration = 500

const QuoteGenerator = () => {
  const [state, setState] = useState({
    visible: false,
    quote: {}
  })
  const time = useTime(1e4)

  useEffect(() => {
    setState(s => ({ ...s, visible: false }))
    const quote = quotes[Math.floor(Math.random() * quotes.length)]
    wait(fadeDuration).then(() => {
      setState(s => ({
        ...s,
        quote,
        visible: true
      }))
    })
  }, [time])

  return (
    <div style={{ transition: `opacity ${fadeDuration}ms`, opacity: state.visible ? 1 : 0 }}>
      <p>
        {state.quote.text}
      </p>
      <i>
        - {state.quote.author}
      </i>
    </div>
  )
}

export default QuoteGenerator
