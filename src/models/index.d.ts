import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type MealsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Meals {
  readonly id: string;
  readonly name?: string;
  readonly date?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Meals, MealsMetaData>);
  static copyOf(source: Meals, mutator: (draft: MutableModel<Meals, MealsMetaData>) => MutableModel<Meals, MealsMetaData> | void): Meals;
}