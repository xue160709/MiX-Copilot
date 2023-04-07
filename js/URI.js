const redirect_url_response = window.location.href;
const regex = /code=([\w-]+)&/g;
const match = regex.exec(redirect_url_response);
const authorization_code = match[1];
console.log(authorization_code);
const clientId = '52e170e1-ce8d-43b5-96c3-1573d1bf7a43';
const clientSecret = 'secret_odBLZVfHGOAcufnFNkJrWXfpkFKDit0qd2GL8QEQh2a';
const redirectUri = 'https://www.mix-copilot.com/';
const base64Auth = btoa(`${clientId}:${clientSecret}`);

// fetch("https://api.notion.com/v1/oauth/token", {
//     method: "POST",
//     mode: 'no-cors',
//     headers: {
//         "Content-Type": "application/json",
//         Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
//     },
//     body: JSON.stringify({
//         grant_type: "authorization_code",
//         code: authorization_code,
//         redirect_uri: redirectUri,
//     }),
// })
//     .then((response) => {
//         if (!response.ok) {
//             throw new Error("Network response was not ok");
//         }
//         return response.json();
//     })
//     .then((data) => {
//         const access_token = data.access_token;
//         // 使用 access_token 来访问 Notion API
//     })
//     .catch((error) => {
//         console.error("There was a problem fetching the access token:", error);
//     });

var myHeaders = new Headers();
myHeaders.append("Authorization", `Basic ${btoa(`${clientId}:${clientSecret}`)}`);
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
    "grant_type": "authorization_code",
    "code": authorization_code,
    "redirect_uri": redirectUri
});

var requestOptions = {
    method: 'POST',
    mode: 'no-cors',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
};

fetch("https://api.notion.com/v1/oauth/token", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
