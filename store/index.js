export const state = () => {
    return {
        isUserAuth: false,
    };
};

export const mutations = {
    CHANGE_USER_AUTH(state, value) {
        this.state.isUserAuth = value;
    },
};
