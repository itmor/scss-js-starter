class App {
	appBlock = document.querySelector('.app');

	constructor() {
		this.main();
	}

	main() {
      this.appBlock.innerText = 'Hello app';
	}
}

document.addEventListener('DOMContentLoaded', () => {
    const app = new App();
});