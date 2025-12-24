const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
const home = document.getElementById("home");
const about = document.getElementById("about");
const skills = document.getElementById("skills");
const projects = document.getElementById("projects");
const project1 = document.getElementById("project1");
const project2 = document.getElementById("project2");
const contact = document.getElementById("contact");



function project1section() {
    home.classList.add("forHideSection");
    home.classList.remove("forDisplay");
    about.classList.add("forHideSection");
    about.classList.remove("forDisplay");
    skills.classList.add("forHideSection");
    skills.classList.remove("forDisplay");
    projects.classList.add("forHideSection");
    projects.classList.remove("forDisplay");
    contact.classList.add("forHideSection");
    contact.classList.remove("forDisplay");
    project1.classList.add("forDisplay");
    project2.classList.add("forHideSection");

}

function project2section() {
    home.classList.add("forHideSection");
    home.classList.remove("forDisplay");
    about.classList.add("forHideSection");
    about.classList.remove("forDisplay");
    skills.classList.add("forHideSection");
    skills.classList.remove("forDisplay");
    projects.classList.add("forHideSection");
    projects.classList.remove("forDisplay");
    contact.classList.add("forHideSection");
    contact.classList.remove("forDisplay");
    project1.classList.remove("forDisplay");
    project2.classList.add("forDisplay");
}

function showsection() {
    home.classList.add("forDisplay");
    home.classList.remove("forHideSection");
    about.classList.add("forDisplay");
    about.classList.remove("forHideSection");
    skills.classList.add("forDisplay");
    skills.classList.remove("forHideSection");
    projects.classList.add("forDisplay");
    projects.classList.remove("forHideSection");
    contact.classList.add("forDisplay");
    contact.classList.remove("forHideSection");
    project1.classList.add("forHideSection");
    project1.classList.remove("forDisplay");
    project2.classList.remove("forDisplay");
    project2.classList.add("forHideSection");

}