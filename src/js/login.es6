
var validateLogin= (username, password) =>{
    if(username !='admin' || password != 'test') {
        console.log('invalid login');
    }
};

console.log('login loaded');

export {validateLogin};

//validateLogin('admin', 'admin');