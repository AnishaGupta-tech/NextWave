import React, { useState } from 'react';

const Collab = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    skills: '',
    lookingFor: '',
    Hackathon: '',
    Anycomments: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.skills.trim() || !formData.lookingFor.trim()) return;
    const newUser = { ...formData, id: Date.now() };
    setUsers([newUser, ...users]);
    setFormData({ name: '', skills: '', lookingFor: '', Hackathon: '', Anycomments: '' });
  };

  return (
    <div style={styles.app}>
      <h1 style={styles.title}>🚀 Collab Zone</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="text"
          name="skills"
          placeholder="Your Skills"
          value={formData.skills}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="text"
          name="lookingFor"
          placeholder="Looking for (e.g., Frontend Dev)"
          value={formData.lookingFor}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="text"
          name="Hackathon"
          placeholder="Write the name of event you are looking for"
          value={formData.lookingFor}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="text"
          name="anycomments"
          placeholder="Comments (optional)"
          value={formData.lookingFor}
          onChange={handleChange}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Find Teammates</button>
      </form>

      <div style={styles.userList}>
        {users.length === 0 ? (
          <p style={styles.noUsers}>No collaborators yet. Be the first!</p>
        ) : (
          users.map((user) => (
            <div style={styles.userCard} key={user.id}>
              <h3>👤 {user.name}</h3>
              <p><strong>🛠 Skills:</strong> {user.skills}</p>
              <p><strong>🤝 Looking For:</strong> {user.lookingFor}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

const styles = {
  app: {
    fontFamily: 'Segoe UI, sans-serif',
    backgroundColor: '#000',
    color: '#fff',
    minHeight: '100vh',
    padding: '40px 20px',
    textAlign: 'center',
  },
  title: {
    fontSize: '3rem',
    marginBottom: '30px',
    background: 'linear-gradient(90deg, #8e2de2, #4a00e0)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '12px',
    maxWidth: '400px',
    margin: '0 auto 40px auto',
    backgroundColor: '#1a1a1a',
    padding: '25px',
    borderRadius: '14px',
    boxShadow: '0 0 15px rgba(138, 43, 226, 0.3)',
  },
  input: {
    width: '100%',
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid #4a00e0',
    backgroundColor: '#000',
    color: '#fff',
    fontSize: '1rem',
    transition: 'border-color 0.3s ease',
  },
  button: {
    padding: '12px 25px',
    borderRadius: '8px',
    border: 'none',
    background: 'linear-gradient(90deg, #8e2de2, #4a00e0)',
    color: '#fff',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginTop: '10px',
    transition: 'transform 0.2s ease',
  },
  userList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '20px',
    padding: '0 20px',
  },
  userCard: {
    backgroundColor: '#1e1e1e',
    padding: '20px',
    borderRadius: '12px',
    borderLeft: '5px solid #4a00e0',
    boxShadow: '0 0 10px rgba(72, 61, 139, 0.4)',
    textAlign: 'left',
    color: '#fff',
  },
  noUsers: {
    fontStyle: 'italic',
    opacity: 0.7,
  },
};

export default Collab;
