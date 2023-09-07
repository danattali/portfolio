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
    websiteLink: "danmardigras.netlify.app",
    websiteImg: "./assets/mardigras.png",
  },
  {
    name: "Electro Shop",
    description: "Electro Shop is an example of ecommers store",
    stack: "HTML, JavaScript",
    projectField: "Front-End",
    repositoryUrl: "https://github.com/danattali/store.git",
    websiteLink: "danstore.netlify.app",
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