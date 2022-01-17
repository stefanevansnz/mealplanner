/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function Meal(props) {
  const { meal, overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <Flex
      gap="0"
      direction="row"
      width="616px"
      height="65px"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Flex")}
    >
      <View
        width="367px"
        height="63px"
        grow="1"
        basis="367px"
        position="relative"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(244.3749949336052,244.3749949336052,244.3749949336052,1)"
        {...getOverrideProps(overrides, "Flex.View[0]")}
      ></View>
      <Text
        fontFamily="Source Sans Pro"
        fontSize="13.890000343322754px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="19px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        letterSpacing="0px"
        width="61px"
        height="34px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        children={meal?.name}
        {...getOverrideProps(overrides, "Flex.Text[0]")}
      ></Text>
      <View
        width="77px"
        height="65px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(196.00000351667404,196.00000351667404,196.00000351667404,1)"
        {...getOverrideProps(overrides, "Flex.View[1]")}
      ></View>
      <Text
        fontFamily="Source Sans Pro"
        fontSize="25.88800048828125px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="24px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        letterSpacing="0.10888000488281249px"
        width="111px"
        height="34px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        children={meal?.date}
        {...getOverrideProps(overrides, "Flex.Text[1]")}
      ></Text>
    </Flex>
  );
}
