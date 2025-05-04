const { useState } = React;

// Navbar Component
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="w-full bg-gray-800/95 backdrop-blur-sm shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-bold text-white">BlackCode</span>
          </div>
          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-10">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Products</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Support</a>
          </nav>
          {/* Mobile menu button */}
          <div className="flex items-center space-x-4 md:hidden">
            <button
              className="text-gray-300 hover:text-white transition-colors focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Open menu"
            >
              {/* Hamburger icon */}
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <button className="text-gray-300 hover:text-white transition-colors">
              <i data-lucide="search" className="h-5 w-5"></i>
            </button>
            <button className="text-gray-300 hover:text-white transition-colors">
              <i data-lucide="shopping-cart" className="h-5 w-5"></i>
            </button>
          </div>
          {/* Desktop icons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-300 hover:text-white transition-colors">
              <i data-lucide="search" className="h-5 w-5"></i>
            </button>
            <button className="text-gray-300 hover:text-white transition-colors">
              <i data-lucide="shopping-cart" className="h-5 w-5"></i>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Nav Dropdown */}
      {menuOpen && (
        <nav className="md:hidden bg-gray-800 px-4 pb-4 pt-2 space-y-2 shadow-lg z-50">
          <a href="#" className="block text-gray-300 hover:text-white transition-colors">Home</a>
          <a href="#" className="block text-gray-300 hover:text-white transition-colors">Products</a>
          <a href="#" className="block text-gray-300 hover:text-white transition-colors">Features</a>
          <a href="#" className="block text-gray-300 hover:text-white transition-colors">Pricing</a>
          <a href="#" className="block text-gray-300 hover:text-white transition-colors">Support</a>
        </nav>
      )}
    </header>
  );
};

// ProductHero Component
const COLORS = [
  {
    name: 'Red',
    bg: 'bg-red-500',
    class: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3',
  },
  {
    name: 'Blue',
    bg: 'bg-blue-500',
    class: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3',
  },
  {
    name: 'Green',
    bg: 'bg-green-500',
    class: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3',
  },
  {
    name: 'Yellow',
    bg: 'bg-yellow-500',
    class: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3',
  },
  {
    name: 'Black',
    bg: 'bg-black',
    class: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-4.0.3',
  },
];

const ProductHero = () => {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const handleColorChange = () => {
    setCurrentColorIndex((prevIndex) => (prevIndex + 1) % COLORS.length);
  };
  const currentColor = COLORS[currentColorIndex];

  return (
    <section className="py-12 sm:py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              Step Into Innovation
            </h1>
            <p className="mt-3 max-w-md mx-auto text-lg text-gray-300 sm:text-xl md:mt-5 md:max-w-3xl">
              BlackCode sneakers blend style with comfort. Click the sneaker to explore different colors.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {COLORS.map((color, index) => (
                <div
                  key={color.name}
                  className={`w-8 h-8 rounded-full ${color.bg} ${
                    index === currentColorIndex ? 'ring-2 ring-white' : ''
                  }`}
                />
              ))}
            </div>
            <div className="mt-10 sm:flex sm:justify-start">
              <div className="rounded-md shadow">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-100 md:py-4 md:text-lg md:px-10"
                >
                  Shop Now
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white/10 md:py-4 md:text-lg md:px-10"
                >
                  Size Guide
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 lg:mt-0">
            <div
              className="rounded-lg overflow-hidden shadow-xl transform transition-all duration-500 hover:scale-105 cursor-pointer"
              onClick={handleColorChange}
            >
              <img
                className="w-full transition-opacity duration-500"
                src={currentColor.class}
                alt={`BlackCode sneakers in ${currentColor.name}`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ProductFeatures Component
const ProductFeatures = () => {
  return (
    <section className="py-12 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Why Choose BlackCode
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Engineered for performance, designed for style, built for comfort.
          </p>
        </div>
        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
              <div className="p-3 rounded-full bg-black text-white">
                <i data-lucide="footprints" className="h-8 w-8"></i>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Perfect Fit</h3>
              <p className="mt-2 text-base text-gray-500 text-center">
                Advanced ergonomic design ensures a comfortable fit for all-day wear.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
              <div className="p-3 rounded-full bg-black text-white">
                <i data-lucide="wind" className="h-8 w-8"></i>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Lightweight Design</h3>
              <p className="mt-2 text-base text-gray-500 text-center">
                Ultra-light materials make every step feel effortless.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
              <div className="p-3 rounded-full bg-black text-white">
                <i data-lucide="heart" className="h-8 w-8"></i>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Superior Comfort</h3>
              <p className="mt-2 text-base text-gray-500 text-center">
                Premium cushioning technology for maximum comfort during any activity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ProductSpecs Component with full specs
const ProductSpecs = () => {
  const specs = [
    { label: 'Dimensions', value: '5.78 x 2.82 x 0.30 inches' },
    { label: 'Weight', value: '8.5 oz (240g)' },
    { label: 'Upper Material', value: 'Premium Knit Mesh' },
    { label: 'Sole Type', value: 'High-Rebound EVA' },
    { label: 'Colors Available', value: 'Red, Blue, Green, Yellow, Black' },
    { label: 'Sizes', value: 'US 6-13' },
    { label: 'Style', value: 'Athletic/Casual' },
    { label: 'Cushioning', value: 'Responsive Foam' },
    { label: 'Closure', value: 'Lace-up' },
    { label: 'Best For', value: 'All-day Wear' },
    { label: 'Care', value: 'Machine Washable' },
    { label: 'Warranty', value: '1 Year' },
  ];

  return (
    <section className="py-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Technical Specifications
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-300 mx-auto">
            Every detail matters in the design of our product.
          </p>
        </div>
        <div className="mt-12 bg-white shadow overflow-hidden rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
            {specs.map((spec, index) => (
              <div key={index} className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">{spec.label}</dt>
                <dd className="mt-1 text-sm text-gray-900">{spec.value}</dd>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// CallToAction Component
const CallToAction = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Ready to Transform Your Style?
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-blue-100 mx-auto">
            Join thousands of satisfied customers who have stepped into BlackCode comfort.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
              >
                Buy Now
              </a>
            </div>
            <div className="ml-3 inline-flex">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800"
              >
                Learn More
              </a>
            </div>
          </div>
          <p className="mt-4 text-sm text-blue-100">
            30-day money-back guarantee. Free shipping on all orders.
          </p>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Products
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#" className="text-base text-gray-300 hover:text-white">
                  Featured
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-300 hover:text-white">
                  Latest
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-300 hover:text-white">
                  Bestsellers
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-300 hover:text-white">
                  Categories
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Support
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#" className="text-base text-gray-300 hover:text-white">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-300 hover:text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-300 hover:text-white">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-300 hover:text-white">
                  Warranty
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Company
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#" className="text-base text-gray-300 hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-300 hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-300 hover:text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-300 hover:text-white">
                  Press
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Legal
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#" className="text-base text-gray-300 hover:text-white">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-300 hover:text-white">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-300 hover:text-white">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            <a href="#" className="text-gray-400 hover:text-gray-300">
              <span className="sr-only">Facebook</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-300">
              <span className="sr-only">Youtube</span>
              {/* Youtube logo SVG */}
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23.498 6.186a2.997 2.997 0 0 0-2.112-2.12C19.403 3.5 12 3.5 12 3.5s-7.403 0-9.386.566A2.997 2.997 0 0 0 .502 6.186C0 8.17 0 12 0 12s0 3.83.502 5.814a2.997 2.997 0 0 0 2.112 2.12C4.597 20.5 12 20.5 12 20.5s7.403 0 9.386-.566a2.997 2.997 0 0 0 2.112-2.12C24 15.83 24 12 24 12s0-3.83-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-300">
              <span className="sr-only">Instagram</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-300">
              <span className="sr-only">X</span>
              {/* X (Twitter) logo SVG */}
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 1200 1227" aria-hidden="true">
                <path d="M1199.61 0H944.61L600 505.09L255.39 0H0l464.36 661.09L0 1227h255.39L600 721.91L944.61 1227H1200L735.64 565.91L1199.61 0ZM900.36 1121.09L600 683.09L299.64 1121.09H99.27L600 394.91L1100.73 1121.09H900.36Z" />
              </svg>
            </a>
          </div>
          <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
            &copy; 2025 BlackCode, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

// Expose components to window object
window.Navbar = Navbar;
window.ProductHero = ProductHero;
window.ProductFeatures = ProductFeatures;
window.ProductSpecs = ProductSpecs;
window.CallToAction = CallToAction;
window.Footer = Footer;