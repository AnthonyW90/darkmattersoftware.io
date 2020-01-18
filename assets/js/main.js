let info = document.querySelector(".info")
let btnManagement = document.querySelector(".btn-management")
let btnDevelopment = document.querySelector(".btn-development")
let btnDeployment = document.querySelector(".btn-deployment")

const management = "Our teams have skilled Project Managers to oversee the entire project life cycle, so you don’t have to. We work together to hit deadlines and meet goals until your vision is complete."
const development = "We use battle-tested technologies to create software that solves your problems, meets your needs, and lasts for long-term use."
const deployment = "When it comes to deploying your new software, we stand by our projects with support through transitions and use. With effective project management, we streamline workflows and coordinate with your goals from start to finish."


const handleClick = (e, message) => {
    if(!drawer.style.transform){
        drawer.style.transform = "scaleY(1)"
        info.innerText = message
    }
    else if(drawer.style.transform == "scaleY(1)"){
        drawer.style.transform = "scaleY(0)"
    } else{
        drawer.style.transform = "scaleY(1)"
    }
}

btnManagement.addEventListener('click', (management) => handleClick(management))
btnDevelopment.addEventListener('click', (development) => handleClick(development))
btnDeployment.addEventListener('click', (deployment) => handleClick(deployment))

