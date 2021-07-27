// TODO: add code here
window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then(function(json) {
            json.sort(function(a,b) {return  b.hoursInSpace - a.hoursInSpace});        

            const container = document.getElementById("container");         
            for(let index = 0;index<json.length;index++) { 
                if (json[index].active) {
                    container.innerHTML += `
                    <div class="astronaut">
                        <div class="bio">
                            <h3>${json[index].firstName} ${json[index].lastName}</h3>
                            <ul>
                                <li>Hours in space: ${json[index].hoursInSpace}</li>
                                <li style="color:green">Active: ${json[index].active}</li>
                                <li>Skills: ${json[index].skills}</li>
                            </ul>
                        </div>
                        <img class="avatar" src=${json[index].picture}></img>
                    </div>
                    `;
                } else {
                    container.innerHTML += `
                    <div class="astronaut">
                        <div class="bio">
                            <h3>${json[index].firstName} ${json[index].lastName}</h3>
                            <ul>
                                <li>Hours in space: ${json[index].hoursInSpace}</li>
                                <li style>Active: ${json[index].active}</li>
                                <li>Skills: ${json[index].skills}</li>
                            </ul>
                        </div>
                        <img class="avatar" src=${json[index].picture}></img>
                    </div>
                    `;
                }

            }
            container.innerHTML += `
            <div id="numOfAstronauts">
                <p> Count of Astronauts: ${json.length-1}</p>
            </div>
            `

        });
    });
 });