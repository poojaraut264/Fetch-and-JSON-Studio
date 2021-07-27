// TODO: add code here
window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then(function(json) {

            let jsonArr = [];
            let jsonObj = {};
            let jsonSorted = {};

            for(let index = 0;index<json.length;index++) {
              jsonObj[json[index].hoursInSpace] = json[index];
              jsonArr.push(json[index].hoursInSpace);
            }
            jsonArr.sort();

            for(let index = 0;index<jsonArr.length;index++) {
                jsonSorted[index] = jsonObj[jsonArr[jsonArr.length-index-1]];
            }            

            const container = document.getElementById("container");         
            for(let index = 0;index<json.length;index++) { 
                if (jsonSorted[index].active) {
                    container.innerHTML += `
                    <div class="astronaut">
                        <div class="bio">
                            <h3>${jsonSorted[index].firstName} ${jsonSorted[index].lastName}</h3>
                            <ul>
                                <li>Hours in space: ${jsonSorted[index].hoursInSpace}</li>
                                <li style="color:green">Active: ${jsonSorted[index].active}</li>
                                <li>Skills: ${jsonSorted[index].skills}</li>
                            </ul>
                        </div>
                        <img class="avatar" src=${jsonSorted[index].picture}/>
                    </div>
                    `;
                } else {
                    container.innerHTML += `
                    <div class="astronaut">
                        <div class="bio">
                            <h3>${jsonSorted[index].firstName} ${jsonSorted[index].lastName}</h3>
                            <ul>
                                <li>Hours in space: ${jsonSorted[index].hoursInSpace}</li>
                                <li style>Active: ${jsonSorted[index].active}</li>
                                <li>Skills: ${jsonSorted[index].skills}</li>
                            </ul>
                        </div>
                        <img class="avatar" src=${jsonSorted[index].picture}>
                    </div>
                    `;
                }

            }

        });
    });
 });