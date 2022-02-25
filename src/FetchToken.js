

export default (url, options) => {
        const localstorage_user = JSON.parse(localStorage.getItem('user'))
        return fetch(url, {...options,
            headers: {
                'Content-type' : 'application/json',
                'Authorization': `Bearer ${localstorage_user.access}`
            }
        })
        
}