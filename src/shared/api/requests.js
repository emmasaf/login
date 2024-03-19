import { createAsyncThunk } from "@reduxjs/toolkit";
import { accessTokenURL, loginURL, passwordResetURL, passwordsetURL, refreshTokenURL } from "./endpoints";
import axios from "axios";

const api = axios.create({
  baseURL: 'https://auth-qa.qencode.com',
  headers: {
    'Content-Type': 'application/json',
  },
});


export const login = createAsyncThunk('login/login', async (data) => {
  try {
    const response = await api.post(loginURL,data);
    return response.data;
  } catch (error) {
    throw Error(error.message);
  }
});

export const checkRefreshToken = createAsyncThunk('login/checkRefreshToken', async (data) => {
  try {
    const response = await api.post(refreshTokenURL,data);
    return response.data;
  } catch (error) {
    throw Error(error.message);
  }
});

export const checkAccessToken = createAsyncThunk('login/checkAccessToken', async (data) => {
  try {
    const response = await api.post(accessTokenURL,data);
    return response.data;
  } catch (error) {
    throw Error(error.message);
  }
});



export const resetPassword = createAsyncThunk('forget/resetPassword', async (data) => {
  try {
    const response = await api.post(passwordResetURL,data);
    return response.data;
  } catch (error) {
    throw Error(error.message);
  }
});

export const setNewPassword = createAsyncThunk('new/setNewPassword', async (data) => {
  try {
    const response = await api.post(passwordsetURL,data);
    return response.data;
  } catch (error) {
    throw Error(error.message);
  }
});

