import React, { useState } from 'react';
import './App.css';
import Login from './Login';
import AdminPanel from './AdminPanel';
import StudentPanel from './StudentPanel';
import ProjectList from './ProjectList';
import ReviewForm from './ReviewForm';
import FeedbackList from './FeedbackList';

function App() {
  const [user, setUser] = useState(null);
  const [assignments, setAssignments] = useState([
    { title: 'Project 1', status: 'In Progress' },
    { title: 'Project 2', status: 'In Progress' },
  ]);
  const [reviews, setReviews] = useState([]);
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const [collabProject, setCollabProject] = useState(null);

  if (!user) {
    return <Login onLogin={setUser} />;
  }

  const handleCreateAssignment = (title) => {
    setAssignments([...assignments, { title, status: 'In Progress' }]);
  };

  const handleReview = (assignment) => {
    setSelectedAssignment(assignment);
  };

  const handleSubmitReview = (review) => {
    setReviews([...reviews, { ...review, reviewee: 'TBD' }]);
    setSelectedAssignment(null);
  };

  const handleCollaborate = (assignment) => {
    setCollabProject(assignment);
  };

  const handleLogout = () => {
    setUser(null);
    setSelectedAssignment(null);
    setCollabProject(null);
  };

  return (
    <div className="app-container">
      <header>
        <h2>Peer Review & Collaboration Platform</h2>
        <div>
          <span>Welcome, {user.name} ({user.role})</span>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </header>
      <main>
        {user.role === 'admin' ? (
          <AdminPanel assignments={assignments} onCreateAssignment={handleCreateAssignment} />
        ) : (
          <>
            <StudentPanel
              assignments={assignments}
              onReview={handleReview}
              onCollaborate={handleCollaborate}
              user={user}
              reviews={reviews}
            />
            {selectedAssignment && (
              <ReviewForm
                assignment={selectedAssignment}
                onSubmit={handleSubmitReview}
                reviewer={user.name}
              />
            )}
            <FeedbackList feedbacks={reviews} user={user} />
            {collabProject && (
              <ProjectList projects={[collabProject]} onSelect={() => setCollabProject(null)} />
            )}
          </>
        )}
      </main>
    </div>
  );
}

export default App;
