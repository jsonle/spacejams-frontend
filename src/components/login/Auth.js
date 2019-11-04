import Headers from './Headers';
import Routes from './Routes';

export default class Auth {
    static login(code) {
        return fetch(Routes.login, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({ code }),
        })
        .then( resp => resp.json());
    }
}