import Header from './components/layout/header/Header';
import Sidebar from './components/layout/sidebar/Sidebar';
import MainBody from './components/layout/main-body/MainBody';
import './App.css';

const App = () => (
  <div className="appLayout">
    <Header />
    <div className="bodyLayout">
      <Sidebar />
      <MainBody />
    </div>
  </div>
);

export default App;