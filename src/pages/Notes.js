import React, { useState } from 'react';

const Notes = () => {
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [search, setSearch] = useState('');

  const notesData = {
    "Mathematics I": {
      image: 'https://via.placeholder.com/150/6a0dad/ffffff?text=Mathematics+I',
      units: {
        'Unit 1': 'Differential Calculus',
        'Unit 2': 'Integral Calculus',
        'Unit 3': 'Vector Calculus',
        'Unit 4': 'Matrices and Determinants',
        'Unit 5': 'Complex Numbers',
      },
    },
    "Engineering Physics": {
      image: 'https://via.placeholder.com/150/6a0dad/ffffff?text=Physics',
      units: {
        'Unit 1': 'Quantum Mechanics',
        'Unit 2': 'Electromagnetic Theory',
        'Unit 3': 'Optics',
        'Unit 4': 'Solid State Physics',
        'Unit 5': 'Modern Physics',
      },
    },
    "Basic Electrical Engineering": {
      image: 'https://via.placeholder.com/150/6a0dad/ffffff?text=Electrical',
      units: {
        'Unit 1': 'DC Circuits',
        'Unit 2': 'AC Circuits',
        'Unit 3': 'Transformers',
        'Unit 4': 'Electrical Machines',
        'Unit 5': 'Measurements',
      },
    },
    "Programming for Problem Solving": {
      image: 'https://via.placeholder.com/150/6a0dad/ffffff?text=Programming',
      units: {
        'Unit 1': 'Introduction to Programming',
        'Unit 2': 'Control Structures',
        'Unit 3': 'Functions and Arrays',
        'Unit 4': 'Pointers and Strings',
        'Unit 5': 'Structures and File Handling',
      },
    },
    "Data Structures": {
      image: 'https://via.placeholder.com/150/6a0dad/ffffff?text=DSA',
      units: {
        'Unit 1': 'Arrays and Linked Lists',
        'Unit 2': 'Stacks and Queues',
        'Unit 3': 'Trees',
        'Unit 4': 'Graphs',
        'Unit 5': 'Sorting and Searching Algorithms',
      },
    },
    "Digital Logic Design": {
      image: 'https://via.placeholder.com/150/6a0dad/ffffff?text=Logic',
      units: {
        'Unit 1': 'Number Systems and Codes',
        'Unit 2': 'Logic Gates',
        'Unit 3': 'Combinational Circuits',
        'Unit 4': 'Sequential Circuits',
        'Unit 5': 'Memory and PLDs',
      },
    },
    "Thermodynamics": {
      image: 'https://via.placeholder.com/150/6a0dad/ffffff?text=Thermo',
      units: {
        'Unit 1': 'Basic Concepts',
        'Unit 2': 'First Law of Thermodynamics',
        'Unit 3': 'Second Law of Thermodynamics',
        'Unit 4': 'Entropy',
        'Unit 5': 'Thermodynamic Cycles',
      },
    },
    "Structural Analysis": {
      image: 'https://via.placeholder.com/150/6a0dad/ffffff?text=Structural',
      units: {
        'Unit 1': 'Introduction to Structures',
        'Unit 2': 'Analysis of Beams',
        'Unit 3': 'Trusses',
        'Unit 4': 'Arches',
        'Unit 5': 'Influence Lines',
      },
    },
  };

  const filteredSubjects = Object.entries(notesData).filter(([subject]) =>
    subject.toLowerCase().includes(search.toLowerCase())
  );

  const renderSubjectCards = () => (
    <>
      <input
        type="text"
        placeholder="Search subjects..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={styles.input}
      />
      <div style={styles.cardGrid}>
        {filteredSubjects.map(([subject, data]) => (
          <div key={subject} style={styles.card} onClick={() => setSelectedSubject(subject)}>
            <img src={data.image} alt={subject} style={styles.cardImage} />
            <h3>{subject}</h3>
            <p>{Object.values(data.units).slice(0, 3).join(', ')}...</p>
            <button style={styles.viewButton}>View Notes</button>
          </div>
        ))}
      </div>
    </>
  );

  const renderNotes = () => {
    const subject = notesData[selectedSubject];
    return (
      <div>
        <button onClick={() => setSelectedSubject(null)} style={styles.backButton}>⬅ Back to Subjects</button>
        <h2 style={styles.unitHeader}>{selectedSubject} - Units</h2>
        <input
          type="text"
          placeholder="Search notes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={styles.input}
        />
        <div style={styles.notesWrapper}>
          {Object.entries(subject.units)
            .filter(([unit, desc]) => unit.toLowerCase().includes(search.toLowerCase()) || desc.toLowerCase().includes(search.toLowerCase()))
            .map(([unit, desc]) => (
              <div key={unit} style={styles.noteCard}>
                <h3>{unit}</h3>
                <p>{desc}</p>
              </div>
            ))}
        </div>
      </div>
    );
  };

  return (
    <div style={styles.app}>
      <h1 style={styles.title}>📚 B.Tech Notes Hub</h1>
      {selectedSubject ? renderNotes() : renderSubjectCards()}
    </div>
  );
};

const styles = {
  app: {
    backgroundColor: '#000',
    color: '#fff',
    fontFamily: 'Segoe UI, sans-serif',
    padding: '30px 20px',
    minHeight: '100vh',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '30px',
    textAlign: 'center',
    background: 'linear-gradient(90deg, #8e2de2, #4a00e0)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  cardGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '20px',
  },
  card: {
    backgroundColor: '#111',
    borderRadius: '12px',
    padding: '20px',
    textAlign: 'center',
    boxShadow: '0 0 10px rgba(138, 43, 226, 0.3)',
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
  },
  cardImage: {
    width: '100%',
    borderRadius: '8px',
    marginBottom: '10px',
  },
  viewButton: {
    marginTop: '10px',
    padding: '8px 16px',
    background: 'linear-gradient(90deg, #8e2de2, #4a00e0)',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  },
  backButton: {
    marginBottom: '20px',
    background: 'transparent',
    border: '1px solid #8e2de2',
    color: '#fff',
    borderRadius: '8px',
    padding: '8px 12px',
    cursor: 'pointer',
  },
  unitHeader: {
    fontSize: '1.8rem',
    color: '#a782f8',
    marginBottom: '20px',
  },
  input: {
    padding: '10px',
    borderRadius: '8px',
    border: '1px solid #4a00e0',
    backgroundColor: '#111',
    color: '#fff',
    width: '100%',
    marginBottom: '20px',
  },
  notesWrapper: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '15px',
  },
  noteCard: {
    backgroundColor: '#1a1a1a',
    padding: '15px',
    borderRadius: '10px',
    boxShadow: '0 0 5px rgba(138, 43, 226, 0.2)',
  },
};

export default Notes;
