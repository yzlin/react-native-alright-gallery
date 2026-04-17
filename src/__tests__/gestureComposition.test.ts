jest.mock("react-native-gesture-handler", () => {
  const Gesture = {
    Exclusive: jest.fn((...gestures) => ({
      type: "exclusive",
      gestures,
    })),
    Race: jest.fn((...gestures) => ({
      type: "race",
      gestures,
    })),
    Simultaneous: jest.fn((...gestures) => ({
      type: "simultaneous",
      gestures,
    })),
  };

  return { Gesture };
});

import { Gesture } from "react-native-gesture-handler";

import { composeItemGesture } from "../utils/composeItemGesture";

describe("composeItemGesture", () => {
  it("keeps single tap exclusive with double tap inside the item race", () => {
    const doubleTapGesture = { name: "doubleTap" };
    const longPressGesture = { name: "longPress" };
    const panGesture = { name: "pan" };
    const pinchGesture = { name: "pinch" };
    const singleTapGesture = { name: "singleTap" };

    const result = composeItemGesture({
      doubleTapGesture: doubleTapGesture as any,
      longPressGesture: longPressGesture as any,
      panGesture: panGesture as any,
      pinchGesture: pinchGesture as any,
      singleTapGesture: singleTapGesture as any,
    });

    expect(Gesture.Race).toHaveBeenNthCalledWith(1, panGesture, pinchGesture);
    expect(Gesture.Simultaneous).toHaveBeenCalledWith(longPressGesture, {
      type: "race",
      gestures: [panGesture, pinchGesture],
    });
    expect(Gesture.Exclusive).toHaveBeenCalledWith(
      doubleTapGesture,
      singleTapGesture
    );
    expect(Gesture.Race).toHaveBeenNthCalledWith(
      2,
      {
        type: "simultaneous",
        gestures: [
          longPressGesture,
          {
            type: "race",
            gestures: [panGesture, pinchGesture],
          },
        ],
      },
      {
        type: "exclusive",
        gestures: [doubleTapGesture, singleTapGesture],
      }
    );
    expect(result).toEqual({
      type: "race",
      gestures: [
        {
          type: "simultaneous",
          gestures: [
            longPressGesture,
            {
              type: "race",
              gestures: [panGesture, pinchGesture],
            },
          ],
        },
        {
          type: "exclusive",
          gestures: [doubleTapGesture, singleTapGesture],
        },
      ],
    });
  });
});
