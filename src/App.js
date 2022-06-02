// import logo from './logo.svg';
import './App.css';
import Error from './image/img7.jpg';

function App() {
  return (
    <div className="App">
      {/* <h1 className='number_error'> 404 </h1>
      <p className='error_text'>Page Note Found</p> */}
       {/* <Error/> */}
       <div className='imgerror'>
          <img className='img' src={Error} alt="" />
       </div>   
    </div>
  );
}

export default App;
