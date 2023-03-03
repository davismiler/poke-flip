import confetti from 'canvas-confetti'

export const launchConfetti = () => {
  const end = Date.now() + 10 * 60

  const colors = ['#4E4353', '#E45053', '#E7B084']

  ;(function frame() {
    setTimeout(() => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.9 },
        colors: colors,
      })
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.9 },
        colors: colors,
      })
    }, 500)
    confetti({
      particleCount: 3,
      angle: 115,
      spread: 55,
      origin: { y: 1.2, x: 0.8 },
      colors: colors,
    })
    confetti({
      particleCount: 3,
      angle: 65,
      spread: 55,
      origin: { y: 1.2, x: 0.2 },
      colors: colors,
    })

    if (Date.now() < end) {
      requestAnimationFrame(frame)
    }
  })()
}
