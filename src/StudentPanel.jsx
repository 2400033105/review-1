import React from 'react';

const StudentPanel = ({ assignments, onReview, onCollaborate, user, reviews }) => {
  return (
    <div className="card">
      <h3 style={{marginBottom: '16px'}}>Student Dashboard</h3>
      <h4>Assignments</h4>
      <ul>
        {assignments.map((a, i) => (
          <li key={i}>
            <span>{a.title}</span>
            <div>
              <button style={{marginRight: 8}} onClick={() => onCollaborate(a)}>Collaborate</button>
              <button onClick={() => onReview(a)}>Review</button>
            </div>
          </li>
        ))}
      </ul>
      <h4 style={{marginTop: 32}}>My Submitted Reviews</h4>
      <ul>
        {reviews.filter(r => r.reviewer === user.name).length === 0 && (
          <li style={{background: 'none', color: '#888'}}>No reviews submitted yet.</li>
        )}
        {reviews.filter(r => r.reviewer === user.name).map((r, i) => (
          <li key={i}>{r.assignment}: {r.feedback}</li>
        ))}
      </ul>
    </div>
  );
};
export default StudentPanel;
