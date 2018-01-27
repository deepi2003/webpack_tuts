
let validateLogin= (username, password) =>{
    if(username !='admin' || password != 'test') {
        console.log('invalid login');
    }
}


document.write('Login module    ')
console.log('login loaded');

validateLogin('admin', 'admin');