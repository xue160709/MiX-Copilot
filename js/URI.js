const redirect_url_response = window.location.href;
const regex = /code=([\w-]+)&/g;
const match = regex.exec(redirect_url_response);
const code = match[1];
console.log(code);
const clientId = '52e170e1-ce8d-43b5-96c3-1573d1bf7a43';
const clientSecret = 'secret_odBLZVfHGOAcufnFNkJrWXfpkFKDit0qd2GL8QEQh2a';
const redirectUri = 'https://www.mix-copilot.com/';

const url = `https://api.notion.com/v1/oauth/token?grant_type=authorization_code&code=${code}&client_id=${clientId}&client_secret=${clientSecret}&redirect_uri=${redirectUri}`;

fetch(url, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
        'Content-Type': 'application/json',
        'Notion-Version': '2021-08-16'
    }
}).then(response => {
    if (!response.ok) {
        throw new Error('Failed to get access token');
    }
    return response.json();
}).then(data => {
    const accessToken = data.access_token;
    console.log(accessToken);
    // Use the access token to call Notion API
}).catch(error => {
    console.error(error);
});
