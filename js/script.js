document.addEventListener("DOMContentLoaded", () => {
  const icons = document.querySelectorAll(".icon")

  icons.forEach((icon) => {
    animateIcon(icon)
  })
})

function animateIcon(icon) {
  const duration = Math.random() * 20 + 10 // random duration between 10s and 30s
  const keyframes = [
    {
      transform: `translate(${Math.random() * 100}vw, ${
        Math.random() * 100
      }vh)`,
    },
    {
      transform: `translate(${Math.random() * 100}vw, ${
        Math.random() * 100
      }vh)`,
    },
  ]

  icon.animate(keyframes, {
    duration: duration * 1000,
    iterations: Infinity,
    direction: "alternate",
    easing: "linear",
  })
}
