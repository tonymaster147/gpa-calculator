# gpa-calculator

A free USA students **GPA calculator** built with **React + Vite**. Add your
courses, grades and credit hours to calculate semester and cumulative GPA on the
US 4.0 scale. Fully client-side — no backend, no database.

**Live demo:** https://tonymaster147.github.io/gpa-calculator/

## Features

- Course rows with name, grade and credit hours (add / remove)
- Switchable grading scales: letter with +/- (A+ = 4.3 … F = 0.0) or letter only
- Pass / No-Pass / Withdraw / Incomplete grades excluded from GPA
- Multiple semesters, each with its own GPA
- Optional prior / transfer GPA for cumulative GPA
- Live results, responsive layout

## Development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build -> dist/
npm run preview  # preview the production build
```

## Deployment

Pushing to `main` triggers the GitHub Actions workflow in
[.github/workflows/deploy.yml](.github/workflows/deploy.yml), which builds the
site and publishes it to GitHub Pages.
