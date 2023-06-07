const form = document.getElementById("registration-form")

function createCell(text){
   let element = document.createElement("td");
   element.textContent = text
   return element;
}

    form.addEventListener("submit", function(event) {
    event.preventDefault();


    let firstName = document.getElementById("first-name").value;
    let lastName = document.getElementById("last-name").value;
    let dob = document.getElementById("dob").value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let city = document.getElementById("city").value;
    let address = document.getElementById("address").value;
    let languages = [];
    let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    for (let i = 0; i < checkboxes.length; i++) {
        languages.push(checkboxes[i].value);
    }


    let table = document.createElement("table");
    let tbody = document.createElement("tbody");
    let row1 = document.createElement("tr");
    let row2 = document.createElement("tr");
    let row3 = document.createElement("tr");
    let row4 = document.createElement("tr");
    let row5 = document.createElement("tr");
    let row6 = document.createElement("tr");
    let row7 = document.createElement("tr");

    let firstNameCell = createCell("Ім'я:")
    let firstNameValueCell = createCell(firstName)

    let lastNameCell = createCell("Прізвище:")
    let lastNameValueCell = createCell(lastName)

    let dobCell = createCell("Дата народження:")
    let dobValueCell = createCell(dob)

    let genderCell = createCell("Стать:")
    let genderValueCell = createCell(gender)

    let cityCell = createCell("Місто:");
    let cityValueCell = createCell(city)

    let addressCell = createCell("Адреса:")
    let addressValueCell = createCell(address)

    let languagesCell = createCell("Мови, якими володієте:")
    let languagesValueCell = createCell(languages.join(", "))

    row1.appendChild(firstNameCell);
    row1.appendChild(firstNameValueCell);
    row2.appendChild(lastNameCell);
    row2.appendChild(lastNameValueCell);
    row3.appendChild(dobCell);
    row3.appendChild(dobValueCell);
    row4.appendChild(genderCell);
    row4.appendChild(genderValueCell);
    row5.appendChild(cityCell);
    row5.appendChild(cityValueCell);
    row6.appendChild(addressCell);
    row6.appendChild(addressValueCell);
    row7.appendChild(languagesCell);
    row7.appendChild(languagesValueCell);

    tbody.appendChild(row1);
    tbody.appendChild(row2);
    tbody.appendChild(row3);
    tbody.appendChild(row4);
    tbody.appendChild(row5);
    tbody.appendChild(row6);
    tbody.appendChild(row7);

    table.appendChild(tbody);

    form.style.display = "none";
    let tableContainer = document.getElementById("table-container");
    tableContainer.appendChild(table);
});
