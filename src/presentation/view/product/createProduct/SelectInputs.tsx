import { useFormContext } from "react-hook-form";

interface Props {
  label: string;
  htmlFor: string;
  registerName: string;
  name: any;
  className: string;
}

const SelectInput = ({
  label,
  htmlFor,
  registerName,
  name,
  className,
}: Props) => {
  const { register } = useFormContext();
  return (
    <>
      <label htmlFor={htmlFor}>{label}</label>
      <select {...register(registerName, { required: true })}>
        <option value="">--Please choose an option--</option>
        {name.map((item: any) => (
          <option key={item.value} value={item.value}>
            {item.value}
          </option>
        ))}
      </select>
      {/* {errors.accesorios && (
        <span className={className}>This field is required</span>
      )} */}
    </>
  );
};

export default SelectInput;
