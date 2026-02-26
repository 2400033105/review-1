import React, { useState } from 'react';

const ReviewForm = ({ assignment, onSubmit, reviewer }) => {
  const [feedback, setFeedback] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (feedback.trim()) {
      onSubmit({ assignment: assignment.title, reviewer, feedback });
      setFeedback('');
    }
  };
  return (
    <form onSubmit={handleSubmit} className="card" style={{marginTop: 24}}>
      <h4>Submit Peer Review</h4>
      <div style={{marginBottom: 12}}>
        <label style={{display: 'block', marginBottom: 4}}>Assignment</label>
        <input value={assignment.title} disabled style={{width: '100%', background: '#f1f3f7'}} />
      </div>
      <div style={{marginBottom: 12}}>
        <label style={{display: 'block', marginBottom: 4}}>Feedback</label>
        <textarea value={feedback} onChange={e => setFeedback(e.target.value)} placeholder="Enter constructive feedback" style={{width: '100%', minHeight: 60}} />
      </div>
      <button type="submit">Submit Review</button>
    </form>
  );
};
export default ReviewForm;
