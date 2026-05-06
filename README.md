# IPUC Locations App

This project is a web application that displays a comprehensive network of IPUC churches, allowing users to view their locations on a map, search for specific churches, and access detailed information about each church.

## Features

- **Interactive Map**: View all IPUC church locations on an interactive map.
- **Church Information**: Click on a church to see its details, including name, address, and description.
- **Search Functionality**: Easily search for churches by name or location.

## Project Structure

```
ipuc-locations
├── src
│   ├── app.ts               # Entry point of the application
│   ├── components
│   │   ├── Map.tsx         # Component for displaying the map
│   │   ├── ChurchCard.tsx   # Component for displaying church details
│   │   └── SearchBar.tsx    # Component for searching churches
│   ├── data
│   │   └── churches.ts      # Data source for church information
│   ├── routes
│   │   └── index.ts         # Route definitions for the application
│   ├── styles
│   │   └── global.css       # Global styles for the application
│   └── types
│       └── index.ts         # TypeScript interfaces for type safety
├── public
│   └── index.html           # Main HTML file for the web application
├── package.json             # npm configuration file
├── tsconfig.json            # TypeScript configuration file
└── README.md                # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/ipuc-locations.git
   ```
2. Navigate to the project directory:
   ```
   cd ipuc-locations
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the application, run:
```
npm start
```
This will launch the application in your default web browser.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.