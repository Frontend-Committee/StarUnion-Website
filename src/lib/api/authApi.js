import api from "./apiClient";

/* 
---------------------------------------
             Auth - Users 
 -------------------------------------- 
 */
export const registerUser = async (userData) => {
  try {
    const response = await api.post("/auth/users/", userData);
    return response.data;
  } catch (error) {
    console.error(
      "Error registering user:",
      error.response?.data || error.message,
    );
    throw error;
  }
};

export const getCurrentUser = async () => {
  try {
    const response = await api.get("/auth/users/me/");
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching current user:",
      error.response?.data?.detail || error.message,
    );
    throw error;
  }
};

export const updateCurrentUser = async (userData) => {
  try {
    const response = await api.patch("/auth/users/me/", userData);
    return response.data;
  } catch (error) {
    console.error(
      "Error updating current user:",
      error.response?.data || error.message,
    );
    throw error;
  }
};

export const deleteCurrentUser = async (passwordData) => {
  try {
    const response = await api.delete("/auth/users/me/", {
      data: passwordData,
    });

    return response.data;
  } catch (error) {
    console.error(
      "Error deleting current user:",
      error.response?.data || error.message,
    );
    throw error;
  }
};

export const activateUserAccount = async (activationData) => {
  try {
    const response = await api.post("/auth/users/activation/", activationData);
    return response.data;
  } catch (error) {
    console.error(
      "Error activating account:",
      error.response?.data || error.message,
    );
    throw error;
  }
};

export const resendActivationEmail = async (emailData) => {
  try {
    const response = await api.post(
      "/auth/users/resend_activation/",
      emailData,
    );
    return response.data;
  } catch (error) {
    console.error(
      "Error resending activation email:",
      error.response?.data || error.message,
    );
    throw error;
  }
};

export const requestPasswordReset = async (emailData) => {
  try {
    const response = await api.post("/auth/users/reset_password/", emailData);
    return response.data;
  } catch (error) {
    console.error(
      "Error requesting password reset:",
      error.response?.data || error.message,
    );
    throw error;
  }
};

export const confirmPasswordReset = async (resetData) => {
  try {
    const response = await api.post(
      "/auth/users/reset_password_confirm/",
      resetData,
    );
    return response.data;
  } catch (error) {
    console.error(
      "Error confirming password reset:",
      error.response?.data || error.message,
    );
    throw error;
  }
};

export const changePassword = async (passwordData) => {
  try {
    const response = await api.post("/auth/users/set_password/", passwordData);
    return response.data;
  } catch (error) {
    console.error(
      "Error changing password:",
      error.response?.data || error.message,
    );
    throw error;
  }
};

export const listAllUsers = async (page = 1) => {
  try {
    const response = await api.get("/auth/users/", {
      params: { page },
    });

    return response.data;
  } catch (error) {
    console.error(
      "Error fetching users list:",
      error.response?.data || error.message,
    );
    throw error;
  }
};

export const updateCurrentUserFull = async (userData) => {
  try {
    const response = await api.put("/auth/users/me/", userData);
    return response.data;
  } catch (error) {
    console.error(
      "Error with full update of current user:",
      error.response?.data || error.message,
    );
    throw error;
  }
};

export const getUserProfileById = async (userId) => {
  try {
    const response = await api.get(`/users/${userId}/`);
    return response.data;
  } catch (error) {
    console.error(
      `Error fetching profile for user ${userId}:`,
      error.response?.data || error.message,
    );
    throw error;
  }
};


/* 
---------------------------------------
             Auth - JWT (Login)
 -------------------------------------- 
 */

 export const loginUser = async (credentials) => {
  try {
    const response = await api.post('/auth/jwt/create/', credentials);
      return response.data; 
  } catch (error) {
    console.error('Error logging in (Invalid credentials):', error.response?.data || error.message);
    throw error; 
  }
};

export const refreshAccessToken = async (tokenData) => {
  try {
    const response = await api.post('/auth/jwt/refresh/', tokenData);
      return response.data; 
  } catch (error) {
    console.error('Error refreshing token (Refresh token might be expired):', error.response?.data || error.message);
    throw error; 
  }
}

export const verifyToken = async (tokenData) => {
  try {
    const response = await api.post('/auth/jwt/verify/', tokenData);
        return response.data; 
  } catch (error) {
    console.error('Token verification failed:', error.response?.data || error.message);
    throw error; 
  }
};

export const logoutUser = async (tokenData) => {
  try {
    const response = await api.post('/auth/jwt/blacklist/', tokenData);
      return response.data; 
  } catch (error) {
    console.error('Logout failed (Token might already be blacklisted):', error.response?.data || error.message);
    throw error; 
  }
};

/* 
---------------------------------------
             Auth - Social
 -------------------------------------- 
 */

 export const startGoogleLogin = (redirectUri) => {
  const url = `/auth/o/google-oauth2/?redirect_uri=${encodeURIComponent(redirectUri)}`;
  
  window.location.href = api.defaults.baseURL + url;
};

export const completeGoogleLogin = async (data) => {
  try {
    const response = await api.post('/auth/o/google-oauth2/', data);
    return response.data;
  } catch (error) {
    console.error('Error completing Google Login:', error.response?.data || error.message);
    throw error;
  }
};