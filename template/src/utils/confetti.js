import confetti from 'canvas-confetti'

export const launchConfetti = () => {
  // Initial big burst from center
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
    colors: ['#fafafa', '#27272a', '#3b82f6', '#fbbf24', '#ef4444', '#8b5cf6'],
  })

  // Side bursts
  confetti({
    particleCount: 50,
    angle: 60,
    spread: 55,
    origin: { x: 0, y: 0.9 },
    colors: ['#fafafa', '#27272a', '#3b82f6', '#fbbf24', '#ef4444', '#8b5cf6'],
  })
  confetti({
    particleCount: 50,
    angle: 120,
    spread: 55,
    origin: { x: 1, y: 0.9 },
    colors: ['#fafafa', '#27272a', '#3b82f6', '#fbbf24', '#ef4444', '#8b5cf6'],
  })

  // Continuous animation for 3 seconds
  const end = Date.now() + 3000
  const colors = ['#fafafa', '#27272a', '#3b82f6', '#fbbf24', '#ef4444', '#8b5cf6']

  ;(function frame() {
    confetti({
      particleCount: 10,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.9 },
      colors: colors,
    })
    confetti({
      particleCount: 10,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.9 },
      colors: colors,
    })
    confetti({
      particleCount: 10,
      angle: 115,
      spread: 55,
      origin: { y: 1.2, x: 0.8 },
      colors: colors,
    })
    confetti({
      particleCount: 10,
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
