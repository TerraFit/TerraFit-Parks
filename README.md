# TerraFit Parks Website Prototype

This is the React frontend for the TerraFit Parks website, designed to generate leads from potential investors and park operators.

## Project Context

This codebase represents the `website/` directory in the broader TerraFit Parks project structure.

### Application Architecture
- **App.tsx**: Main application component and client-side routing.
- **pages/**: Route components corresponding to the site map.
  - `Home.tsx`: Landing page with hero and system overview.
  - `Systems.tsx`: Detailed breakdown of Treetop, Adrenaline, and Mobile parks.
  - `Partnership.tsx`: The "Buy Now" flow, timeline, and investment packages.
  - `InvestmentGuide.tsx`: Digital prospectus with financial models.
  - `About.tsx`: Company history and partnership details.
  - `Contact.tsx`: Lead generation form.
- **components/**: Reusable UI elements.
  - `ROICalculator.tsx`: Interactive revenue estimation tool.
  - `Navbar.tsx` & `Footer.tsx`: Global navigation.
  - `Button.tsx`: Standardized call-to-action component.

## Recommended Full Repository Structure

For the complete business repository, the recommended structure is:

```text
terrafit-parks/
├── 📁 business-plan/
│   ├── investment-guide.md
│   ├── market-research.md
│   └── financial-models.xlsx
├── 📁 website/              <-- This React App
│   ├── 📁 content/          (Future: Extract hardcoded text here)
│   ├── 📁 design/           (Assets and brand guidelines)
│   └── ...
├── 📁 legal-partners/
│   ├── zupi-catalog.pdf
│   └── vevrca-info.md
├── 📁 marketing/
└── README.md
```

## Tech Stack
- React 19
- Tailwind CSS
- Lucide React (Icons)
- React Router DOM
