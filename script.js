const num = 100,
	container = document.querySelector('.container')
	classNames = 5

for (let i = 3; i <= num; i++) {
	const elm = document.createElement('span')
	elm.classList.add('bar')
	elm.classList.add('bar--' + [Math.floor(Math.random() * classNames + 1)]
)

	container.appendChild(elm)
}