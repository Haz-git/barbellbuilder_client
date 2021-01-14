import { USER_LOG_IN } from './userLoginTypes';
import history from '../../components/historyObject';
import api from '../../api';

const userLogin = (formValues) => async (dispatch) => {
    let response;

    try {
        response = await api.post('/user/login', { ...formValues });
    } catch (err) {
        //If there is an error, that must mean the user's verification credentials are wrong.
        if (err) {
            const errorFlag = true;
            return errorFlag;
        }
    }

    //There is currently no dispatch for this function in Redux. Perhaps later we will need something like that.

    if (response) {
        try {
            localStorage.setItem('jwt', JSON.stringify(response.data.token));
            history.push('/dashboard');

            //This is not REACT-like nor efficient in the slightest way...however if enables the user's data to be rendered while logging in. I have not yet figured out a way to solve this issue:

            //When the user's log in is successful, it pushes the user to the dashboard. However, it seems like the 'Bearer xxx' token stored in the localstorage is NOT grabbed by axios in time before sending the inital request to the server. Because this token is undefined, passport doesn't authorize--causing no user data to be sent back and rendered.

            //The only solution that enables progress for now is to immediately force-refresh the page after going to dashboard.

            //Server-sided rendering seems to be some sort of a solution.

            window.location.reload();
        } catch (e) {
            if (e.name === 'QuotaExceededError') {
                localStorage.clear();
                localStorage.setItem('jwt', response.data.token);
            } else {
                alert(`I'm Sorry! There seems to be a problem logging you in.`);
                console.log(e);
            }
        }
    }

    dispatch({
        type: USER_LOG_IN,
        payload: response.data,
    });
};

export default userLogin;
