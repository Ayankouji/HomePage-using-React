import './App.css';
import BedroomImage from './assets/bedroom.jpg';

function App() {
  return (
    <div className="container relative min-h-screen bg-background">
      <h1 className="text-3xl font-normal text-brandPrimary mb-4">
        RentKar
      </h1>
      <div className="absolute top-0 right-4">
        <button className="text-brandPrimary font-normal py-2 px-4 rounded">
          Log in
        </button>
      </div>
      <div className="mb-8 rounded-b-lg h-40 w-40 overflow-hidden">
        <img src={BedroomImage} alt="Bedroom" className="w-full rounded-lg" />
      </div>
      <div className="my-8">
        <h2 className="text-xl font-regular text-brandPrimary mb-4">Why Us?</h2>
        <div className="w-64 bg-card rounded-lg shadow-lg p-6">
          <p className="text-gray-700">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <button className="bg-BT text-black font-regular py-2 px-4 rounded-full w-full mb-4">Sign in as owner</button>
        <button className="bg-BT text-black font-regular py-2 px-4 rounded-full w-full">Sign in as tenant</button>
      </div>
      
    </div>
  );
}

export default App;
