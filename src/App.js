import Navigation from './components/Navigation/Navigation.js';
import Logo from './components/Logo/Logo.js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js';
import Rank from './components/Rank/Rank.js';
import 'tachyons';

function App() {
  return (
    <div className='App'>
      <Navigation/>
      <Logo/>
      <Rank/>
      <ImageLinkForm/>
    </div>
  );
}

export default App;
