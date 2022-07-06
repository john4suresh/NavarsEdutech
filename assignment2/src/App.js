import './App.css';
import { FcReddit } from 'react-icons/fc';
import { IconContext } from "react-icons";
import RedditItem from './RedditItem';

function App() {
  return (
    <IconContext.Provider value={{ color: "#fff", size: 100, className: "reddit" }}>
      <div className="App">
        <header className='bg-[#222] h-[186px] text-white flex justify-center items-center flex-col'>
          <FcReddit />
          <h1 className="text-xl font-bold pt-4">Hello, Reddit!</h1>
        </header>
        <main>
          <RedditItem />
        </main>
      </div>
    </IconContext.Provider>
  );
}

export default App;
