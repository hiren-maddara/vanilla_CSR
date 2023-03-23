import AbstractView from "./Abstract.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Dashboard");
  }

  async getHtml() {
    return `
        <h1>Dashboard</h1>
        <p>Welcome</p>
        <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod voluptas nam consequuntur rerum a? Possimus dolor repellendus molestias soluta, harum atque assumenda dicta, repudiandae quidem nulla quis sit placeat voluptatem.
        </p>
        <a href='/posts' data-link>View Posts</a>
        `;
  }
}
