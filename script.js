function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
// PROJECT CARDS - projects Object array
let projects = [
  {
    name: "Portfolio",
    description:
      "This portfolio is a a compilation of professional materials that exemplifies your beliefs, skills, qualifications, education, training, and experiences.",
    stack: "HTML,CSS,Bootstrap, JavaScript",
    projectField: "Front-End",
    repositoryUrl:
      "https://github.com/danattali/portfolio.git",
    websiteLink: "https://danattaliportfolio.netlify.app",
    websiteImg: "./assets/danportfolio.png",
  },
  {
    name: "My Account",
    description:
      "My Account is a tool that helps you keep track on your Bank acount balance",
    stack: "HTML, JavaScript, OOP, Bootstrap",
    projectField: "Front-End",
    repositoryUrl: "https://github.com/danattali/ACCOUNT-master.git",
    websiteLink: "https://bankaccountdan.netlify.app",
    websiteImg: "./assets/myAccount.png",
  },
  {
    name: "ManageU",
    description: "ManageU is a tool to keep tracking your daily Tasks",
    stack: "HTML, TypeScript, Bootstrap",
    projectField: "Front-End",
    repositoryUrl: "https://github.com/danattali/ManageU.git",
    websiteLink: "https://danmanageu.netlify.app",
    websiteImg: "./assets/managU.png",
  },
  {
    name: "Mardi Gras",
    description:
      "Mardi Gras New Orleans.<br>Mardi Gras is about music, parades, picnics, floats and excitement. It's one big holiday in New Orleans!",
    stack: "HTML, SAAS, JavaScript, Bootstrap",
    projectField: "Front-End",
    repositoryUrl: "https://github.com/danattali/mardiGras.git",
    websiteLink: "https://danmardigras.netlify.app",
    websiteImg: "./assets/mardigras.png",
  },
  {
    name: "Electro Shop",
    description: "Electro Shop is an example of ecommers store",
    stack: "HTML, JavaScript",
    projectField: "Front-End",
    repositoryUrl: "https://github.com/danattali/store.git",
    websiteLink: "https://danstore.netlify.app",
    websiteImg: "./assets/storeImage.png",
  },





];
// PROJECT CARDS - Adding progects card to page

function showCards() {
  for (let i = 0; i < projects.length; i++)

    switch (i) {
      case 0:
        document.getElementById("portfolioCards").innerHTML += `
        
        <div class="portfolio-item">
                    <div class="image">
                        <img src="${projects[i].websiteImg}" alt="">
                    </div>
                    <div class="hover-items bg-primary">
                        <h3>${projects[i].name}<span> Last
                                        Project</span></h3>
                        <p>${projects[i].description}</p>
                        <hr>
                        <p>
                            <strong>Stack:</strong> <span class="w-date">${projects[i].stack}
                            </span><br>
                            <span> <strong>Project Field:</strong> ${projects[i].projectField}
                            </span>
                        </p>
                        <div class="icons">
                            <a href="${projects[i].repositoryUrl}" class="icon" target="_blank">
                                <i class="fab fa-github"></i>
                            </a>
                            <a href="${projects[i].websiteLink}" class="icon" target="_blank">  
                            <i class="fab fa-edge-legacy"></i>                                                       
                            </a>
                        </div>
                    </div>
                </div>
                `;
        break;
      case projects.length - 1:
        document.getElementById("portfolioCards").innerHTML += `
        
        <div class="portfolio-item">
                    <div class="image">
                        <img src="${projects[i].websiteImg}" alt="">
                    </div>
                    <div class="hover-items bg-primary">
                        <h3>${projects[i].name}<span> First
                                        Project</span></h3>
                        <p>${projects[i].description}</p>
                        <hr>
                        <p>
                            <strong>Stack:</strong> <span class="w-date">${projects[i].stack}
                            </span><br>
                            <span> <strong>Project Field:</strong> ${projects[i].projectField}
                            </span>
                        </p>
                        <div class="icons">
                            <a href="${projects[i].repositoryUrl}" class="icon" target="_blank">
                                <i class="fab fa-github"></i>
                            </a>
                            <a href="${projects[i].websiteLink}" class="icon" target="_blank">
                               <i class="fab fa-edge-legacy"></i> 
                            </a>
                        </div>
                    </div>
                </div>
                `;
        break;

      default:
        document.getElementById("portfolioCards").innerHTML += `
        
        <div class="portfolio-item">
                    <div class="image">
                        <img src="${projects[i].websiteImg}" alt="">
                    </div>
                    <div class="hover-items bg-primary">
                        <h3>${projects[i].name}</h3>
                        <p>${projects[i].description}</p>
                        <hr>
                        <p>
                            <strong>Stack:</strong> <span class="w-date">${projects[i].stack}
                            </span><br>
                            <span> <strong>Project Field:</strong> ${projects[i].projectField}
                            </span>
                        </p>
                        <div class="icons">
                            <a href="${projects[i].repositoryUrl}" class="icon" target="_blank">
                                <i class="fab fa-github"></i>
                            </a>
                            <a href="${projects[i].websiteLink}" class="icon" target="_blank">
                                <i class="fab fa-edge-legacy"></i> 
                            </a>
                        </div>
                    </div>
                </div>
                `;

        break;
    }
}
showCards();
function setSessionStorage() {
  console.log("function 3 called");
  sessionStorage.setItem(
    "from-name",
    JSON.stringify(document.getElementById("from-name").value)
  );
  sessionStorage.setItem(
    "from-email",
    JSON.stringify(document.getElementById("from-email").value)
  );
  sessionStorage.setItem(
    "from-subject",
    JSON.stringify(document.getElementById("from-subject").value)
  );
  sessionStorage.setItem(
    "email-message",
    JSON.stringify(document.getElementById("email-message").value)
  );
}


// sendEmail() - on-succsess calling:
//setSessionStorage();
// setSuccessMessage();
//openPopup();
//Reset form;

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var templateParams = {
      from_name: document.getElementById("from-name").value,
      from_email: document.getElementById("from-email").value,
      subject: document.getElementById("from-subject").value,
      message: document.getElementById("email-message").value,
      notes: "Check this out!",
    };

    emailjs.send("service_o3fc346", "template_btdlmcj", templateParams).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        sessionStorage["submit"] = response.status;
        setSessionStorage();
        setSuccessMessage();
        openPopup();
        document.getElementById("contactForm").reset();
      },

      function (error) {
        console.log("FAILED...", error);
      }
    );
  });

/* open/close popup */
let popup = document.getElementById("popup");
function openPopup() {
  popup.classList.add("open-popup");
}
function closePopup() {
  popup.classList.remove("open-popup");
}

/* popup message on submit */
function setSuccessMessage() {
  console.log("function 3 called");
  document.getElementById("popup").innerHTML = `
<div class="success-icon"><i class="fas fa-check-circle"></i></div>
<h4 id="message-title">Thank You
${JSON.parse(sessionStorage.getItem("from-name"))}!</h4>
<p class="text-start">The following was sent:<br><br>
<b>Subject:</b> 
${JSON.parse(sessionStorage.getItem("from-subject"))}<br><br>
<b>Message:</b><br>
${JSON.parse(sessionStorage.getItem("email-message"))}</p><br>
<button class="close" type="button" onclick="closePopup()"></button>
  `;
}
