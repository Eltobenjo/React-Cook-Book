import logo from './logo.svg';
import './App.css';
import List from './List';
var contentful = require('contentful');

function App() {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
var client = contentful.createClient({
  space: 'ltbvafjdgsae',
  accessToken: 'GCAqscWzmWWKUypH8AbmC9paHfRbhacPWYHpTlSzvwc'
})
client.getEntries().then((entries) => {
  setRecipes(entries.items);
});
}, []);
  return (
    <div className="App">
      <List />
     
  
    </div>
  );
}

export default App;
