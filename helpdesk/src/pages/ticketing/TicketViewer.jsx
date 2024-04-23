import ReplyIcon from '@mui/icons-material/Reply';
import AssistantPhotoIcon from '@mui/icons-material/AssistantPhoto';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import SellIcon from '@mui/icons-material/Sell';

import IconButtonMenu from "../../components/Ticketing/IconButtonMenu.jsx";
import { useState } from "react";
import { useFormik } from "formik";
import { useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axiosClient from "../../apis/apiCient.js";
import { toast } from "react-toastify";

const TicketViewer = () => {
    const queryClient = useQueryClient();
    const { idTicket } = useParams();

    const { data, error, isLoading } = useQuery({
        queryKey: ["fetchData"],
        queryFn: async () => {
            const [singleTicket, priorite, statues] = await Promise.all([
                axiosClient.get(`/ticket/${idTicket}`).then(({ data }) => data),
                axiosClient.get(`/priorite`).then(({ data }) => data),
                axiosClient.get(`/statue`).then(({ data }) => data)
            ]);
            return { singleTicket, priorite, statues };
        }
    });

    const replyMutation = useMutation({
        mutationFn: async (values) => await axiosClient.post(`/ticketReplie`, values),
        onSuccess: (data) => {
            console.log(data);
            toast.success("Replied !");
            queryClient.invalidateQueries(["singleTicket"]);
        },
        onError: () => {
            toast.error("An error occurred while updating the Departement!");
        }
    });

    const assignerPriorite = useMutation({
        mutationFn: async (values) => await axiosClient.patch("/ticket/priorite/"+idTicket, values),
        onSuccess: (data) => {
            toast.success("Assigned priorite!");
        }
    });

    const assignerStatue = useMutation({
        mutationFn: async (values) => await axiosClient.patch("/ticket/statue/"+idTicket, values),
        onSuccess: (data) => {
            toast.success("Assigned statue!");
        }
    });

    const formik = useFormik({
        initialValues: {
            image: null,
            body: ""
        },
        onSubmit: (values) => {
            const formData = new FormData();
            formData.append('body', values.body);
            formData.append('image', values.image);
            formData.append("idTicket", idTicket);
            replyMutation.mutate(formData);
        }
    });

    const [openCommentAdder, setOpenCommentAdder] = useState(false);
    const toggleMessage = () => {
        setOpenCommentAdder(!openCommentAdder);
    };

    if (isLoading) return "loading..";
    console.log(data.team)
    return (
        <>
            <div className="">
                <div className="mt-10 py-4 px-4 bg-white shadow overflow-hidden sm:rounded-md">
                    <div className="bg-white flex-1 relative">
                        <div className="flex flex-col relative ">
                            <div className="flex-auto  px-3 pb-6 w-20 flex justify-between items-center ">
                                <IconButtonMenu
                                    icon={AssistantPhotoIcon}
                                    color="text-blue-500"
                                    buttonText="priorite"
                                    menuItemText={data.priorite}
                                    assignerMutation={assignerPriorite}
                                />
                                <IconButtonMenu
                                    icon={DeleteOutlineIcon}
                                    color="text-red-500"
                                    buttonText="Delete Outline"
                                    menuItemText="Delete Outline"
                                />
                                <IconButtonMenu
                                    icon={Diversity2Icon}
                                    color="text-yellow-500"
                                    buttonText="Diversity 2"
                                    menuItemText={data?.singleTicket.team.users}
                                />
                                <IconButtonMenu
                                    icon={SellIcon}
                                    color="text-purple-500"
                                    buttonText="statues"
                                    menuItemText={data.statues}
                                    assignerMutation={assignerStatue}
                                />
                            </div>
                            <article className="flex-1 bg-white overflow-y-scroll">
                                {data === null ? (
                                    <div className="p-8">
                                        <p>Welcome to GmailKit!</p>
                                        <i className="italic">Select a subreddit to get started. You can add subreddits by clicking the "Compose" button</i>
                                    </div>
                                ) : (
                                    <div className="px-8">
                                        <h1 className="text-xl">{data.singleTicket.subject}</h1>
                                        <div>
                                            <div className="px-[0.25rem] rounded bg-neutral-200 text-gray-800 text-xs w-fit">Inbox</div>
                                        </div>
                                        <div className="flex flex-row space-x-4 items-center">
                                            <div className="w-10 h-10">
                                                <img
                                                    src={data.singleTicket.user.avatar || 'https://lh3.googleusercontent.com/a/default-user=s40-p'}
                                                    onError={(e) => { e.target.src = 'https://lh3.googleusercontent.com/a/default-user=s40-p'; }}
                                                    className="rounded-full object-cover w-10 h-10 aspect-square"
                                                    alt="Author thumbnail"
                                                />
                                            </div>
                                            <div className="flex flex-col justify-between py-2">
                                                <div>
                                                    <p className="font-medium text-sm">{data.singleTicket.user.name}</p>
                                                </div>
                                                <div><p className="text-xs text-gray-700">to me</p></div>
                                            </div>
                                            <div className="flex-1 flex flex-col justify-between items-end py-2">
                                                <div className="flex flex-row items-center space-x-2">
                                                    <div><p className="text-gray-500 text-xs">{new Date(data.singleTicket.created_at).toLocaleString()}</p></div>
                                                    <div><div className="w-4 h-4 bg-no-repeat bg-contain" style={{ backgroundImage: "url('https://www.gstatic.com/images/icons/material/system_gm/1x/star_border_black_20dp.png')" }}></div></div>
                                                    <div> <button onClick={toggleMessage}> <ReplyIcon fontSize="small" /></button> </div>
                                                    <div><div className="w-4 h-4 bg-no-repeat bg-contain" style={{ backgroundImage: "//ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/more_vert_baseline_nv700_20dp.png" }}></div></div>
                                                </div>
                                                <div>
                                                    <p className="font-medium text-sm opacity-0">{data.singleTicket.user.name}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <a href={data.singleTicket.url} target="_blank" className="text-sm text-blue-500 underline pl-14">{data.singleTicket.url}</a>
                                        <p className="text-sm text-gray-500 pl-14">{data.singleTicket.selftext}</p>
                                        <div className="ml-14 flex flex-col mt-6">
                                            {data.singleTicket.ticket_replies.length === 0 ? (
                                                <p>No replies</p>
                                            ) : (
                                                data.singleTicket.ticket_replies.map((reply, index) => (
                                                    <div key={index} className="border-l-2 border-gray-300 pb-2 pl-4" style={{ marginLeft: `${data.singleTicket.user.id == reply.user_id ? 0 : 2}rem` }}>
                                                        <h3 className="text-sm text-gray-700">{'u/'}</h3>
                                                        <p className="text-sm">{reply.body}</p>
                                                        {reply.file_attachaments && (
                                                            <div className="mt-2">
                                                                {reply.file_attachaments.map((attachment, idx) => (
                                                                    <div key={idx} className="flex items-center space-x-2">
                                                                        <img src={`http://localhost/storage/${attachment.filePath}`} className="w-12 h-12 rounded-lg" alt="Attachment" />
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        )}
                                                    </div>
                                                ))
                                            )}
                                        </div>
                                        {openCommentAdder && <div>
                                            <form onSubmit={formik.handleSubmit}>
                                                <div className="md:col-span-5">
                                                    <label className="text-gray-800 text-sm font-bold leading-tight tracking-normal" htmlFor="body">Body</label>
                                                    <textarea
                                                        id="body"
                                                        name="body"
                                                        className="border mt-1 rounded px-4 w-full bg-gray-50"
                                                        onChange={formik.handleChange}
                                                        value={formik.values.body}
                                                    ></textarea>
                                                </div>
                                                <div className="md:col-span-5">
                                                    <label className="text-gray-800 text-sm font-bold leading-tight tracking-normal" htmlFor="image">Image</label>
                                                    <input
                                                        type="file"
                                                        id="image"
                                                        name="image"
                                                        accept="image/*"
                                                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                        onChange={(event) => {
                                                            console.log(event.currentTarget.files[0]);
                                                            formik.setFieldValue("image", event.currentTarget.files[0]);
                                                        }}
                                                    />
                                                </div>
                                                <div className="flex items-center justify-start w-full">
                                                    <button
                                                        type="submit"
                                                        className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm"
                                                    >
                                                        Submit
                                                    </button>
                                                </div>
                                            </form>
                                        </div>}
                                    </div>
                                )}
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TicketViewer;
