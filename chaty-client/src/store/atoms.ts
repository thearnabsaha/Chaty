import { atom } from "recoil";
export const copiedState = atom({
    key: 'copied', // unique ID (with respect to other atoms/selectors)
    default: false, // default value (aka initial value)
  });
export const roomCreatedState = atom({
    key: 'roomCreated', // unique ID (with respect to other atoms/selectors)
    default: false, // default value (aka initial value)
  });
export const joinedState = atom({
    key: 'joined', // unique ID (with respect to other atoms/selectors)
    default: true, // default value (aka initial value)
  });
export const roomIdState = atom({
    key: 'roomId', // unique ID (with respect to other atoms/selectors)
    default: "", // default value (aka initial value)
  });
export const inputValueState = atom({
    key: 'inputValue', // unique ID (with respect to other atoms/selectors)
    default: "", // default value (aka initial value)
  });