function list(state={
    loading:true,
    data:[]
},action) {
    switch(action.type){
        case 'LIST_UPDATA_SUCC':
            return{
                data:action.data.data
            }
        default:
            return state
    }
}
export default list