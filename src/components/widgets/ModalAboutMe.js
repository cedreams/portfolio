
import React, {useEffect} from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function ModalAboutMe({ open, setOpen }) {

    useEffect( () => {
        const body = document.body;
        const about = document.querySelector('.more-about-me-container');
        if (open) {
            body.style.overflowY = 'hidden';
            about.style.overflowY = 'scroll';
        } else {
            body.style.overflowY = 'scroll';
            about.style.overflowY = 'hidden';
        }
    }, [open]);

    return (
        <div style={{ display: open ? 'block' : 'none' }} className="more-about-me-container">
            <div className="more-about-me-content">
                <ArrowBackIcon
                    onClick={() => { setOpen(false) }}
                    style={{ display: 'block', cursor: 'pointer', fontSize: '50px' }} />
                <img className="more-about-me-cedpic" src="/assets/images/cedric-pic.jpeg" />
                <div className="title">Cédric Thonus</div>
                <div className="desc">
                    I am currently a student at the University of Mons to obtain a Master's degree in Computer Science. I completed a bachelor's degree in computer science in 2021.
                    Alongside my studies, I provide my services and knowledge to my clients.
                    Thanks to studies and my professional experiences, I have developed my knowledge in programming, database management, project analysis, ...
                </div>
            </div>

        </div >
    );
}