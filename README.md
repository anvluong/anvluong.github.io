# An Luong - Personal Website

A modern, responsive personal website built with Bootstrap 5 and Vite, featuring a clean grayscale design with smooth animations and modern web technologies.

## 🚀 Features

- **Modern Design**: Clean, minimalist grayscale aesthetic
- **Responsive Layout**: Mobile-first design that works on all devices
- **Bootstrap 5**: Latest Bootstrap framework with custom styling
- **Smooth Animations**: CSS transitions and JavaScript-powered effects
- **Dark Mode Support**: Automatic dark mode detection
- **Fast Build System**: Vite for lightning-fast development and building
- **Modern JavaScript**: ES6+ features with no jQuery dependencies

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3 (SCSS), JavaScript (ES6+)
- **Framework**: Bootstrap 5.3.2
- **Build Tool**: Vite 5.0
- **Styling**: SCSS with custom variables and mixins
- **Icons**: Font Awesome 6
- **Fonts**: Google Fonts (Lora, Cabin)

## 📁 Project Structure

```
anvluong.github.io/
├── css/                 # Compiled CSS files
├── js/                  # JavaScript files
├── scss/                # SCSS source files
│   ├── _variables.scss  # Custom variables
│   ├── _mixins.scss     # Custom mixins
│   └── grayscale.scss   # Main stylesheet
├── img/                 # Images and assets
├── index.html           # Main HTML file
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
└── README.md            # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/anvluong/anvluong.github.io.git
   cd anvluong.github.io
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:
```bash
npm run dev
```

This will:
- Start a local development server on `http://localhost:3000`
- Enable hot module replacement
- Watch for file changes
- Automatically reload the browser

### Building for Production

Build the project for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

Clean the build directory:
```bash
npm run clean
```

## 🔄 Development Workflow

### Branch Strategy

- **`master`**: Production-ready code, deployed to GitHub Pages
- **`development`**: Active development branch for new features and updates

### Workflow

1. **Create a feature branch** from `development`:
   ```bash
   git checkout development
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** and test locally:
   ```bash
   npm run dev
   ```

3. **Commit your changes**:
   ```bash
   git add .
   git commit -m "Add your feature description"
   ```

4. **Push to your feature branch**:
   ```bash
   git push origin feature/your-feature-name
   ```

5. **Create a pull request** to merge into `development`

6. **Test on development branch** before merging to master

### Preview Changes

- **Local Development**: Use `npm run dev` for real-time preview
- **Development Branch**: Deploy to a preview environment or test locally
- **Production**: Only merge to master when ready to deploy

## 🎨 Customization

### Colors

Edit `scss/_variables.scss` to customize the color scheme:
```scss
$primary: #64a19d;
$grayscale-100: #f8f9fa;
$grayscale-900: #212529;
```

### Typography

Modify font families in `scss/_variables.scss`:
```scss
$font-family-sans-serif: 'Cabin', -apple-system, BlinkMacSystemFont, ...;
$font-family-serif: 'Lora', Georgia, 'Times New Roman', serif;
```

### Layout

Adjust spacing and sizing in the SCSS files:
```scss
$spacer: 1rem;
$border-radius: 0.375rem;
```

## 📱 Responsive Design

The website is built with a mobile-first approach and includes:

- Responsive navigation with collapsible menu
- Flexible grid system using Bootstrap 5
- Optimized typography for all screen sizes
- Touch-friendly interactive elements

## 🌙 Dark Mode

Automatic dark mode detection with `prefers-color-scheme: dark`:

- Automatically switches based on system preference
- Maintains the grayscale aesthetic
- Smooth transitions between modes

## 🚀 Performance Features

- **Vite**: Fast development server and optimized builds
- **CSS Optimization**: Minified and optimized CSS output
- **Modern JavaScript**: ES6+ features with no polyfills needed
- **Image Optimization**: Optimized background images
- **Font Loading**: Efficient Google Fonts loading

## 🔧 Troubleshooting

### Common Issues

1. **Port already in use**: Change the port in `vite.config.js`
2. **SCSS compilation errors**: Check for syntax errors in SCSS files
3. **Build failures**: Ensure all dependencies are installed

### Getting Help

- Check the console for error messages
- Verify all dependencies are installed correctly
- Ensure Node.js version is compatible

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Contact

- **Website**: [anvluong.github.io](https://anvluong.github.io)
- **GitHub**: [@anvluong](https://github.com/anvluong)

---

Built with ❤️ using modern web technologies
