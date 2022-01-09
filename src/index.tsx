import ReactDOM from 'react-dom';
import CodeCell from './components/code-cell';
import TextEditor from './components/text-editor';
import { Provider } from 'react-redux';
import { store } from './state';
import 'bulmaswatch/superhero/bulmaswatch.min.css';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <TextEditor />
      </div>
    </Provider>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
