const initalState={
    user:{},
    loginStatus:false
}
export default function Action(state=initalState,action){
    switch(action.type){
        case 'set':
            console.log('received data are',action.data);
            return {...state,user:action.data,loginStatus:true};
        case 'logout':
            console.log('logging out ....');
            localStorage.removeItem('persist:root');
            return {...state,user:{},loginStatus:false};
        default: 
            return state
    }
}