/**
 * provides basic config for other views to inherit
 * all these views can be written in any preffered lang(pug, jsx, js, etc)
 * and then write dfft exported functions that rad the templates and parse into html,
 *  which is really simple with the templating engines
 * but we'll keep it simple here
 */

export default class {
  constructor(params) {
    this.params = params
  }

  setTitle(title) {
    document.title = title;
  }

  async getHtml() {
    return "";
  }
}
