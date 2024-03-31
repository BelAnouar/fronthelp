import {useFormik} from "formik";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import axiosClient from "../../apis/apiCient.js";
import {toast} from "react-toastify";


const BlogDashboard=()=>{

    const queryClient =useQueryClient()
    const {mutate:addBlog,isLoading:addLoading} = useMutation({
        mutationFn: async (values) => await axiosClient.post(`/blog`,values),
        onSuccess: () => {
            toast.success("User deleted!");
           // queryClient.invalidateQueries(["blog"]);
        },
        onError: () => {
            toast.error("An error occurred while deleting the user!");
        }
    });
    const formik=useFormik({
        initialValues:{
           image: "",
            title:"",
            tag:"",
            description:""
        },onSubmit: (values)=>{

            console.log(values)
        }})

    return (
        <>
            <section className='w-70 md:col-span-2 relative lg:h-[60vh] h-[15vh] m-3 p-7 border rounded-lg bg-white '>
                <form  onSubmit={formik.handleSubmit}  encType={"multipart/form-data"}>
                    <div className="grid lg:grid-cols-3 w-6/7 gap-5 ">
                    <div className="input-type">
                        <label className="block text-gray-700 text-md font-bold mb-2" htmlFor="image">
                            Image
                        </label>
                        <input
                            type="file"
                            id="image"
                            name="image"
                            className="border w-full px-4 py-3 focus:outline-none rounded-md"
                            placeholder="Image"
                            onChange={formik.handleChange}
                            value={formik.values.image}
                        />
                    </div>
                    <div className="input-type">
                        <label className="block text-gray-700 text-md font-bold mb-2" htmlFor="title">
                            Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            className="border w-full px-4 py-3 focus:outline-none rounded-md"
                            placeholder="Title"
                            onChange={formik.handleChange}
                            value={formik.values.title}
                        />
                    </div>
                    <div className="input-type">
                        <label className="block text-gray-700 text-md font-bold mb-2" htmlFor="tag">
                            Tag
                        </label>
                        <input
                            type="text"
                            id="tag"
                            name="tag"
                            className="border w-full px-4 py-3 focus:outline-none rounded-md"
                            placeholder="Tag"
                            onChange={formik.handleChange}
                            value={formik.values.tag}
                        />
                    </div>
                    <div className="input-type col-span-3 ">
                        <label className="block uppercase tracking-wide text-gray-700 text-md font-bold mb-2" htmlFor="description">
                            Description
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            className=" border w-full px-4 py-3 focus:outline-none rounded-md"
                            placeholder="Description"
                            onChange={formik.handleChange}
                            value={formik.values.description}
                        ></textarea>
                    </div>
                    </div>
                    <div className={" w-full"}>
                        <button type="submit" className=" justify-center text-md w-2/6 py-2 mt-[2.5rem] bg-green-500 text-white border rounded-md hover:text-black hover:bg-gray-50 hover:border-green-500 ">
                            Add
                        </button>
                    </div>
                </form>
            </section>
        </>
    );
}


export  default  BlogDashboard
