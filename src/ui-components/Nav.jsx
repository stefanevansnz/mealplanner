/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function Nav(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <View
      width="467px"
      height="53px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "View")}
    >
      <View
        width="460px"
        height="53px"
        position="absolute"
        left="0px"
        top="0px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(244.3749949336052,244.3749949336052,244.3749949336052,1)"
        {...getOverrideProps(overrides, "View.View[0]")}
      ></View>
      <Text
        fontFamily="Source Sans Pro"
        fontSize="26px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="24px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        letterSpacing="0.11000000000000001px"
        width="71px"
        height="36px"
        position="absolute"
        left="17px"
        top="14px"
        padding="0px 0px 0px 0px"
        children="Edit"
        {...getOverrideProps(overrides, "View.Text[0]")}
      ></Text>
      <Text
        fontFamily="Source Sans Pro"
        fontSize="26px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="24px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        letterSpacing="0.11000000000000001px"
        width="71px"
        height="36px"
        position="absolute"
        left="396px"
        top="17px"
        padding="0px 0px 0px 0px"
        children="Add"
        {...getOverrideProps(overrides, "View.Text[1]")}
      ></Text>
    </View>
  );
}
