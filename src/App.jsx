import { Outlet } from 'react-router-dom';
import Nav from './components/Navigation';

function App() {
    return (
        <>
            <Nav />
            <main className="mx-3">
                {/* outlet component allows for routing */}
                <Outlet />
            </main>
        </>
    );
}

export default App;
