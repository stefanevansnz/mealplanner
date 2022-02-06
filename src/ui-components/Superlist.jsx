/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text, View } from "@aws-amplify/ui-react";
import Todo from "./Todo";
export default function Superlist(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <Flex
      gap="6px"
      direction="column"
      width="541px"
      height="332px"
      position="relative"
      borderRadius="14px"
      padding="10px 10px 10px 10px"
      backgroundColor="rgba(255,180.6250101327896,180.6250101327896,1)"
      {...rest}
      {...getOverrideProps(overrides, "Flex")}
    >
      <Text
        fontFamily="Source Code Pro"
        fontSize="20px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="23.4375px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        letterSpacing="0.05000000000000002px"
        width="521px"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        children="Todo List"
        {...getOverrideProps(overrides, "Flex.Text[0]")}
      ></Text>
      <Todo
        display="flex"
        gap="8px"
        direction="row"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="10px 10px 10px 10px"
        {...getOverrideProps(overrides, "Flex.Todo[0]")}
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
          {...getOverrideProps(overrides, "Flex.Todo[0].View[0]")}
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
          width="462.77777099609375px"
          height="25px"
          grow="1"
          basis="462.77777099609375px"
          position="relative"
          padding="0px 0px 0px 0px"
          children="long meal long meal long ng meal with lots of works etc"
          {...getOverrideProps(overrides, "Flex.Todo[0].Text[0]")}
        ></Text>
      </Todo>
      <Todo
        display="flex"
        gap="8px"
        direction="row"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="10px 10px 10px 30px"
        {...getOverrideProps(overrides, "Flex.Todo[1]")}
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
          {...getOverrideProps(overrides, "Flex.Todo[1].View[0]")}
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
          width="442.77777099609375px"
          height="25px"
          grow="1"
          basis="442.77777099609375px"
          position="relative"
          padding="0px 0px 0px 0px"
          children="long meal long meal long ng meal with lots of works etc"
          {...getOverrideProps(overrides, "Flex.Todo[1].Text[0]")}
        ></Text>
      </Todo>
    </Flex>
  );
}
