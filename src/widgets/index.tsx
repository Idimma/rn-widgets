export { default as Icon } from './Icon';
export { default as Image } from './Image';
export { default as Spinner } from './Spinner';
export { default as Text } from './Text';
export {
  default as Input,
  default as InputText,
  default as TextInput,
} from './TextField';
export {
  default as Touch,
  default as TouchOpacity,
  default as Pressable,
  default as TouchableOpacity,
} from './Touch';
export { default as Button } from './Button';
export { default as KeyboardAvoidingView } from './KeyboardAvoidingView';
export { default as Empty } from './Empty';
export { default as View } from './View';
// export {default as Header} from './Header'
// export {NotificationHandler} from "./NotificationHandler";
// export {default as Modal} from './Modal';
// export {Timeline, TimelineBlock} from './Timeline'
export function multiply(a: number, b: number): Promise<number> {
  return Promise.resolve(a * b);
}
