const animateBlock = document.querySelectorAll('#process')
const steps = document.querySelector('.steps')

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      steps.classList.add('animate')
      entry.target.src = entry.target.dataset.src
      observer.unobserve(entry.target)
    }
  })
}

const observer = new IntersectionObserver(callback)
animateBlock.forEach((animateBlock) => observer.observe(animateBlock))