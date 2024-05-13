import { Outlet } from 'react-router-dom';
import Nav from './components/Navigation';

function App() {
    return (
        <>
            <Nav />
            {/* nav will be in header later, just putting it here for now for testing */}
            <main className="mx-3">
                {/* outlet component allows for routing */}
                <Outlet />
            </main>
        </>
    );
}

export default App;
