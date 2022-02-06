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
      width="619px"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(190.50519436597824,211.43749594688416,163.86406391859055,1)"
      {...rest}
      {...getOverrideProps(overrides, "Flex")}
    >
      <Flex
        gap="5px"
        direction="row"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        height="90px"
        position="relative"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(92.13645279407501,182.74999290704727,182.74999290704727,1)"
        {...getOverrideProps(overrides, "Flex.Flex[0]")}
      >
        <View
          width="106px"
          height="68px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(214.62499290704727,214.62499290704727,214.62499290704727,1)"
          {...getOverrideProps(overrides, "Flex.Flex[0].View[0]")}
        >
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
            width="56.00341796875px"
            height="45.23713684082031px"
            position="absolute"
            left="12px"
            top="9.379310607910156px"
            padding="0px 0px 0px 0px"
            children="SUN&#x2028;14 JAN"
            {...getOverrideProps(overrides, "Flex.Flex[0].View[0].Text[0]")}
          ></Text>
        </View>
        <Flex
          gap="10px"
          direction="row"
          alignItems="flex-start"
          shrink="0"
          height="44px"
          position="relative"
          padding="10px 10px 10px 10px"
          backgroundColor="rgba(255,187.00000405311584,187.00000405311584,1)"
          {...getOverrideProps(overrides, "Flex.Flex[0].Flex[0]")}
        >
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
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            children={meal?.name}
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Text[0]")}
          ></Text>
        </Flex>
        <Flex
          gap="10px"
          direction="column"
          shrink="0"
          height="90px"
          position="relative"
          padding="10px 10px 10px 10px"
          {...getOverrideProps(overrides, "Flex.Flex[0].Flex[1]")}
        >
          <View
            width="308px"
            height="70px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(196.00000351667404,196.00000351667404,196.00000351667404,1)"
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[1].View[0]")}
          ></View>
        </Flex>
      </Flex>
    </Flex>
  );
}
