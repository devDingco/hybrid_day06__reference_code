import { RefObject } from "react";
import { useDeviceLocation } from "./use-device-location";
import { useDeviceNotifications } from "./use-device-notifications";
import { useDeviceSystem } from "./use-device-system";
import WebView from "react-native-webview";

export const useApis = (webviewRef: RefObject<WebView<{}>>) => {
  let APIS: any = {};

  const onResponse = (result: any) => {
    webviewRef.current?.postMessage(JSON.stringify(result));
  };

  const onRequest = (query: any, variables: any) => {
    APIS[query](variables);
  };

  [useDeviceSystem, useDeviceLocation, useDeviceNotifications].forEach((el) => {
    APIS = { ...APIS, ...el(onResponse) };
  });

  return {
    onRequest,
    onResponse,
  };
};
