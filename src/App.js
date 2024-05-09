import "./App.css";
import logo from "./assests/desi dude logo.png"

function App() {
  return (
    <main className="grid min-h-full place-items-center px-6 py-24 sm:py-12 min-[320px]:px-6 min-[320px]:text-sm lg:px-8 mt-5 ">
      <div className="text-center">
        <img src={logo} alt="logo"/>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text_color sm:text-5xl">Launching </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">Stay Tuned</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          
        </div>
      </div>
    </main>
  );
}

export default App;
