const fs = require('fs');
const path = require('path');

// Read the resume.md file
const resumeMdPath = path.join(__dirname, '../src/data/resume.md');
const resumeContent = fs.readFileSync(resumeMdPath, 'utf8');

// Generate the resumeContent.js file
const outputPath = path.join(__dirname, '../src/data/resumeContent.js');
const outputContent = `// Resume content in markdown format
// This file is auto-generated from resume.md - DO NOT EDIT DIRECTLY
// Edit resume.md instead and run: npm run generate-resume
export const resumeMarkdown = \`${resumeContent}\`;
`;

fs.writeFileSync(outputPath, outputContent, 'utf8');
console.log('✓ Generated resumeContent.js from resume.md');
