const calculateTemp = () => {
    try {
        const numberTemp = document.getElementById('temp').value;

        const tempSelected = document.getElementById('temp_diff');
        const valueTemp = tempSelected.options[tempSelected.selectedIndex].value

        const celToFah = (cel) => {
            let fahrenheit = Math.round((cel * 9 / 5) + 32);
            return fahrenheit;
        }

        const fahToCel = (feh) => {
            let celsius = Math.round((feh - 32) * 5 / 9);
            return celsius;
        }

        let result;
        let resultShow = document.getElementById('resultContainer');
        if (valueTemp == 'cel') {
            result = celToFah(numberTemp);
            resultShow.className = 'p-3 mb-2 bg-secondary text-white';
            resultShow.innerHTML = `= ${result}°Fahrenheit`;
        } else {
            result = fahToCel(numberTemp);
            resultShow.className = 'p-3 mb-2 bg-secondary text-white';
            resultShow.innerHTML = `= ${result}°Celsius`;
        }
    } catch (err) {
        console.log(err);
    }
    
}