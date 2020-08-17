import React from 'react';
//import { AppBar,Toolbar ,Typography,Button} from '@material-ui/core';
import { Layout ,Navigation,Header,Drawer,Content }from 'react-mdl';

function Navbar() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header title="Anitha Venkatesan" scroll>
            <Navigation>
                <a href ="/"> </a>
                <a href="/about">About</a>
                <a href="/projects">Projects</a>
                <a href="/Contact">Contact</a>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <a href="/">About</a>
                <a href="/">Projects</a>
                <a href="/">Contact</a>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
        </Content>
    </Layout>
</div>
      );
   
}

export default Navbar;
