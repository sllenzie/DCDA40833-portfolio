# DCDA 40833 Skills Portfolio

**Author:** Stella Lenzie  
**Course:** DCDA 40833 - Senior Capstone  
**Semester:** Spring 2026  
**Institution:** Texas Christian University

## Overview

This repository contains a comprehensive skills portfolio showcasing work completed throughout the DCDA 40833 senior capstone course. The portfolio demonstrates proficiency in web development, data visualization, AI evaluation, interactive mapping, and design principles developed throughout my Digital Culture and Data Analytics career at TCU.

The portfolio is a fully responsive website featuring multiple lab assignments that highlight various technical skills including HTML5, CSS3, JavaScript, Python, Tableau, and interactive mapping with Folium/Leaflet.

## About the Author

**Stella Lenzie** is a senior at Texas Christian University, pursuing a double major in Theatre and Digital Culture and Data Analytics, with a minor in Arts Leadership and Entrepreneurship. With a 3.8 GPA (as of Fall 2025), Stella is passionate about live entertainment and aims to grow its impact on audiences through innovative digital campaigns and data-driven decision making.

**Interests:** Live entertainment, digital marketing, data analytics, theatrical production, audience engagement

**Goals:** To integrate skills in digital culture, data analytics, and entertainment to create meaningful and impactful projects that challenge conventional thinking.

## Live Website

Visit the portfolio at: [https://sllenzie.github.io/DCDA40833-portfolio/](https://sllenzie.github.io/DCDA40833-portfolio/)

## Portfolio Contents

### Lab Assignments

#### **Lab 2: AI Tool Evaluation**
*File:* [lab02.html](lab02.html)

A comprehensive analysis comparing three AI image generation tools (Google Gemini's NanoBanana, Venice.ai, and Leonardo.ai) using identical prompts to generate images of a colonial-style house. The evaluation examines:
- Image quality and accuracy
- Iterative refinement capabilities
- AI-generated artifacts and telltale signs
- User experience and token-based pricing models
- Comparative analysis of output styles

**Key Insight:** Early iterations often produce better results than over-refined versions, and AI tools vary significantly in their interpretation of the same prompt.

#### **Lab 3: Tufte Critique (Visualization Critique)**
*File:* [lab03.html](lab03.html)

An artistic data visualization critique analyzing the "Wet Feet" infographic from the Data to Art website. The critique applies Edward Tufte's principles to evaluate:
- Data representation effectiveness
- Color theory and emotional impact
- Legend clarity and accessibility
- Aesthetic vs. functional balance
- Audience understanding and call-to-action

**Key Finding:** Beautiful visualizations don't always communicate urgency effectively; the shell spiral representing flood risk was aesthetically pleasing but lacked clear actionable insights.

#### **Lab 4: Tableau Visualization**
*File:* [lab04.html](lab04.html)

An interactive data visualization project analyzing California homicide rates using FBI Crime Data Explorer statistics. The Tableau dashboard explores relationships between:
- Victim and offender ages
- Crime location types (residence vs. public spaces)
- Relationship status between parties
- Temporal patterns (2014-2024)

**Technical Challenges:** Data formatting issues with Excel auto-formatting age ranges as dates; learning curve with Tableau's string vs. numeric data interpretation.

**Embedded Visualization:** Includes live Tableau Public embed showing circular graph of crime location by age demographics.

#### **Lab 5: Vibe Coding**
*File:* [lab05.html](lab05.html)

A deep dive into AI-assisted web development using GitHub Copilot to enhance the portfolio's user experience. Implemented features include:

**Features Added:**
- **Responsive Hamburger Menu:** Mobile-friendly navigation with sticky positioning
- **Image Carousel:** Auto-playing carousel with manual controls, dot indicators, and ARIA labels for accessibility
- **Back-to-Top Button:** Smooth-scroll functionality that appears after scrolling 300px
- **JavaScript Interactivity:** Custom scripts for all dynamic elements

**Technologies:** HTML5, CSS3, JavaScript (ES6), GitHub Copilot

**Reflection:** Explores ethical considerations of AI-assisted coding, the importance of understanding underlying code, and the learning curve of JavaScript frameworks.

#### **Lab 6: Lenzie Who Lunches and Dinners**
*File:* [lab06.html](lab06.html)

An interactive Folium map featuring 60+ restaurant reviews from Southern California's South Bay area (with select locations in Hollywood and Malibu). This ambitious project combines data collection, geocoding, custom map styling, and personal restaurant critiques.

**Features:**
- **Custom MapBox Style:** Pink and green color palette inspired by Lilly Pulitzer prints, matching personal brand
- **Comprehensive Data:** Restaurant name, address, cuisine type, recommended attire, personal reviews, photos, and website links
- **Geocoding:** Python script to convert addresses to coordinates
- **Interactive Markers:** Click-through popups with detailed information
- **Responsive Design:** 825px height on desktop, 400px on mobile

**Data Categories:**
- Venue name and address
- Cuisine type
- Dress code recommendations
- Personal dining experiences and menu recommendations
- Exterior/interior photography
- Direct website links

**Technologies:** Python, Folium, Leaflet.js, MapBox API, CSV data management

**Origin Story:** Revived from a childhood food blog concept, this project showcases both technical skills and personal passion for culinary exploration.

## Technologies Used

### Frontend
- **HTML5:** Semantic markup, accessibility features (ARIA labels)
- **CSS3:** Custom properties (CSS variables), Flexbox, Grid layout, responsive design
- **JavaScript (ES6):** DOM manipulation, event listeners, smooth scrolling, carousel logic

### Data & Visualization
- **Tableau Public:** Interactive data visualizations
- **Python 3:** Data processing, geocoding, map generation
- **Folium:** Python library for Leaflet.js maps
- **Leaflet.js:** Interactive map rendering
- **MapBox API:** Custom map tile styling

### Development Tools
- **GitHub Pages:** Static site hosting
- **GitHub Copilot:** AI-assisted code generation (Lab 5)
- **VS Code:** Primary development environment
- **Git:** Version control

### Data Sources
- **FBI Crime Data Explorer:** California homicide statistics
- **MapBox:** Custom map styling and tiles
- **Personal Data Collection:** Restaurant reviews and ratings

## File Structure

```
DCDA40833-portfolio/
├── index.html                  # Homepage with navigation and about section
├── lab02.html                  # AI Tool Evaluation
├── lab03.html                  # Tufte Critique
├── lab04.html                  # Tableau Visualization
├── lab05.html                  # Vibe Coding reflection
├── lab06.html                  # Lenzie Who Lunches and Dinners map
├── lab06.html.backup           # Backup of map page
├── README.md                   # This file
│
├── css/
│   └── styles.css              # Main stylesheet with CSS variables
│
├── js/
│   ├── menu.js                 # Hamburger menu functionality
│   ├── carousel.js             # Image carousel logic
│   └── back-to-top.js          # Back-to-top button behavior
│
├── images/
│   ├── new-headshot2025.jpeg   # Professional headshot
│   ├── humancenteredai-winners.jpeg
│   ├── stellawalk2026.jpg
│   ├── banana1.png - banana3.png   # AI tool outputs (Gemini)
│   ├── venice1.png - venice3.png   # AI tool outputs (Venice.ai)
│   ├── leonardo1.jpg - leonardo2.jpg  # AI tool outputs (Leonardo.ai)
│   ├── wetfeet-01.png          # Tufte critique visualization
│   ├── printspo.jpg            # Lilly Pulitzer print inspiration
│   └── printspo3.jpg           # Additional print inspiration
│
├── data/
│   ├── lenzieswholunchanddinner.csv           # Original restaurant data
│   ├── lenzieswholunchanddinner_geocoded.csv  # Data with coordinates
│   ├── lenzieswholunchanddinner.html          # Generated map HTML
│   └── lenzieswholunchanddinner_map_custom.html  # Custom styled map
│
└── python/
    ├── geocodelenzieswholunchanddinner.py     # Geocoding script
    └── custommapboxstyle.py                   # MapBox style configuration
```

## Design Features

### Color Palette
The portfolio uses a cohesive pink and green color scheme inspired by Lilly Pulitzer and Vera Bradley patterns:

```css
--primary-color: #791960;      /* Dark pink */
--secondary-color: #fb74e7;    /* Light pink */
--accent-color: #ff6a99;       /* Bright pink accent */
--text-color: #333;            /* Dark gray */
--text-secondary: #64748b;     /* Lighter gray */
--bg-color: #f4f4f4;           /* Light background */
--white: #ffffff;
```

### Responsive Design
- Mobile-first approach
- Hamburger menu for screens < 768px
- Flexible grid layouts
- Responsive images and embeds
- Touch-friendly interactive elements

### Accessibility Features
- Semantic HTML5 elements (`<nav>`, `<header>`, `<main>`, `<section>`, `<footer>`)
- ARIA labels for interactive elements
- Sufficient color contrast ratios
- Keyboard navigation support
- Alt text for all images
- Smooth scroll behavior

### Interactive Elements
1. **Sticky Navigation Bar** - Always accessible at top of page
2. **Hamburger Menu** - Collapsible mobile navigation
3. **Image Carousel** - Auto-playing with manual controls (5-second intervals)
4. **Back-to-Top Button** - Appears after 300px scroll
5. **Portfolio Cards** - Hover effects with smooth transitions
6. **Interactive Map** - Zoom, pan, and clickable markers

## How to Use

### Viewing the Portfolio
Simply visit the GitHub Pages URL or open `index.html` in a web browser.

### Local Development
1. Clone the repository:
   ```bash
   git clone https://github.com/sllenzie/DCDA40833-portfolio.git
   ```

2. Navigate to the project directory:
   ```bash
   cd DCDA40833-portfolio
   ```

3. Open `index.html` in your browser or use a local server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js
   npx http-server
   ```

4. Visit `http://localhost:8000` in your browser

### Working with the Restaurant Map

To modify or update the restaurant map:

1. Edit `data/lenzieswholunchanddinner.csv` with new restaurant data
2. Run the geocoding script:
   ```bash
   python python/geocodelenzieswholunchanddinner.py
   ```
3. Apply custom styling:
   ```bash
   python python/custommapboxstyle.py
   ```
4. The updated map will be integrated into `lab06.html`

## Key Learning Outcomes

Throughout this portfolio, the following skills and competencies were developed:

### Technical Skills
- Semantic HTML5 markup and accessibility
- Advanced CSS3 (Grid, Flexbox, custom properties)
- JavaScript DOM manipulation and event handling
- Python data processing and API integration
- Tableau data visualization
- Folium/Leaflet.js interactive mapping
- MapBox custom styling
- Git version control and GitHub Pages deployment
- Responsive web design principles

### Analytical Skills
- Critical evaluation of AI tools and outputs
- Data visualization critique using Tufte's principles
- Pattern recognition in crime statistics
- Comparative analysis methodologies
- User experience assessment

### Professional Skills
- Project documentation and portfolio curation
- Technical writing and reflection
- Design thinking and aesthetic sensibility
- Problem-solving and debugging
- Self-directed learning with AI assistance
- Ethical considerations in AI-assisted development

## Credits & Acknowledgments

### Course Instructor
Dr. Curt Rode and Dr. Sean Crotty, DCDA 40833 - Texas Christian University

### Tools & Services
- [GitHub Pages](https://pages.github.com/) - Website hosting
- [Tableau Public](https://public.tableau.com/) - Data visualization platform
- [MapBox](https://www.mapbox.com/) - Custom map tiles
- [Leaflet.js](https://leafletjs.com/) - Interactive mapping library
- [Folium](https://python-visualization.github.io/folium/) - Python mapping wrapper
- [FBI Crime Data Explorer](https://cde.ucr.cjis.gov/) - Crime statistics
- [Data to Art](https://www.data-to-art.com/) - Visualization inspiration

### AI Tools (Lab 2)
- Google Gemini's NanoBanana
- Venice.ai
- Leonardo.ai

### Development Tools
- [GitHub Copilot](https://github.com/features/copilot) - AI coding assistant (Lab 5 only)
- [Visual Studio Code](https://code.visualstudio.com/) - Code editor
- Git - Version control

### Design Inspiration
- Lilly Pulitzer print patterns
- Vera Bradley design aesthetics
- Edward Tufte's principles of graphical excellence

## License

This portfolio is created for educational purposes as part of DCDA 40833 coursework at Texas Christian University. All original content © 2026 Stella Lenzie.

Restaurant reviews and opinions are personal experiences and may not reflect current menu offerings or establishment conditions.

## Contact

**Stella Lenzie**  
Texas Christian University  
Digital Culture and Data Analytics | Theatre  

GitHub: [@sllenzie](https://github.com/sllenzie)  
Portfolio: [https://sllenzie.github.io/DCDA40833-portfolio/](https://sllenzie.github.io/DCDA40833-portfolio/)

---

*Last Updated: March 2026*
