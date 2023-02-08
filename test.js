import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
    vus: 5,
    duration: '10s',
  };

export default function () {
    let response = http.get('https://google.com');
    check(response, {
        'is status 200': (r) => r.status === 200,
        'Verify Google page is loaded': (r) => r.body.includes('Google'),
    });
    sleep(1);
}
