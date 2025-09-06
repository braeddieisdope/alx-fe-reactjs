
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 font-sans antialiased">
        <div className="flex flex-col rounded-2xl shadow-2xl overflow-hidden max-w-lg w-full mb-8">
            <Header />
            <MainContent />
            <Footer />
        </div>
        <UserProfile 
            name="Alice" 
            age="25" 
            bio="Loves hiking and photography" 
        />
    </div>
  );
}

export default App;
