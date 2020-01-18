
smoothScroll = (selector, duration) => {
    const startPos = window.pageYOffset
    const target = document.querySelector(selector)
    const targetPos = target.getBoundingClientRect().top
    const dist = targetPos - startPos
    let startTime = null


    animation = (currentTime) => {
        if (startTime === null) startTime = currentTime
        let timeElapsed = currentTime - startTime
        let animationFrame = ease(timeElapsed, startPos, dist, duration)
        window.scrollTo(0, animationFrame)
        if(timeElapsed < duration) requestAnimationFrame(animation)
    }

    // ease function stolen from interwebs :)
    ease = (t, b, c, d) => {
        t /= d /2
        if (t < 1) return c / 2 * t * t + b
        t--
        return -c / 2 * (t * (t - 2) - 1) + b
    }

    requestAnimationFrame(animation)
}

const home = document.querySelector('#a-home')
const about = document.querySelector('#a-about')
const services = document.querySelector('#a-services')
const work = document.querySelector('#a-work')

home.addEventListener('click', () => smoothScroll('#hero', 1000))
about.addEventListener('click', () => smoothScroll('#about', 1000))
services.addEventListener('click', () => smoothScroll('#services', 1000))
work.addEventListener('click', () => smoothScroll('#work', 1000))