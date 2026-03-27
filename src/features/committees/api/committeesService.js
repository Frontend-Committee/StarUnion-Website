import api from "@/lib/api/apiClient";
import {
  COMMITTEE_CATEGORIES,
  COMMITTEES_DATA,
} from "@/utils/constants";

const normalizeText = (value = "") =>
  value
    .toString()
    .trim()
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();

const committeeVisuals = COMMITTEES_DATA.reduce((accumulator, committee) => {
  accumulator[normalizeText(committee.name)] = committee;
  return accumulator;
}, {});

const getCommitteeType = (committee, matchedCommittee) => {
  if (typeof committee.is_technical === "boolean") {
    return committee.is_technical
      ? COMMITTEE_CATEGORIES.TECHNICAL
      : COMMITTEE_CATEGORIES.NON_TECHNICAL;
  }

  if (typeof committee.data?.is_technical === "boolean") {
    return committee.data.is_technical
      ? COMMITTEE_CATEGORIES.TECHNICAL
      : COMMITTEE_CATEGORIES.NON_TECHNICAL;
  }

  return matchedCommittee?.type || COMMITTEE_CATEGORIES.NON_TECHNICAL;
};

const normalizeProject = (project) => ({
  ...project,
  title: project.name,
  gallery: Array.isArray(project.gallery) ? project.gallery : [],
});

export const normalizeCommittee = (committee) => {
  const matchedCommittee =
    committeeVisuals[normalizeText(committee.name)] || {};
  const type = getCommitteeType(committee, matchedCommittee);

  return {
    ...committee,
    id: committee.name,
    slug: encodeURIComponent(committee.name),
    type,
    accent:
      matchedCommittee.accent || (type === COMMITTEE_CATEGORIES.TECHNICAL
        ? "teal"
        : "yellow"),
    icon: committee.data?.icon || matchedCommittee.icon || "uiux",
    image: committee.image || matchedCommittee.image || "",
  };
};

export const getTechnicalFilterValue = (activeFilter) => {
  if (activeFilter === COMMITTEE_CATEGORIES.TECHNICAL) {
    return true;
  }

  if (activeFilter === COMMITTEE_CATEGORIES.NON_TECHNICAL) {
    return false;
  }

  return undefined;
};

export const listCommittees = async (filters = {}) => {
  const response = await api.get("/committees/", {
    params: filters,
  });

  return {
    ...response.data,
    results: Array.isArray(response.data?.results)
      ? response.data.results.map(normalizeCommittee)
      : [],
  };
};

export const getCommitteeDetail = async (name) => {
  const response = await api.get(`/committees/${encodeURIComponent(name)}/`);

  return {
    ...normalizeCommittee(response.data),
    projects: Array.isArray(response.data?.projects)
      ? response.data.projects.map(normalizeProject)
      : [],
  };
};
