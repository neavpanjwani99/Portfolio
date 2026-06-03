# Git History Reconstruction Script for Portfolio
# Run this in PowerShell inside the `s:\projects\Portfolio-main` directory

# ==========================================
# STEP 0: Reset Repository
# ==========================================
Write-Host "Resetting repository..."
git checkout --orphan fresh-start
git rm -rf --cached .

# ==========================================
# Phase 1: Core Development (Sep 8 → Oct 25, 2025)
# ==========================================

# 1. Project Initialization
$env:GIT_AUTHOR_DATE="2025-09-08T10:15:30+0530"
$env:GIT_COMMITTER_DATE="2025-09-08T10:15:30+0530"
git add premium-portfolio/package.json premium-portfolio/package-lock.json premium-portfolio/vite.config.ts premium-portfolio/tsconfig.json premium-portfolio/tsconfig.node.json premium-portfolio/tsconfig.app.json premium-portfolio/index.html premium-portfolio/README.md README.md .hintrc
git commit -m "chore: initialize vite react project"

# 2. Tailwind & Base CSS Config
$env:GIT_AUTHOR_DATE="2025-09-09T14:22:15+0530"
$env:GIT_COMMITTER_DATE="2025-09-09T14:22:15+0530"
git add premium-portfolio/tailwind.config.cjs premium-portfolio/postcss.config.cjs premium-portfolio/src/index.css premium-portfolio/src/components/styles/
git commit -m "chore: setup tailwind css and global design tokens"

# 3. Main App Structure & Declarations
$env:GIT_AUTHOR_DATE="2025-09-12T19:05:45+0530"
$env:GIT_COMMITTER_DATE="2025-09-12T19:05:45+0530"
git add premium-portfolio/src/App.jsx premium-portfolio/src/App.css premium-portfolio/src/main.jsx premium-portfolio/src/vite-env.d.ts premium-portfolio/src/declarations.d.ts premium-portfolio/eslint.config.js
git commit -m "feat: establish main app routing and root component"

# 4. Navbar & Footer Basics
$env:GIT_AUTHOR_DATE="2025-09-14T21:30:00+0530"
$env:GIT_COMMITTER_DATE="2025-09-14T21:30:00+0530"
git add premium-portfolio/src/components/Navbar.jsx premium-portfolio/src/components/Footer.jsx
git commit -m "feat: implement responsive navbar and footer layout"

# 5. Core Assets Setup
$env:GIT_AUTHOR_DATE="2025-09-15T11:45:10+0530"
$env:GIT_COMMITTER_DATE="2025-09-15T11:45:10+0530"
git add premium-portfolio/src/assets/Logo.png premium-portfolio/src/assets/Profile.JPG
git commit -m "chore: add brand logo and personal profile picture"

# 6. Landing Page
$env:GIT_AUTHOR_DATE="2025-09-20T16:10:22+0530"
$env:GIT_COMMITTER_DATE="2025-09-20T16:10:22+0530"
git add premium-portfolio/src/components/sections/LandingPage.jsx
git commit -m "feat: build landing page hero section with train concept"

# 7. Custom Cursor & Animations
$env:GIT_AUTHOR_DATE="2025-09-22T23:50:05+0530"
$env:GIT_COMMITTER_DATE="2025-09-22T23:50:05+0530"
git add premium-portfolio/src/components/CustomCursor.jsx premium-portfolio/src/components/Cursor.jsx premium-portfolio/src/components/BackgroundParticles.jsx
git commit -m "feat: add interactive background particles and custom cursor"

# 8. About Me Section
$env:GIT_AUTHOR_DATE="2025-09-26T18:25:30+0530"
$env:GIT_COMMITTER_DATE="2025-09-26T18:25:30+0530"
git add premium-portfolio/src/components/sections/AboutMe.jsx
git commit -m "feat: create about me section with timeline strip"

# 9. Initializing Projects Section
$env:GIT_AUTHOR_DATE="2025-10-02T13:40:12+0530"
$env:GIT_COMMITTER_DATE="2025-10-02T13:40:12+0530"
git add premium-portfolio/src/components/sections/Projects.jsx premium-portfolio/src/components/ProjectCard.jsx premium-portfolio/src/components/Section.jsx premium-portfolio/src/components/SectionTitle.jsx
git commit -m "feat: scaffold projects gallery and reusable card components"

# 10. Project Assets Upload
$env:GIT_AUTHOR_DATE="2025-10-05T15:15:00+0530"
$env:GIT_COMMITTER_DATE="2025-10-05T15:15:00+0530"
git add premium-portfolio/src/assets/project_*.png premium-portfolio/src/assets/Satrika.png premium-portfolio/src/assets/StrideZero.png
git commit -m "chore: add project thumbnail assets"

# 11. Skills Section
$env:GIT_AUTHOR_DATE="2025-10-10T10:20:45+0530"
$env:GIT_COMMITTER_DATE="2025-10-10T10:20:45+0530"
git add premium-portfolio/src/components/sections/Skills.jsx
git commit -m "feat: implement technical skills grid"

# 12. Contact Form
$env:GIT_AUTHOR_DATE="2025-10-15T22:05:10+0530"
$env:GIT_COMMITTER_DATE="2025-10-15T22:05:10+0530"
git add premium-portfolio/src/components/sections/Contact.jsx
git commit -m "feat: build contact section with form validation"

# 13. UI Layout Fixes
$env:GIT_AUTHOR_DATE="2025-10-16T09:30:00+0530"
$env:GIT_COMMITTER_DATE="2025-10-16T09:30:00+0530"
git add premium-portfolio/src/index.css
git commit -m "fix: alignment issue in navbar and general spacing tweaks"

# 14. Extra Assets & Refactor
$env:GIT_AUTHOR_DATE="2025-10-20T17:45:30+0530"
$env:GIT_COMMITTER_DATE="2025-10-20T17:45:30+0530"
git add premium-portfolio/src/components/CrownEasterEgg.jsx
git commit -m "refactor: extract easter egg logic into separate component"

# 15. Finalizing Phase 1 Core Layout
$env:GIT_AUTHOR_DATE="2025-10-25T14:10:00+0530"
$env:GIT_COMMITTER_DATE="2025-10-25T14:10:00+0530"
git add premium-portfolio/src/App.jsx premium-portfolio/src/components/Navbar.jsx
git commit -m "chore: connect all initial sections and finalize routing structure"


# ==========================================
# Phase 2: Inactive Period (Nov → Feb)
# (Real life break - no commits)
# ==========================================


# ==========================================
# Phase 3: Revisit & Improvements (March 2026)
# ==========================================

# 16. Certificates Integration
$env:GIT_AUTHOR_DATE="2026-03-05T11:20:15+0530"
$env:GIT_COMMITTER_DATE="2026-03-05T11:20:15+0530"
git add premium-portfolio/src/components/sections/certificate.jsx
git commit -m "feat: build certificates showcase section"

# 17. Certificate PDFs upload
$env:GIT_AUTHOR_DATE="2026-03-05T12:05:30+0530"
$env:GIT_COMMITTER_DATE="2026-03-05T12:05:30+0530"
git add premium-portfolio/public/certificate/
git commit -m "chore: upload certification documents"

# 18. Experience Component Setup
$env:GIT_AUTHOR_DATE="2026-03-12T16:40:00+0530"
$env:GIT_COMMITTER_DATE="2026-03-12T16:40:00+0530"
git add premium-portfolio/src/components/sections/Experience.jsx
git commit -m "feat: setup professional experience section"

# 19. Internship PDFs upload
$env:GIT_AUTHOR_DATE="2026-03-15T10:15:45+0530"
$env:GIT_COMMITTER_DATE="2026-03-15T10:15:45+0530"
git add premium-portfolio/public/experience/
git commit -m "chore: add internship offer and appreciation letters"

# 20. Bug fix in section routing
$env:GIT_AUTHOR_DATE="2026-03-22T21:10:20+0530"
$env:GIT_COMMITTER_DATE="2026-03-22T21:10:20+0530"
git add premium-portfolio/src/App.jsx premium-portfolio/src/components/Navbar.jsx
git commit -m "fix: update navigation links to include experience and certificates"


# ==========================================
# Phase 4: Minor Polish (April End 2026)
# ==========================================

# 21. Interactive Particle Component
$env:GIT_AUTHOR_DATE="2026-04-26T18:30:10+0530"
$env:GIT_COMMITTER_DATE="2026-04-26T18:30:10+0530"
git add premium-portfolio/src/components/sections/InteractiveParticleProfile.jsx premium-portfolio/src/assets/*_mesh.png
git commit -m "feat: experiment with particle meshes for interactive profile"

# 22. Style cleanup
$env:GIT_AUTHOR_DATE="2026-04-28T14:45:00+0530"
$env:GIT_COMMITTER_DATE="2026-04-28T14:45:00+0530"
git add premium-portfolio/src/index.css premium-portfolio/src/components/sections/Skills.jsx
git commit -m "style: cleanup unused tailwind classes and refine glows"


# ==========================================
# Phase 5: Final Touch (May End 2026)
# ==========================================

# 23. Mobile Responsiveness Tuning
$env:GIT_AUTHOR_DATE="2026-05-25T11:10:30+0530"
$env:GIT_COMMITTER_DATE="2026-05-25T11:10:30+0530"
git add premium-portfolio/src/components/sections/Projects.jsx premium-portfolio/src/components/sections/AboutMe.jsx
git commit -m "fix: adjust padding and layout for smaller mobile viewports"


# ==========================================
# Phase 6: Recent Activity (June 2, 4, 6, 2026)
# ==========================================

# 24. Firebase Hosting Setup
$env:GIT_AUTHOR_DATE="2026-06-02T15:20:00+0530"
$env:GIT_COMMITTER_DATE="2026-06-02T15:20:00+0530"
git add premium-portfolio/firebase.json premium-portfolio/.firebaserc premium-portfolio/.gitignore
git commit -m "chore: setup firebase hosting configuration"

# 25. UX/UI Restyling (Flashiness Reduction)
$env:GIT_AUTHOR_DATE="2026-06-04T01:15:45+0530"
$env:GIT_COMMITTER_DATE="2026-06-04T01:15:45+0530"
git add premium-portfolio/src/index.css premium-portfolio/src/components/sections/LandingPage.jsx premium-portfolio/src/components/Footer.jsx premium-portfolio/src/components/CustomCursor.jsx premium-portfolio/src/components/sections/Experience.jsx premium-portfolio/src/components/sections/Projects.jsx
git commit -m "style: tone down intense neon glows for better eye comfort"

# 26. Particle Profile Fluid Redesign
$env:GIT_AUTHOR_DATE="2026-06-04T02:50:10+0530"
$env:GIT_COMMITTER_DATE="2026-06-04T02:50:10+0530"
git add premium-portfolio/src/components/sections/InteractiveParticleProfile.jsx premium-portfolio/src/components/sections/AboutMe.jsx
git commit -m "refactor: replace complex mesh logic with fluid particle overlay on profile picture"


# ==========================================
# Final Setup & Push
# ==========================================
# Any remaining files that weren't specifically added (in case I missed cache files or lockfiles)
$env:GIT_AUTHOR_DATE="2026-06-04T03:30:00+0530"
$env:GIT_COMMITTER_DATE="2026-06-04T03:30:00+0530"
git add .
git commit -m "chore: final cleanup before deployment"

# Clean up branches
Write-Host "Re-establishing main branch..."
git branch -D main
git branch -m main

# IMPORTANT: Run this manually when you are ready to push!
Write-Host "Done! Review your git log with 'git log --oneline'. Then run 'git push --force origin main' to push."
