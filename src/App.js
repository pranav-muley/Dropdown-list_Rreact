
import './App.css';

function App() {
  // array created
  const array =["Yes","Probably Not"];
  return (
    <div className='outer'> 
       <div className="App">
      <h1 className='heading'>Drop-down list using React...</h1>
      <select id='select'>
        <option className='opt' selected="selected" disabled>select</option>
        {/* map from a array */}
        {
          array.map(name=>( 
             <option className='opt'>{name}</option>
          ))
        }
        
      </select>
    </div>
    </div>

  );
}

export default App;
