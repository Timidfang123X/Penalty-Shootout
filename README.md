# Penalty Shootout

A fun and interactive React-based penalty shootout game where you take on the role of a soccer player trying to score against a goalkeeper in a best-of-5 series.

## Features

- **Interactive Goal Graphics**: Beautiful soccer goal with realistic net and posts
- **Three Shot Directions**: Choose to shoot Left, Center, or Right
- **Smooth Animations**: Ball and goalkeeper animations with CSS transitions
- **Random Keeper AI**: The goalkeeper randomly dives in different directions
- **Score Tracking**: Best-of-5 series with "Player X - Y Keeper" scoring
- **Game Logic**: Goals scored when shot direction doesn't match keeper dive
- **Responsive Design**: Works on desktop and mobile devices
- **Modern UI**: Beautiful gradients, shadows, and smooth interactions

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone or download this project
2. Open a terminal in the project directory
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser

## How to Play

1. **Start the Game**: The game begins automatically with Round 1 of 5
2. **Choose Your Shot**: Click one of the three buttons:
   - **Left**: Shoot to the left side of the goal
   - **Center**: Shoot to the center of the goal
   - **Right**: Shoot to the right side of the goal
3. **Watch the Action**: 
   - The ball will animate toward your chosen direction
   - The goalkeeper will randomly dive in one of three directions
4. **See the Result**:
   - **GOAL!** - If your shot direction doesn't match the keeper's dive
   - **SAVED!** - If the keeper dives in the same direction as your shot
5. **Track the Score**: The score is displayed as "Player X - Y Keeper"
6. **Win the Series**: First to win 3 out of 5 rounds wins the game
7. **Play Again**: Click "Play Again" to restart after the series ends

## Game Rules

- **Best of 5**: First player to win 3 rounds wins the series
- **Scoring**: You score when your shot direction doesn't match the keeper's dive
- **Saves**: The keeper saves when they dive in the same direction as your shot
- **Random Keeper**: The goalkeeper's dive direction is completely random
- **No Ties**: If tied after 5 rounds, the game continues until someone wins

## Technical Details

- **Framework**: React 18 with functional components and hooks
- **State Management**: React useState for game state
- **Styling**: Pure CSS with custom properties and animations
- **Animations**: CSS transitions and keyframes for smooth movement
- **Responsive**: Mobile-friendly design with media queries
- **No External Dependencies**: All assets and logic are local

## Responsive Design

The game is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones
- Different screen sizes and orientations

## Customization

You can easily customize the game by modifying:
- Colors and gradients in `src/index.css`
- Animation durations in CSS custom properties
- Game logic in `src/PenaltyShootout.js`
- Number of rounds by changing `TOTAL_ROUNDS`

## Build for Production

To create a production build:

```bash
npm run build
```

This creates an optimized build in the `build` folder that you can deploy to any static hosting service.

## License

This project is open source and available under the MIT License.

---

Enjoy playing Penalty Shootout! 