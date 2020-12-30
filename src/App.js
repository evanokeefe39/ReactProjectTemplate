import {useState, useMemo} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {MainLayout} from './components/Layout';
import PrivateRoute from './components/PrivateRoute';
import HomePage from './pages/HomePage';
import Test1 from './pages/Test1';
import Test2 from './pages/Test2';
import Test3 from './pages/Test3';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import LandingPage from './pages/LandingPage';
import { SecurityContext } from './components/SecurityContext';

function App() {
  const [user, setUser] = useState(null);

  const securityProviderObj = useMemo(()=>({user, setUser}), [user, setUser]);

  return (
    
      <BrowserRouter>
        <Switch>
          <SecurityContext.Provider value={securityProviderObj}>

            

            <MainLayout>
              <Route exact path="/" component={LandingPage}/>
              <Route exact path="/login" component={LoginPage}/>
              <Route exact path="/signup" component={SignUpPage}/>
              
              
              <PrivateRoute exact path="/home" component={HomePage}/>
              <PrivateRoute exact path="/Test1" component={Test1}/>
              <PrivateRoute exact path="/Test2" component={Test2}/>
              <PrivateRoute exact path="/Test3" component={Test3}/>
              
            </MainLayout>
          </SecurityContext.Provider>
        </Switch>
            
          
      </BrowserRouter>
    
  );
}

export default App;
