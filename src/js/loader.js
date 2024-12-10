window.addEventListener('load', () => {
	const loader = document.getElementById('main-loader')
	const body = document.body

	body.classList.add('no-scroll')

	if (loader) {
		loader.classList.add('fade-out')

		setTimeout(() => {
			loader.style.display = 'none'
			body.classList.remove('no-scroll')
		}, 500)
	}
})