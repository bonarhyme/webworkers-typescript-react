/* eslint-disable no-restricted-globals */
import { profiles } from "../data";
import { processList } from "./enums";

self.onmessage = (e: MessageEvent<string>) => {
  if (e.data === processList.count) {
    const findLength = profiles.length;

    self.postMessage(findLength);
  }
};

export {};
