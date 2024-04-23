import './App.css';
import 'leaflet/dist/leaflet.css';
import PlacesAutocomplete from './features/places/PlacesAutocomplete';

function App() {
  return (
    <div className="flex flex-col h-screen justify-between">
      {/* Navbar */}
      <nav className="bg-blue-500 text-white py-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center px-6">
          <div className="font-bold text-xl">My Places App</div>
          <div className="space-x-4">
            <a href="/" className="hover:bg-blue-700 px-3 py-2 rounded">Home</a>
            <a href="/favorites" className="hover:bg-blue-700 px-3 py-2 rounded">Favorites</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex-grow container mx-auto flex flex-col items-center justify-center px-6 py-8">
        <h1 className="text-5xl text-center text-blue-800 font-bold mb-6">Discover New Places</h1>
        <p className="text-xl text-gray-600 text-center mb-6">
          Find the best places to visit and save your favorites.
        </p>
        {/* Autocomplete Input */}
        <PlacesAutocomplete />

      </div>

      {/* Footer */}
      <footer className="bg-blue-500 text-white py-4">
        <div className="container mx-auto text-center">
          &copy; {new Date().getFullYear()} My Places App. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default App;
