import React,{useEffect,useState} from 'react';
import './App.css';

import Menu from './core/Menu';
import Home from './core/Home';
import Loader from './components/Loader';


function App() {
  useEffect(() => {
    setLoading(false);
  }, []);
  
  let [loading, setLoading] = useState(true);
  return (
    <div className="App">
    {
      
      loading?  <Loader loading={loading}/>
      :
      <Home/>
 

      
    }
    
    </div>
  );
}

export default App;
