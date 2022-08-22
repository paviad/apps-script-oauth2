export interface Service {
  setAuthorizationBaseUrl(authorizationBaseUrl): Service;
  setTokenUrl(tokenUrl): Service;
  setRefreshUrl(refreshUrl): Service;
  setTokenFormat(tokenFormat): Service;
  setTokenHeaders(tokenHeaders): Service;
  setTokenMethod(tokenMethod): Service;
  setCodeVerififer(codeVerifier): Service;
  generateCodeVerifier(): Service;
  setCodeChallengeMethod(method): Service;
  setTokenPayloadHandler(tokenHandler): Service;
  setCallbackFunction(callbackFunctionName): Service;
  setClientId(clientId): Service;
  setClientSecret(clientSecret): Service;
  setPropertyStore(propertyStore): Service;
  setCache(cache): Service;
  setLock(lock): Service;
  setScope(scope, optSeparator?: boolean): Service;
  setParam(name, value): Service;
  setPrivateKey(privateKey): Service;
  setIssuer(issuer): Service;
  setAdditionalClaims(additionalClaims): Service;
  setSubject(subject): Service;
  setExpirationMinutes(expirationMinutes): Service;
  setGrantType(grantType): Service;
  setRedirectUri(redirectUri): Service;
  getRedirectUri(): string;
  getAuthorizationUrl(optAdditionalParameters);
  handleCallback(callbackRequest): boolean;
  hasAccess(): boolean;
  getAccessToken(): string;
  getIdToken(): string;
  reset(): void;
  getLastError(): any;
  refresh(): void;
  getStorage(): Storage;
  getToken(optSkipMemoryCheck?: boolean): any;
}

export interface Storage {
  getValue(key: string, optSkipMemoryCheck?: boolean): any;
  setValue(key: string, value: any): void;
  removeValue(key: string): void;
  reset(): void;
}

export function createService(serviceName: string): Service;
export function getRedirectUri(optScriptId?: string): string;
export function getServiceNames(propertyStore: any): string[];
