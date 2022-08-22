/**
 * The supported formats for the returned OAuth2 token.
 * @enum {string}
 */
export const TOKEN_FORMAT = {
  /** JSON format, for example <code>{"access_token": "..."}</code> **/
  JSON: 'application/json',
  /** Form URL-encoded, for example <code>access_token=...</code> **/
  FORM_URL_ENCODED: 'application/x-www-form-urlencoded'
};

export const STORAGE_PREFIX_ = 'oauth2.';
