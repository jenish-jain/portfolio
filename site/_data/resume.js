const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

function parseExperienceSection(content) {
  const experiences = [];
  const companyBlocks = content.split(/^### /gm).filter(Boolean);

  companyBlocks.forEach((block) => {
    const lines = block.trim().split('\n');
    const [companyInfo] = lines;
    const [company, location] = companyInfo.split('|').map((s) => s.trim());

    const positionBlocks = lines.slice(1).join('\n').split(/^\*\*(?![*])/gm).filter(Boolean);

    positionBlocks.forEach((posBlock) => {
      const posLines = posBlock.trim().split('\n');
      const positionLine = posLines[0];

      const match = positionLine.match(/^(.+?)\*\*\s*\|\s*(.+)$/);
      if (!match) return;

      const [, title, period] = match;

      const highlights = [];
      for (let i = 1; i < posLines.length; i++) {
        const line = posLines[i].trim();
        if (line.startsWith('- ')) {
          highlights.push(line.substring(2));
        }
      }

      experiences.push({
        company,
        location,
        title: title.trim(),
        period: period.trim(),
        highlights,
      });
    });
  });

  return experiences;
}

function parseProjectsSection(content) {
  const projects = [];
  const projectBlocks = content.split(/^\*\*(?![*])/gm).filter(Boolean);

  projectBlocks.forEach((block) => {
    const lines = block.trim().split('\n');
    const titleLine = lines[0];

    const titleMatch = titleLine.match(/^(.+?)\*\*/);
    if (!titleMatch) return;

    const title = titleMatch[1].trim();
    let url = '';
    let description = '';

    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line.startsWith('[http')) {
        const urlMatch = line.match(/\[([^\]]+)\]\(([^)]+)\)/);
        if (urlMatch) {
          url = urlMatch[2];
        }
      } else if (line && !line.startsWith('[')) {
        description += (description ? ' ' : '') + line;
      }
    }

    projects.push({ title, url, description: description.trim() });
  });

  return projects;
}

function parseSkillsSection(content) {
  const skills = [];
  const lines = content.trim().split('\n');

  lines.forEach((line) => {
    if (line.startsWith('**')) {
      const match = line.match(/\*\*(.+?):\*\*\s*(.+)/);
      if (match) {
        const [, category, items] = match;
        skills.push({ category: category.trim(), items: items.trim() });
      }
    }
  });

  return skills;
}

function parseEducationSection(content) {
  const lines = content.trim().split('\n');

  if (lines.length === 0) return null;

  const firstLine = lines[0].replace(/^### /, '');
  const [school, location] = firstLine.split('|').map((s) => s.trim());

  let degree = '';
  let period = '';

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.startsWith('**')) {
      const match = line.match(/\*\*(.+?)\*\*\s*\|\s*(.+)/);
      if (match) {
        degree = match[1].trim();
        period = match[2].trim();
      }
    }
  }

  return { school, location, degree, period };
}

function parseResume(markdownContent) {
  const { data: metadata, content } = matter(markdownContent);
  const sections = content.split(/^## /gm).filter(Boolean);

  const resume = {
    personal: metadata,
    summary: '',
    experience: [],
    projects: [],
    skills: [],
    education: null,
  };

  sections.forEach((section) => {
    const lines = section.trim().split('\n');
    const sectionTitle = lines[0].trim();

    if (sectionTitle === 'Professional Summary') {
      resume.summary = lines.slice(1).join('\n').trim();
    } else if (sectionTitle === 'Experience' || sectionTitle === 'Professional Experience') {
      resume.experience = parseExperienceSection(lines.slice(1).join('\n'));
    } else if (sectionTitle === 'Personal Projects') {
      resume.projects = parseProjectsSection(lines.slice(1).join('\n'));
    } else if (sectionTitle === 'Skills' || sectionTitle === 'Technical Skills') {
      resume.skills = parseSkillsSection(lines.slice(1).join('\n'));
    } else if (sectionTitle === 'Education') {
      resume.education = parseEducationSection(lines.slice(1).join('\n'));
    }
  });

  return resume;
}

module.exports = function () {
  const resumeMdPath = path.join(__dirname, '../_includes/resume-source.md');
  const resumeContent = fs.readFileSync(resumeMdPath, 'utf8');
  return parseResume(resumeContent);
};
