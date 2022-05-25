import jwt_decode from 'jwt-decode';
import Cookies from 'js-cookie';

interface decodedData{
    _id: number;
    name: string;
    email: string;
    iat: number;
    exp: number;
}

export const isAuthenticated = () => {

    const cookie = Cookies.get('token');
    if (cookie) {
        const { exp, _id, name, email }:decodedData = jwt_decode(cookie);

        if(_id && name && email){ 
            if ((new Date()).getTime() <= exp * 1000) {

                return true;
    
            } else {
                Cookies.remove("token")
                return false;
            }
        }else{
            return false;
        }

    } else return false;
}
