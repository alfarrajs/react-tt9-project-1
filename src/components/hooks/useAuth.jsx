import  { useReducer }  from "react";
import {ROLES} from "../constants/index";
import {AUTH_ACTION, AUTH_API_PATHS} from "../constants/auth";
import axios from "axios";
import {AUTH_API} from "../config/api";
import { useNavigate } from "react-router-dom";

const initalState = {
    isAuth: false,
    token: null,
    role: ROLES.GUEST,
    error: null,
    isLoading: false,
  };

const reduce = (state,action)=>{
    switch(action.type){
        case AUTH_ACTION.SET_LOADING:
        return {
            ...state,isLoading:true
        }
        case AUTH_ACTION.LOGIN:
            const token = action.payload?.token || state?.token;
            const isAdmin = action.payload?.isAdmin || false; 
            const role = isAdmin ? ROLES.ADMIN : ROLES.USER;

            localStorage.setItem("token", token);
            localStorage.setItem("role", role);
          
            return {
              ...state,
              isAuth: true,
              token: token,
              role: role,
              error: null,
              isLoading: false,
            };


        case AUTH_ACTION.LOGOUT :
            localStorage.removeItem("token");
            localStorage.removeItem("role");

            return initalState;
         case AUTH_ACTION.SET_ERROR:
        return {...state,error:action.payload,isLoading:false};

          default:
         return state;


    }

};



const useAuth = ()=>{
    const [state,dispatch] = useReducer(reduce,initalState);
    const navigate = useNavigate("");



    const login = async (body) => {
        dispatch({ type: AUTH_ACTION.SET_LOADING });
        try {
          const { data } = await axios.post(AUTH_API + AUTH_API_PATHS.LOGIN, body);
          let username = data.name;
          let id= data._id;
          console.log(id);
          localStorage.setItem("name",username);
          localStorage.setItem("id",id);

          navigate("/home")
          dispatch({ type: AUTH_ACTION.LOGIN, payload: data });
        } catch (error) {
          dispatch({ type: AUTH_ACTION.SET_ERROR, payload: error.message });
          alert("you have entered a wrong password or email!");
        }
      };


     const signup = async (body)=>{
        dispatch({type:AUTH_ACTION.SET_LOADING});
        try {
            const {data} = await axios.post(AUTH_API+AUTH_API_PATHS.SIGNUP,body); 
           
            dispatch({type:AUTH_ACTION.LOGIN,payload:data?.data || data});
            
        } catch (error) {
            dispatch({type:AUTH_ACTION.SET_ERROR,payload:error.message});

        }
           
     }


    const logout = ()=>{
        dispatch({type:AUTH_ACTION.LOGOUT});
    }
   

     const getProfileData = async ()=>{
        dispatch({type:AUTH_ACTION.SET_LOADING});    

        try {
            const token =  state.token ||localStorage.getItem("token");
            const {data}= await axios.get(AUTH_API+AUTH_API_PATHS.PROFILE,{
                headers:{
                    "Authorization":`Bearer ${token}`
                }
            });
            dispatch({type:AUTH_ACTION.LOGIN,payload:data?.data || data });    
        } catch (error) {

            dispatch({type:AUTH_ACTION.SET_ERROR,payload:error.message});    

            
        }


     };


   return{
    ...state,
    login,
    signup,
    logout,
    getProfileData,

   }









}

export default useAuth;