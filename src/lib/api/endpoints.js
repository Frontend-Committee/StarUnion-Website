import api from "./apiClient";

/* 
---------------------------------------
             Memberships
 -------------------------------------- 
 */
export const listMemberships = async (filters = {}) => {
  try {
    const response = await api.get("/memberships/", {
      params: filters,
    });
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching memberships:",
      error.response?.data || error.message,
    );
    throw error;
  }
};

export const getMembershipDetail = async (id) => {
  try {
    const response = await api.get(`/memberships/${id}/`);
    return response.data;
  } catch (error) {
    console.error(
      `Error fetching membership detail for ID ${id}:`,
      error.response?.data || error.message,
    );
    throw error;
  }
};

/* 
---------------------------------------
             Committees
 -------------------------------------- 
 */

export const listCommittees = async (filters = {}) => {
  try {
    const response = await api.get("/committees/", {
      params: filters,
    });
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching committees:",
      error.response?.data || error.message,
    );
    throw error;
  }
};

export const getCommitteeDetail = async (name) => {
  try {
    const response = await api.get(`/committees/${encodeURIComponent(name)}/`);
    return response.data;
  } catch (error) {
    console.error(
      `Error fetching committee detail for ${name}:`,
      error.response?.data || error.message,
    );
    throw error;
  }
};

/* 
---------------------------------------
             Projects
 -------------------------------------- 
 */
export const listProjects = async (filters = {}) => {
  try {
    const response = await api.get("/projects/", {
      params: filters,
    });
    console.log(response.data.results);
    return response.data.results;
  } catch (error) {
    console.error(
      "Error fetching projects list:",
      error.response?.data || error.message,
    );
    throw error;
  }
};

export const getProjectDetail = async (id) => {
  try {
    const response = await api.get(`/projects/${id}/`);
    return response.data;
  } catch (error) {
    console.error(
      `Error fetching project detail for ID ${id}:`,
      error.response?.data || error.message,
    );
    throw error;
  }
};

/* 
---------------------------------------
             Workshops
 -------------------------------------- 
 */
export const listWorkshops = async (filters = {}) => {
  try {
    const response = await api.get("/workshops/", {
      params: filters,
    });
    return response.data.results;
  } catch (error) {
    console.error(
      "Error fetching workshops list:",
      error.response?.data || error.message,
    );
    throw error;
  }
};

export const getWorkshopDetail = async (id) => {
  try {
    const response = await api.get(`/workshops/${id}/`);
    return response.data;
  } catch (error) {
    console.error(
      `Error fetching workshop detail for ID ${id}:`,
      error.response?.data || error.message,
    );
    throw error;
  }
};

/* 
---------------------------------------
             Events
 -------------------------------------- 
 */
export const listEvents = async (filters = {}) => {
  try {
    const response = await api.get("/events/", {
      params: filters,
    });
    return response.data.results;
  } catch (error) {
    console.error(
      "Error fetching events:",
      error.response?.data || error.message,
    );
    throw error;
  }
};

export const getEventDetail = async (id) => {
  try {
    const response = await api.get(`/event/${id}/`);
    return response.data;
  } catch (error) {
    console.error(
      `Error fetching event detail for ID ${id}:`,
      error.response?.data || error.message,
    );
    throw error;
  }
};

export const listSponsors = async (filters = {}) => {
  try {
    const response = await api.get("/sponsers/", {
      params: filters,
    });
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching sponsors:",
      error.response?.data || error.message,
    );
    throw error;
  }
};

/* 
---------------------------------------
             Content
 -------------------------------------- 
 */
export const listAllContent = async (page = 1) => {
  try {
    const response = await api.get("/content/", {
      params: { page },
    });
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching content list:",
      error.response?.data || error.message,
    );
    throw error;
  }
};

export const getContentByName = async (name) => {
  try {
    const response = await api.get(`/content/${encodeURIComponent(name)}/`);
    return response.data;
  } catch (error) {
    console.error(
      `Error fetching content for ${name}:`,
      error.response?.data || error.message,
    );
    throw error;
  }
};

/* 
---------------------------------------
             Forms
 -------------------------------------- 
 */
export const listAllForms = async (page = 1) => {
  try {
    const response = await api.get("/forms/", { params: { page } });
    return response.data;
  } catch (error) {
    console.error(
      "Error listing forms:",
      error.response?.data || error.message,
    );
    throw error;
  }
};

export const getFormDetail = async (id) => {
  try {
    const response = await api.get(`/forms/${id}/`);
    return response.data;
  } catch (error) {
    console.error(
      `Error fetching form ${id}:`,
      error.response?.data || error.message,
    );
    throw error;
  }
};

export const submitForm = async (submissionData) => {
  try {
    const response = await api.post("/forms/submissions/", submissionData);
    return response.data;
  } catch (error) {
    console.error("Submission error:", error.response?.data || error.message);
    throw error;
  }
};

export const listFormSubmissions = async (formId, page = 1) => {
  try {
    const response = await api.get(`/forms/${formId}/submissions/`, {
      params: { page },
    });
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching submissions:",
      error.response?.data || error.message,
    );
    throw error;
  }
};

export const getSubmissionDetail = async (id) => {
  try {
    const response = await api.get(`/forms/submissions/${id}/`);
    return response.data;
  } catch (error) {
    console.error(
      `Error fetching submission ${id}:`,
      error.response?.data || error.message,
    );
    throw error;
  }
};
