"use strict";

/** Class to create, read or delete cookies. */
class Cookies {
  /**
   * Create a new cookie with given parameters
   * @param {string} name - Name of the cookie
   * @param {string} value - Value of the cookie
   * @param {object} [options] - Options to customize cookie behaviour
   * @param {number} [options.days=1] - Amount of days the cookie is active
   * @param {string} [options.path=/] - Path where cookie is active
   * @param {"strict"|"lax"|"none"} [options.sameSite=lax] - Allowed options for samesite behaviour
   */
  static set = (name, value, options = {}) => {
    if (!name || !value) throw new Error('"name" and "value" are required');

    const { days = 1, path = "/", sameSite = "lax" } = options;

    const daysInSec = days * 24 * 60 * 60;
    const encodedValue = encodeURIComponent(value);

    document.cookie = `${name}=${encodedValue};max-age=${daysInSec};samesite=${sameSite};path=${path}`;
  };

  /**
   * Get a cookie's value
   * @param {string} [name] - Name of the cookie to retrieve
   * @return {string | undefined} Returns value of cookie, will return undefined if it doesn't exist
   */
  static get = (name) => {
    const decodedCookie = decodeURIComponent(document.cookie);

    if (!decodedCookie) return;

    const cookies = decodedCookie.split(";");
    const splitCookies = cookies.map((str) => str.trim().split("="));

    if (!name) return splitCookies;

    const cookie = splitCookies.find(([key]) => key === name);

    return cookie?.[1];
  };

  /**
   * Delete a cookie
   * @param {string} name - Name of the cookie to delete
   */
  static delete = (name) => {
    if (!name) throw new Error(`${name} is not a valid name`);

    Cookies.set(name, " ", { days: -1 });
  };
}
