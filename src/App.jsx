import CurrencyConverter from './components/CurrencyConverter';
import  bgImg from './assets/bg-img.jpeg';


function App() {
  

  return (
    <>
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat' style={{backgroundImage: `url(${bgImg})`}}>
    <CurrencyConverter/> 
    </div>
    </>
  )
}

export default App
