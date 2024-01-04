import { EMPTY_TEXT } from '@/constants';

/**
 * Display error message
 *
 * @param {Element} element - HTML Element
 * @param {string} msg - Show message
 */
const showErrorMessage = (element: Element, msg: string): void => {
  element!.innerHTML = msg;
}

/**
 * Clean error message
 *
 * @param {Element} element - HTML Element
 */
const cleanErrorMessage = (element: Element): void => {
  element.innerHTML = EMPTY_TEXT
}

/**
 * Hide element
 *
 * @param {Element} element - HTML Element
 */
const hideElement = (element: Element): void => {
  element.classList.add('hide');
}

/**
 * Show element
 *
 * @param {Element} element - HTML Element
 */
const showElement = (element: Element): void => {
  element.classList.remove('hide');
}

/**
 * Disable button
 *
 * @param {HTMLButtonElement} btn - HTML Button Element
 */
const disableElement = (btn: HTMLButtonElement): void => {
  btn.style.opacity = '0.5';
  btn.disabled = true;

  return;
}

/**
 * Cancel the disable button
 *
 * @param {HTMLButtonElement} btn - HTML Button Element
 */
const removeDisableElement = (btn: HTMLButtonElement): void => {
  btn.style.opacity = '1';
  btn.disabled = false;

  return
}

export const DocumentHelper = {
  showErrorMessage,
  cleanErrorMessage,
  hideElement,
  showElement,
  disableElement,
  removeDisableElement
};
