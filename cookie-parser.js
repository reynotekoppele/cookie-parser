"use strict";

/**
 * Create a new cookie with given parameters.
 * @param {string} name - Name of the cookie
 * @param {string} value - Value of the cookie
 * @param {object} options - Options to customize cookie behaviour
 * @param {number} [options.days=1] - Amount of days the cookie is active
 * @param {string} [options.path=/] - Path where cookie is active
 * @param {("strict"|"lax"|"none")} [options.samesite=lax] - Allowed options for samesite behaviour
 */
const setCookie = (name, value, options = {}) => {
  const { days = 1, path = "/", sameSite = "lax" } = options;

  const daysInSec = days * 24 * 60 * 60;
  const encodedValue = encodeURIComponent(value);

  document.cookie = `${name}=${encodedValue};max-age=${daysInSec};samesite=${sameSite};path=${path}`;
};

/**
 * Get a cookie's value
 * @param {string} name - Name of the cookie to retrieve
 * @return {string | undefined} Returns value of cookie, will return undefined if it doesn't exist
 */
const getCookie = (name) => {
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookies = decodedCookie.split(";");

  const cookie = cookies
    .map((str) => str.trim().split("="))
    .find(([key]) => key === name);

  return cookie?.[1];
};

/**
 * Delete a cookie
 * @param {string} name - Name of the cookie to delete
 */
const deleteCookie = (name) => {
  setCookie(name, null, { days: -1 });
};
