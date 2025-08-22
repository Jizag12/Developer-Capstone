import './App.css';
import Header from './header';
import Main from './main';
import Footer from './footer';
import Nav from './nav';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta name="description" content="Little lemon restaurant application"/>
        <meta property="og:title" content="Little Lemon"/>
        <meta property="og:description" content="Little Lemon web app"/>
        <meta property="og:image" content=""/>
      </Helmet>
      <Nav />
      <Header/>
        <Main/>
          <Footer/>
    </div>
  );
}

export default App;
