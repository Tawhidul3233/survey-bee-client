import { useId } from "react";
import { Checkbox } from "./Checkbox";

const CheckboxGroup = ({ list, setCheckList }) => {
  const id = useId();
  const handleChange = (evt, index) => {
    const { checked, value } = evt.currentTarget;
    // add to array
    setCheckList((prev) => {
      prev[index] = checked ? value : "";
      return [...prev];
    });
  };
  return (
    <div>
      {list.map((value, index) => {
        const checkId = `my-checkbox-${index}-${id}`;
        return (
          <Checkbox
            key={checkId}
            index={index}
            id={checkId}
            value={value}
            handleChange={handleChange}
          />
        );
      })}
    </div>
  );
};

export { CheckboxGroup };
