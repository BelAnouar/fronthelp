import Blogs from "../../components/Blogs.jsx";
import IntroPost from "../../components/IntroPost.jsx";
import axiosClient from "../../apis/apiCient.js";
import {useQuery} from "@tanstack/react-query";


const Blog = () => {
    const { data: blogs, error, isLoading } = useQuery({
        queryKey: ["blog"],
        queryFn: () => axiosClient.get("/blog").then(({ data }) => data.data)
    });
    if(isLoading) return  "loading"
    console.log(blogs)
    return (<>
        <main className={"bg-[#f7f8fc] py-8"}>
            <IntroPost/>
            <Blogs blogs={blogs}/>

        </main>

    </>)
}


export default Blog
