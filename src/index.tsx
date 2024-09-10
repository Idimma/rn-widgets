export { default as Icon } from './components/Icon';
export { default as Image } from './components/image';
export { default as Spinner } from './components/Spinner';
export { default as Text } from './components/Text';
export {
  default as Input,
  default as InputText,
  default as TextInput,
} from './components/TextField';
export {
  default as Touch,
  default as TouchOpacity,
  default as Pressable,
  default as Press,
  default as TouchableOpacity,
} from './components/Touch';
export { default as Button } from './components/Button';
export { default as KeyboardAvoidingView } from './components/KeyboardAvoidingView';
export { default as Empty } from './components/Empty';
export { default as View } from './components/View';
export { default as WidgetProvider } from './context';
export * from './helper';
export * from './helper/@types';



export function multiply(a: number, b: number): Promise<number> {
  return Promise.resolve(a * b);
}
