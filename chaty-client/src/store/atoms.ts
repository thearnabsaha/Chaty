import { atom } from "recoil";
export const copiedState = atom({
    key: 'copied',
    default: false,
  });
export const roomCreatedState = atom({
    key: 'roomCreated',
    default: false,
  });
export const joinedState = atom({
    key: 'joined',
    default: false,
  });
export const roomIdState = atom({
    key: 'roomId',
    default: "",
  });
export const inputValueState = atom({
    key: 'inputValue',
    default: "",
  });