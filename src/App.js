import Navigation from './components/Navigation/Navigation.js';
import Logo from './components/Logo/Logo.js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js'
import 'tachyons';

function App() {
  return (
    <div>
      <Navigation/>
      <Logo/>
      <ImageLinkForm/>
    </div>
  );
}

export default App;
