
import './App.css';
import Sidebar from './Sidebar'
import Feed from './Feed';
import Widgets from './Widgets.js'

function App() {
  return (
    <div className="app">
      {/* Side bar */}
      <Sidebar />
      {/* Feed */}
      <Feed />
      {/* widgets */}
      <Widgets />
    </div>
  );
}

export default App;
