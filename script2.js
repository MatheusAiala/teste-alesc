const inputElement = document.querySelector("novo-input")
const addTaskButton = document.querySelector("botao")

const validadeInput = () => inputElement.valeu.trim().lengh > 0;

const handleAddTask = () =>{
    const inputIsValid = validadeInput();

    if (!inputIsValid) {
        return inputElement.classList('erros')
    }
};

addTaskButton.addEventListener("click", () => handleAddTask)