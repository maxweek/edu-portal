
const defaultState = {
    loadOptions: {
        loadingClass: 'com_loading',
        loadedClass: 'com_loaded',
        apiLoadingClass: 'api_loading',
        apiLoadedClass: 'api_loaded',
        loadingDelay: 100  ,   
    }
}

export const sharedReducer = (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state
    }
}