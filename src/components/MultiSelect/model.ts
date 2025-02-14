import type React from 'react';
import type {
  FlatListProps,
  ImageStyle,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import { TextProps } from 'react-native';

export interface IMultiSelectRef {
  open: () => void;
  close: () => void;
}

export interface MultiSelectProps<T> {
  ref?:
    | React.RefObject<IMultiSelectRef>
    | React.MutableRefObject<IMultiSelectRef>
    | null
    | undefined;
  testID?: string;
  itemTestIDField?: string;
  style?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  placeholderStyle?: StyleProp<TextStyle>;
  inputSearchStyle?: StyleProp<TextStyle>;
  selectedStyle?: StyleProp<ViewStyle>;
  selectedTextProps?: TextProps;
  selectedTextStyle?: StyleProp<TextStyle>;
  itemTouchableStyle?: StyleProp<ViewStyle>;
  itemContainerStyle?: StyleProp<ViewStyle>;
  itemTextContainerStyle?: StyleProp<ViewStyle>;
  itemTextStyle?: StyleProp<TextStyle>;
  iconStyle?: StyleProp<ImageStyle>;
  maxHeight?: number;
  minHeight?: number;
  maxSelect?: number;
  fontFamily?: string;
  iconColor?: string;
  activeColor?: string;
  data: T[];
  value?: string[] | null | undefined;
  placeholder?: string;
  labelField: keyof T;
  valueField: keyof T;
  searchField?: keyof T;
  search?: boolean;
  disable?: boolean;
  showsVerticalScrollIndicator?: boolean;
  searchPlaceholder?: string;
  searchPlaceholderTextColor?: string;
  dropdownPosition?: 'auto' | 'top' | 'bottom';
  flatListProps?: Omit<FlatListProps<any>, 'renderItem' | 'data'>;
  alwaysRenderSelectedItem?: boolean;
  visibleSelectedItem?: boolean;
  keyboardAvoiding?: boolean;
  inside?: boolean;
  backgroundColor?: string;
  confirmSelectItem?: boolean;
  confirmUnSelectItem?: boolean;
  accessibilityLabel?: string;
  itemAccessibilityLabelField?: string;
  inverted?: boolean;
  mode?: 'default' | 'modal' | 'auto';
  excludeItems?: T[];
  excludeSearchItems?: T[];
  onChange: (value: string[]) => void;
  renderLeftIcon?: (visible?: boolean) => React.ReactElement | null;
  renderRightIcon?: (visible?: boolean) => React.ReactElement | null;
  renderItem?: (item: T, selected?: boolean) => React.ReactElement | null;
  renderSelectedItem?: (
    item: T,
    unSelect?: (item: T) => void
  ) => React.ReactElement | null;
  renderInputSearch?: (
    onSearch: (text: string) => void
  ) => React.ReactElement | null;
  onFocus?: () => void;
  onBlur?: () => void;
  searchQuery?: (keyword: string, labelValue: string) => boolean;
  onChangeText?: (search: string) => void;
  onConfirmSelectItem?: (item: any) => void;
  alwaysDismissKeyboard?: boolean;
}
