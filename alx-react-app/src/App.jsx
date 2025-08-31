
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 font-sans antialiased">
        <div className="flex flex-col rounded-2xl shadow-2xl overflow-hidden max-w-lg w-full">
            <Header />
            <MainContent />
            <Footer />
        </div>
    </div>
  );
}

export default App;
