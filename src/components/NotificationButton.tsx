import { usenotification } from "../hooks/useNotification"

const NotificationButton: React.FC = () => {
    const { showNotification } = usenotification()

    return (
        <button onClick={ () => showNotification('😎 Tu transacción se ha realizado con éxito') }>
            Confirmar Transacción
        </button>
    )
}

export default NotificationButton