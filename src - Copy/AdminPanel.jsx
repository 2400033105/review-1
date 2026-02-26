import React from 'react';

const AdminPanel = ({ assignments, onCreateAssignment, onMonitor }) => {
  const [title, setTitle] = React.useState('');
  const handleCreate = (e) => {
    e.preventDefault();
    if (title.trim()) {
      onCreateAssignment(title);
      setTitle('');
    }
  };
  return (
    <div className="card">
      <h3 style={{marginBottom: '16px'}}>Admin Dashboard</h3>
      <form onSubmit={handleCreate} style={{marginBottom: '24px'}}>
        <label style={{display: 'block', marginBottom: 8}}>Create New Assignment</label>
        <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Assignment Title" style={{width: '60%'}} />
        <button type="submit" style={{marginLeft: 12}}>Add</button>
      </form>
      <h4>Current Assignments</h4>
      <table style={{width: '100%', borderCollapse: 'collapse', background: '#fff'}}>
        <thead>
          <tr style={{background: '#f4f6fa'}}>
            <th style={{textAlign: 'left', padding: '8px'}}>Title</th>
            <th style={{textAlign: 'left', padding: '8px'}}>Status</th>
          </tr>
        </thead>
        <tbody>
          {assignments.map((a, i) => (
            <tr key={i} style={{borderBottom: '1px solid #eee'}}>
              <td style={{padding: '8px'}}>{a.title}</td>
              <td style={{padding: '8px'}}>{a.status || 'In Progress'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default AdminPanel;
