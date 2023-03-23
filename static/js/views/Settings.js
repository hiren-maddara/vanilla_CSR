import AbstractView from "./Abstract.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Settings");
  }

  async getHtml() {
    return `
        <h1>Settings</h1>
        <p>Manage your privacy and customise your experience</p>
        <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod voluptas nam consequuntur rerum a? Possimus dolor repellendus molestias soluta, harum atque assumenda dicta, repudiandae quidem nulla quis sit placeat voluptatem.
        </p>
        `;
  }
}
