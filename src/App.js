import "./App.css";
import logo from "./assests/logo.png"

function App() {
  return (
    <main className="grid min-h-full place-items-center px-6 py-24 min-[320px]:py-10 sm:py-12 min-[320px]:px-6 min-[320px]:text-sm lg:px-8 mt-40 ">
      <div className="text-center animation">
        <img src={logo} alt="logo" className="w-48 mx-m-64 min-[320px]:mx-14 min-[320px]:w-40"/>
            <div className="mt-4 text-3xl font-bold tracking-tight text_color sm:text-5xl min-[320px]:mt-10">Launching Soon</div>
            <p className="mt-4 text-m  text_color sm:text-sm italic">Pre Bookings will start from 17th May 2024</p>
            <div className="mt-4 text-xl font-bold tracking-tight text_color sm:text-5xl">Stay Tuned</div>
      </div>
    </main>
  );
}

export default App;
