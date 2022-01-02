import './App.scss';
import Header from './components/Header';
import Banner from './components/Banner';
import Footer from './components/footer';
import Discuss from './components/discuss';
import Product from './components/product';
import Service from './components/service';
import Developer from './components/developer'
import Portfolio from './components/portfolio'


function App() {
  return (
    <>
      <Header/>
      <Banner/>
      <Product/>
      <Service/>
      <Portfolio/>
      <Developer/>
      <Discuss/>
      <Footer/>
    </>
  );
}

export default App;
