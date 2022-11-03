import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Main} from "./components/main/Main";
import {Skills} from "./components/skills/Skills";
import {SkillType} from "./components/skills/skill/Skill";
import {Projects} from "./components/projects/Projects";
import {ContactForm} from "./components/contactForm/ContactForm";
import {Footer} from "./components/footer/Footer";

const skills: SkillType[] = [
    {title: "HTML", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"},
    {title: "CSS", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"},
    {title: "JS", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"},
    {title: "React", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"},
    {title: "Typescript", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"},
    {title: "Redux", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"},
]

export type ProjectType = {
    id: number
    title: string
    description: string
    url: string
}

const projects: Array<ProjectType> = [
    {id: 1, title: "Social-Network", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,", url: "https://www.evereducating.com/wp-content/uploads/2019/01/College-Group-Project-Students-Enjoy-676x442.jpeg"},
    {id: 2, title: "ToDo List", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,", url: "https://eitrawmaterials.eu/wp-content/uploads/2019/10/KAVA7.jpg"},
]

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills skills={skills}/>
            <Projects projects={projects}/>
            <ContactForm/>
            <Footer/>
        </div>
    );
}

export default App;
