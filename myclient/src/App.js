import React from 'react';
import {Container} from '@material-ui/core';
import Home from './components/home/Home';
import {Switch,BrowserRouter,Route,withRouter} from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Login from './components/login/Login';

const App = () =>{
    //const classes = useStyles();
    //const [currentId, setCurrentId] = useState(0);
    //const dispatch = useDispatch();

      //useEffect(() => {
        //dispatch(getPosts());
      //}, [dispatch]);
    return(
        <div>
          <Container maxWidth="lg">
<BrowserRouter>

          <Header/>
          <Switch>
          <Route exact path="/" component={withRouter(Home)}/>
          <Route exact path="/auth" component={withRouter(Login)}/>
          </Switch>
          <Footer/>
  
  </BrowserRouter>
  </Container>
        </div>

    );
}

export default App;
