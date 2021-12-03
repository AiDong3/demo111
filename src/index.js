document.getElementById("button").onclick = function (){
  async function getDegrees(url) {
    // fetch the url
    await fetch(url)
      //get your data here, and check for the response status. If it's not 200, throw an error
      .then((response) => response.json())
      .then((data) =>
        document.write(
          `My first degree was a ${data.data[0].degrees.bachelors.data.type} from ${data.data[0].degrees.bachelors.data.institution}
           in ${data.data[0].degrees.bachelors.data.date}`  + '\n'
           + `My second degree was a ${data.data[1].degrees.Master.data.type} from ${data.data[1].degrees.Master.data.institution}
           in ${data.data[1].degrees.Master.data.date}`  + '\n'
           + `My third degree was a ${data.data[2].degrees.Master.data.type} from ${data.data[2].degrees.Master.data.institution}
           in ${data.data[2].degrees.Master.data.date}`

        )
      );
  }
  
  getDegrees("./src/degree.json");
}
