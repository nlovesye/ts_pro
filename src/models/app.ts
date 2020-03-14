interface IAppState {}

const initState = (): IAppState => {
    return {};
};

export default {
    // namespace: 'products',
    state: initState(),
    reducers: {
        // delete(state: IAppState, { payload: id }) {
        //     // return state.filter(item => item.id !== id);
        // },
    },
};
