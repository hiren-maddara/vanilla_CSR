//get views
/**
 * a second opinon is to create a view controller, that runs these controllers in the Bg
 * to support MVC architecture
 */
import Dashboard from "./views/Dashboard.js";
import Settings from "./views/settings.js";
import Posts from "./views/posts.js";
import NotFound from "./views/404.js";
import PostView from "./views/PostView.js";

//parsing url params
//func to generate a matching regexp that matches strs based on the given param(i.e path)
const pathToRegex = (path) =>
  new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

//create naviigator function
const navigateTo = (url) => {
  history.pushState(null, null, url); //move to the specified url
  router(); //run router to check validity of the new route and which renderer to call
};

//func to grab the params in the url
const getParams = (match) => {
  const values = match.result.slice(1);
  const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(
    (result) => result[1]
  );

  return Object.fromEntries(keys.map((key, i) => [key, values[i]]));
};

//create rendering func
const renderIntoDOM = async (el, view) => {
  //initial code to store necessary data into localstrogar, DB, cache, vars, etc
  //before overwriting the content in the DOM el
  //-------

  //write the view into the el
  el.innerHTML = view;
};

//writing custom clientside router
const router = async () => {
  // console.log(pathToRegex("path/2-id/jfhhffj"));

  //define routes and their endpoint functions
  const routes = [
    { path: "/", view: Dashboard },
    { path: "/posts", view: Posts },
    { path: "/posts/:id", view: PostView },
    // { path: "/posts/:id/:dcode", view: Posts },
    { path: "/settings", view: Settings },
  ];

  //test each route for potential match and set the path/url to that specific
  //route
  const potentialMatches = routes.map((route) => ({
    route,
    result: location.pathname.match(pathToRegex(route.path)),
  }));

  let match = potentialMatches.find(
    (potentialMatch) => potentialMatch.result !== null
  );
  console.log(match);

  //define 404(not-found) endpoint
  const error404 = !match
    ? { route: routes[0], result: [location.pathname] }
    : null;

  if (!match) {
    match = {
      route: routes[0],
      result: [location.pathname],
    };
  }

  const main = document.querySelector(".main");

  if (error404) return renderIntoDOM(main, await new NotFound().getHtml());

  const view = new match.route.view(getParams(match));

  await renderIntoDOM(main, await view.getHtml());
};

//back and forward btns
window.addEventListener("popstate", router);

//run router after page loads
document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault(); //donot reload page on-navigate
      navigateTo(e.target.href);
    }
  });
  router();
});
