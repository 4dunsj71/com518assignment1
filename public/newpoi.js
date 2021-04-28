


async function newpoi(poi){
    try{
        const response = await fetch('http://localhost:3000/newpoi',{
            method: 'POST',
            headers: {'Content-Type' : 'application/json'
            },
            body: JSON.stringify(poi)

        });
        console.log(poi);
    }catch(e){
        alert(`Error: ${e}`);
        console.log(poi);
    }
}

document.getElementById("subDetails").addEventListener("click",()=>{
    let name = document.getElementById("nameIn").value
    let type = document.getElementById("typeIn").value
    let country = document.getElementById("countryIn").value
    let region = document.getElementById("regionIn").value
    let lon = document.getElementById("lonIn").value
    let lat = document.getElementById("latIn").value
    let description = document.getElementById("descriptionIn").value
    
    
    const poi ={
        name: name, 
        type: type, 
        country: country, 
        region: region, 
        lon: lon, 
        lat: lat, 
        description: description, 
        recommendations: 0
    };
    console.log(JSON.stringify(poi));
    newpoi(poi);
});
