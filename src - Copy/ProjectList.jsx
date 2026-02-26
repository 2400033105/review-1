import React from 'react';

const ProjectList = ({ projects, onSelect }) => (
  <div className="card" style={{marginTop: 24}}>
    <h4>Projects</h4>
    <ul>
      {projects.map((p, i) => (
        <li key={i}>
          <span>{p.title}</span>
          <button style={{marginLeft: 12}} onClick={() => onSelect(p)}>Open</button>
        </li>
      ))}
    </ul>
  </div>
);

export default ProjectList;
