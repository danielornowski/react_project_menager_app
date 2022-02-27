

export default (url, options) => {
        const localstorage_user = JSON.parse(localStorage.getItem('user'))
        return fetch('https://django-api-projects00.herokuapp.com/'+ url, {...options,
            headers: {
                'Content-type' : 'application/json',
                'Authorization': `Bearer ${localstorage_user.access}`
            }
        })
        
}