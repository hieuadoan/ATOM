import React, { useState, useEffect } from 'react';
import '../styles/ProjectList.css';

function ProjectList() {
    const [projects, setProjects] = useState(() => {
        const savedProjects = localStorage.getItem("projects");
        return savedProjects ? JSON.parse(savedProjects) : [];
    });

    const [newProject, setNewProject] = useState({ name: "", description: "" });
	const [sortCriterion, setSortCriterion] = useState("date"); // Default sorting by date
    const [filterCriterion, setFilterCriterion] = useState("All"); // Default filter to show all projects
    
	useEffect(() => {
        localStorage.setItem("projects", JSON.stringify(projects));
    }, [projects]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProject({ ...newProject, [name]: value });
    };

    const handleCreateProject = (e) => {
        e.preventDefault();

        const newProjectData = {
            id: Date.now(),
            name: newProject.name,
            description: newProject.description,
            dateCreated: new Date().toISOString().split('T')[0],
            lastUpdated: new Date().toISOString().split('T')[0],
            status: "Active",
        };

        setProjects([...projects, newProjectData]);
        setNewProject({ name: "", description: "" });
    };

    const deleteProject = (id) => {
        if (window.confirm("Are you sure you want to delete this project?")) {
            setProjects(projects.filter((project) => project.id !== id));
        }
    };

    const updateProjectStatus = (id, newStatus) => {
        const updatedProjects = projects.map((project) =>
            project.id === id
                ? { ...project, status: newStatus, lastUpdated: new Date().toISOString().split('T')[0] }
                : project
        );
        setProjects(updatedProjects);
    };

 	// Sort projects based on the selected criterion
    const sortProjects = (criterion) => {
        const sortedProjects = [...projects].sort((a, b) => {
            if (criterion === "name") {
                return a.name.localeCompare(b.name);
            }
            if (criterion === "date") {
                return new Date(a.dateCreated) - new Date(b.dateCreated);
            }
            if (criterion === "status") {
                const statusOrder = { "Active": 1, "On Hold": 2, "Completed": 3 };
                return statusOrder[a.status] - statusOrder[b.status];
            }
            return 0;
        });

        setProjects(sortedProjects);
        setSortCriterion(criterion); // Save the current sorting criterion
    };

    // Filter projects based on the selected criterion
    const filteredProjects = projects.filter((project) => {
        if (filterCriterion === "All") return true;
        return project.status === filterCriterion;
    });

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Projects</h2>
			{/* Sorting and Filtering Controls */}
            <div className="mb-3 d-flex">
                <button
                    className={`btn btn-outline-primary me-2 ${sortCriterion === "name" ? "active" : ""}`}
                    onClick={() => sortProjects("name")}
                >
                    Sort by Name
                </button>
                <button
                    className={`btn btn-outline-primary me-2 ${sortCriterion === "date" ? "active" : ""}`}
                    onClick={() => sortProjects("date")}
                >
                    Sort by Date
                </button>
                <button
                    className={`btn btn-outline-primary me-2 ${sortCriterion === "status" ? "active" : ""}`}
                    onClick={() => sortProjects("status")}
                >
                    Sort by Status
                </button>

                <select
                    className="form-select w-auto"
                    value={filterCriterion}
                    onChange={(e) => setFilterCriterion(e.target.value)}
                >
                    <option value="All">Show All</option>
                    <option value="Active">Active</option>
                    <option value="Completed">Completed</option>
                    <option value="On Hold">On Hold</option>
                </select>
            </div>

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
				<div className="alert alert-info">
					<strong>Welcome!</strong> Please create a new project.
				</div>
			) : filteredProjects.length === 0 ? (
				<div className="alert alert-warning">
                	No projects match the filter criteria.
				</div>
            ) : (
                <ul className="list-group">
                    {filteredProjects.map((project) => (
                        <li key={project.id} className="list-group-item">
                            <div className="d-flex justify-content-between">
                                <div>
                                    <h5>{project.name}</h5>
                                    <p className="mb-1"><strong>Description:</strong> {project.description}</p>
                                    <p className="mb-1 text-muted"><strong>Date Created:</strong> {project.dateCreated}</p>
                                    <p className="mb-1 text-muted"><strong>Last Updated:</strong> {project.lastUpdated}</p>
                                    <p className="mb-1"><strong>Status:</strong> 
                                        <span className={`badge ms-1 ${
                                            project.status === "Active"
                                                ? "bg-success"
                                                : project.status === "Completed"
                                                ? "bg-primary"
                                                : "bg-warning text-dark"
                                        }`}>
                                            {project.status}
                                        </span>
                                    </p>
                                </div>
                                <div className="text-end">
                                    <button
                                        className="btn btn-danger btn-sm mb-2"
                                        onClick={() => deleteProject(project.id)}
                                    >
                                        Delete
                                    </button>
                                    <select
                                        className="form-select form-select-sm w-auto"
                                        value={project.status}
                                        onChange={(e) => updateProjectStatus(project.id, e.target.value)}
                                    >
                                        <option value="Active">Active</option>
                                        <option value="Completed">Completed</option>
                                        <option value="On Hold">On Hold</option>
                                    </select>
                                </div>
                            </div>

                            {/* Expandable Section */}
                            <details className="mt-3">
                                <summary className="text-primary">More Details</summary>
                                <div className="mt-2">
                                    <p><strong>Associated Datasets:</strong> (Feature coming soon)</p>
                                    <p><strong>Additional Notes:</strong> Placeholder for future content.</p>
                                </div>
                            </details>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default ProjectList;
