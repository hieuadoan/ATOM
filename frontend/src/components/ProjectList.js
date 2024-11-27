import React, { useState, useEffect } from 'react';
import '../styles/ProjectList.css'; // Add styles if needed

function ProjectList() {
    // Load projects from localStorage or initialize as an empty array
    const [projects, setProjects] = useState(() => {
        const savedProjects = localStorage.getItem("projects");
        return savedProjects ? JSON.parse(savedProjects) : [];
    });

    const [newProject, setNewProject] = useState({ name: "", description: "" });

    // Save projects to localStorage whenever they change
    useEffect(() => {
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
        };

        setProjects([...projects, newProjectData]);
        setNewProject({ name: "", description: "" }); // Reset the form
    };

    // Delete a project with confirmation
    const deleteProject = (id) => {
        if (window.confirm("Are you sure you want to delete this project?")) {
            setProjects(projects.filter((project) => project.id !== id));
        }
    };

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Projects</h2>

            {/* Create New Project Form */}
            <form onSubmit={handleCreateProject} className="mb-4">
                <div className="mb-3">
                    <label className="form-label">Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={newProject.name}
                        onChange={handleInputChange}
                        placeholder="Project Name"
                        className="form-control"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Description:</label>
                    <textarea
                        name="description"
                        value={newProject.description}
                        onChange={handleInputChange}
                        placeholder="Project Description"
                        className="form-control"
                        rows="3"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Create Project</button>
            </form>

            {/* List of Projects */}
            {projects.length === 0 ? (
                <p className="text-muted">No projects found. Create a new project to get started!</p>
            ) : (
                <ul className="list-group">
                    {projects.map((project) => (
                        <li key={project.id} className="list-group-item d-flex justify-content-between align-items-center">
                            <div>
                                <h5>{project.name}</h5>
                                <p className="mb-1"><strong>Description:</strong> {project.description}</p>
                                <p className="mb-0 text-muted"><strong>Date Created:</strong> {project.dateCreated}</p>
                            </div>
                            <button
                                className="btn btn-danger btn-sm"
                                onClick={() => deleteProject(project.id)}
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default ProjectList;
