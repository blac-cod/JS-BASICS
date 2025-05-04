const { useState } = React;
const { Navbar, ProductHero, ProductFeatures, ProductSpecs, CallToAction, Footer } = window;
const root = ReactDOM.createRoot(document.getElementById("root"));

function App() {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <div className="w-full min-h-screen bg-gray-900">
      <button
        onClick={toggleNav}
        className="fixed top-4 right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
      >
        <span className="sr-only">Toggle navigation</span>
        <div className="w-6 h-0.5 bg-white mb-1"></div>
        <div className="w-6 h-0.5 bg-white mb-1"></div>
        <div className="w-6 h-0.5 bg-white"></div>
      </button>
      <div
        className={`fixed top-0 left-0 w-full transform transition-transform duration-300 ease-in-out z-40 ${
          isNavVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <Navbar />
      </div>
      <main className="pt-16">
        <ProductHero />
        <ProductFeatures />
        <ProductSpecs />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

root.render(<App />);