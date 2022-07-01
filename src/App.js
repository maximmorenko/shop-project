import Header from './components/Header';
import Footer from './components/Footer';
import Shop from './components/Shop';
// импортируем провайдер
import { ContextProvider } from './context';

function App() {
    return (
        // используем реакт фрагмент <></>
        <>
            <Header />
            {/* оборачиваем шоп в провайдет. шоп это наш чилдрен */}
            <ContextProvider>
                <Shop />
            </ContextProvider>
            
            <Footer />
        </>
    );
}

export default App;
