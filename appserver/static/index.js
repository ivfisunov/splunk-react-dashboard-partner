/**
 *  Точка входа в Splunk приложение
 */
require([
  "splunkjs/mvc",
  "splunkjs/mvc/searchmanager",
  "/static/app/partners-dev/dist/index_bundle.js", // импортируем собранное реакт приложение
], function (mvc, SearchManager, ReactApp) {

  // убираем название дэшборда (тем самым оставляя для приложения весь экран браузера)
  let elements = document.getElementsByClassName('dashboard-header');
  elements[0].parentNode.removeChild(elements[0]);

  // стартуем React приложение
  ReactApp.start({
    text: "Starting Application...",
    SearchManager, // прокидываем в реакт нативную спланк библиотеку для выборки данных
    mvc // прокидываем в реакт нативную спланк библиотеку (для очистки id после выборки данных)
  });

});