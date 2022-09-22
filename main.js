import "./style.css";
document.getElementById("all-content").style.display = "block";

/*
  Add your JavaScript for all exercises Below or in separate js-files, which you must the import above
*/

/**
 * When buttons are inside forms, they submit the form and triggers the page to load again.
 * Since we're making a single-page application, we don't want to load the page again after
 * it has already been loaded once.
 *
 * To prevent page loads on form submit events, we use `preventDefault`.
 */
Array.prototype.slice.call(document.getElementsByTagName("form"))
    .forEach(form => {
      form.onsubmit = (evt) => {
        evt.preventDefault(); // prevents forms from submitting and triggering a page load
      }
    })

/* JS For Exercise-1 below */

/* JS For Exercise-2 below */

/* JS For Exercise-3 below */

/*
 If you do not understand the code below, don´t worry, it is not necessary for completing the exercises
*/

function hideAllShowOne(idToShow) {
  document.getElementById("about_html").style = "display:none";
  document.getElementById("ex1_html").style = "display:none";
  document.getElementById("ex2_html").style = "display:none";
  document.getElementById("ex3_html").style = "display:none";
  document.getElementById(idToShow).style = "display:block";
}

function menuItemClicked(evt) {
  const id = evt.target.id;
  switch (id) {
    case "ex1":
      hideAllShowOne("ex1_html");
      break;
    case "ex2":
      hideAllShowOne("ex2_html");
      break;
    case "ex3":
      hideAllShowOne("ex3_html");
      break;
    default:
      hideAllShowOne("about_html");
      break;
  }
  evt.preventDefault();
}
document.getElementById("menu").onclick = menuItemClicked;
hideAllShowOne("about_html");
