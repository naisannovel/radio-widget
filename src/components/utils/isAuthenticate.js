import jwt_decode from 'jwt-decode';
import Cookies from 'js-cookie';

export const isAuthenticated = () => {

    const cookie = Cookies.get('token');
    if (cookie) {
        const { exp, _id, name, email } = jwt_decode(cookie);

        if(_id && name && email){ 
            if ((new Date()).getTime() <= exp * 1000) {

                return true;
    
            } else {
                // Cookies.remove("token")
                return false;
            }
        }else{
            return false;
        }

    } else return false;
}
