# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal resume website project for Zhang San (张三), an AI Agent developer. The project contains:

- **Resume Data**: Located in `docs/resume.md` - comprehensive professional profile including education, skills, and project experience
- **Job Requirements**: Located in `docs/jd.md` - AI Agent programmer position requirements from target company
- **Website Files**: Static HTML, CSS, and JavaScript files for the personal website

## Key Commands

**Local Development Server (Windows)**
```bash
# Start Python HTTP server for local development
python -m http.server 8000

# Alternative using Python 3
python3 -m http.server 8000

# Access website at http://localhost:8000
```

**Project Structure Commands**
```bash
# View project structure
dir /s

# Check file contents
type docs\resume.md
type docs\jd.md
```

## Project Architecture

**Content Sources**:
- `docs/resume.md`: Contains Zhang San's complete professional profile including education (AI Master's degree), technical skills (Python, LangChain, OpenAI API), and project experiences (智能电商客服Agent, 代码生成Copilot)
- `docs/jd.md`: Target position requirements for AI Agent programmer role

**Website Requirements**:
- Native HTML/CSS/JavaScript implementation (no frameworks)
- Responsive design for mobile and desktop
- Professional presentation highlighting relevant experience
- Emphasis on AI Agent development experience and LangChain expertise
- Integration of keywords from job description
- Python-served static site for local development

**Key Resume Highlights to Emphasize**:
- AI Agent development experience (智能电商客服Agent project)
- LangChain expertise and OpenAI API integration
- Large language model platform experience (OpenAI, 百度文心, 阿里通义)
- Python proficiency with 200+ LeetCode problems
- Technical blog writing and open source contributions
- Research background in NLP and dialogue systems

**Job Requirements Alignment**:
- Experience with conversational AI and Agent systems ✓
- Python programming skills ✓  
- NLP and machine learning project experience ✓
- Data analysis capabilities ✓
- Knowledge of LLM toolchains like LangChain ✓
- Experience with major LLM platforms ✓

## Development Notes

- Use semantic HTML5 for better SEO and accessibility
- Implement mobile-first responsive design
- Include smooth scrolling and subtle animations
- Ensure fast loading times with optimized assets
- Make content easily editable through clear placeholders
- Focus on professional presentation suitable for AI/tech industry