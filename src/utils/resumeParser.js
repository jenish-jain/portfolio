import matter from 'gray-matter';

/**
 * Parse resume markdown file and return structured data
 * @param {string} markdownContent - Raw markdown content
 * @returns {object} Structured resume data
 */
export function parseResume(markdownContent) {
  // Parse front matter and content
  const { data: metadata, content } = matter(markdownContent);

  // Split content into sections
  const sections = content.split(/^## /gm).filter(Boolean);

  const resume = {
    personal: metadata,
    experience: [],
    projects: [],
    skills: [],
    education: null
  };

  sections.forEach(section => {
    const lines = section.trim().split('\n');
    const sectionTitle = lines[0].trim();

    if (sectionTitle === 'Experience') {
      resume.experience = parseExperienceSection(lines.slice(1).join('\n'));
    } else if (sectionTitle === 'Personal Projects') {
      resume.projects = parseProjectsSection(lines.slice(1).join('\n'));
    } else if (sectionTitle === 'Skills') {
      resume.skills = parseSkillsSection(lines.slice(1).join('\n'));
    } else if (sectionTitle === 'Education') {
      resume.education = parseEducationSection(lines.slice(1).join('\n'));
    }
  });

  return resume;
}

/**
 * Parse Experience section
 */
function parseExperienceSection(content) {
  const experiences = [];
  const companyBlocks = content.split(/^### /gm).filter(Boolean);

  companyBlocks.forEach(block => {
    const lines = block.trim().split('\n');
    const [companyInfo] = lines;
    const [company, location] = companyInfo.split('|').map(s => s.trim());

    // Find all positions within this company
    const positionBlocks = lines.slice(1).join('\n').split(/^\*\*(?![\*])/gm).filter(Boolean);

    positionBlocks.forEach(posBlock => {
      const posLines = posBlock.trim().split('\n');
      const positionLine = posLines[0];

      // Extract position title and date
      const match = positionLine.match(/^(.+?)\*\*\s*\|\s*(.+)$/);
      if (!match) return;

      const [, title, period] = match;

      // Extract bullet points
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
        highlights
      });
    });
  });

  return experiences;
}

/**
 * Parse Projects section
 */
function parseProjectsSection(content) {
  const projects = [];
  const projectBlocks = content.split(/^### /gm).filter(Boolean);

  projectBlocks.forEach(block => {
    const lines = block.trim().split('\n');
    const title = lines[0].trim();

    let url = '';
    let description = '';

    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line.startsWith('[http')) {
        // Extract URL from markdown link
        const urlMatch = line.match(/\[([^\]]+)\]\(([^\)]+)\)/);
        if (urlMatch) {
          url = urlMatch[2];
        }
      } else if (line && !line.startsWith('[')) {
        description += (description ? ' ' : '') + line;
      }
    }

    projects.push({ title, url, description });
  });

  return projects;
}

/**
 * Parse Skills section
 */
function parseSkillsSection(content) {
  const skills = [];
  const lines = content.trim().split('\n');

  lines.forEach(line => {
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

/**
 * Parse Education section
 */
function parseEducationSection(content) {
  const lines = content.trim().split('\n');

  if (lines.length === 0) return null;

  const firstLine = lines[0].replace(/^### /, '');
  const [school, location] = firstLine.split('|').map(s => s.trim());

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
