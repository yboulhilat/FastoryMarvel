export default function (actor = {}, action) {
    console.log('Actor Store ====>', action)
    
    if (action.type === 'actor') {
        return action.actor ;
    }
    else {
        return actor;
    }
}