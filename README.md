# react-native-alright-gallery

Photos gallery powered by Reanimated v4.
Ported from [react-native-awesome-gallery](https://github.com/pavelbabenko/react-native-awesome-gallery).

## Requirements

- React Native 0.76+ with **New Architecture enabled**
- React Native Reanimated 4.1.1+
- React Native Worklets 0.5.1+
- React Native Gesture Handler 2.28.0+

## Installation

```sh
npm install react-native-alright-gallery react-native-reanimated react-native-worklets react-native-gesture-handler react-native-redash
```

### Babel Configuration

Add the Worklets plugin to your `babel.config.js`:

```js
module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: ['react-native-worklets/plugin'],
};
```

**Important:** The Worklets plugin must be listed **last** in your plugins array.

### iOS Setup

```sh
cd ios && pod install
```

### Android Setup

No additional setup required.

## Usage

```js
import Gallery from 'react-native-alright-gallery';

// ...

const images = [
  'https://picsum.photos/seed/alright-1/1000/1000',
  'https://picsum.photos/seed/alright-2/1000/1000',
  'https://picsum.photos/seed/alright-3/1000/1000',
];

return (
  <Gallery
    data={images}
    onIndexChange={(newIndex) => {
      console.log(newIndex);
    }}
  />
);
```

## Contributing

- [Development workflow](CONTRIBUTING.md#development-workflow)
- [Sending a pull request](CONTRIBUTING.md#sending-a-pull-request)
- [Code of conduct](CODE_OF_CONDUCT.md)

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
