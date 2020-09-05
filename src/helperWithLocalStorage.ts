// функция для сохранения объектов в память браузера (данные в этом хранилище сохраняться даже при перезагрузке компа)
export function saveState<T>(key: string, state: T) {
    const stateAsString2 = JSON.stringify(state);
    localStorage.setItem(key, stateAsString2);
}

// функция для получения сохранённого объекта в памяти браузера
export function restoreState<T>(key: string, defaultState: T) {
    const stateAsString = localStorage.getItem(key);
    if (stateAsString !== null) defaultState = JSON.parse(stateAsString) as T;
    return defaultState;
}