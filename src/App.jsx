// src/App.jsx
import React from 'react';
import { BriefcaseBusiness } from 'lucide-react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Content from "./components/content";

// This is your UI container. We are setting up the structure from image_2.png
function App() {
  return (
    <div className='min-h-screen w-full bg-[#E597E6] flex items-center justify-center'>
      <div className='bg-white w-full max-w-lg rounded-2xl shadow-xl p-8'>
        <div className='mb-4 flex gap-4 bg-[#F7F5F5] items-center justify-center'>
          <BriefcaseBusiness size={28} />
          <h4 className='text-2xl font-serif'>My To-Do App</h4>
        </div>
        <div className="mb-4 flex gap-4">
          <TextField fullWidth label="Search your task" id="fullWidth" />
          <Button sx={{fontSize: "8px"}} variant="contained" color="primary">
            Add Task
          </Button>
        </div>
        <Content />
      </div>  
    </div>
  );
}

export default App;