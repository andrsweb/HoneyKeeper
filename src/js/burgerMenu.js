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

	const closeMenu = (transition) => {
		header.classList.add('closed')
		burgerButton.classList.remove('clicked')

		if(transition) {
			setTimeout(() => header.classList.remove('opened', 'closed'), TRANSITION_TIME)
		} else {
			header.classList.remove('opened')
			header.classList.remove('closed')
		}
		
		enableBodyScroll(targetElement)
	}

	const toggleMenu = () => {
		if (!header.classList.contains('opened')) {
			header.classList.add('opened')
			burgerButton.classList.add('clicked')
			header.classList.remove('closed')
			disableBodyScroll(targetElement, { reserveScrollBarGap: true })
		} else {
			closeMenu(true)
		}
	}

	window.addEventListener('resize', () => {
		if (window.innerWidth >= WINDOW_INNER_WIDTH_LG) {
			closeMenu(false)
			burgerButton.classList.remove('clicked')
		}
	})

	document.querySelectorAll('.header li a').forEach(link =>
		link.addEventListener('click', () => {
			if (header.classList.contains('opened')) closeMenu(true)
		})
	)

	burgerButton.addEventListener('click', toggleMenu)
}