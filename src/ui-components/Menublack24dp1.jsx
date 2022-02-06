/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, View } from "@aws-amplify/ui-react";
export default function Menublack24dp1(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <View
      width="55px"
      height="55px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "View")}
    >
      <Icon
        width="55px"
        height="55px"
        pathData=""
        viewBox={{ minX: 0, minY: 0, width: 55, height: 55 }}
        position="absolute"
        left="0px"
        top="0px"
        {...getOverrideProps(overrides, "View.Icon[0]")}
      ></Icon>
      <Icon
        width="41.25px"
        height="27.5px"
        pathData="M0 27.5L41.25 27.5L41.25 22.9167L0 22.9167L0 27.5ZM0 16.0417L41.25 16.0417L41.25 11.4583L0 11.4583L0 16.0417ZM0 0L0 4.58333L41.25 4.58333L41.25 0L0 0Z"
        viewBox={{ minX: 0, minY: 0, width: 41.25, height: 27.5 }}
        color="rgba(0,0,0,1)"
        position="absolute"
        left="6.875px"
        top="13.75px"
        {...getOverrideProps(overrides, "View.Icon[1]")}
      ></Icon>
    </View>
  );
}
