import './App.css'
import {AppContainer} from "./style/App.ts";
import LoginForm from "./features/auth/LoginForm.tsx";

function App() {
    return (
        <AppContainer maxWidth="xs">
            <LoginForm/>
        </AppContainer>
    )
}

export default App


