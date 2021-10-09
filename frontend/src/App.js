import './App.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import Public from './components/public/Public';

function App() {

    {/*const processImage = async (event) => {
        let image = event.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = () => {
            console.log(reader.result);
            document.getElementById('img').src = reader.result;
        }
        <input
        type="file"
        name="display-image"
        onChange={processImage}
    />
    <img id='img'></img>
    }*/}

    return (
        <div className="App">
            <Router>
                <Public></Public>
            </Router>
        </div>
    );
}

export default App;