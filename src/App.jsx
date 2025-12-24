import './App.css'
import AppRoutes from './AppRoutes';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className='flex flex-col min-h-screen'>

      <Header />

      <main className='grow'>
        <AppRoutes />
      </main>
      
      <Footer />
    </div>
  )
}

export default App;