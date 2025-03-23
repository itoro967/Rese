// import 'reset-css'
import { createRoot } from 'react-dom/client';
import Header from 'common/header.jsx';

const root = createRoot(document.getElementById('app'));
root.render(
    <div>
        <Header />
    </div>
);
