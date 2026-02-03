/**
 * Platform detection and optional import utilities
 * Enables the library to work with both Expo and bare React Native
 */

/**
 * Module availability status
 */
export type ModuleStatus<T> = {
  available: boolean;
  module: T | null;
  error?: string;
};

const moduleCache = new Map<string, ModuleStatus<any>>();
const warnedModules = new Set<string>();

/**
 * Detects if running in Expo environment
 */
export const isExpo = (): boolean => {
  try {
    const Constants = require('expo-constants').default;
    return Constants?.expoConfig !== undefined || Constants?.manifest !== undefined;
  } catch {
    return false;
  }
};

/**
 * Safely require an optional module without crashing
 * Results are cached for performance
 *
 * @param moduleName - The npm package name to require
 * @returns ModuleStatus with available flag and module reference
 *
 * @example
 * const ExpoHaptics = tryRequire<typeof import('expo-haptics')>('expo-haptics');
 * if (ExpoHaptics.available) {
 *   ExpoHaptics.module.impactAsync();
 * }
 */
export function tryRequire<T>(moduleName: string): ModuleStatus<T> {
  if (moduleCache.has(moduleName)) {
    return moduleCache.get(moduleName)!;
  }

  try {
    const mod = require(moduleName);
    const status: ModuleStatus<T> = { available: true, module: mod };
    moduleCache.set(moduleName, status);
    return status;
  } catch (e) {
    const status: ModuleStatus<T> = {
      available: false,
      module: null,
      error: e instanceof Error ? e.message : 'Unknown error',
    };
    moduleCache.set(moduleName, status);
    return status;
  }
}

/**
 * Warn about missing dependency (only once per module, only in DEV)
 *
 * @param dep - The dependency name
 * @param feature - The feature that requires this dependency
 * @param alternatives - Alternative packages that can be used
 *
 * @example
 * warnMissingDependency(
 *   'expo-haptics',
 *   'haptic feedback',
 *   ['react-native-haptic-feedback (for bare RN)']
 * );
 */
export function warnMissingDependency(
  dep: string,
  feature: string,
  alternatives?: string[]
): void {
  // @ts-ignore - __DEV__ is a React Native global
  if (typeof __DEV__ === 'undefined' || !__DEV__ || warnedModules.has(dep)) {
    return;
  }

  warnedModules.add(dep);

  let message = `[rn-widgets] Optional dependency "${dep}" not installed. Feature "${feature}" disabled.`;

  if (alternatives?.length) {
    message += `\n  Alternatives: ${alternatives.join(', ')}`;
  }

  message += `\n  Install with: npm install ${dep}`;

  console.warn(message);
}

/**
 * Try multiple modules in order, return first available
 * Useful when you have Expo and bare RN alternatives
 *
 * @param moduleNames - Array of module names to try in order
 * @returns ModuleStatus with the first available module
 *
 * @example
 * const gradient = tryRequireAny([
 *   'expo-linear-gradient',
 *   'react-native-linear-gradient'
 * ]);
 */
export function tryRequireAny<T>(
  moduleNames: string[]
): ModuleStatus<T> & { moduleName?: string } {
  for (const name of moduleNames) {
    const result = tryRequire<T>(name);
    if (result.available) {
      return { ...result, moduleName: name };
    }
  }
  return { available: false, module: null };
}

/**
 * Check if a module is available without importing it
 * Useful for conditional logic without triggering the import
 */
export function isModuleAvailable(moduleName: string): boolean {
  return tryRequire(moduleName).available;
}

/**
 * Clear the module cache (useful for testing)
 */
export function clearModuleCache(): void {
  moduleCache.clear();
  warnedModules.clear();
}
