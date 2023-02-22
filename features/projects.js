const projects = [
    {
        id: 1,
        name: "WorkoutTracker",
        description: "An easy to use app for logging your workouts",
        img: "images/workoutTracker.png",
        github: "https://github.com/NicolasJott/workoutTracker",
        tech: ["React.js", "Express", "MongoDB", "Node.js"],
    },
    {
        id: 2,
        name: "Clash of Clans Wrapper",
        img: "images/coc.png",

        github: "https://github.com/NicolasJott/ClashofClansJavaWrapper",
        description: "A read-only wrapper for the Clash of Clans API",
        tech: ["Java", "restApi"],
    },

]

const projectList = document.getElementById('project-list')

let currentProject = 0;

window.addEventListener('DOMContentLoaded', function() {
    projects.forEach((project) => {

        let div = document.createElement('div');
        div.classList.add('project')
        let h3 = document.createElement('h3');
        let p = document.createElement('p');
        let span = document.createElement('span');
        let innerDiv = document.createElement('div');
        let topDiv = document.createElement('div');
        let i = document.createElement('i');
        let a = document.createElement('a');
        let img = document.createElement('img');
        img.setAttribute("src", project.img)
        
        i.classList.add('fa-brands');
        i.classList.add('fa-github')
        a.setAttribute("href", project.github)
        a.classList.add('github')
        a.appendChild(i)

        h3.textContent = project.name;
        p.textContent = project.description
        project.tech.forEach((tech) => {
            const li = document.createElement("li");
            li.textContent = tech
            span.appendChild(li);
        });
    
        topDiv.appendChild(h3);
        topDiv.appendChild(a);

        topDiv.classList.add('top-div')

        innerDiv.appendChild(p)
        innerDiv.appendChild(span)
        innerDiv.classList.add('description')
        div.appendChild(img)
        div.appendChild(topDiv);
        div.appendChild(innerDiv);
        projectList.appendChild(div)
    });
    
   
})