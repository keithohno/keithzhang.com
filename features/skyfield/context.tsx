import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useReducer,
} from "react";

export interface IStarfieldParams {
  rotAxisX: number;
  rotAxisY: number;
  rotAxisZ: number;
  rotPerMs: number;
  zOffset: number;
}

interface IStarfieldContext extends IStarfieldParams {
  setParams: (params: Partial<IStarfieldParams>) => void;
}

const initParams: IStarfieldParams = {
  rotAxisX: 0,
  rotAxisY: 1,
  rotAxisZ: 0,
  rotPerMs: 1 / 30000,
  zOffset: 4,
};

const StarfieldContext = createContext<IStarfieldContext>({
  ...initParams,
  setParams: () => {},
});

const paramsReducer = (
  state: IStarfieldParams,
  payload: Partial<IStarfieldParams>
): IStarfieldParams => {
  return { ...state, ...payload };
};

export const StarfieldProvider: React.FC<PropsWithChildren<{}>> = ({
  children,
}) => {
  const [params, setParams] = useReducer(paramsReducer, initParams);

  return (
    <StarfieldContext.Provider value={{ ...params, setParams }}>
      {children}
    </StarfieldContext.Provider>
  );
};

export const useStarfield = () => {
  return useContext(StarfieldContext);
};
