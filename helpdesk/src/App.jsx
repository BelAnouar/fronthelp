import './App.css'
import {useStateContext} from './context/contextProvider'
import {Navigate} from 'react-router-dom'

import WidgetsIcon from '@mui/icons-material/Widgets';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Barchart from "./components/Barchart.jsx";


function App() {


    const {user, token} = useStateContext();


    return (<>
    </>);
}

export default App
