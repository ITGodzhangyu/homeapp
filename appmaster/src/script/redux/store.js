import {createStore} from 'redux'

function changer(state={title:'首页'},action){
	switch(action.type){
		case 'SETTITLE':
			return {title:action.title}
		default:
			return state
	}
}
function mapStateToProps(state){
	return {
		value: state.title
	}
}
function mapDispatchToProps(dispatch){
	return{
		onChange:(action)=>dispatch(action)
	}
	
}
let store=createStore()
export default {store,mapDispatchToProps,mapStateToProps}
