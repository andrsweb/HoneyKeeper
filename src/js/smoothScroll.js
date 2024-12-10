document.addEventListener('DOMContentLoaded', () => {
	'use strict'
	
	smoothScroll()
})

const smoothScroll = () => {
	document.querySelectorAll('.nav a').forEach(link =>
		link.addEventListener('click', (e) => {
			e.preventDefault()
			const targetId = link.getAttribute('href').substring(1)
			const targetElement = document.getElementById(targetId)

			window.scrollTo({
				top: targetElement.offsetTop,
				behavior: 'smooth'
			})
		})
	)
}
