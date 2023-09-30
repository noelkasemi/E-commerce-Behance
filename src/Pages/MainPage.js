import SideBar from "../components/partials/header/sideBar";
import { useState, useEffect } from "react";
import Cart from "../uitls/svg/cart";
import ForYou from "./ForYou";
import Hire from "./hire";
import Sell from "./sell";
import MainContent from "../components/partials/main/main";
import SecondtSection from "../components/partials/header/secondSection";
import ThirdtSection from "../components/partials/header/thirdSection";
import Footer from "../components/partials/footer/footer";
import SingleItemPage from "./singleItemPage";
import CartPage from "./cartPage";
import { useShoppingCart } from "../components/partials/main/shoppingCartContext";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import { useUser } from "../components/partials/main/userContext";

export default function MainPage() {
  const [articles, setArticles] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeSection, setActiveSection] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const { cart, dispatch } = useShoppingCart();
  const [quantity, setQuantity] = useState(0);
  const { isUserLoggedIn, logout } = useUser();

  const handleAddToCart = (product) => {
    // Generate a unique cart item ID using uuid
    const cartItemId = uuidv4();

    // Add the product to the cart with the unique ID
    const cartItem = { ...product, cartItemId };
    dispatch({ type: "ADD_TO_CART", payload: cartItem });
    setSelectedProduct(null);
    setQuantity(quantity + 1);
  };

  const handleRemoveFromCart = (cartItemId) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: cartItemId });
    setQuantity(quantity - 1);
  };

  const handleCart = () => {
    setShowCart(!showCart);
  };

  const handleCreateProfile = (newProfile) => {
    setArticles([...articles, newProfile]);
  };

  const handleSelectRecommendedProduct = (product) => {
    setSelectedProduct(product);
  };

  // Function to handle product selection
  const handleProductSelect = (product) => {
    setSelectedProduct({
      ...product,
      compare: ((product.price * 50) / 100).toFixed(2),
      discount: "50%"
    });
  };

  // Function to close the SingleItemPage
  const handleCloseSingleItemPage = () => {
    setSelectedProduct(null);
  };

  useEffect(() => {}, [articles]);

  const sections = [
    {
      label: "Home",
      content: (
        <MainContent
          onProductSelect={handleProductSelect}
          articles={articles}
        />
      )
    },
    {
      label: "For You",
      content: (
        <ForYou onProductSelect={handleProductSelect} articles={articles} />
      )
    },
    { label: "Sell", content: <Sell onCreateProfile={handleCreateProfile} /> },
    { label: "Hire", content: <Hire /> }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Header */}
      <header>
        <section className="fixed top-0 bg-white w-full shadow-md rounded-b-lg z-40 flex">
          <SideBar
            sections={sections}
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
          <nav className="md:w-2/4 w-full flex items-center space-x-4">
            <button className="hidden min-[480px]:block lg:hidden  ml-2 mt-2 md:ml-4">
              <h2 className="text-2xl font-bold">Bē</h2>
            </button>
            <button className="ml-4 hidden lg:block">
              <h2 className="text-2xl font-bold">Bēhance</h2>
            </button>
            <section className="w-full flex items-center space-x-4 justify-center md:justify-start ">
              {sections.map((section, index) => (
                <button
                  onClick={() => setActiveSection(index)}
                  key={index}
                  className="mt-4"
                >
                  <h4
                    className={`${
                      activeSection === index
                        ? "border-b-2 border-black pb-2.5"
                        : "none"
                    } font-semibold hover:border-b-2 border-black pb-2.5`}
                  >
                    {section.label}
                  </h4>
                </button>
              ))}
            </section>
          </nav>
          {/* buttons */}
          <nav className="sm:w-full w-fit flex justify-end space-x-4 items-center">
            <button className="hidden md:block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="black "
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                />
              </svg>
            </button>

            {!isUserLoggedIn ? (
              <>
                <button className="hidden md:block py-1.5 px-4 border bg-blue-50 rounded-3xl text-sm text-blue-600 font-bold hover:bg-sky-100 hover:border-blue-200 ">
                  <Link to="/login">Log In</Link>
                </button>
                <button className="hidden md:block py-1.5 px-4 rounded-3xl text-sm  text-white bg-blue-600 font-bold hover:bg-blue-700">
                  <Link to="/SignUp">Sign Up</Link>
                </button>
              </>
            ) : (
              <button
                className="hidden md:block py-1.5 px-4 rounded-3xl text-sm  text-white bg-blue-600 font-bold hover:bg-blue-700"
                onClick={logout}
              >
                Log out
              </button>
            )}

            <button className="flex">
              <Cart onClick={handleCart} className={"w-8 h-8"} />
              <p className="border-2 border-purple-700 text-xs font-bold h-5 w-5 rounded-full">
                {quantity}
              </p>
            </button>
          </nav>
        </section>
        <SecondtSection
          onProductSelect={handleProductSelect}
          style={
            activeSection === 1 ||
            activeSection === 2 ||
            (activeSection === 0 && selectedProduct) ||
            showCart ||
            activeSection === 3
              ? "hidden"
              : "block"
          }
        />
        <ThirdtSection
          style={
            activeSection === 3 ||
            activeSection === 2 ||
            activeSection === 1 ||
            selectedProduct ||
            showCart
              ? "hidden"
              : "lg:flex"
          }
        />
      </header>

      {/* Main content */}
      <main className="scroll-smooth">
        {sections.map((section, index) => {
          return (
            <section
              key={index}
              className={index === activeSection ? "block" : "hidden"}
            >
              {section.label === "Sell" ? (
                <Sell onCreateProfile={handleCreateProfile} />
              ) : selectedProduct ? (
                <SingleItemPage
                  onAddToCart={handleAddToCart}
                  onSelectRecommendedProduct={handleSelectRecommendedProduct}
                  selectedProduct={selectedProduct}
                  onClose={handleCloseSingleItemPage}
                />
              ) : showCart ? (
                <CartPage
                  cart={cart}
                  onClose={() => setShowCart(false)}
                  onRemoveFromCart={handleRemoveFromCart}
                />
              ) : (
                section.content
              )}
            </section>
          );
        })}
      </main>

      {/* Footer */}
      <Footer
        onClick={() => setActiveSection(1)}
        style={selectedProduct ? "mt-32" : "none"}
      />
    </>
  );
}
