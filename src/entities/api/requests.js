import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginURL, passwordResetURL, passwordsetURL } from "./endpoints";
import axios from "axios";

const api = axios.create({
  baseURL: 'https://auth-qa.qencode.com/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});


export const login = createAsyncThunk('login/login', async (data) => {
  try {
    const response = await api.post(loginURL,data);
    return response.data;
  } catch (error) {
    throw Error('Failed to fetch user data');
  }
});

export const resetPassword = createAsyncThunk('reset/resetPassword', async (data) => {
  try {
    const response = await api.post(passwordResetURL,data);
    return response.data;
  } catch (error) {
    throw Error('Failed to fetch user data');
  }
});

export const setNewPassword = createAsyncThunk('setNew/setNewPassword', async (data) => {
  try {
    const response = await api.post(passwordsetURL,data);
    return response.data;
  } catch (error) {
    throw Error('Failed to fetch user data');
  }
});

