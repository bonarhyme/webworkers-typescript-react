/* eslint-disable no-restricted-globals */
import { GetDataType, listPageSize, ProfileListType } from "../App";
import { profiles } from "../data";
import { processList } from "./enums";

self.onmessage = (e: MessageEvent<string>) => {
  const data = JSON.parse(e.data) as GetDataType;

  if (data.action !== processList.getData) {
    return;
  }
  if (data.period === "initial") {
    const items = profiles.filter((item, index) => index < listPageSize);

    const response = {
      loading: false,
      list: items,
      page: data.thePageNumber,
    } as ProfileListType;

    self.postMessage(JSON.stringify(response));
  }

  if (
    data.period === "pageNumber" ||
    data.period === "next" ||
    data.period === "prev"
  ) {
    const items = profiles.slice(
      (data.thePageNumber - 1) * listPageSize,
      data.thePageNumber * listPageSize
    );
    const response = {
      loading: false,
      list: items,
      page: data.thePageNumber,
    } as ProfileListType;

    self.postMessage(JSON.stringify(response));
  }
};

export {};
