import GoogleWifiApi from 'google-wifi-api-node'
let googleWifiApi;

export function getGoogleWifiApi() {
    return googleWifiApi;
}

export async function setupGoogleWifiApi(refreshToken) {
    googleWifiApi = new GoogleWifiApi(refreshToken);
    await googleWifiApi.init();
    return googleWifiApi;
}
