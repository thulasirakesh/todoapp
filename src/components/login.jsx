import { useState } from "react"
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function Login () {
    return (
        <div className='min-h-screen w-full bg-[#E597E6] flex items-center justify-center'>
            <div className='bg-white w-full max-w-lg rounded-2xl shadow-xl p-8'>
                <h2 className="text-3xl font-bold mb-4">Login</h2>
                <form>
                    <TextField fullWidth label="User Name" id="fullWidth" />
                    <div className="flex mt-4">
                        <TextField fullWidth label="Password" id="fullWidth" type="password" />
                        <IconButton>
                            <VisibilityIcon />
                        </IconButton>
                    </div>
                </form>
            </div>
        </div>
    )
}