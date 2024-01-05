import PhoneSignin from './components/PhoneSignin'

function App() {
  console.log(process.env.REACT_APP_FIREBASE_API_KEY)
  return (
    <div className="App">
       <PhoneSignin/>
    </div>
  );
}

export default App;
