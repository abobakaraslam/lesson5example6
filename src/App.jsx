/* File: App.jsx */
function App() {
  return (
    <div>
      <h1 className="bg-black text-white hover:bg-slate-500 hover:text-black">
        Some text
      </h1>
      <h1 className="bg-black text-white sm:hover:bg-red-700 lg:hover:bg-green-700">
        Heading with sm:hover:
      </h1>
      <h1 className="bg-black text-white hover:sm:bg-yellow-800 hover:lg:bg-cyan-700">
        hover:sm:
      </h1>
      <button className="bg-blue-700 text-white hover:bg-green-700">
        My Button
      </button>
    </div>
  );
}
export default App;
