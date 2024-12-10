import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'

document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	initializeSwipers('.swiper')
})

const initializeSwipers = (selector) => {
	if (!selector) return

	const swiperElements = document.querySelectorAll(selector)

	swiperElements.forEach((swiperElement, index) => {
		if (swiperElement.dataset.initialized === "true") return

		const paginationClass = `pagination-${index}`
		const nextButtonClass = `button-next-${index}`
		const prevButtonClass = `button-prev-${index}`

		const swiperBox = swiperElement.closest('.swiper-box')
		swiperBox.querySelector('.pagination')?.classList.add(paginationClass)
		swiperBox.querySelector('.button-next')?.classList.add(nextButtonClass)
		swiperBox.querySelector('.button-prev')?.classList.add(prevButtonClass)

		new Swiper(swiperElement, {
			modules: [Navigation, Pagination],
			speed: 500,
			spaceBetween: 30,

			pagination: {
				el: `.${paginationClass}`,
				clickable: true,
			},

			navigation: {
				nextEl: `.${nextButtonClass}`,
				prevEl: `.${prevButtonClass}`,
			},

			slidesPerView: 1,
			breakpoints: {
				768: {
					spaceBetween: 40,
				},

				1366: {
					slidesPerView: 3
				},

				1800: {
					slidesPerView: 4
				}
			}
		})

		swiperElement.dataset.initialized = "true"
	})
}