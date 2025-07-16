<link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700&display=swap" rel="stylesheet">

<div style="font-family: 'Raleway', sans-serif">

# <div style="color:#56ACBD;"> Spidr Coding Challenge</div>

A React application built with TypeScript and Vite, featuring a multi-step interest form following Spidr Design's brand style.

## <div style="color:#56ACBD;"> Prerequisites

- Node.js 16+
- npm (version 7+)
- Git

## <div style="color:#56ACBD;"> Getting Started</div>

### Demo Links:

- [Spidr Coding Challenge](https://spidr-coding-challenge-tau.vercel.app/)
- [Backup Link](spidr-coding-challenge-ndb4r6py7-reshajs-projects.vercel.app)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/spidr-coding-challenge.git
   cd spidr-coding-challenge
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test` - Run tests
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## <div style="color:#56ACBD;"> Project Structure</div>

```
src/
├── components/         # Reusable UI components
│   ├── FormSteps/     # Multi-step form components
│   └── other/         # Other shared components
├── assets/            # Static assets (images, fonts, etc.)
├── styles/            # Global styles and themes
├── types/             # TypeScript type definitions
└── utils/             # Utility functions and helpers
```

## <div style="color:#56ACBD;"> Project Details and Discussion</div>

### Design Philosophy
I designing and implemented this project with simplicity and adherence to the brand style in mind. With an expected 3 hours for completion, I strayed away to overly complex animations and features so that the MVP at least covered all requirements while still providing a seamless experience for the users. Since the Spidr's brand and visual style is very minimalist and easy on the eyes, it did not make sense to go for an over-the-top user interface. All the design choices made were to ensure that the user experience was as smooth as possible while encapsulating the vibe of the brand's website. To help me envision the project's UI, I created a very rough Figma design draft that would give me just enough guidance to implement the project. The link below will take you to the Figma draft, which contains the brand kit assessment and rough mockups of the project's UI.

Pre-implementation [Figma draft](https://www.figma.com/design/RfxEzPt1i3cHYk55NRAI50/Spidr-Coding-Challenge-Mockup?node-id=0-1&t=it8y9kJkqWjAyCEG-1) 

### Assessed brand kit:
- Colors: 
  - ![#262728](https://placehold.co/15x15/262728/262728.png) `#262728`
  - ![#FFFFFF](https://placehold.co/15x15/FFFFFF/FFFFFF.png) `#FFFFFF`
  - ![#56ACBD](https://placehold.co/15x15/56ACBD/56ACBD.png) `#56ACBD`
  - ![#7A7A7B](https://placehold.co/15x15/7A7A7B/7A7A7B.png) `#7A7A7B`
- Font: Raleway
- Logo: \
<img src="src/assets/spidr-logo.png" alt="spider-logo" width="100"/>

### Multistep Form
  - Helps users process each step of the form individually
  - Less cluttered and easier to navigate
  - Each step is validated before moving to the next
  - Progress bar at the top to show the current step and total steps

### Animations
- Smooth animations for buttons and text fields
- Swiping animations for form step transitions
- Simple progression animation for progress bar

### Attention to Detail
- Buttons + Text Fields
  - All buttons and text fields are styled to match the spidr.design visual style \
  Unhovered and hovered buttons: \
  ![alt text](/public/image.png) ![alt text](/public/image-2.png) \
  Unfocused and focused text fields: \
  ![alt text](/public/image-3.png) \
  ![alt text](/public/image-4.png)
- Offset Image
  - Copying the layout of the Spidr Design website, I placed an offset image related to the purpose of the interest form, adding some translucency to the form to imitate the overlaying effect. \
![alt text](/public/image-5.png)

### Technology Choices
- Vite
  - Super lightweight and fast, seemed appropriate for a small scale project like this
  - Easy deployment to Vercel
- Framer Motion
  - Easy to use
  - Good integration with React
- Vercel
  - Easy and free deployment
  - Great integration with Github and Vite apps
- TypeScript
  - Type safety
  - Scalability

## <div style="color:#56ACBD;"> Acknowledgments</div>

- [Spidr](https://spidr.design/) - The company that created this challenge and provided the logo + brand kit
- [Framer Motion](https://www.framer.com/motion/) - A performant and declarative animation library for React
- [New York Times](https://cdn.thewirecutter.com/wp-content/media/2024/11/air-fryer-2048px-4509-2x1-1.jpg?width=1024&quality=75&crop=2:1&auto=webp) - Provided the background image of the air fryer
- [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript

</div>


