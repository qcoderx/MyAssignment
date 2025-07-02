const display = document.getElementById('display');
        let currentInput = '0'; 

        function updateDisplay() {
            display.textContent = currentInput;
        }

        
        function appendInput(value) {
            if (currentInput === '0' && !isNaN(value) && value !== '.') {
                currentInput = value;
            }
            else if (value === '.') {
                const lastNumber = currentInput.split(/[\+\-\*\/]/).pop();
                if (lastNumber.includes('.')) {
                    return; 
                }
                currentInput += value;
            }
            
            else if (['+', '-', '*', '/'].includes(value)) {
                const lastChar = currentInput.slice(-1);
                if (['+', '-', '*', '/'].includes(lastChar)) {
                    currentInput = currentInput.slice(0, -1) + value; 
                } else {
                    currentInput += value;
                }
            }
            
            else {
                currentInput += value;
            }
            updateDisplay();
        }

        
        function clearDisplay() {
            currentInput = '0';
            updateDisplay();
        }

        
        function deleteLastChar() {
            currentInput = currentInput.slice(0, -1);
            if (currentInput === '') {
                currentInput = '0'; 
            }
            updateDisplay();
        }

        function calculateResult() {
            try {
                
                const expression = currentInput.replace(/x/g, '*');
                let result = eval(expression);

                
                if (result % 1 !== 0) { 
                    result = parseFloat(result.toFixed(8)); 
                }

                currentInput = String(result);
            } catch (error) {
                currentInput = 'Error'; 
            }
            updateDisplay();
        }

        updateDisplay();
