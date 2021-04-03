import { useState } from 'react'
import IconButton from '@material-ui/core/IconButton'
import CancelIcon from '@material-ui/icons/Cancel'
import TextField from '@material-ui/core/TextField'

export const useDoubleDynamicInputs = (label1, label2) => {
    const [values, setValues] = useState([])

    const handleInputAdd = () => {
        setValues([
            ...values,
            {
                text: '',
                link: '',
            },
        ])
    }

    const handleInputChange = (index, e) => {
        let vals = [...values]
        vals[index][e.target.name] = e.target.value
        setValues(vals)
    }

    const createInputs = () =>
        values.map((input, index) => (
            <div key={index} className="dynamicInputWrapper">
                <TextField
                    required
                    type="text"
                    variant="outlined"
                    name="text"
                    label={`${label1} ${index + 1}`}
                    value={input.text || ''}
                    onChange={handleInputChange.bind(this, index)}
                    className="dynamicInput"
                />

                <TextField
                    required
                    type="text"
                    variant="outlined"
                    label={label2}
                    name="link"
                    value={input.link || ''}
                    onChange={handleInputChange.bind(this, index)}
                    className="dynamicInput"
                />

                <IconButton color="primary" onClick={handleInputRemove.bind(this, index)}>
                    <CancelIcon />
                </IconButton>
            </div>
        ))

    const handleInputRemove = (index) => {
        let vals = [...values]
        vals.splice(index, 1)
        setValues(vals)
    }

    return {
        values,
        setValues,
        createInputs,
        handleInputAdd,
    }
}
