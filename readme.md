
# SPA Template

This is a Single Page Application (SPA) template that uses webpack for bundling and includes basic configuration for handling HTML, CSS, and JavaScript files. The template is designed to support multiple pages with a simple routing mechanism

## Usage
1. Clone this repository.
```bash
    git clone https://github.com/Benjamin-mne/SPA-template.git
```
2. Install dependencies using npm install.
```bash
    npm install
```
4. Run npm run dev to start the development server.
```bash
   npm run dev
```
5. Open your browser and go to http://localhost:8080 to see your SPA in action.

## Scripts
Start the development server with hot-reloading.
```bash
   npm run dev
```
Build the project for production.
```bash
    npm run build
```
## Adding Pages
To add a new page, follow these steps:
1. Create a new HTML file in the `src/pages` folder.
2. Create a corresponding controller file in the `src/controllers` folder.
3. Import the new controller in the `src/controllers/index.controller.js` file.
4. Update the `src/router/index.routes.js` file to include the new route.
5. Customize the content of the new HTML file.

## Contributing
Feel free to contribute to this project by submitting pull requests. If you have any issues or suggestions, please open an issue.


Happy coding! 🚀
