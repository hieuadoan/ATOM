import React, { useState, useEffect } from 'react';
import '../styles/ProjectList.css'; // Add styles for the form and project list

function ProjectList() {
    const [projects, setProjects] = useState(() => {
        // Load projects from localStorage on initial render
        const savedProjects = localStorage.getItem("projects");
        return savedProjects ? JSON.parse(savedProjects) : [];
    });
    const [newProject, setNewProject] = useState({ name: "", description: "" });

    useEffect(() => {
        // Save projects to localStorage whenever they change
        localStorage.setItem("projects", JSON.stringify(projects));
    }, [projects]);

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProject({ ...newProject, [name]: value });
    };

    // Handle form submission
    const handleCreateProject = (e) => {
        e.preventDefault();

        const newProjectData = {
            id: Date.now(), // Unique ID
            name: newProject.name,
            description: newProject.description,
            dateCreated: new Date().toISOString().split('T')[0],
            status: "Active",
            tasks: [],
        };

        setProjects([...projects, newProjectData]);
        setNewProject({ name: "", description: "" }); // Reset the form
    };

    // Delete a project
    const deleteProject = (id) => {
        setProjects(projects.filter((project) => project.id !== id));
    };

    return (
        <div className="project-list">
            <h2>Projects</h2>

            {/* Create New Project Form */}
            <form onSubmit={handleCreateProject} className="create-project-form">
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={newProject.name}
                        onChange={handleInputChange}
                        placeholder="Project Name"
                        required
                    />
                </label>
                <label>
                    Description:
                    <textarea
                        name="description"
                        value={newProject.description}
                        onChange={handleInputChange}
                        placeholder="Project Description"
                        required
                    />
                </label>
                <button type="submit">Create Project</button>
            </form>

            {/* List of Projects */}
            <ul>
                {projects.map((project) => (
                    <li key={project.id} className="project">
                        <details>
                            <summary>{project.name}</summary>
                            <p><strong>Description:</strong> {project.description}</p>
                            <p><strong>Date Created:</strong> {project.dateCreated}</p>
                            <p><strong>Status:</strong> {project.status}</p>
                            <button onClick={() => deleteProject(project.id)}>Delete Project</button>
                        </details>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProjectList;
