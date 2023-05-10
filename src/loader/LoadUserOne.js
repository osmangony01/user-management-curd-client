
const LoadUserOne = async()=>{
    const loadUser = await fetch(`http://localhost:5000/user/${}`);
    const user = await loadUser.json();
    return user;
}