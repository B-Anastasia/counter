// функция для сохранения объектов в память браузера (данные в этом хранилище сохраняться даже при перезагрузке компа)
//Function for saving objects to the browser memory (data in the local storage will have saved even the computer restart)
export function saveState<T>(key: string, state: T) {
    const stateAsString2 = JSON.stringify(state);
    localStorage.setItem(key, stateAsString2);
}

// функция для получения сохранённого объекта в памяти браузера
export function restoreState(key: string):number|null {
    const stateAsString = localStorage.getItem(key);
    if (stateAsString !== null) return JSON.parse(stateAsString);
    return null
}