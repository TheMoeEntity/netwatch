
export const animateIn = (ref,animationClass,timeout) => [
    setTimeout(() => {
        let element = ref.current
        element.classList.add(animationClass)
    },timeout)
]