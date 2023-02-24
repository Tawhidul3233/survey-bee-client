const Checkbox = ({ index, id, value, handleChange }) => {
  return (
    <div className="flex items-center mb-4">
      <input
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        type="checkbox"
        id={id}
        value={value}
        onChange={(event) => handleChange(event, index)}
      />
      <label className="ml-2 text-sm font-medium  " htmlFor={id}>
        {value}
      </label>
    </div>
  );
};

export { Checkbox };
