/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Text } from "@aws-amplify/ui-react";
import Navlistitem from "./Navlistitem";
export default function Navnavmenu(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <Flex
      gap="16px"
      direction="row"
      width="617px"
      height="45px"
      justifyContent="flex-end"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Flex")}
    >
      <Navlistitem
        display="flex"
        gap="10px"
        direction="row"
        height="54px"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="10px 10px 10px 10px"
        {...getOverrideProps(overrides, "Flex.Navlistitem[0]")}
      >
        <Text
          fontFamily="Source Code Pro"
          fontSize="20px"
          fontWeight="400"
          color="rgba(100.9374949336052,144.0749841928482,255,1)"
          lineHeight="23.4375px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          letterSpacing="0.05000000000000002px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          children="Flights"
          {...getOverrideProps(overrides, "Flex.Navlistitem[0].Text[0]")}
        ></Text>
      </Navlistitem>
      <Navlistitem
        display="flex"
        gap="10px"
        direction="row"
        height="54px"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="10px 10px 10px 10px"
        {...getOverrideProps(overrides, "Flex.Navlistitem[1]")}
      >
        <Text
          fontFamily="Source Code Pro"
          fontSize="20px"
          fontWeight="400"
          color="rgba(100.9374949336052,144.0749841928482,255,1)"
          lineHeight="23.4375px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          letterSpacing="0.05000000000000002px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          children="Packages"
          {...getOverrideProps(overrides, "Flex.Navlistitem[1].Text[0]")}
        ></Text>
      </Navlistitem>
      <Button
        gap="0"
        alignItems="center"
        display="flex"
        height="45px"
        justifyContent="center"
        shrink="0"
        children="SignUp"
        {...getOverrideProps(overrides, "Flex.Button[0]")}
      ></Button>
    </Flex>
  );
}
