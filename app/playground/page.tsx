"use client";

import React, { lazy, Suspense } from "react";
import alertMe from "../modules/alertMe";
alertMe;

const SimpleRecipe = lazy(() => delayImport(import("../simpleRecipe/page")));

console.log('shit no one cares about')


const Playground = () => {
  //   const [checked, setChecked] = useState<boolean>(false);

  return (
    <>
      {/* <label htmlFor="sth">Show Content</label>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
        id="sth"
      /> */}
      <Suspense fallback={<Loading />}>
        <SimpleRecipe />
      </Suspense>
      {/* {checked && (
        <Suspense fallback={<Loading />}>
          <SimpleRecipe />
        </Suspense>
      )} */}
    </>
  );
};

const Loading = () => {
  return <p className="text-3xl text-center mt-20">Please Wait...</p>;
};

export default Playground;

const delayImport = async (promise: Promise<any>) => {
  return await new Promise((resolve) => {
    setTimeout(resolve, 3000);
  }).then(() => promise);
};
