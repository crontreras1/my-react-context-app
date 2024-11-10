import { NotificationProvider } from "./context/NotificatonContext"
import Notification from "./components/Notification"
import NotificationButton from "./components/NotificationButton"

function App() {
  return (
    <NotificationProvider>
      <h1>💸 transacción casi lista 💸</h1>

      <p>¿Estás seguro que deseas completar esta transacción?</p>

      <NotificationButton />

      <Notification />
    </NotificationProvider>
  )
}

export default App
