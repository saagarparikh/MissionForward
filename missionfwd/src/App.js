import React from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl'
import Main from './components/main'
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="demo-big-content">
        <Layout>
            <Header className="header-color" title="Mission Forward" scroll>
                <Navigation>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/register">Schools</Link>
                </Navigation>
            </Header>
            <Drawer title="Title">
                <Navigation>
                  <Link to="/about">About</Link>
                  <Link to="/contact">Contact</Link>
                  <Link to="/register">Schools</Link>
                </Navigation>
            </Drawer>
            <Content>
                <div className="page-content"/>
                <Main/>
            </Content>
        </Layout>
    </div>

  );
}

export default App;
