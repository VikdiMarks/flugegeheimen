//* INPUT VERIFICATION
const inputElements = [...document.querySelectorAll('input.code-input')]

inputElements.forEach((ele, index) => {
  ele.addEventListener('keydown', (e) => {
    if (e.keyCode === 8 && e.target.value === '') inputElements[Math.max(0, index - 1)].focus()
  })
  ele.addEventListener('input', (e) => {
    const [first, ...rest] = e.target.value
    e.target.value = first ?? ''
    const lastInputBox = index === inputElements.length - 1
    const didInsertContent = first !== undefined
    if (didInsertContent && !lastInputBox) {
      inputElements[index + 1].focus()
      inputElements[index + 1].value = rest.join('')
      inputElements[index + 1].dispatchEvent(new Event('input'))
    }
  })
})

//* SHOW MORE 
const showMoreButton = [...document.querySelectorAll('.show-more')];
const showMoreName = 'show-more';

document.addEventListener('click', (event) => {
  const el = event.target;
  const classNameEl = event.target.className;
  const classNameParentEl = event.target.parentNode.className;

  if (
    classNameEl === showMoreName ||
    classNameParentEl === showMoreName
  ) {
    const showMorePanel = el.parentNode.querySelector('.storage-item-more-content');

    showMorePanel.classList.toggle('active');
  }
})

//* BURGER MENU
const burgerButton = document.querySelector('.burger');
const panelLinks = document.querySelector('.panel-links');

burgerButton.addEventListener('click', () => {
  burgerButton.classList.toggle('active')
  panelLinks.classList.toggle('active')
})
