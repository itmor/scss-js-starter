class App {
  #appBlock = document.querySelector('.app');

  constructor() {
    this.main();
  }

  main() {
    this.#appBlock.innerHTML = String.raw`
      <pre>
   _____  _____  _____ _____           _  _____       _____ _______       _____ _______ ______ _____    ______     __  _____ _______ __  __  ____  _____  
  / ____|/ ____|/ ____/ ____|         | |/ ____|     / ____|__   __|/\   |  __ \__   __|  ____|  __ \  |  _ \ \   / / |_   _|__   __|  \/  |/ __ \|  __ \ 
 | (___ | |    | (___| (___ ______    | | (___ _____| (___    | |  /  \  | |__) | | |  | |__  | |__) | | |_) \ \_/ /    | |    | |  | \  / | |  | | |__) |
  \___ \| |     \___ \\___ \______|   | |\___ \______\___ \   | | / /\ \ |  _  /  | |  |  __| |  _  /  |  _ < \   /     | |    | |  | |\/| | |  | |  _  / 
  ____) | |____ ____) |___) |    | |__| |____) |     ____) |  | |/ ____ \| | \ \  | |  | |____| | \ \  | |_) | | |     _| |_   | |  | |  | | |__| | | \ \ 
 |_____/ \_____|_____/_____/      \____/|_____/     |_____/   |_/_/    \_\_|  \_\ |_|  |______|_|  \_\ |____/  |_|    |_____|  |_|  |_|  |_|\____/|_|  \_\ 
    Hello its basic template) @itmor-developer
      </pre>
    `;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const app = new App();
});
