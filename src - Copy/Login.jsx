import React from 'react';

const Login = ({ onLogin }) => {
  const [role, setRole] = React.useState('student');
  const [name, setName] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      onLogin({ name, role });
    }
  };

  return (
    <div className="login-container">
      <h2 style={{textAlign: 'center', marginBottom: 24}}>Peer Review Platform</h2>
      <form onSubmit={handleSubmit}>
        <div style={{marginBottom: 16}}>
          <label style={{display: 'block', marginBottom: 6}}>Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
            style={{width: '100%'}}
          />
        </div>
        <div style={{marginBottom: 16}}>
          <label style={{display: 'block', marginBottom: 6}}>Role</label>
          <select value={role} onChange={e => setRole(e.target.value)} style={{width: '100%'}}>
            <option value="student">Student</option>
            <option value="admin">Admin (Teacher)</option>
          </select>
        </div>
        <button type="submit" style={{width: '100%'}}>Login</button>
      </form>
    </div>
  );
};

export default Login;
