"use client";

import Footer from "@/commons/layout/footer";
import { useDeviceSetting } from "@/commons/settings/device-setting/hook";
import {
  DeviceLocationForLatLngSetResponse,
  DeviceSystemForAppSetResponse,
  DeviceSystemForPlatformSetResponse,
} from "@/commons/settings/device-setting/types";

export default function MyPage() {
  const { fetchApp } = useDeviceSetting();

  const onClickSystemVersion = async () => {
    const result = await fetchApp<DeviceSystemForAppSetResponse>({ query: "fetchDeviceSystemForAppSet" });
    alert(result.data.fetchDeviceSystemForAppSet.appVersion);
  };

  const onClickSystemPlatform = async () => {
    const result = await fetchApp<DeviceSystemForPlatformSetResponse>({ query: "fetchDeviceSystemForPlatformSet" });
    alert(result.data.fetchDeviceSystemForPlatformSet.modelName);
  };

  const onClickLocationLatLng = async () => {
    const result = await fetchApp<DeviceLocationForLatLngSetResponse>({ query: "fetchDeviceLocationForLatLngSet" });
    alert(result.data.fetchDeviceLocationForLatLngSet.lat);
  };

  return (
    <>
      <button onClick={onClickSystemVersion}>App아 내 핸드폰 버전정보 알려줘</button>
      <button onClick={onClickSystemPlatform}>App아 내 핸드폰 기종정보 알려줘</button>
      <button onClick={onClickLocationLatLng}>App아 내 핸드폰 위치정보 알려줘</button>
      <Footer buttonText="" />
    </>
  );
}
