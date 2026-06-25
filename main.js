/**
 * PayFlow API Docs — main.js
 * Extracted from payflow_api_docs_website.html
 *
 * Single responsibility: switch the visible page and
 * update the active nav-item highlight.
 *
 * Usage:
 *   show('payments', navItemElement)
 *
 * @param {string}      id   - Page ID suffix (matches `id="page-{id}"`)
 * @param {HTMLElement} el   - The nav item that was clicked (may be null
 *                             when called from endpoint-row clicks)
 */
function show(id, el) {
  // 1. Hide every page
  document.querySelectorAll('.page').forEach(function (p) {
    p.classList.remove('active');
  });

  // 2. Remove active state from every nav item
  document.querySelectorAll('.nav-item').forEach(function (n) {
    n.classList.remove('active');
  });

  // 3. Show the requested page
  var page = document.getElementById('page-' + id);
  if (page) {
    page.classList.add('active');
  }

  // 4. Highlight the clicked nav item (if provided)
  if (el) {
    el.classList.add('active');
  }

  // 5. Scroll the main panel back to the top
  document.querySelector('.main').scrollTo(0, 0);
}
