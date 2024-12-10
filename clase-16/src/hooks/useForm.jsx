import {useState} from "react";

export function useForm(initialValue) {
	const [values, setValues] = useState(initialValue);

	const handleChange = (event) => {
		const {name, value} = event.target;

		setValues({
			...values,
			[name]: value,
		});
	};

	const resetForm = () => {
		setValues(initialValue);
  };
  
  return {values, handleChange, resetForm};
}
