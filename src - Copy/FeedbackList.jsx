import React from 'react';

const FeedbackList = ({ feedbacks, user }) => (
  <div className="card" style={{marginTop: 24}}>
    <h4>Feedback Received</h4>
    <ul>
      {feedbacks.filter(f => f.assignment && f.reviewee === user.name).length === 0 && (
        <li style={{background: 'none', color: '#888'}}>No feedback received yet.</li>
      )}
      {feedbacks.filter(f => f.assignment && f.reviewee === user.name).map((f, i) => (
        <li key={i}>{f.assignment}: {f.feedback} <span style={{color:'#888'}}>(by {f.reviewer})</span></li>
      ))}
    </ul>
  </div>
);

export default FeedbackList;
