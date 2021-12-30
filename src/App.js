import './App.scss';
import Header from './components/Header';
import Banner from './components/Banner';
import Footer from './components/footer';
import Discuss from './components/discuss';
import Product from './components/product'

function App() {
  return (
    <>
      <Header/>
      <Banner/>
      <Product/>
      <Discuss/>
      <Footer/>
    </>
  );
}

export default App;
