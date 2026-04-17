import { Gesture } from "react-native-gesture-handler";

type ComposedGesture = ReturnType<typeof Gesture.Race>;
type AnyGesture = Parameters<typeof Gesture.Simultaneous>[number];

interface ComposeItemGestureParams {
  doubleTapGesture: AnyGesture;
  longPressGesture: AnyGesture;
  panGesture: AnyGesture;
  pinchGesture: AnyGesture;
  singleTapGesture: AnyGesture;
}

export const composeItemGesture = ({
  doubleTapGesture,
  longPressGesture,
  panGesture,
  pinchGesture,
  singleTapGesture,
}: ComposeItemGestureParams): ComposedGesture => {
  return Gesture.Race(
    Gesture.Simultaneous(
      longPressGesture,
      Gesture.Race(panGesture, pinchGesture)
    ),
    Gesture.Exclusive(doubleTapGesture, singleTapGesture)
  );
};
