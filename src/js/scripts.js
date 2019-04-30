function getCookie() {
    let username = decodeURIComponent(document.cookie)
    if(username === "") {
        return false
    } else {
        username = username.replace("token=", "")
        let isLoggedIn = JSON.parse(username)
        return isLoggedIn
    }
}
export default getCookie