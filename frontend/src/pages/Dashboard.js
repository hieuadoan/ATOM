import React from 'react';
import ProjectList from '../components/ProjectList';

function Dashboard() {
    return (
        <div className="dashboard">
            <h2>Welcome to the ATOM Dashboard</h2>
            <ProjectList />
        </div>
    );
}

export default Dashboard;
