import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import {MainLayout} from './components/Layout';
import HomePage from './pages/HomePage';
import Test1 from './pages/Test1';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <MainLayout>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/Test1" component={Test1}/>
          <Route exact path="/Test2" component={Test1}/>
          <Route exact path="/Test3" component={Test1}/>
           
          
        </MainLayout>
      </Switch>
          
        
    </BrowserRouter>
   
  );
}

export default App;
