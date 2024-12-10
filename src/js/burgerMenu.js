import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { WINDOW_INNER_WIDTH_LG, TRANSITION_TIME } from './common/global'

document.addEventListener('DOMContentLoaded', () => {
	toggleBurgerMenu('.burger-button', '.header')
})

const toggleBurgerMenu = (button, selector) => {
	const burgerButton = document.querySelector(button)
	const header = document.querySelector(selector)
	const targetElement = document.getElementById('header')

	if (!burgerButton || !header) return

	const closeMenu = () => {
		header.classList.add('closed')
		burgerButton.classList.remove('clicked')
		setTimeout(() => header.classList.remove('opened', 'closed'), TRANSITION_TIME)
		enableBodyScroll(targetElement)
	}

	const toggleMenu = () => {
		if (!header.classList.contains('opened')) {
			header.classList.add('opened')
			burgerButton.classList.add('clicked')
			header.classList.remove('closed')
			disableBodyScroll(targetElement, { reserveScrollBarGap: true })
		} else {
			closeMenu()
		}
	}

	window.addEventListener('resize', () => {
		if (window.innerWidth >= WINDOW_INNER_WIDTH_LG) {
			closeMenu()
			burgerButton.classList.remove('clicked')
		}
	})

	document.querySelectorAll('.header li a').forEach(link =>
		link.addEventListener('click', () => {
			if (header.classList.contains('opened')) closeMenu()
		})
	)

	burgerButton.addEventListener('click', toggleMenu)
}