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
  offsetX: number;
  offsetY: number;
  offsetZ: number;
  sqrtRotPerMs: number;
  fov: number;
}

interface IStarfieldContext extends IStarfieldParams {
  setParams: (params: Partial<IStarfieldParams>) => void;
}

const initParams: IStarfieldParams = {
  rotAxisX: 0,
  rotAxisY: 1,
  rotAxisZ: 0,
  offsetX: 0,
  offsetY: 0,
  offsetZ: 2,
  sqrtRotPerMs: 0.005,
  fov: 0.3,
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
