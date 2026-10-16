// Toggle the Visibility of the Standard Menu Dropdown
function toggleMenuDropdown() {
  document.getElementById("menuDropdown").classList.toggle("show");
}


// Toggle the Visibility of the Mobile Menu Dropdown
function toggleMobileMenuDropdown() {
  document.getElementById("mobileMenuDropdown").classList.toggle("show");
}



// Close the standard menu dropdown if the user clicks outside of it
window.addEventListener('click', function(event) {
  if (!event.target.matches('.dropdown-menu-button') && !event.target.matches('.fa-solid')) {
    var dropdown = document.getElementById("menuDropdown");
    if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
      }
  }
});

// Close the mobile menu dropdown if the user clicks outside of it
window.addEventListener('click', function(event) {
  if (!event.target.matches('.dropdown-menu-button') && !event.target.matches('.fa-solid')) {
    var dropdown = document.getElementById("mobileMenuDropdown");
    if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
      }
  }
});

// Membership requirements data for the table

const honorSocieties = [
    {
        name: "Eta Sigma Alpha",
        focus: "Scholastic",
        testScores: {
            SAT: 1200,
            PSAT: 1200,
            PSAT10: 1170,
            PSAT8_9_9th: 1090,
            PSAT8_9_8th: 1020,
            ACT: 26,
            PreACT10: 26,
            Iowa: "90%",
            Stanford: "90%",
            TerraNova2: "90%",
            CLT: 88,
            CLT8or10: 97,
            onlineTesting: "Yes"
        },
        fees: { initial: "$30", renewal: "$20", additional: "Seniors can purchase honor shawl and/or cord" },
        communityService: "10 hours",
        other: ""
    },
    {
        name: "Mu Eta Sigma",
        focus: "Math",
        testScores: {
            SAT: "SAT Math 600",
            PSAT: "PSAT Math 600",
            ACT: "ACT Math 26",
            PreACT10: "ACT Math 26",
            Iowa: "Math 90%",
            Stanford: "Math 90%",
            onlineTesting: "No"
        },
        fees: { initial: "$45", renewal: "$20", additional: "Seniors can purchase honor stole and/or cord" },
        communityService: "10 hours",
        other: "$250 scholarship available"
    },
    {
        name: "NHSHS",
        focus: "Science",
        testScores: {
            SAT: "SAT 2 Science 600",
            ACT: "ACT Science 26",
            Iowa: "Science 90%",
            Stanford: "Science 90%",
            TerraNova2: "Science 90%",
            CLT: "CLEP Science 68",
            CLT8or10: "AP Science 4 or 5",
            onlineTesting: "Yes"
        },
        fees: { initial: "$40", renewal: "$40", additional: "" },
        communityService: "20 hours",
        other: "Additional award levels"
    }
];


const testScoreKeys = [
    "SAT",
    "PSAT",
    "PSAT10",
    "PSAT8_9_9th",
    "PSAT8_9_8th",
    "ACT",
    "PreACT10",
    "Iowa",
    "Stanford",
    "TerraNova2",
    "CLT",
    "CLT8or10",
    "onlineTesting"
];

const displayNames= {
    SAT: "SAT",
    PSAT: "PSAT",
    PSAT10: "PSAT 10",
    PSAT8_9_9th: "PSAT 8/9 ~ 9th",
    PSAT8_9_8th: "PSAT 8/9 ~ 8th",
    ACT: "ACT",
    PreACT10: "Pre-ACT 10",
    Iowa: "Iowa",
    Stanford: "Stanford",
    TerraNova2: "Terra Nova 2",
    CLT: "CLT",
    CLT8or10: "CLT 8 or 10",
    onlineTesting: "Online Testing Accepted?"
};


/* A little bit of nice AI code for the membership spreadsheet :) */

const tableHead = document.querySelector("#honorTable thead");
const tableBody = document.querySelector("#honorTable tbody");

/* HEADER */
let headerRow = document.createElement("tr");

let firstTh = document.createElement("th");
firstTh.textContent = "Test Scores";
headerRow.appendChild(firstTh);

honorSocieties.forEach(society=>{
    let th = document.createElement("th");
    th.innerHTML = `${society.name}<br>${society.focus}`;
    headerRow.appendChild(th);
});

tableHead.appendChild(headerRow);

/* TEST SCORE ROWS */
testScoreKeys.forEach(key=>{
    let row = document.createElement("tr");

    let label = document.createElement("td");
    label.textContent = displayNames[key];
    row.appendChild(label);

    honorSocieties.forEach(society=>{
        let td = document.createElement("td");
        td.textContent = society.testScores[key] ?? "";
        row.appendChild(td);
    });

    tableBody.appendChild(row);
});

/* FEE ROWS */
function addRow(label, color, getter) {
    let row = document.createElement("tr");
    row.style.backgroundColor = color;

    let first = document.createElement("td");
    first.textContent = label;
    row.appendChild(first);

    honorSocieties.forEach(s=>{
        let td = document.createElement("td");
        td.textContent = getter(s);
        row.appendChild(td);
    });

    tableBody.appendChild(row);
}

addRow("Initial Fees","#155515",s=>s.fees.initial);
addRow("Renewal Fees","#155515",s=>s.fees.renewal);
addRow("Additional Fees","#155515",s=>s.fees.additional);
addRow("Community Service","#552115",s=>s.communityService);

let otherRow = document.createElement("tr");
otherRow.className = "bottom-row";
otherRow.style.backgroundColor = "#793876";

let label = document.createElement("td");
label.textContent = "Other";
otherRow.appendChild(label);

honorSocieties.forEach(s=>{
    let td = document.createElement("td");
    td.textContent = s.other;
    otherRow.appendChild(td);
});

tableBody.appendChild(otherRow);




// Officer Slideshow Functionality


let officerSlideIndex = 1;
showOfficerSlides(officerSlideIndex);

// Next/previous controls
function plusOfficerSlides(n) {
  showOfficerSlides(officerSlideIndex += n);
}

// Thumbnail image controls
function currentOfficerSlide(n) {
  showOfficerSlides(officerSlideIndex = n);
}

function showOfficerSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {officerSlideIndex = 1}
  if (n < 1) {officerSlideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[officerSlideIndex-1].style.display = "block";
  dots[officerSlideIndex-1].className += " active";
} 


// Photo Slideshow Functionality

let photoSlideIndex = 1;
showPhotoSlides(photoSlideIndex);

// Next/previous controls
function plusPhotoSlides(n) {
  showPhotoSlides(photoSlideIndex += n);
}

// Thumbnail image controls
function currentPhotoSlide(n) {
  showPhotoSlides(photoSlideIndex = n);
}

function showPhotoSlides(n) {
  let i;
  let slides = document.getElementsByClassName("myPhotoSlides");
  let dots = document.getElementsByClassName("photo-dot");
  if (n > slides.length) {photoSlideIndex = 1}
  if (n < 1) {photoSlideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[photoSlideIndex-1].style.display = "block";
  dots[photoSlideIndex-1].className += " active";
} 


// Contact Form Functionality



const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();



    const nameField = contactForm.elements['name']; // accessing element by name
    const bodyField = contactForm.elements['body']; // accessing element by name

    const name = nameField ? nameField.value : '';
    const body = bodyField ? bodyField.value : '';
    
    window.location.href = `mailto:faith_home_school@yahoo.com?subject=${encodeURIComponent(name)}&body=${encodeURIComponent(body)}`;
});
