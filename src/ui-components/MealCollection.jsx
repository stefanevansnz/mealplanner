/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { Meals } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import Meal from "./Meal";
import { Collection } from "@aws-amplify/ui-react";
export default function MealCollection(props) {
  const { meal, items: itemsProp, overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  const items =
    itemsProp !== undefined
      ? itemsProp
      : useDataStoreBinding({
          type: "collection",
          model: Meals,
        }).items;
  return (
    <Collection
      type="list"
      direction="column"
      alignItems="stretch"
      justifyContent="left"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "Collection")}
    >
      {(item, index) => (
        <Meal
          meal={item}
          key={item.id}
          {...getOverrideProps(overrides, "Collection.Meal[0]")}
        ></Meal>
      )}
    </Collection>
  );
}
