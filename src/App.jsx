import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    return (
        <>
            <Header />
            <main className="mx-3">
                {/* outlet component allows for routing */}
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default App;
