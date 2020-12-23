import React from 'react';

function Select({valueA, valueB, optionsA, optionsB, changeA, changeB}) {

    return (
        <>
            <h2>Willkommen zum Shop!</h2>
            <form>
				<select onChange={changeA} value={valueA}>
					<option value="-1">Bitte Bereich wählen</option>
                    {optionsA.map((option, index) => <option value={index}>{option}</option>)}
				</select>
                {valueA !== "-1" && (
				<select onChange={changeB} value={valueB}>
					<option value="-1">Bitte wählen</option>
                    {optionsB.map((option, index) => <option value={index}>{option}</option>)}
				</select>
                )}
            </form>
        </>
    );
}

export default Select;