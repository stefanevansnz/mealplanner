/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function Todo(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <Flex
      gap="8px"
      direction="row"
      width="678.2222290039062px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="10px 10px 10px 10px"
      {...rest}
      {...getOverrideProps(overrides, "Flex")}
    >
      <View
        width="30.22222328186035px"
        height="33.02857208251953px"
        shrink="0"
        position="relative"
        border="4px SOLID rgba(0,0,0,1)"
        borderRadius="9px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Flex.View[0]")}
      ></View>
      <Text
        fontFamily="Source Code Pro"
        fontSize="20px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="23.4375px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="center"
        letterSpacing="0.05000000000000002px"
        width="620px"
        height="25px"
        grow="1"
        basis="620px"
        position="relative"
        padding="0px 0px 0px 0px"
        children="long meal long meal long ng meal with lots of works etc"
        {...getOverrideProps(overrides, "Flex.Text[0]")}
      ></Text>
    </Flex>
  );
}
