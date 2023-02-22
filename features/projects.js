const projects = [
    {
        id: 1,
        name: "WorkoutTracker",
        description: "An easy to use app for logging your workouts",
        img: "images/workoutTracker.png",
        url: "http://3.19.209.225",
        github: "https://github.com/NicolasJott/workoutTracker",
        tech: ["React.js", "Express", "MongoDB", "Node.js"],
    },
    {
        id: 2,
        name: "Clash of Clans Wrapper",
        img: "images/coc.png",

        github: "https://github.com/NicolasJott/ClashofClansJavaWrapper",
        description: "A read-only wrapper for the Clash of Clans API",
        tech: ["Java", "restApi", "blah"],
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
        const ul = this.document.createElement("ul");
        let innerDiv = document.createElement('div');
        let topDiv = document.createElement('div');
        let hrefDiv = this.document.createElement('div');
        let git = document.createElement('i');
        let gitA = document.createElement('a');
        let img = document.createElement('img');
        img.setAttribute("src", project.img)
        img.setAttribute("alt", `${project.name} image`)
        
        if (project.url) {
            let url = this.document.createElement('i')
            let urlA = this.document.createElement('a')
            url.classList.add('fa-solid');
            url.classList.add('fa-globe');
            urlA.setAttribute("href", project.url)
            urlA.classList.add('github')
            urlA.appendChild(url)
            hrefDiv.appendChild(urlA)


        }
        git.classList.add('fa-brands');
        git.classList.add('fa-github')
        gitA.setAttribute("href", project.github)
        gitA.classList.add('github')
        gitA.appendChild(git)
        hrefDiv.appendChild(gitA);

        h3.textContent = project.name;
        p.textContent = project.description
        project.tech.forEach((tech) => {
            const li = document.createElement("li");
            li.textContent = tech
            ul.appendChild(li);
        });

        span.appendChild(ul);
    
        topDiv.appendChild(h3);
        topDiv.appendChild(hrefDiv)
        
        

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