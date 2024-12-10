import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { TRANSITION_TIME } from './common/global'

document.addEventListener('DOMContentLoaded', () => {
	callModal('#modal-overlay', '.open-modal', '.close-modal')
})

const callModal = (modalSelector, openButtonSelector, closeButtonSelector) => {
	const modalOverlay = document.querySelector(modalSelector)
	const openModalButtons = document.querySelectorAll(openButtonSelector)
	const closeModalButton = document.querySelector(closeButtonSelector)
	const targetElement = modalOverlay

	if (!modalOverlay || !openModalButtons.length || !closeModalButton) return

	const closeModal = (withTransition = true) => {
		modalOverlay.classList.add('closed')

		if (withTransition) {
			setTimeout(() => {
				modalOverlay.classList.remove('opened', 'closed')
				enableBodyScroll(targetElement)
			}, TRANSITION_TIME)
		} else {
			modalOverlay.classList.remove('opened', 'closed')
			enableBodyScroll(targetElement)
		}
	}

	const openModal = () => {
		if (!modalOverlay.classList.contains('opened')) {
			modalOverlay.classList.add('opened')
			modalOverlay.classList.remove('closed')
			disableBodyScroll(targetElement, { reserveScrollBarGap: true })
		}
	}

	openModalButtons.forEach(button => {
		button.addEventListener('click', () => openModal())
	})

	closeModalButton.addEventListener('click', () => closeModal(true))

	modalOverlay.addEventListener('click', (e) => {
		if (e.target === modalOverlay) {
			closeModal(true)
		}
	})

	document.addEventListener('keydown', (e) => {
		if (e.key === 'Escape' && modalOverlay.classList.contains('opened')) {
			closeModal(true)
		}
	})
}