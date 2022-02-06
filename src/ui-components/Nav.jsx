/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function Nav(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <Flex
      gap="0"
      direction="row"
      width="619px"
      height="45px"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Flex")}
    >
      <Flex
        gap="15px"
        direction="row"
        width="164px"
        height="46px"
        justifyContent="flex-end"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="10px 10px 10px 10px"
        backgroundColor="rgba(255,99.87499594688416,99.87499594688416,1)"
        {...getOverrideProps(overrides, "Flex.Flex[0]")}
      >
        <Flex
          gap="10px"
          direction="row"
          alignItems="flex-start"
          shrink="0"
          height="44px"
          position="relative"
          padding="10px 10px 10px 10px"
          {...getOverrideProps(overrides, "Flex.Flex[0].Flex[0]")}
        >
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
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            children="Edit"
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Text[0]")}
          ></Text>
        </Flex>
        <Flex
          gap="10px"
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          shrink="0"
          height="44px"
          position="relative"
          padding="10px 10px 10px 10px"
          {...getOverrideProps(overrides, "Flex.Flex[0].Flex[1]")}
        >
          <Text
            fontFamily="Srisakdi"
            fontSize="26px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            letterSpacing="0.11000000000000001px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            children="Add"
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[1].Text[0]")}
          ></Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
