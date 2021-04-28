
async function ajaxSearch(region) {
    try{
        //fetch JSON from ReST API
        const response = await fetch(`http://localhost:3000/poi/${region}`);
        
        //log response for testing
        console.log(response)
        
        //parse response
        const results = await response.json('results');
        
        //log results for testing
        console.log(results)

        //iterate through results to display information
        document.getElementById("results").innerHTML = "";
        html = `<table class="table table-bordered table-responsive table-hover table-sm">`;
        let rowid = 0;
        results.forEach(result => {
            html +=
            `<tr id="${rowid}">
            <td>${result.ID}</td>
            <td>${result.name}</td>
            <td>${result.type}</td>
            <td>${result.country}</td>
            <td>${result.region}</td>
            <td class="d-none" id="lat${rowid}" >${result.lat}</td>
            <td class="d-none" id="lon${rowid}">${result.lon}</td>
            <td>${result.description}</td>
            <td>${result.recommendation}</td>
            <td><input type="button" id="recSub" onclick="recommend(${result.ID})" value="recommend"/></td>
            <td><input type="button" id="goto" onclick="goto(${result.lat},${result.lon})" value="go to"/></td>
            <td class="d-none" onclick="pin(${result.lat},${result.lon})></td>
            </tr>`;
            rowid++;
        });
        html += "</table>"
        

        document.getElementById('results').innerHTML = html;
    } catch (e) {
        alert(`Error: ${e}`);
    }

}



//event listener to trigger search function on click, pulling region from the input field
document.getElementById("regionSub").addEventListener("click",()=>{
    const region = document.getElementById('region').value;
    ajaxSearch(region);
    pin();
    
});


