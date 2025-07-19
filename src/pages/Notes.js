import React, { useState } from 'react';

const subjectIcons = {
  "Data Structures & Algorithms": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  "Object Oriented Programming": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  "Database Systems": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  "Machine Learning": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "Artificial Intelligence": "https://cdn-icons-png.flaticon.com/512/4712/4712027.png",
  "Web Development": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "Blockchain": "https://upload.wikimedia.org/wikipedia/commons/6/6f/Ethereum-icon-purple.svg",
  "Cybersecurity": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  "Networking Systems": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/networkx/networkx-original.svg",
};

const resourcesData = {
  "Data Structures & Algorithms": {
    image: subjectIcons["Data Structures & Algorithms"],
    units: {
      "Arrays & Strings": {
        desc: "Basics and advanced patterns in arrays and strings.",
        videos: [
          "https://www.youtube.com/embed/CBYHwZcbD-s",
          "https://www.youtube.com/embed/8mAITcNt710"
        ],
        docs: [
          { name: "LeetCode Arrays", url: "https://leetcode.com/tag/array/" },
          { name: "GFG Arrays", url: "https://www.geeksforgeeks.org/array-data-structure/" }
        ],
        worksheets: [
          { name: "Striver A2Z Sheet", url: "https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/" }
        ]
      },
      "Linked Lists": {
        desc: "Singly, doubly, and circular linked lists.",
        videos: [
          "https://www.youtube.com/embed/0KfjS5AOMzA"
        ],
        docs: [
          { name: "GFG Linked List", url: "https://www.geeksforgeeks.org/data-structures/linked-list/" }
        ],
        worksheets: []
      },
      "Stacks & Queues": {
        desc: "Implementation and problems on stacks and queues.",
        videos: [
          "https://www.youtube.com/embed/6QPEs3MJ4pM"
        ],
        docs: [
          { name: "GFG Stack/Queue", url: "https://www.geeksforgeeks.org/stack-data-structure/" }
        ],
        worksheets: []
      },
      "Trees": {
        desc: "Binary Trees, BSTs, traversals.",
        videos: [
          "https://www.youtube.com/embed/zm83jPHZ-jA"
        ],
        docs: [
          { name: "GFG Binary Trees", url: "https://www.geeksforgeeks.org/binary-tree-data-structure/" }
        ],
        worksheets: []
      },
      "Graphs": {
        desc: "Graph basics and traversal algorithms.",
        videos: [
          "https://www.youtube.com/embed/_-0mx0SmYxA"
        ],
        docs: [
          { name: "GFG Graphs", url: "https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/" }
        ],
        worksheets: []
      }
    }
  },
  "Object Oriented Programming": {
    image: subjectIcons["Object Oriented Programming"],
    units: {
      "Principles": {
        desc: "Encapsulation, Inheritance, Polymorphism, Abstraction.",
        videos: [
          "https://www.youtube.com/embed/pTB0EiLXUC8"
        ],
        docs: [
          { name: "Java OOP Docs", url: "https://docs.oracle.com/javase/tutorial/java/concepts/" }
        ],
        worksheets: []
      },
      "Inheritance": {
        desc: "Code reuse, method overriding, base and derived.",
        videos: [
          "https://www.youtube.com/embed/XLK0pPBAYAI"
        ],
        docs: [
          { name: "GFG Inheritance", url: "https://www.geeksforgeeks.org/inheritance-in-java/" }
        ],
        worksheets: []
      },
      "Polymorphism": {
        desc: "Compile/run time polymorphism and examples.",
        videos: [
          "https://www.youtube.com/embed/B_u56l1t0SU"
        ],
        docs: [
          { name: "Polymorphism GFG", url: "https://www.geeksforgeeks.org/polymorphism-in-java/" }
        ],
        worksheets: []
      }
    }
  },
  "Database Systems": {
    image: subjectIcons["Database Systems"],
    units: {
      "SQL Basics": {
        desc: "Core SQL concepts and RDBMS design.",
        videos: [
          "https://www.youtube.com/embed/HXV3zeQKqGY"
        ],
        docs: [
          { name: "W3Schools SQL", url: "https://www.w3schools.com/sql/" }
        ],
        worksheets: []
      },
      "Transactions": {
        desc: "Transactions, ACID, isolation levels.",
        videos: [
          "https://www.youtube.com/embed/5gAHSd_ooTs"
        ],
        docs: [
          { name: "GFG Transactions", url: "https://www.geeksforgeeks.org/dbms-transactions/" }
        ],
        worksheets: []
      },
      "Indexing": {
        desc: "Indexing and query optimization.",
        videos: [
          "https://www.youtube.com/embed/h5i9G_SAtpI"
        ],
        docs: [
          { name: "GFG Indexing", url: "https://www.geeksforgeeks.org/indexing-in-databases-set-1/" }
        ],
        worksheets: []
      }
    }
  },
  "Machine Learning": {
    image: subjectIcons["Machine Learning"],
    units: {
      "Introduction": {
        desc: "Supervised, unsupervised, and reinforcement learning.",
        videos: [
          "https://www.youtube.com/embed/GwIo3gDZCVQ"
        ],
        docs: [
          { name: "Andrew Ng ML", url: "https://www.coursera.org/learn/machine-learning" }
        ],
        worksheets: []
      },
      "Neural Networks": {
        desc: "Neural nets and deep learning basics.",
        videos: [
          "https://www.youtube.com/embed/aircAruvnKk"
        ],
        docs: [
          { name: "Deep Learning Book", url: "https://www.deeplearningbook.org/" }
        ],
        worksheets: []
      }
    }
  },
  "Artificial Intelligence": {
    image: subjectIcons["Artificial Intelligence"],
    units: {
      "Search Algorithms": {
        desc: "BFS, DFS, A*, greedy, and heuristics.",
        videos: [
          "https://www.youtube.com/embed/YraU52j3y8s"
        ],
        docs: [
          { name: "GFG AI Search", url: "https://www.geeksforgeeks.org/search-algorithms-in-ai/" }
        ],
        worksheets: []
      },
      "Knowledge Representation": {
        desc: "Logic, knowledge bases, expert systems.",
        videos: [
          "https://www.youtube.com/embed/kSpRNJZwZdA"
        ],
        docs: [
          { name: "KR in AI", url: "https://www.tutorialspoint.com/artificial_intelligence/artificial_intelligence_knowledge_representation.htm" }
        ],
        worksheets: []
      }
    }
  },
  "Web Development": {
    image: subjectIcons["Web Development"],
    units: {
      "HTML, CSS, JS": {
        desc: "Frontend essentials for modern websites.",
        videos: [
          "https://www.youtube.com/embed/UB1O30fR-EE"
        ],
        docs: [
          { name: "MDN Web Docs", url: "https://developer.mozilla.org/en-US/docs/Web/" }
        ],
        worksheets: []
      },
      "React.js": {
        desc: "Component-based UI and hooks.",
        videos: [
          "https://www.youtube.com/embed/bMknfKXIFA8"
        ],
        docs: [
          { name: "React Docs", url: "https://react.dev/" }
        ],
        worksheets: []
      }
    }
  },
  "Blockchain": {
    image: subjectIcons["Blockchain"],
    units: {
      "Basics": {
        desc: "Distributed ledgers, blocks, consensus.",
        videos: [
          "https://www.youtube.com/embed/SSo_EIwHSd4"
        ],
        docs: [
          { name: "IBM Blockchain", url: "https://www.ibm.com/topics/what-is-blockchain" }
        ],
        worksheets: []
      },
      "Smart Contracts": {
        desc: "Intro to Ethereum and smart contracts.",
        videos: [
          "https://www.youtube.com/embed/ZE2HxTmxfrI"
        ],
        docs: [
          { name: "Ethereum Docs", url: "https://ethereum.org/en/developers/docs/" }
        ],
        worksheets: []
      }
    }
  },
  "Cybersecurity": {
    image: subjectIcons["Cybersecurity"],
    units: {
      "Network Security": {
        desc: "Firewalls, VPNs, DDoS prevention.",
        videos: [
          "https://www.youtube.com/embed/3x3BUqAUSsg"
        ],
        docs: [
          { name: "GFG NetSec", url: "https://www.geeksforgeeks.org/introduction-to-network-security/" }
        ],
        worksheets: []
      },
      "Application Security": {
        desc: "Web attacks, secure coding, OWASP.",
        videos: [
          "https://www.youtube.com/embed/Ezzi6pI2N18"
        ],
        docs: [
          { name: "OWASP Top 10", url: "https://owasp.org/www-project-top-ten/" }
        ],
        worksheets: []
      }
    }
  },
  "Networking Systems": {
    image: subjectIcons["Networking Systems"],
    units: {
      "OSI & TCP/IP": {
        desc: "Network models, protocols and application.",
        videos: [
          "https://www.youtube.com/embed/JGJ5S9P4lcs"
        ],
        docs: [
          { name: "OSI Model", url: "https://www.geeksforgeeks.org/osi-model-seven-layers-of-computer-networks/" }
        ],
        worksheets: []
      },
      "Routing": {
        desc: "Routers, IP addressing, switching.",
        videos: [
          "https://www.youtube.com/embed/UchI9J-BUuc"
        ],
        docs: [
          { name: "Cisco Routing", url: "https://www.cisco.com/c/en_in/solutions/enterprise-networks/what-is-routing.html" }
        ],
        worksheets: []
      }
    }
  }
};

const Notes = () => {
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [resourceModal, setResourceModal] = useState(null);
  const [search, setSearch] = useState('');

  const filteredSubjects = Object.entries(resourcesData).filter(([subject]) =>
    subject.toLowerCase().includes(search.toLowerCase())
  );

  function renderSubjectCards() {
    return (
      <>
        <h1 style={styles.title}>🚀 Coding & CS Resource Arena (NextWave)</h1>
        <input
          type="text"
          placeholder="Search subjects..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={styles.input}
        />
        <div style={styles.cardGrid}>
          {filteredSubjects.map(([subject, data]) => (
            <div key={subject} style={styles.card} onClick={() => setSelectedSubject(subject)}>
              <div style={styles.cardImageWrap}>
                <img src={data.image} alt={subject} style={styles.cardImage} />
              </div>
              <h3 style={styles.cardTitle}>{subject}</h3>
              <div style={{ flex: 1 }}>
                <p style={styles.cardDesc}>
                  {Object.keys(data.units).slice(0, 3).join(', ')}
                  {Object.keys(data.units).length > 3 && "..."}
                </p>
              </div>
              <div style={{ display: "flex", justifyContent: "center", marginTop: 6 }}>
                <button style={styles.viewButton}>View Topics</button>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }

  function renderSubjectTopics() {
    const subject = resourcesData[selectedSubject];
    const filteredUnits = Object.entries(subject.units).filter(([unit, data]) =>
      unit.toLowerCase().includes(search.toLowerCase()) || data.desc.toLowerCase().includes(search.toLowerCase())
    );

    return (
      <div>
        <button onClick={() => { setSelectedSubject(null); setSearch(''); }} style={styles.backButton}>
          ⬅ Back to Subjects
        </button>
        <h2 style={styles.unitHeader}>{selectedSubject}: Topics</h2>
        <input
          type="text"
          placeholder="Search topics or descriptions..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={styles.input}
        />
        <div style={styles.notesWrapper}>
          {filteredUnits.map(([unit, data]) => (
            <div key={unit} style={styles.noteCard}>
              <h3 style={styles.noteCardTitle}>{unit}</h3>
              <p style={styles.noteCardDesc}>{data.desc}</p>
              <div style={{ display: "flex", justifyContent: "center", marginTop: "auto" }}>
                <button style={styles.viewButton} onClick={() => setResourceModal({ unit, data })}>
                  View Resource
                </button>
              </div>
            </div>
          ))}
          {!filteredUnits.length && (
            <div style={{ color: "#aaa", textAlign: "center", gridColumn: "1/-1" }}>No matching topics.</div>
          )}
        </div>
        {resourceModal && (
          <div style={styles.modalOverlay} onClick={() => setResourceModal(null)}>
            <div style={styles.modalBox} onClick={e => e.stopPropagation()}>
              <button style={styles.modalClose} onClick={() => setResourceModal(null)}>✖</button>
              <h2>{resourceModal.unit}</h2>
              <p>{resourceModal.data.desc}</p>
              {resourceModal.data.videos.length > 0 && (
                <div style={styles.videoGrid}>
                  {resourceModal.data.videos.map((vidSrc, i) => (
                    <iframe
                      key={i}
                      width="320"
                      height="180"
                      src={vidSrc}
                      frameBorder="0"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                      title={resourceModal.unit + "-vid" + i}
                      style={{ borderRadius: 8, margin: 10, minWidth: 220, background: "#19151e" }}
                    ></iframe>
                  ))}
                </div>
              )}
              {resourceModal.data.docs.length > 0 && (
                <>
                  <h4>📄 Documentation:</h4>
                  <ul style={{ textAlign: "left" }}>
                    {resourceModal.data.docs.map((link, idx) => (
                      <li key={idx}>
                        <a href={link.url} target="_blank" rel="noopener noreferrer" style={{ color: '#8e2de2' }}>{link.name}</a>
                      </li>
                    ))}
                  </ul>
                </>
              )}
              {resourceModal.data.worksheets.length > 0 && (
                <>
                  <h4>📝 Worksheets/Sheets:</h4>
                  <ul style={{ textAlign: "left" }}>
                    {resourceModal.data.worksheets.map((link, idx) => (
                      <li key={idx}>
                        <a href={link.url} target="_blank" rel="noopener noreferrer" style={{ color: '#a782f8' }}>{link.name}</a>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div style={styles.app}>
      {selectedSubject ? renderSubjectTopics() : renderSubjectCards()}
      <footer style={{ color: "#888", padding: 14, textAlign: "center", marginTop: 25 }}>
        © 2025 <span style={{color:'#8e2de2'}}>•</span> <b>NextWave</b>
      </footer>
    </div>
  );
};

// Styles
const styles = {
  app: {
    backgroundColor: '#08010a',
    color: '#fff',
    fontFamily: 'Segoe UI, sans-serif',
    padding: '30px 10px',
    minHeight: '100vh'
  },
  title: {
    fontSize: '2.2rem',
    textAlign: 'center',
    background: 'linear-gradient(90deg, #8e2de2, #4a00e0)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textShadow: "0 2px 16px #8e2de259",
    marginBottom: 25
  },
  input: {
    padding: '12px',
    borderRadius: '8px',
    border: '1.5px solid #4a00e0',
    backgroundColor: '#18111f',
    color: '#fff',
    width: '100%',
    marginBottom: '26px',
    fontSize: "1.07rem"
  },
  cardGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '23px',
    marginBottom: '4vh'
  },
  card: {
    backgroundColor: '#1a102b',
    borderRadius: '13px',
    padding: '17px 17px 18px 17px',
    minHeight: 248,
    boxShadow: '0 0 12px 2px rgba(138, 43, 226, 0.10)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    cursor: 'pointer',
    transition: 'transform 0.13s, box-shadow 0.13s',
  },
  cardImageWrap: {
    background: "#19151e",
    borderRadius: "10px",
    width: 70,
    height: 70,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10
  },
  cardImage: {
    width: 46,
    height: 46,
    borderRadius: 7,
    objectFit: "contain",
  },
  cardTitle: {
    fontSize: "1.12rem",
    margin: "7px 0 6px 0",
    letterSpacing: "0.5px",
    textAlign: "center"
  },
  cardDesc: {
    color: "#ddd",
    fontSize: "1rem",
    marginBottom: 0,
    marginTop: 2,
    minHeight: 32,
    textAlign: 'center'
  },
  viewButton: {
    marginTop: 0,
    padding: '9px 17px',
    background: 'linear-gradient(90deg, #8e2de2, #4a00e0)',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 500,
    fontSize: "1rem",
    letterSpacing: 0.25
  },
  backButton: {
    marginBottom: '17px',
    background: 'transparent',
    border: '1.5px solid #8e2de2',
    color: '#fff',
    borderRadius: '8px',
    padding: '8px 13px',
    cursor: 'pointer',
    fontWeight: 500,
    fontSize: "1rem"
  },
  unitHeader: {
    fontSize: '1.5rem',
    color: '#a782f8',
    marginBottom: '19px',
    textAlign: "center"
  },
  notesWrapper: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '20px'
  },
  noteCard: {
    backgroundColor: '#2d1458',
    padding: '15px',
    borderRadius: '10px',
    minHeight: "135px",
    boxShadow: '0 0 10px 0px rgba(138, 43, 226, 0.12)',
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    position: "relative"
  },
  noteCardTitle: {
    marginBottom: 5, fontSize: "1.08rem", color: "#fff"
  },
  noteCardDesc: {
    color: "#ddd", fontSize: "0.99rem", marginBottom: 12
  },
  modalOverlay: {
    position: "fixed",
    top: 0, left: 0, bottom: 0, right: 0,
    background: "rgba(20,4,40,0.85)",
    zIndex: 99,
    display: "flex", alignItems: "center", justifyContent: "center"
  },
  modalBox: {
    background: "#130023",
    padding: "32px 22px 24px 22px",
    borderRadius: 16,
    minWidth: 340, maxWidth: 430,
    boxShadow: "0 12px 32px 0 #400e545b",
    color: "#eee",
    position: "relative",
    maxHeight: "89vh",
    overflow: "auto"
  },
  modalClose: {
    position: "absolute",
    right: 18, top: 10,
    background: "rgba(80,80,90,0.0)",
    border: "none",
    color: "#bbb",
    fontSize: 22,
    cursor: "pointer"
  },
  videoGrid: {
    display: "flex", flexWrap: "wrap", gap: "5px", justifyContent: "center", alignItems: "center",
    marginBottom: "16px"
  }
};

export default Notes;
