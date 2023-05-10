
const LoadUserOne = async ({ params }) => {
    const id = params.id
    const loadUser = await fetch(`http://localhost:5000/user/${id}`);
    const user = await loadUser.json();
    return user;
}

export default LoadUserOne;