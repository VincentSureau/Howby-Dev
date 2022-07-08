import React, { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import axios from 'axios';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [userToken, setUserToken] = useState(null);

    const login = async (email, password) => {
        try {
            // const response = await axios.post(`http://127.0.0.1:8000/api/login_check`, {
            //     "username": email,
            //     "password": password
            // });
            const response = await axios.post(`https://api2.howby.fr/api/login_check`, {
                "username": email,
                "password": password
            });
            setUserToken(response.data.token);
            await AsyncStorage.setItem('userToken', response.data.token);
        } catch (err) {
            return false;
        }
        return true;
    }

    const logout = async () => {
        setIsLoading(true);
        setUserToken(null);
        await AsyncStorage.removeItem('userToken');
        setIsLoading(false);
    }

    const isLoggedIn = async () => {
        setIsLoading(true);
        try {
            let userToken = await AsyncStorage.getItem('userToken');
            if(null != userToken) {
                setUserToken(userToken);
            }
        } catch(e) {
        }
        setIsLoading(false);
    }

    useEffect(() => {
        isLoggedIn();
    }, [])

    return (
        <AuthContext.Provider value={{login, logout, isLoading, userToken}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;