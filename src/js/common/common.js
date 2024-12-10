document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	headerScroll()
})

const headerScroll = () => {
	const header = document.querySelector('.header')

	const updateClass = () => {
		const scrollTop = window.scrollY
		if (scrollTop > 0) header.classList.add('scrolled')
		else header.classList.remove('scrolled')
	}

	window.addEventListener('scroll', updateClass)
	window.addEventListener('resize', updateClass)
}
