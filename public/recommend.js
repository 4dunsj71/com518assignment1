

async function recommend(id){
    try{
        const response = await fetch(`http://localhost:3000/recommend/${id}`,{
            method: 'POST'
        });
        
    }catch(e){
        alert(`Error: ${e}`);
    }
}

