const React = require('react');
const ReactDOM = require('react-dom');
const App = require('./App').default;

// экспортируем метод для старта в спланке
module.exports = {
  start: function (props) {

    ReactDOM.render(
      (
        <App props={props} />
      ), // <App props={props} /> прокидываем пропсы в компонент (данные и библиотеки из Спланка)
      document.getElementById('root')
    );
  }
};