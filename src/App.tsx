import React, {useEffect, useState} from "react";
import {hot} from 'react-hot-loader/root';
import "./main.global.css";
import {Layout} from "./shared/Layout";
import {Header} from "./shared/Header";
import {Content} from "./shared/Content";
import {CardsList} from "./shared/CardsList";
import {UserContextProvider} from "./shared/context/userContext";
import {applyMiddleware, createStore} from "redux";
import {rootReducer, RootState} from "./store/reducer";
import {composeWithDevTools} from "@redux-devtools/extension";
import {Provider, useSelector} from "react-redux";
import  thunk  from 'redux-thunk'
import {saveToken} from "./store/token/reducer";
import {BrowserRouter, Redirect, Route, Switch, useLocation} from 'react-router-dom'
import {Post} from "./shared/Post";
import {NotFound} from "./shared/NotFound";


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));


function ModalSwitch() {
    let location = useLocation();
    const post = location.state;
    return(
        <div>
    <Route path='/posts' >
        <CardsList/>
    </Route>
    <Route path ='/posts/:id'>

        <Post post={post}/>
    </Route>
        </div>
    )
}

function AppComponent() {

    const  [mounted, setMounted] = useState(false);
    useEffect( () => {
        setMounted(true)
    }, [])

    useEffect(() => {
        // @ts-ignore
        store.dispatch(saveToken());
    }, [])

    return (
      <Provider store={store}>
          {mounted && (
              <BrowserRouter>
                      <UserContextProvider>
                          <Layout>
                              <Header />
                              <Content>
                                  <Switch >
                                      <Route exact path = '/'>
                                          <Redirect to ='/posts' />
                                      </Route>
                                      <Route path='/auth'>
                                          <Redirect to ='/posts' />
                                      </Route>
                                      <Route path='/posts'>
                                      <ModalSwitch/>
                                      </Route>
                                      <Route path='*'>
                                          <NotFound/>
                                      </Route>
                              </Switch>
                              </Content>



                          </Layout>

                      </UserContextProvider>


              </BrowserRouter>
          )}
      </Provider>
    );
}

export const App = hot(() => <AppComponent />);
