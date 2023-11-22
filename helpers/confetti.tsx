'use client'

export const confettiApi = async (x: number, y: number) => {
  const confetti = window.confetti
  if (confetti) {
    await confetti({
      zIndex: 10,
      particleCount: 100,
      spread: 160,
      angle: -100,
      origin: {
        x,
        y
      }
    })
  }
}
