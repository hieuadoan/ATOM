"""
main.py
Flask API entry point for the ATOM platform.

This script sets up the backend server for the ATOM project and defines basic routes.
"""
from flask import Flask, request, jsonify

app = Flask(__name__)

# In-memory data store
projects = {}

@app.route('/projects', methods=['GET'])
def get_projects():
    """Retrieve all projects."""
    return jsonify(list(projects.values())), 200

@app.route('/projects', methods=['POST'])
def create_project():
    """Create a new project."""
    data = request.json
    project_id = len(projects) + 1
    new_project = {
        "id": project_id,
        "name": data.get("name"),
        "description": data.get("description"),
        "created_at": data.get("created_at"),
        "status": "Active"
    }
    projects[project_id] = new_project
    return jsonify(new_project), 201

@app.route('/projects/<int:project_id>', methods=['DELETE'])
def delete_project(project_id):
    """Delete a specific project."""
    if project_id in projects:
        del projects[project_id]
        return '', 204
    return jsonify({"error": "Project not found"}), 404

if __name__ == '__main__':
    app.run(debug=True)
