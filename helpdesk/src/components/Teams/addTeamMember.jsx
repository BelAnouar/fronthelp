import * as React from "react";
import {useQuery, useQueryClient} from "@tanstack/react-query";
import {useFormik} from "formik";
import axiosClient from "../../apis/apiCient.js";

import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import {toast} from "react-toastify";

const AddTeamMember = () => {
    const queryClient=useQueryClient();
    const {data: UsersTeams, error, isLoading} = useQuery({
        queryKey: ["usersTeams"], queryFn: async () => {
            const [UserResource, TeamsResource] = await Promise.all(
                [axiosClient.get("/user").then(({data}) => data.data),
                    axiosClient.get("/teams").then(({data}) => data.data)]
            )
            return {users: UserResource, teams: TeamsResource}

        }
    })
    const formik = useFormik({
        initialValues: {
            name: "",
            teamName: null,
            users: []
        },
        onSubmit: async (values) => {
            try {
                await axiosClient.post(`/teamsMembre`, values)
                    .then(() => {
                        queryClient.invalidateQueries(["usersTeams"]);
                        toast.success("Team created successfully!");
                    });
            } catch (error) {
                toast.error("An error occurred while creating the team!");
            }
        }
    });

    if (isLoading) return "loading";

    return (
        <>
            <div className="text-gray-600">
                <p className="font-medium text-lg"> TeamMembres </p>
                <p>Please fill out all the fields.</p>
            </div>

            <form onSubmit={formik.handleSubmit} className="lg:col-span-2">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                    <div className="md:col-span-5">
                        <label htmlFor="role_name">TeamMember Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                        />

                    </div>
                    <div className="md:col-span-5">
                        <label htmlFor="teamName">Team</label>
                        <select
                            onChange={(event) => {
                                const newValue = event.target.value;
                                console.log("Selected team:", newValue);
                                formik.setFieldValue("teamName", newValue);
                            }}
                            value={formik.values.teamName}
                            name="teamName"
                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        >
                            {UsersTeams.teams.map((team) => (
                                <option key={team.id} value={team.id}>
                                    {team.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="md:col-span-5">
                        <label htmlFor="role_name">Team Name</label>
                        <Stack spacing={3} sx={{width: 500}}>
                            <Autocomplete
                                multiple
                                id="tags-outlined"
                                options={UsersTeams.users}
                                name={"users"}
                                value={formik.values.users}
                                onChange={(event, newValue) => {
                                    formik.setFieldValue("users", newValue);
                                }}
                                getOptionLabel={(option) => option.name}
                                filterSelectedOptions
                                renderInput={(params) => (
                                    <TextField {...params} label="" placeholder="Favorites"/>
                                )}
                            />
                        </Stack>
                    </div>
                    <div className="md:col-span-5 text-right">
                        <div className="inline-flex items-end">
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </form>


        </>
    )
}


export default AddTeamMember
