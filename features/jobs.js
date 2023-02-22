const jobs = [
    {
        id: 1,
        jobTitle: "Software Developer -",
        company: "YSU",
        website: "https://ysu.edu/",
        range: "December 2022 - Present",
        text: [ 
            "As a skilled professional, I have been responsible for addressing incoming tickets pertaining to the modification of the Youngstown State University website, utilizing the Drupal platform.",
            "In this capacity, I have utilized cutting-edge technologies including HTML5, CSS3, and JavaScript to execute modifications to the website as per the requests received.", 
            "These requests have entailed an array of updates such as adding or updating files, hyperlinks, information, and staff lists.",
            "Moreover, I have demonstrated the ability to create new web pages within the Youngstown State University website, using my proficiency in the aforementioned technologies to ensure optimal outcomes."
             ]
    },
    {
        id: 2,
        jobTitle: "Advanced Repair Agent -",
        company: "Geek Squad",
        website: "https://www.bestbuy.com/site/electronics/services/pcmcat1528819595254.c?id=pcmcat1528819595254",
        range: "May 2022 - December 2022",
        text: [ 
            "In my capacity as a technical support professional with Geek Squad, I have consistently provided direct assistance to clients, utilizing a range of sophisticated troubleshooting techniques such as operating system repair, virus removal, and simple registry fixes. I have consistently delivered exceptional results in terms of resolving technical issues and restoring clients' devices to their optimal functionality.",
            "In addition to my broad-based technical support skills, I am also certified by Apple to diagnose and repair Apple devices such as the latest iPhones, Apple Watches, iPads, and Mac computers. This certification has enabled me to deliver reliable and efficient service, with a focus on high-quality repairs and support.", 
            "I have demonstrated my exceptional teaching skills, working with clients who are seeking to learn how to use a computer effectively. Additionally, I have effectively managed the backup, security, and destruction of confidential customer data based on the specific service requested, demonstrating my ability to manage sensitive information in a responsible and ethical manner.",
            "my familiarity with computer BIOS, command line tools, and the Windows registry has allowed me to effectively troubleshoot and improve clients' devices, leading to enhanced performance and user experience.",
             ]
    },
    {
        id: 3,
        jobTitle: "Sales Associate -",
        company: "Best Buy",
        website: "https://www.bestbuy.com/",
        range: "February 2022 - May 2022",
        text: [ 
            "As a seasoned sales professional, I have leveraged my extensive product knowledge to assist customers in making well-informed purchasing decisions. I have consistently maintained a deep understanding of the latest technologies that are introduced to the consumer world, ensuring that my customers receive comprehensive advice and guidance on the most suitable products for their needs.",
            "I have consistently demonstrated my motivation to stay abreast of the latest trends and innovations in the industry, enabling me to remain a trusted and credible source of information for my customers.",
            "I have played an instrumental role in enhancing the front-end flow of the store, ensuring that customers have a seamless and satisfying experience. By consistently providing exceptional service, I have ensured that customers leave the store feeling confident and happy with their new product, leading to enhanced customer satisfaction and loyalty.",
             ]
    },
    {
        id: 4,
        jobTitle: "Product Flow -",
        company: "Best Buy",
        website: "https://www.bestbuy.com/",
        range: "May 2021 - February 2022",
        text: [ 
            "I was a key contributor to a complex logistics, commerce, and shuttling system, utilizing my expertise to ensure the efficient flow of products and services. Specifically, I was responsible for managing the receipt of shipments from trucks from the DDC, ensuring that the store was always adequately stocked with inventory.",
            "I played an instrumental role in handling shipping for customer orders, as well as allocating products for curbside and store pickup. By consistently providing prompt and efficient service, I helped to ensure that customer orders were fulfilled in a timely and accurate manner.",
            "In the course of my duties, I have gained an extensive understanding of how the back-end of a store affects the front-end, allowing me to effectively manage the interplay between inventory management, logistics, and customer service. This has enabled me to contribute to the overall success of the store, ensuring that it operates in an efficient and customer-centric manner.",
             ]
    },
    
]

const jobTitle = document.getElementById('job-title');
const company = document.getElementById('company');
const range = document.getElementById('date-range');
const info = document.getElementById('info')
const tablist = document.getElementById('tablist');
const jobContent = document.querySelector('.jobs');


let currentJob = 0 ;
let currentButton = null;

window.addEventListener("DOMContentLoaded", function() {
    const job = jobs[currentJob];
    jobTitle.textContent = job.jobTitle;
    company.setAttribute("href",job.website)
    company.textContent = job.company;
    range.textContent = job.range;
    jobs[currentJob].text.forEach((text) => {
        const li = document.createElement("li");
        li.textContent = text
        info.appendChild(li);

    });

    jobs.forEach((job, i) => {
        const button = this.document.createElement("button", { id: `tab-${job.id}`});
        const span = this.document.createElement("span");

        button.textContent = "";
        span.textContent = job.company;
        button.appendChild(span);
        button.setAttribute("id", `tab-${job.id}`)
        button.classList.add('inactive')
        tablist.appendChild(button)

        if (i === 0) {
            button.classList.add("active");
            button.classList.add("active-background")
            currentButton = button
        }

        button.onclick = () => {
            if (currentButton) {
                currentButton.classList.remove("active")
                currentButton.classList.remove("active-background")
            }
            currentButton = button;

            button.classList.add("active-background")

            setTimeout(() => {
                button.classList.add("active")
            }, 200);
            showJob(job.id - 1)

            const jobItems = jobContent.children;
                for (let i = 0; i < jobItems.length; i++) {
                    const jobItem = jobItems[i];
                    jobItem.classList.add('fade-enter');
                    jobItem.classList.remove('fade-enter-active');
                }

                const h3 = jobContent.querySelector(".job-wrapper");
                h3.classList.add('fade-enter');

                setTimeout(() => {
                    for (let i = 0; i < jobItems.length; i++) {
                    const jobItem = jobItems[i];
                    jobItem.classList.remove('fade-enter');
                    jobItem.classList.add('fade-enter-active');
                    }

                    h3.classList.remove('fade-enter');
                    h3.classList.add('fade-enter-active');
                }, 50);
        }

    })
})

function showJob(jobIndex) {
    const job = jobs[jobIndex];
    jobTitle.textContent = job.jobTitle;
    company.setAttribute("href",job.website)
    company.textContent = job.company;
    range.textContent = job.range;
    info.innerHTML = '';
    jobs[jobIndex].text.forEach((text) => {
        const li = document.createElement("li");
        li.textContent = text
        info.appendChild(li);
    }
    )
}

