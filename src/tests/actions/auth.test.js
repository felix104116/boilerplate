import {login,logout} from '../../actions/auth';


test('should login properly', () => {
    const uid = '23okewqek';
    const res = login(uid);
    expect(res).toEqual({
        type:'LOGIN',
        uid
    })
})

test('shoud logout properly', () => {
    const res = logout();
    expect(res).toEqual({
        type:'LOGOUT'
    })
})

