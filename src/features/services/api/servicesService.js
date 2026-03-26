import api from "@/lib/api/apiClient";
import { SERVICE_CATEGORIES, SERVICES_DATA } from "@/utils/constants";

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

export const normalizeService = (service) => {
  const fallbackService =
    serviceFallbacks[String(service.id)] ||
    serviceFallbacks[normalizeText(service.title)] ||
    {};

  return {
    ...service,
    slug: fallbackService.slug || String(service.id),
    category: service.is_technical
      ? SERVICE_CATEGORIES.TECHNICAL
      : SERVICE_CATEGORIES.NON_TECHNICAL,
    image: service.image || fallbackService.image || "",
    committee: Array.isArray(service.committee) ? service.committee : [],
    projects: Array.isArray(service.projects) ? service.projects : [],
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
  const response = await api.get(`/services/${id}/`);
  return normalizeService(response.data);
};
