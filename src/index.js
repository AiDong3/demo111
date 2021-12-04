document.getElementById("button").onclick = function (){
  async function getDegrees(url) {
    // fetch the url
    await fetch(url)
      //get your data here, and check for the response status. If it's not 200, throw an error
      .then( checkStatus)
      .then((data) => showinfo(data))
      .catch(err => console.log(err));
  }
  /*--- get info from json file---*/
  getDegrees("./src/degree.json");
}

/*---- check response statue---*/
function checkStatus(response){
  console.log(response);
  
  alert("your response status is" + response.status);

  if(response.status !== 200){
    throw "Status Error!"
  }
  return response.json();
}

/*--- show json file info---*/
function showinfo(data){
  var containder = document.getElementById("container");
  var span1 = document.getElementById("span1");
  var span2 = document.getElementById("span2");
  var span3 = document.getElementById("span3");
  var button = document.getElementById("button")

  span1.innerText = `1. My first degree was a ${data.data[0].degrees.bachelors.data.type} from ${data.data[0].degrees.bachelors.data.institution} in ${data.data[0].degrees.bachelors.data.date}`;
  
  span2.innerText = `2. My second degree was a ${data.data[1].degrees.Master.data.type} from ${data.data[1].degrees.Master.data.institution} in ${data.data[1].degrees.Master.data.date}`;

  span3.innerText = `3. My third degree was a ${data.data[2].degrees.Master.data.type} from ${data.data[2].degrees.Master.data.institution} in ${data.data[2].degrees.Master.data.date}`;

  containder.removeChild(button);
  containder.appendChild(span1);
  containder.appendChild(span2);
  containder.appendChild(span3);
}
