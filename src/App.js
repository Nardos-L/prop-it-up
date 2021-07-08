import PersonCard from './components/PersonCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <PersonCard firstName="Doe" lastName="Jane"  age={ 45 }  hairColor="Black" />
        <PersonCard firstName="Smith" lastName="John"  age={ 88 }  hairColor="Brown" />
        <PersonCard firstName="Fillmore" lastName="Millard"  age={ 50 }  hairColor="Brown" />
        <PersonCard firstName="Smith" lastName="Maria"  age={ 62 }  hairColor="Brown" />
      </div>
      
    </div>
  );
}

export default App;
