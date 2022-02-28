import React from 'react';
import '../App.css';
import '../style/Footer.css';

export default function Footer() {
    return (
        <>
            <div className="footer">

                <div className="namebox">
                    <p className="made">made by</p>
                    <p className="name">Sarthak Bhardwaj</p>
                </div>

                <div className="social">

                    <div className="linkedin">
                        <a href="https://www.linkedin.com/in/sarthak-bhardwaj-2a65b9217/" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-linkedin fa-2xl"></i>
                        </a>
                    </div>
                    <p className='line'>---</p>
                    <div className="github">
                        <a href="https://github.com/sarthak713" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-github-square fa-2xl"></i>
                        </a>
                    </div>
                    <p className='line'>---</p>
                    <div className="instagram">
                        <a href="https://www.instagram.com/ssarthakbhardwaj/" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-instagram-square fa-2xl"></i>
                        </a>
                    </div>

                </div>
            </div>

        </>
    )
}
