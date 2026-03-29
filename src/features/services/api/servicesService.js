import api from "@/lib/api/apiClient";
import {
  COMMITTEES_DATA,
  SERVICE_CATEGORIES,
  SERVICES_DATA,
} from "@/utils/constants";

const normalizeText = (value = "") =>
  value
    .toString()
    .trim()
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();

const serviceFallbacks = SERVICES_DATA.reduce((accumulator, service) => {
  accumulator[String(service.id)] = service;
  accumulator[normalizeText(service.title)] = service;
  return accumulator;
}, {});

const committeeFallbacks = COMMITTEES_DATA.reduce((accumulator, committee) => {
  accumulator[normalizeText(committee.name)] = committee;
  return accumulator;
}, {});

const cleanMediaValue = (value = "") =>
  value
    .toString()
    .trim()
    .replace(/^["'`]+|["'`]+$/g, "")
    .trim();

const normalizeCommitteeReference = (committee, index) => {
  if (typeof committee === "string") {
    const fallbackCommittee =
      committeeFallbacks[normalizeText(committee)] || {};

    return {
      id: `committee-${index}`,
      name: committee,
      slug: fallbackCommittee.slug || encodeURIComponent(committee),
      type: fallbackCommittee.type || SERVICE_CATEGORIES.NON_TECHNICAL,
      accent: fallbackCommittee.accent || "teal",
      icon: fallbackCommittee.icon || "uiux",
      image: "",
      data: null,
    };
  }

  const fallbackCommittee =
    committeeFallbacks[normalizeText(committee.name)] || {};

  return {
    ...committee,
    id: committee.id || committee.name || `committee-${index}`,
    name: committee.name || `Committee ${index + 1}`,
    slug:
      fallbackCommittee.slug ||
      encodeURIComponent(committee.name || `committee-${index}`),
    type: fallbackCommittee.type || SERVICE_CATEGORIES.NON_TECHNICAL,
    accent: fallbackCommittee.accent || "teal",
    icon: committee.data?.icon || fallbackCommittee.icon || "uiux",
    image: cleanMediaValue(committee.image || ""),
    data: committee.data ?? null,
  };
};

const normalizeProjectReference = (project, index) => {
  if (typeof project === "number" || typeof project === "string") {
    return {
      id: project,
      name: `Project ${project}`,
      image: "",
    };
  }

  return {
    ...project,
    id: project.id || project.name || `project-${index}`,
    name: project.name || project.title || `Project ${index + 1}`,
    image: cleanMediaValue(project.image || ""),
  };
};

export const normalizeService = (service) => {
  const fallbackService =
    serviceFallbacks[String(service.id)] ||
    serviceFallbacks[normalizeText(service.title)] ||
    {};
  const committee = Array.isArray(service.committee)
    ? service.committee.map(normalizeCommitteeReference)
    : [];
  const projects = Array.isArray(service.projects)
    ? service.projects.map(normalizeProjectReference)
    : [];
  const image = cleanMediaValue(
    service.image ||
      committee[0]?.image ||
      projects[0]?.image ||
      fallbackService.image ||
      "",
  );

  return {
    ...service,
    slug: fallbackService.slug || String(service.id),
    category: service.is_technical
      ? SERVICE_CATEGORIES.TECHNICAL
      : SERVICE_CATEGORIES.NON_TECHNICAL,
    image,
    committee,
    projects,
  };
};

export const getTechnicalFilterValue = (activeFilter) => {
  if (activeFilter === SERVICE_CATEGORIES.TECHNICAL) {
    return true;
  }

  if (activeFilter === SERVICE_CATEGORIES.NON_TECHNICAL) {
    return false;
  }

  return undefined;
};

export const listServices = async (filters = {}) => {
  const response = await api.get("/services/", {
    params: filters,
  });

  return {
    ...response.data,
    results: Array.isArray(response.data?.results)
      ? response.data.results.map(normalizeService)
      : [],
  };
};

export const getServiceDetail = async (id) => {
  const response = await api.get(`/service/${id}/`);
  return normalizeService(response.data);
};
