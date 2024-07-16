import React from 'react';
import style from './styles/About.module.css';
import { Timeline, TimelineItem, TimelineDot, TimelineConnector, TimelineContent, TimelineOppositeContent, TimelineSeparator } from "@mui/lab";
import { Paper, Typography, List, ListItem, Link } from '@mui/material';
import { styled } from '@mui/system';

const CompanyLogo = styled('img')({
  width: 100,
  height: 50,
  marginRight: 10,
});

const experiences = [
  {
    company: "Protium (Full Time)",
    logo: "https://protium.co.in/wp-content/uploads/2022/11/Logo-2363x1182-01.png",
    period: "Aug 2023 - Present",
    details: [
      "Developed and maintained central backend service, managing millions of requests daily.",
      "Accelerated old backend services, achieving nearly 4x speed improvement and significant time savings.",
      "Developed a full-fledged CRM app using Frappe Open Source."
    ],
    link: "https://protium.co.in/"
  },
  {
    company: "Protium (Internship)",
    logo: "https://protium.co.in/wp-content/uploads/2022/11/Logo-2363x1182-01.png",
    period: "Feb 2023 - July 2023",
    details: [
      "Wrote logic for seller yearly fee calculation for Flipkart, Pine Labs, and Meesho, handling monthly transactions worth crores of INR.",
      "Automated various manual tasks using Python scripts.",
      "Optimized API performance."
    ],
    link: "https://protium.co.in/"
  },
  {
    company: "Sapphire (Part Time)",
    logo: "https://media.licdn.com/dms/image/C4D0BAQFQuZiH2smR0g/company-logo_100_100/0/1676535010114/sapphirelpu_logo?e=1729123200&v=beta&t=DSgAE8TetdCiUX-PxsPO5v3Nt02aakrdA4o1-mxUtAg",
    period: "Jun 2022 - JAN 2023",
    details: [
      "Designed and hosted a competitive programming event.",
      "Created and reviewed programming contest problems."
    ],
    link: "https://www.google.com"
  }
];

export default function Experience() {
  return (
    <section id="experience" className="main">
      <div className={style.spotlight}>
        <div>
          <header className="major">
            <h2>Experience</h2>
          </header>
          <div>
            <Timeline>
              {experiences.map((experience, index) => (
                <TimelineItem key={index} style={{ marginBottom: '20px' }}>
                  <TimelineOppositeContent style={{ flex: 0.3 }}>
                    <Paper style={{ padding: '10px', display: 'flex', alignItems: 'center', width: '250px' }}>
                      <CompanyLogo style={{ marginLeft: '10px' }} src={experience.logo} alt={`${experience.company} logo`} />
                      <div>
                        <Typography variant="h6">
                          <Link href={experience.link} target="_blank" rel="noopener noreferrer">
                            {experience.company}
                          </Link>
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          {experience.period}
                        </Typography>
                      </div>
                    </Paper>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot />
                    {index < experiences.length - 1 && <TimelineConnector />}
                  </TimelineSeparator>
                  <TimelineContent style={{ flex: 0.7 }}>
                    <Paper elevation={3} style={{ padding: '10px' }}>
                      <List>
                        {experience.details.map((detail, detailIndex) => (
                          <ListItem key={detailIndex} style={{ paddingBottom: '5px' }}>
                            <Typography variant="body2" style={{ color: '#555' }}>{detail}</Typography>
                          </ListItem>
                        ))}
                      </List>
                    </Paper>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </div>
        </div>
      </div>
    </section>
  );
}
