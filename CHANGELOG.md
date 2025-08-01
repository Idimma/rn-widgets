# Changelog

## [Unreleased]

### Changed
- Upgraded Expo packages to latest versions:
  - @expo/vector-icons from ^14.0.2 to ^14.1.0
  - expo-haptics from ^13.0.1 to ^14.0.0
  - expo-image from ^1.12.12 to ^2.0.0
  - expo-linear-gradient from ^13.0.2 to ^14.0.0
- Updated build configuration:
  - Simplified react-native-builder-bob configuration in package.json
  - Improved TypeScript configuration in tsconfig.json and tsconfig.build.json
  - Removed duplicate bob configuration

### Fixed
- Fixed TypeScript compilation errors:
  - Added proper type definitions for tab children in Tabs component
  - Corrected zinnia color property type in ThemeColorsType interface
  - Added comprehensive type declarations in types.d.ts for external modules
  - Fixed import issues in helper/@types/index.ts

## [0.1.5] - Previous Release
