import logo from './logo.svg';
import './App.css';
import SearchBar from "./components/search"

function App() {
  return (
    <div class="mt-5">
      <header className="text-center display-5 my-5">
        Welcome to Your AI-enabled Manga Generator !
      </header>

      <SearchBar />
    </div>
  );
}

export default App;
