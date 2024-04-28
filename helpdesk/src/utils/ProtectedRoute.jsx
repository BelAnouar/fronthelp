import {useDispatch, useSelector} from "react-redux";
import {fetchUserInfo, selectUserInfo} from "../redux/features/userSlice.js";
import {useEffect} from "react";
import {Navigate, Outlet, useNavigate} from "react-router-dom";


const ProtectedRoute=({dashboard})=>{
    const userInfo = useSelector(selectUserInfo);
    const dispatch = useDispatch();
const navigate=useNavigate()
    useEffect(() => {
        if (!userInfo) {
            dispatch(fetchUserInfo());
        }
    }, [dispatch, userInfo]);

    if (!userInfo) {
        return
    }

    if (userInfo === null) {
        return navigate("/login");
    }else if(userInfo.user_role.dashboard_access == dashboard){
        return (<Outlet/>);
    }else{
        return navigate("/401");
    }



}


export default ProtectedRoute
