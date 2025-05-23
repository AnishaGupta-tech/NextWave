import React, { useState, useRef, useEffect } from 'react';
import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Button,
  IconButton
} from '@mui/material';
import {
  Delete as DeleteIcon,
  Edit as EditIcon,
  Save as SaveIcon,
  Add as AddIcon
} from '@mui/icons-material';
import html2canvas from 'html2canvas';

const AttendanceTracker = () => {
  const exportRef = useRef();

  const [subjects, setSubjects] = useState(() => {
    const saved = localStorage.getItem('attendanceSubjects');
    return saved
      ? JSON.parse(saved)
      : [
          { id: 1, name: 'Mathematics', totalClasses: 30, attended: 25 },
          { id: 2, name: 'Physics', totalClasses: 25, attended: 20 },
          { id: 3, name: 'Chemistry', totalClasses: 28, attended: 22 }
        ];
  });

  const [newSubject, setNewSubject] = useState({ name: '', totalClasses: '', attended: '' });
  const [editId, setEditId] = useState(null);
  const [editedSubject, setEditedSubject] = useState({});
  const [safePercentage, setSafePercentage] = useState(75);

  useEffect(() => {
    localStorage.setItem('attendanceSubjects', JSON.stringify(subjects));
  }, [subjects]);

  const handleAddSubject = () => {
    if (!newSubject.name || !newSubject.totalClasses || !newSubject.attended) return;

    const newId = subjects.length ? subjects[subjects.length - 1].id + 1 : 1;
    setSubjects([
      ...subjects,
      {
        id: newId,
        name: newSubject.name,
        totalClasses: parseInt(newSubject.totalClasses),
        attended: parseInt(newSubject.attended)
      }
    ]);
    setNewSubject({ name: '', totalClasses: '', attended: '' });
  };

  const handleDelete = (id) => {
    setSubjects(subjects.filter((sub) => sub.id !== id));
  };

  const handleEdit = (subject) => {
    setEditId(subject.id);
    setEditedSubject({ ...subject });
  };

  const handleSave = () => {
    setSubjects(subjects.map((sub) => (sub.id === editId ? editedSubject : sub)));
    setEditId(null);
    setEditedSubject({});
  };

  const handleChange = (e, field) => {
    setEditedSubject({ ...editedSubject, [field]: e.target.value });
  };

  const downloadAsImage = async () => {
    const canvas = await html2canvas(exportRef.current);
    const link = document.createElement('a');
    link.download = 'attendance.png';
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
        🎓 College Attendance Tracker
      </Typography>

      {/* Safe Percentage Input */}
      <Box sx={{ mb: 3, display: 'flex', alignItems: 'center', gap: 2 }}>
        <TextField
          label="Safe Attendance %"
          type="number"
          value={safePercentage}
          onChange={(e) => setSafePercentage(Number(e.target.value))}
        />
      </Box>

      {/* Add Subject Form */}
      <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
        <TextField
          label="Subject"
          value={newSubject.name}
          onChange={(e) => setNewSubject({ ...newSubject, name: e.target.value })}
        />
        <TextField
          label="Total Classes"
          type="number"
          value={newSubject.totalClasses}
          onChange={(e) => setNewSubject({ ...newSubject, totalClasses: e.target.value })}
        />
        <TextField
          label="Attended"
          type="number"
          value={newSubject.attended}
          onChange={(e) => setNewSubject({ ...newSubject, attended: e.target.value })}
        />
        <Button variant="contained" color="primary" onClick={handleAddSubject} startIcon={<AddIcon />}>
          Add
        </Button>
      </Box>

      {/* Attendance Table */}
      <Paper ref={exportRef} elevation={3} sx={{ p: 2 }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><strong>Subject</strong></TableCell>
                <TableCell align="right"><strong>Total</strong></TableCell>
                <TableCell align="right"><strong>Attended</strong></TableCell>
                <TableCell align="right"><strong>Percentage</strong></TableCell>
                <TableCell align="center"><strong>Actions</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {subjects.map((sub) => {
                const percent =
                  sub.totalClasses > 0 ? (sub.attended / sub.totalClasses) * 100 : 0;
                const isSafe = percent >= safePercentage;

                return (
                  <TableRow key={sub.id}>
                    <TableCell>
                      {editId === sub.id ? (
                        <TextField
                          value={editedSubject.name}
                          onChange={(e) => handleChange(e, 'name')}
                          size="small"
                        />
                      ) : (
                        sub.name
                      )}
                    </TableCell>
                    <TableCell align="right">
                      {editId === sub.id ? (
                        <TextField
                          type="number"
                          value={editedSubject.totalClasses}
                          onChange={(e) => handleChange(e, 'totalClasses')}
                          size="small"
                        />
                      ) : (
                        sub.totalClasses
                      )}
                    </TableCell>
                    <TableCell align="right">
                      {editId === sub.id ? (
                        <TextField
                          type="number"
                          value={editedSubject.attended}
                          onChange={(e) => handleChange(e, 'attended')}
                          size="small"
                        />
                      ) : (
                        sub.attended
                      )}
                    </TableCell>
                    <TableCell align="right">
                      {sub.totalClasses > 0 ? (
                        <>
                          {percent.toFixed(1)}%{' '}
                          {isSafe ? (
                            <span style={{ color: 'green', fontWeight: 500 }}>✅ Safe</span>
                          ) : (
                            <span style={{ color: 'orange', fontWeight: 500 }}>⚠️ Low</span>
                          )}
                        </>
                      ) : (
                        'N/A'
                      )}
                    </TableCell>
                    <TableCell align="center">
                      {editId === sub.id ? (
                        <IconButton color="success" onClick={handleSave}>
                          <SaveIcon />
                        </IconButton>
                      ) : (
                        <IconButton color="primary" onClick={() => handleEdit(sub)}>
                          <EditIcon />
                        </IconButton>
                      )}
                      <IconButton color="error" onClick={() => handleDelete(sub.id)}>
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      {/* Download Button */}
      <Box sx={{ mt: 3 }}>
        <Button variant="outlined" onClick={downloadAsImage}>
          📥 Download as Image
        </Button>
      </Box>
    </Box>
  );
};

export default AttendanceTracker;
