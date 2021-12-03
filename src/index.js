document.getElementById("button").onclick = function (){
  async function getDegrees(url) {
    // fetch the url
    await fetch(url)
      //get your data here, and check for the response status. If it's not 200, throw an error
      .then((response) => response.json())
      .then((data) => showinfo(data)
      );
  }
  
  getDegrees("./src/degree.json");
}

function showinfo(data){
  var containder = document.getElementById("container");
  var span1 = document.createElement('span');
  var span2 = document.createElement('span');
  var span3 = document.createElement('span');

  span1.innerText = `My first degree was a ${data.data[0].degrees.bachelors.data.type} from ${data.data[0].degrees.bachelors.data.institution}
  in ${data.data[0].degrees.bachelors.data.date}`;
  
  span2.innerText = `My second degree was a ${data.data[1].degrees.Master.data.type} from ${data.data[1].degrees.Master.data.institution}
  in ${data.data[1].degrees.Master.data.date}`;

  span3.innerText = `My third degree was a ${data.data[2].degrees.Master.data.type} from ${data.data[2].degrees.Master.data.institution}
  in ${data.data[2].degrees.Master.data.date}`;

  containder.appendChild(span1);
  containder.appendChild(span2);
  containder.appendChild(span3);
}
