
const url = require('url');
function parseURL(inputURL) {
    const parsedURL = url.parse(inputURL, true);
    console.log('Parsed URL:');
    console.log('Protocol:', parsedURL.protocol);
    console.log('Host:', parsedURL.host);
    console.log('Hostname:', parsedURL.hostname);
    console.log('Port:', parsedURL.port);
    console.log('Path:', parsedURL.path);
    console.log('Query:', parsedURL.query);
    console.log('Hash:', parsedURL.hash);
}

const inputURL = 'https://www.example.com:8080/path/to/resource?param1=value1&param2=value2#section1';
parseURL(inputURL);