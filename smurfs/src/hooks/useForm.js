import { useState } from "react";

export default function useForm(initialvalues) {
    const [values, setValues] = useState(initialvalues);
    const handleChanges = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    }

    return [values, handleChanges];
}