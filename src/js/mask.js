import IMask from 'imask'

const phoneInput = document.getElementById('phone-mask')
IMask(phoneInput, {
	mask: '+{7}(000)000-00-00'
})
