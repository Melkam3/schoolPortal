# Student Grades Portal

A beautiful, secure, and interactive React application for displaying student grades with animated feedback and modern UI design.

## Features

- 🔐 **Secure Code Access**: Each student has a unique 4-digit code to view their grades
- ✨ **Beautiful Animations**: Smooth Framer Motion animations and transitions
- 🎨 **Modern UI**: Glassmorphism effects, gradients, and responsive design
- 📱 **Mobile-First**: Fully responsive design that works on all devices
- 🔍 **Search Functionality**: Find students quickly with the search bar
- 📊 **Visual Grade Indicators**: Color-coded grades with progress rings and animations
- 🎉 **Celebratory Effects**: Special animations for high achievers

## Tech Stack

- **React 18** with Vite for fast development
- **Framer Motion** for smooth animations
- **Tailwind CSS** for modern styling
- **Glassmorphism UI** with backdrop blur effects
- **Local JSON Data** - No backend required

## Quick Start

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser** and navigate to `http://localhost:5173`

## Project Structure

```
student-grades-portal/
├── src/
│   ├── components/
│   │   ├── StudentCard.jsx      # Individual student card with code input
│   │   ├── GradeReveal.jsx      # Animated grade display component
│   │   └── AnimatedFeedback.jsx # Success/error animations
│   ├── data/
│   │   └── students.json        # Student data (40 students)
│   ├── App.jsx                  # Main application component
│   ├── index.css                # Tailwind CSS and custom styles
│   └── main.jsx                 # React entry point
├── tailwind.config.js           # Tailwind configuration
├── postcss.config.js            # PostCSS configuration
└── package.json
```

## How It Works

1. **Student Cards**: Each student is displayed as an animated glassmorphism card
2. **Code Entry**: Students enter their unique 4-digit code (password-style input)
3. **Grade Reveal**: Correct codes trigger beautiful animations revealing:
   - Large animated score display
   - Circular progress indicator
   - Color-coded feedback (Green: 80-100, Yellow: 50-79, Red: <50)
   - Celebratory effects for high scores
4. **Error Handling**: Incorrect codes show shake animations and error feedback
5. **Search**: Real-time search to find specific students

## Security Features

- **Input Masking**: Codes are hidden (password-style)
- **No Copy/Paste**: Disabled on code inputs
- **Local Storage**: All data stored locally in JSON
- **No API Calls**: Completely frontend-only application

## Customization

### Adding New Students

Edit `src/data/students.json`:

```json
{
  "id": 41,
  "name": "New Student",
  "mark": 85,
  "code": "1234"
}
```

### Customizing Animations

Modify the Framer Motion variants in the component files:
- `StudentCard.jsx` - Card animations and interactions
- `GradeReveal.jsx` - Grade reveal animations
- `AnimatedFeedback.jsx` - Success/error feedback

### Styling

- **Tailwind Config**: Modify `tailwind.config.js` for theme customization
- **Custom CSS**: Add new utilities to `src/index.css`
- **Glassmorphism**: Adjust backdrop blur and opacity values

## Grade Color Coding

- 🟢 **Green (80-100)**: Excellent performance with star animations and glow effects
- 🟡 **Yellow (50-79)**: Good performance with moderate animations
- 🔴 **Red (<50)**: Needs improvement with encouraging feedback

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Android Chrome)

## Performance

- **Optimized Animations**: 60fps smooth animations
- **Lazy Loading**: Cards animate in sequentially
- **Responsive Images**: Optimized for all screen sizes
- **Minimal Bundle Size**: Tree-shaken dependencies

## License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ using React, Framer Motion, and Tailwind CSS**
