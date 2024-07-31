import React, { createContext, useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "../store";
import axios from "../utils/Axios"
import { useHistory } from 'react-router-dom';
import { Logout, SetIdentity } from "../store/reducers/auth";
import { Principal } from '@dfinity/principal'; 
import { encodeArrayBuffer} from '../utils/format.js';
import { ShowModal } from "../store/reducers/menu.js";
import alert from "../utils/Alert.js";
import { getDate } from "../utils/filter";

export const APIContext = React.createContext();

export const APIProvider = ({ children }) => {
    const dispatch = useDispatch();
    const state = useSelector((store) => store.auth);
    const { user, currencyId, balanceId, code } = state;
    const userId = user?._id;
    const userName = user?.username;

    const login = async (userId, password) => {
        const data = await axios.post("api/v2/users/signin", {
            userId,
            password,
        });
        return data;
    };

    const register = async (
        userId,
        password
    ) => {
        const data = await axios.post("api/v2/users/signup", {
            userId,
            password,
        });
        return data;
    };

    const uploadFile = async (data) => {
        const res = await axios.post("api/v2/files/", data, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });
        return res;
    };

    const updateProfile = async (userInfo) => { 
        const data = await axios.post("api/v2/users/updateProfile/", userInfo);

        return data;
    }

    const getTopRatedGames = async(type) => {
        const res = await axios.post("api/v2/casinos/top-gamelist", {type});
        return res;
    }

    const getProviderList = async (type) => {
        const res = await axios.post("api/v2/casinos/bo-providerlist", { type });
        return res;
    }

    const getGames = async ({
        gameType,
        page,
        perPage,
        provider,
        gameName,
        mobile }) => {

        const res = await axios.post("api/v2/casinos/bo-gamelist", { gameType, page, perPage, provider, gameName, mobile });
        return res;
    }

    const openGame = async (slug, userId) => {
        const res = await axios.post("api/v2/casinos/opengame", {
            slug: slug,
            userId: userId
        });
        return res;
    }

    const openDemoGame = async (slug) => {
        const res = await axios.post("api/v2/casinos/demogame", { slug });
        return res;
    }

    const openSportsBook = async (userId) => {
        const res = await axios.post("api/v2/casinos/openSportsBook", {
            userId: userId
        });

        return res;
    }

    const updatePasswodInfo = async (data) => {
        const res = await axios.post("api/v2/users/updatePassword/", {
            data : {...data
        }});

        return res;
    }

    return (
        <APIContext.Provider
            value={{
                login,
                register,
                updateProfile,
                uploadFile,
                getTopRatedGames,
                getProviderList,
                getGames,
                openGame,
                openSportsBook,
                openDemoGame,
                updatePasswodInfo
            }}
        >
            {children}
        </APIContext.Provider>
    );
};


