import './App.css';
import VideoCard from "./VideoCard";
import VideoCard2 from "./VideoCard2";

function App() {
  return (

    // Ben naming convetion
    <div className="app">
      <h1>Hey everyone</h1>

      <div className="app_top">
      {/* Logo of the geesehacks replace after finish */} 
      <img
      className="app_logo" 
      alt=''
      src="https://media.istockphoto.com/id/1421301993/photo/shopping-cart-sign-on-the-cube-shape-dice.jpg?s=1024x1024&w=is&k=20&c=r8uASh30J26EJ0O9LKuA4HCbe5_r6ZXdTehJXSSLwJQ="
      
      />
      <h1>Reels</h1>
      </div>


      <div className="app_video">
      {/*video apps on the screen*/}
      <VideoCard/>
      <VideoCard2 />
      <VideoCard />
      <VideoCard />
      {/* video */}
      {/* video */}
      {/* video */}
      {/* video */}
      </div>
    </div>
  );
}

export default App;
