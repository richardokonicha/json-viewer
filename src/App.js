import './App.css';

function App({data}) {
  console.log(data)
  return (
    <div className="App">
      <header className="App-header">
        <p>{data.name}</p>
        <p>{data.description}</p>
        <p>{data.polygon}</p>
        <p>{data.details}</p>
      </header>
    </div>
  );
}

export default App;
