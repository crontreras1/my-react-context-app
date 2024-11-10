import React from "react"
import { usenotification } from "../hooks/useNotification"

const Notification: React.FC = () => {
    const { message } = usenotification()

    if (!message) null
    return (
        <aside>
            <p>{ message }</p>
        </aside>
    )
}

export default Notification