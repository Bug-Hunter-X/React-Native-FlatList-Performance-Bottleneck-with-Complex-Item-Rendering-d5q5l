# React Native FlatList Performance Issue

This repository demonstrates a common performance issue in React Native's `FlatList` component when dealing with complex item rendering and large datasets. The problem manifests as slow rendering, dropped frames, and a poor user experience.

## Problem
The provided `bug.js` file contains a `FlatList` component with items that perform computationally expensive operations during rendering. This leads to performance degradation, especially with a larger number of items.

## Solution
The `bugSolution.js` file offers a solution by optimizing item rendering using techniques like memoization and `useMemo` hook to reduce redundant calculations. This improves performance significantly.

## How to Reproduce
1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run the app on an emulator or physical device.
4. Observe the performance with the initial implementation (`bug.js`).
5. Compare the performance improvement with the optimized version (`bugSolution.js`).

## Technologies Used
* React Native
* JavaScript