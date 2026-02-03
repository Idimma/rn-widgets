# rn-widgets Improvement Plan

**Version**: 0.2.0 (Current)
**Last Updated**: February 2026

---

## Completed in v0.2.0

- [x] All dependencies made optional with graceful fallbacks
- [x] Expo + bare React Native compatibility
- [x] Icon bug fix (swapped MaterialCommunityIcons/FontAwesome5)
- [x] TextField hooks violation fix
- [x] Touch component error handling improvement
- [x] Lodash removed (native JS replacements)
- [x] Platform utility created (`tryRequire`, `warnMissingDependency`)
- [x] Type declarations for optional modules
- [x] Select.js converted to TypeScript
- [x] Documentation updated (README.md, CLAUDE.md)

---

## Phase 1: Testing & Quality (Priority: High)

### 1.1 Add Unit Tests

**Status**: Not started
**Files**: `src/__tests__/`

Currently at 0% test coverage. Add basic tests for:

```
src/__tests__/
├── components/
│   ├── View.test.tsx
│   ├── Text.test.tsx
│   ├── Touch.test.tsx
│   ├── Button.test.tsx
│   ├── TextField.test.tsx
│   ├── Icon.test.tsx
│   ├── Image.test.tsx
│   └── Select.test.tsx
├── helper/
│   ├── platform.test.ts
│   ├── styles.view.test.ts
│   └── styles.text.test.ts
└── context/
    └── index.test.tsx
```

**Test scenarios**:
- Component renders without crashing
- Props are applied correctly
- Optional dependency fallbacks work
- Theme context integration works
- Style shortcuts produce correct styles

### 1.2 Add Integration Tests

**Status**: Not started

Test component combinations:
- WidgetProvider + themed components
- TextField + Select integration
- View + animation + gradient combinations

### 1.3 Set Up CI Testing

**Status**: Partial (workflow exists but tests are empty)

Update GitHub Actions to run:
- TypeScript check
- Jest tests
- Build verification

---

## Phase 2: Accessibility (Priority: High)

### 2.1 Add Accessibility Props

**Status**: Not started
**Impact**: All components

Add standard React Native accessibility props:

```typescript
interface AccessibilityProps {
  accessible?: boolean;
  accessibilityLabel?: string;
  accessibilityHint?: string;
  accessibilityRole?: AccessibilityRole;
  accessibilityState?: AccessibilityState;
}
```

**Components to update**:
- [ ] Touch - add `accessibilityRole="button"`
- [ ] Button - add `accessibilityRole="button"`, `accessibilityState`
- [ ] TextField - add `accessibilityRole="text"`, labels
- [ ] Icon - add `accessibilityLabel` for icon meaning
- [ ] Image - add `accessibilityLabel` for alt text

### 2.2 Add Keyboard Navigation

**Status**: Not started

For web/desktop targets:
- Tab navigation support
- Focus indicators
- Keyboard shortcuts for common actions

---

## Phase 3: Developer Experience (Priority: Medium)

### 3.1 Add JSDoc Documentation

**Status**: Not started

Add comprehensive JSDoc comments to all exports:

```typescript
/**
 * Flexible container component with shorthand styling props.
 *
 * @example
 * // Basic usage
 * <View p={16} bg="#fff" br={8}>
 *   <Text>Hello</Text>
 * </View>
 *
 * @example
 * // With gradient (requires expo-linear-gradient or react-native-linear-gradient)
 * <View gradient gradientColors={['#ff0000', '#0000ff']}>
 *   <Text>Gradient</Text>
 * </View>
 */
```

### 3.2 Add Storybook / Component Showcase

**Status**: Not started

Create visual component documentation:
- Live component preview
- Interactive prop controls
- Usage examples

### 3.3 Improve Error Messages

**Status**: Partial

Current DEV warnings are helpful. Enhancements:
- [ ] Add error codes for easier debugging
- [ ] Link to documentation in warnings
- [ ] Add troubleshooting tips

---

## Phase 4: Performance (Priority: Medium)

### 4.1 Memoization Audit

**Status**: Not started

Review and optimize:
- [ ] `viewStyler` - memoize style calculations
- [ ] `flattenStyle` - memoize text style calculations
- [ ] Component re-renders - add React.memo where beneficial

### 4.2 Bundle Size Optimization

**Status**: Partial

Current improvements:
- Removed lodash (-70KB)
- ES modules only (better tree-shaking)

Next steps:
- [ ] Analyze bundle with `source-map-explorer`
- [ ] Identify and eliminate dead code
- [ ] Consider splitting into sub-packages

### 4.3 Clean Up Dead Code

**Status**: Not started

The `src/common/` folder contains 15+ unused components:
- OTP.js
- Switch.js
- Modal.js
- Carousel.js
- Header.js
- DropDownSearch.js
- TabBar.js
- Container.js
- Row.js
- EmptyImage.js
- InputPhone.js
- LoaderIndicator.js
- NotificationHandler.js
- TextInputField.js
- BottomSheet.js

**Decision needed**: Export, refactor, or remove?

---

## Phase 5: New Features (Priority: Low)

### 5.1 Add Error Boundary Component

**Status**: Not started

```typescript
import { ErrorBoundary } from '@idimma/rn-widget';

<ErrorBoundary fallback={<Text>Something went wrong</Text>}>
  <YourComponent />
</ErrorBoundary>
```

### 5.2 Add Skeleton Loader Component

**Status**: Not started

```typescript
import { Skeleton } from '@idimma/rn-widget';

<Skeleton width={200} height={20} />
<Skeleton.Circle size={50} />
<Skeleton.Text lines={3} />
```

### 5.3 Add Toast/Snackbar Component

**Status**: Not started

```typescript
import { Toast, useToast } from '@idimma/rn-widget';

const { show } = useToast();
show({ message: 'Success!', type: 'success' });
```

### 5.4 Add Modal Component

**Status**: In common/ but not exported

Review and potentially export `src/common/Modal.js` after:
- Converting to TypeScript
- Making dependencies optional
- Adding proper types

### 5.5 Add Bottom Sheet Component

**Status**: In common/ but not exported

Review `src/common/BottomSheet.js` - may conflict with `react-native-raw-bottom-sheet` dependency.

---

## Phase 6: Migration & Deprecation (Priority: Low)

### 6.1 Migrate Remaining JS Files to TypeScript

**Status**: Partial

Files still in JavaScript:
- `src/components/SelectInput.js`
- `src/components/Timeline/index.js`
- `src/components/WeekPicker/index.js`
- All files in `src/common/`

### 6.2 Deprecate Duplicate Exports

**Status**: Not started

Current aliases (for backwards compatibility):
```typescript
export {
  default as Touch,
  default as TouchOpacity,
  default as Pressable,
  default as Press,
  default as TouchableOpacity,
} from './components/Touch';
```

Consider deprecation warnings for non-canonical names.

---

## Backlog

Items that may be addressed in future versions:

- [ ] RTL (Right-to-Left) support improvements
- [ ] Web platform support (react-native-web)
- [ ] Theming system overhaul (CSS-in-JS compatible)
- [ ] Animation system using Reanimated
- [ ] Form validation integration
- [ ] Internationalization helpers

---

## Version Roadmap

| Version | Focus | Target |
|---------|-------|--------|
| 0.2.1 | Bug fixes, test setup | Next |
| 0.3.0 | Accessibility, JSDoc | Q2 2026 |
| 0.4.0 | New components (Skeleton, Toast) | Q3 2026 |
| 1.0.0 | Stable API, full test coverage | Q4 2026 |

---

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on:
- Setting up development environment
- Running tests
- Submitting pull requests
- Code style requirements
