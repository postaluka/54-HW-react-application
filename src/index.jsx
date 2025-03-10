import './style.css'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

const root = createRoot(document.querySelector('#root'))

root.render(
    <>
        <div className='header'>
            <div className='header__text'>
                <h1>My 1st REACT :3</h1>
                <h3>HW by A.T.</h3>
            </div>
        </div>

        <div className="body__ui">
            <App clickerCount={3} />
        </div>
    </>

)