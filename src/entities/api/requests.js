import { createAsyncThunk } from "@reduxjs/toolkit";
import $api from './api'
import { loginURL } from "./endpoints";

export const login = createAsyncThunk('login/login', async () => {
  try {
    const response = await $api.get(loginURL);
    return response.data;
  } catch (error) {
    throw Error('Failed to fetch user data');
  }
});