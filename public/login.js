async function login(user,pass){
    try{
        const body ={
            user: user,

            pass: pass
        } 
            
        const response = await fetch(`http://localhost:3000/login`,{
            method: 'POST',
            headers: {'Content-Type' : 'application/json'
            },
            body : JSON.stringify(body)
            
        });
        console.log(body);
    }catch(e){
        alert(`Error: ${e}`);
    }
}
async function signup(user,pass){
    try{
        const body ={
            user: user,

            pass: pass
        } 
            
        const response = await fetch(`http://localhost:3000/newuser`,{
            method: 'POST',
            headers: {'Content-Type' : 'application/json'
            },
            body : JSON.stringify(body)
            
        });
        console.log(body);
    }catch(e){
        alert(`Error: ${e}`);
    }
}