# AD Remote Controller Mobile

A simple React Native app for remotely managing Windows Active Directory users. This app is designed to connect to the [backend server](https://github.com/ErikDio/AD-Remoto) and provides a interface for common AD user operations.

## Features
- Login screen with username and password
- Home screen with:
  - User search by ID
  - Display of user name after search
  - Actions: Change Password, Change ID, Unlock Account
- Custom popups for password and ID changes (cross-platform)

## Getting Started

### Prerequisites
- Node.js
- npm or yarn
- Expo CLI (recommended)

### Installation
1. Clone this repository:
   ```sh
   git clone https://github.com/ErikDio/AD-Remoto-Mobile.git
   cd AD-Remoto-Mobile
   ```
2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```
3. Start the app:
   ```sh
   npx expo start
   ```

## Usage
- Log in with your credentials.
- Enter a user ID to search for an AD user.
- After searching, you can:
  - Change the user's password
  - Change the user's ID
  - Unlock the user's account

> **Note:** Backend integration is required for real AD operations. The current version simulates user actions only.

## Dependencies
- React Native
- Expo
- @react-navigation/native
- @react-navigation/stack

## License
MIT
