import AbstractView from "./Abstract.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Viewing Posts");
    console.log(ths.params.id);
  }

  async getHtml() {
    return `
        <h1>Posts</h1>
        <p>Post ####</p>
        <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod voluptas nam consequuntur rerum a? Possimus dolor repellendus molestias soluta, harum atque assumenda dicta, repudiandae quidem nulla quis sit placeat voluptatem.
        </p>
        `;
  }
}
