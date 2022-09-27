import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

// var ShareSortKey
export default function SelectLabels(props) {
    const [sortKey, setSort] = React.useState('');

    // ShareSortKey = React.useContext('')
    const handleChange = (event) => {
        setSort(event.target.value);

        console.log(sortKey)
    };

    return (
        <div>
            {/* <ShareSortKey.Provider value={sortKey}> */}
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <Select value={sortKey} onChange={handleChange} displayEmpty inputProps={{ 'aria-label': 'Without label' }}>
                        <MenuItem value="" disabled><em>{props.labels}</em></MenuItem>

                        <MenuItem value='rating' >{props.label1}</MenuItem>
                        <MenuItem value='disc' >{props.label2}</MenuItem>
                        <MenuItem value='price' >{props.label3}</MenuItem>
                    </Select>
                </FormControl>
            {/* </ShareSortKey.Provider> */}
        </div>
    );
}
// export {ShareSortKey}