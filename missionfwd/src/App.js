import React from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl'
import Main from './components/main'
import { Link } from 'react-router-dom';
import HttpsRedirect from 'react-https-redirect'

function App() {
  return (
    <HttpsRedirect>
    <div className="demo-big-content">
        <Layout>
            <Header className="header-color" title="Mission Forward" scroll>
                <Navigation>
                    <Link to="/">Home</Link>
                </Navigation>
                <Navigation>
                    <Link to="/about">About</Link>
                </Navigation>
            </Header>
            <Drawer title="Mission Forward">
              <Navigation>
                  <Link to="/">Home</Link>
              </Navigation>
              <Navigation>
                  <Link to="/about">About</Link>
              </Navigation>
            </Drawer>
            <Content>
                <div className="page-content"/>
                <Main/>
            </Content>
        </Layout>
    </div>
    </HttpsRedirect>

  );
}

export default App;
