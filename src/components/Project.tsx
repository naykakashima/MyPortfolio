import React from "react";
import '../assets/styles/Project.scss';
import Chip from '@mui/material/Chip';
import GitHubIcon from '@mui/icons-material/GitHub';

const labelsFirst = [
    "React",
    "TypeScript",
    "Flask",
    "Python",
    "PostgreSQL",
];

const labelsSecond = [
    ".NET 9.0",
    "ASP .NET Core",
    "Blazor",
    "C#"
];

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/naykakashima/MusicTracker" target="_blank" rel="noreferrer">
                    <h2>Music Tracker</h2>
                </a>

                <p>
                    A personalized Spotify analytics platform that securely connects via OAuth to deliver interactive visualizations of listening habits, genres, and audio features
                </p>

                <div className="flex-chips">
                    <span className="chip-title">Technologies: </span>
                    {labelsFirst.map((label, index) => (
                    <Chip key={index} className='chip' label={label} />
                    ))}
                </div>

                <a 
                    href="https://github.com/naykakashima/MusicTracker" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="github-icon"
                >
                    <GitHubIcon />
                </a>
            </div>

            <div className="project">
                <a href="https://github.com/naykakashima/SurveyBuilder.Blazor" target="_blank" rel="noreferrer">
                    <h2>SurveyBuilder.Blazor</h2>
                </a>

                <p>
                    Lightweight, extensible survey and form builder for Blazor that enables creating, editing, and managing surveys with JSON serialization and a polished MudBlazor UI.
                </p>
                <p>
                    Currently 1.6K Downloads on <a href="https://www.nuget.org/packages/SurveyBuilder" target="_blank" rel="noreferrer">NuGet</a>
                </p>

                <div className="flex-chips">
                    <span className="chip-title">Technologies: </span>
                    {labelsSecond.map((label, index) => (
                    <Chip key={index} className='chip' label={label} />
                    ))}
                </div>

                <a 
                    href="https://github.com/naykakashima/SurveyBuilder.Blazor" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="github-icon"
                >
                    <GitHubIcon />
                </a>
            </div>
            <div className="project">
                <a href="https://github.com/naykakashima/manual-csharp-projects" target="_blank" rel="noreferrer">
                    <h2>manual-csharp-projects</h2>
                </a>

                <p>
                    Collection of C# applications I built entirely without the use of AI tools.
                </p>
                <p>
                    These projects were created to reinforce my understanding of the language itself, object-oriented design, and programming principles.
                </p>

                <div className="flex-chips">
                    <span className="chip-title">Technologies: </span>
                    {labelsSecond.map((label, index) => (
                    <Chip key={index} className='chip' label={label} />
                    ))}
                </div>

                <a 
                    href="https://github.com/naykakashima/manual-csharp-projects" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="github-icon"
                >
                    <GitHubIcon />
                </a>
            </div>
        </div>
    </div>
    );
}

export default Project;