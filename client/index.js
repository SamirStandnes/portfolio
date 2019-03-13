fetch("http://localhost:8080/data")
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    //console.log(myJson);
    //console.log(JSON.stringify(myJson));

    let data = myJson;

    // document.getElementById("title").innerHTML = '';

    console.log(data);
    //navbar
    //let nav = document.getElementById("navbar");

    // Data dictates the number of elements
    let dataHeadings = Object.keys(data);
    /*
    dataHeadings.forEach(element => {
      let item = document.createElement("li");
      let link = document.createElement("a");
      link.innerText = element;
      link.setAttribute("href", String("#" + element));
      item.appendChild(link);
      nav.appendChild(item);
    });
    */

    //Get main body node
    let mainBody = document.getElementById("blocks");

    //create a "block" per navtitle element with columns and attach to mainbody
    dataHeadings.map(element => {
      //let elementData = data[element].data;

      // Create parent "block" node and append to main body
      let divbBlock = document.createElement("div");
      divbBlock.setAttribute("id", element);
      divbBlock.setAttribute("class", "block");
      mainBody.appendChild(divbBlock);

      // Create blockTitleColumn (0) per "block" node
      let divTitle = document.createElement("div");
      divTitle.setAttribute("class", "blockTitle");
      divTitle.innerText = element;
      divbBlock.append(divTitle);

      // create data1Column (1) per "block" node
      let dataColumn1 = document.createElement("div");
      dataColumn1.setAttribute("class", "dataColumn1");
      dataColumn1.setAttribute("id", String("dataColumn1_" + element));
      divbBlock.append(dataColumn1);

      // create data2Column (2) per "block" node
      let dataColumn2 = document.createElement("div");
      dataColumn2.setAttribute("class", "dataColumn2");
      dataColumn2.setAttribute("id", String("dataColumn2_" + element));
      divbBlock.append(dataColumn2);
    });

    console.log(data.education.data);

    // Populate each block

    data.education.data.map(element => {
      console.log(element);
      let divDataPoint1 = document.createElement("div");
      let dataDiv1 = document.getElementById("dataColumn1_education");
      divDataPoint1.innerHTML =
        '<span class="mainHeading">' +
        element.university +
        "</span>" +
        "<br>" +
        element.program +
        "<br>" +
        '<span class="year">' +
        element.graduation_year +
        "</span>";
      divDataPoint1.setAttribute("class", "datapoint");
      dataDiv1.appendChild(divDataPoint1);

      let divDataPoint2 = document.createElement("div");
      let dataDiv2 = document.getElementById("dataColumn2_education");
      divDataPoint2.innerHTML =
        element.country +
        "<br>" +
        element.degree; /*;  +
        ", " +
        element.grade_average; */
      divDataPoint2.setAttribute("class", "datapoint");
      dataDiv2.appendChild(divDataPoint2);
    });

    data.employment.data.map(element => {
      console.log(element);
      let divDataPoint1 = document.createElement("div");
      let dataDiv1 = document.getElementById("dataColumn1_employment");
      divDataPoint1.innerHTML =
        '<span class="mainHeading">' +
        element.company +
        "</span>" +
        "<br>" +
        element.role +
        "<br>" +
        element.year;
      divDataPoint1.setAttribute("class", "datapoint");
      dataDiv1.appendChild(divDataPoint1);

      let divDataPoint2 = document.createElement("div");
      let dataDiv2 = document.getElementById("dataColumn2_employment");
      divDataPoint2.innerHTML =
        element.company_sector + "<br>" + element.country;
      divDataPoint2.setAttribute("class", "datapoint");
      dataDiv2.appendChild(divDataPoint2);
    });

    data.portfolio.data.map(element => {
      console.log(element);
      let divDataPoint1 = document.createElement("div");
      let dataDiv1 = document.getElementById("dataColumn1_portfolio");
      divDataPoint1.innerHTML =
        "<a class='mainHeading' href=" +
        element.project_url +
        ">" +
        element.project_name +
        "</a>" +
        "<br>" +
        "<span class='tech'>" + element.project_data.technology + "</span>" +
        "<br>" +
        element.project_data.description;
      divDataPoint1.setAttribute("class", "datapointPortfolio");
      dataDiv1.appendChild(divDataPoint1);

      let divDataPoint2 = document.createElement("div");
      let dataDiv2 = document.getElementById("dataColumn2_portfolio");
      divDataPoint2.innerHTML =
        "Production date: " +
        "<br>" +
        element.project_data
          .production_date; /*  +
        <br>" +
        "Development hours:" + element.project_data.development_time_hours; */
      divDataPoint2.setAttribute("class", "datapointPortfolio");
      dataDiv2.appendChild(divDataPoint2);
    });
  });

function toggle_embedded_examples() {
  let examples = document.getElementById("examples");
  let button = document.getElementById('examplesButton');
  if (examples.style.display === "none") {
    examples.style.display = "block";
    button.innerHTML = "<i id='lock' class='fas fa-lock-open' onclick='toggle_embedded_examples()'></i>";
  } else {
    examples.style.display = "none";
    button.innerHTML = "<i id='lock' class='fas fa-lock' onclick='toggle_embedded_examples()'></i>";
  }
}
