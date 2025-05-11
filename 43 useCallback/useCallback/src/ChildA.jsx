import { memo } from "react";

const ChildA = ({ Learning, count }) => {
  console.log("ChildA");
  // useMemo is used to memoize the value of the function passed to it
  return;
};
export default memo(ChildA);
