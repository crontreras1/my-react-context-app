import { useContext } from "react"
import { NotificationContext } from "../context/NotificatonContext"

export const usenotification = () => {
    const context = useContext(NotificationContext)

    if (context === undefined) throw new Error('useNotification debe ser usado dentro de un NotificationProvider')

    return context
}