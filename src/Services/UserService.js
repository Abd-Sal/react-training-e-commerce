export const UserService = (options={}) =>{
    fetch(options.url, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            
        }
    })
}