// src/components/Achievements.js
import React from 'react';
import style from './styles/About.module.css';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

const achievements = [
    {
        "title" : "Data Structure And Algorithms GFG",
        "imgUrl" : "https://www.synergisticit.com/wp-content/uploads/2020/09/Data-structures-and-algorithms-new.webp",
        "proofUrl": "https://www.geeksforgeeks.org/certificate/2f337d60f1c7a94ef3f05178d9255b7d"
    },
    {
        "title" : "Spring and Springboot Udemy",
        "imgUrl" : "https://www.programmerspoint.in/images/spring-boot-course.png",
        "proofUrl": "https://www.udemy.com/certificate/UC-562dee38-0625-46fa-8f1f-439539c0dbb4/"
    },
    {
        "title" : "5 Star @Codechef",
        "imgUrl" : "https://miro.medium.com/v2/resize:fit:1200/1*00C_a6JMPYeLdFyx0g28aQ.png",
        "proofUrl": "https://www.codechef.com/users/belalazam"
    },
    {
        "title" : "Specialist @Codeforces",
        "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Codeforces_logo.svg/2560px-Codeforces_logo.svg.png",
        "proofUrl": "https://codeforces.com/profile/Alexander7933"
    },
    {
        "title" : "Global Rank 8th @Codechef Contest",
        "imgUrl": "https://f.flockusercontent2.com/88e8a7b14890186532594fe3",
        "proofUrl": "https://www.codechef.com/rankings/START38B?itemsPerPage=100&order=asc&page=1&sortBy=rank"
    }

]


const Tile = styled(Box)(({ theme, imgUrl }) => ({
    backgroundImage: `url(${imgUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '200px',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
        transform: 'scale(0.97)',
    }
}));

const Title = styled(Typography)(({ theme }) => ({
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    color: '#fff',
    fontWeight: 'bold',
    width: '100%',
    textAlign: 'center',
    padding: theme.spacing(1),
}));

export default function Achievements() {

    const handleTileClick = (proofUrl) => {
        window.open(proofUrl, '_blank');
    };

  return (
    <section id="about" className="main">
    <div className={style.spotlight}>
      <div className={style.content}>
        <header className="major">
          <h2>Achievements / Certificates</h2>
        </header>
        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 2 }}>
            {achievements.map((achievement, index) => (
                <Tile
                    key={index}
                    imgUrl={achievement.imgUrl}
                    onClick={() => handleTileClick(achievement.proofUrl)}
                >
                    <Title variant="h6">{achievement.title}</Title>
                </Tile>
            ))}
        </Box>
      </div>
    </div>
  </section>
  );
}
