import { createSlice } from '@reduxjs/toolkit';
import { act } from 'react';

const initialUser = {
    _id: '',
    userId: '',
    username: '',
    birthday: '',
    gender: '',
    mobile: '',
    avatar: '',
    balance: 0
};

const initialState = {
    isInitialized: true,
    isLoggedIn: false,
    code: '',
    betsId: '',
    token: '',
    dgToken: '',
    user: initialUser,
    lang: 'EN',
    provider: null,
};

const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        Login(state, action) {
            const { user, session } = action.payload;
            state.user = user;
            state.token = session.accessToken;
            state.dgToken = session.accessToken;
            state.isLoggedIn = true;
            state.isInitialized = true;
        },

        UpdateInfo(state, action) {
            state.user = action.payload;
        },

        UpdateBalance(state, action) {
            state.user.balance = action.payload;
        },

        UpdateBalances(state, action) {
            const balance = action.payload;
            state.balance = balance.balance;
            state.balanceId = balance._id;
            state.currency = balance.currency;
            state.currencyId = balance.currency._id;
            state = { ...state };
        },

        SetNowpayMinAmount(state, action) {
            state.nowpayMinAmount = action.payload.minAmount;
        },

        SetBalances(state, action) {
            state.balances = action.payload
        },

        SetCode(state, action) {
            state.code = action.payload;
        },

        SetBetsId(state, action) {
            state.betsId = action.payload;
        },

        Logout(state, action) {
            state.token = '';
            state.balance = 0;
            state.user = initialUser;
            state.isLoggedIn = false;
            state.dgToken = "";
            state.isInitialized = true;
            state = { ...state };
            if (
                window.location.pathname.toString().indexOf('blackjack') !== -1 ||
                window.location.pathname.toString().indexOf('roulette') !== -1 || 
                window.location.pathname.toString().indexOf('/sports') !== -1
            ) {
                window.location.reload();
            }
        },

        UpdateToken(state, action) {
            state.token = action.payload;
        },

        SetCurrentProvider(state, action) {
            state.provider = action.payload;
        }
    }
});

export default auth.reducer;

export const { Login, Logout, UpdateInfo, UpdateBalances, SetBalances, UpdateBalance, SetCode, SetBetsId, UpdateToken, SetNowpayMinAmount, SetCurrentProvider } = auth.actions;
