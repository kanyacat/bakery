export const isAuthSelector = (state: { auth: { data: any; }; }) => Boolean(state.auth.data)
export const authDataSelector = (state: { auth: { data: any; }; }) => state.auth.data

