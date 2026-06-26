import Form from "./components/Form";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Header />
      <div className="h-[85vh]">
        <Form />
      </div>
      <Footer />
    </>
  );
}

export default App;
