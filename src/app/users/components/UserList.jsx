import User from "./User"
import "./user.css";

export default function UsersList({users}) {
    return (
        <div className="users-list-container">
            <ul className="users-list">
                {
                    users.map(( user ) => (
                        <User key={user.id} user={user} />
                    ))
                }
            </ul>
        </div>
    )
}