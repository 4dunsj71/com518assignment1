

async function recommend(id){
    try{
        const response = await fetch(`http://localhost:3000/recommend/${id}`,{
            method: 'POST'
        });
        console.log(id);
    }catch(e){
        alert(`Error: ${e}`);
    }
}

