import AbstractView from "./Abstract.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("404 - Not Found");
  }

  async getHtml() {
    return `
        <h1>404 - Not Found</h1>
        <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod voluptas nam consequuntur rerum a? Possimus dolor repellendus molestias soluta, harum atque assumenda dicta, repudiandae quidem nulla quis sit placeat voluptatem.
        </p>
        <a href='/'>Go Home</a>

        `;
  }
}
