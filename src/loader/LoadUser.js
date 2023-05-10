
const LoadUsers = async () => {
    const loadUsers = await fetch(`http://localhost:5000/users`);
    const users = await loadUsers.json()
    return users;
}

export default LoadUsers;