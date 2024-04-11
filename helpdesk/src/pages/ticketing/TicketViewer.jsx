


import ReplyIcon from '@mui/icons-material/Reply';
import AssistantPhotoIcon from '@mui/icons-material/AssistantPhoto';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import SellIcon from '@mui/icons-material/Sell';


import IconButtonMenu from "../../components/Ticketing/IconButtonMenu.jsx";
const TicketViewer=({postContent, postContentComments })=>{

    const samplePostContent = {
        title: "Sample Post Title",
        thumbnail: "https://example.com/sample-thumbnail.jpg",
        author: "sample_author",
        created_utc: Date.now() / 1000,
        url: "https://example.com/sample-post-url",
        selftext: "This is a sample post content.",
    };

    // Sample post content comments
    const samplePostContentComments = [
        { data: { author: "comment_author_1", depth: 0, body: "This is a sample comment." } },
        { data: { author: "comment_author_2", depth: 1, body: "This is a reply to the first comment." } },
    ];

    // Assigning sample values if not provided
    postContent = postContent || samplePostContent;
    postContentComments = postContentComments || samplePostContentComments;

    return(
        <>
            <div className="">
                <div className="mt-10 py-4 px-4 bg-white shadow overflow-hidden sm:rounded-md">
            <div className="bg-white flex-1 relative">

                <div className="flex flex-col relative ">
                    <div className="flex-auto  px-3 pb-6 w-20 flex justify-between items-center ">

                            <IconButtonMenu
                                icon={AssistantPhotoIcon}
                                color="text-blue-500"
                                buttonText="Assistant Photo"
                                menuItemText="Assistant Photo"
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
                                menuItemText="Diversity 2"
                            />
                            <IconButtonMenu
                                icon={SellIcon}
                                color="text-purple-500"
                                buttonText="Sell"
                                menuItemText="Sell"
                            />



                    </div>
                    <article className="flex-1 bg-white overflow-y-scroll">
                        {postContent === null ? (
                            <div className="p-8">
                                <p>Welcome to GmailKit!</p>
                                <i className="italic">Select a subreddit to get started. You can add subreddits by clicking the "Compose" button</i>
                            </div>
                        ) : (
                            <div className="px-8">
                                <h1 className="text-xl">{postContent.title}</h1>
                                <div>
                                    <div className="px-[0.25rem] rounded bg-neutral-200 text-gray-800 text-xs w-fit">Inbox</div>
                                </div>
                                <div className="flex flex-row space-x-4 items-center">
                                    <div className="w-10 h-10">
                                        <img
                                            src={postContent.thumbnail}
                                            onError={(e) => { e.target.src = 'https://lh3.googleusercontent.com/a/default-user=s40-p'; }}
                                            className="rounded-full object-cover w-10 h-10 aspect-square"
                                            alt="Author thumbnail"
                                        />
                                    </div>
                                    <div className="flex flex-col justify-between py-2">
                                        <div>
                                            <p className="font-medium text-sm">{postContent.author}</p>
                                        </div>
                                        <div><p className="text-xs text-gray-700">to me</p></div>
                                    </div>
                                    <div className="flex-1 flex flex-col justify-between items-end py-2">
                                        <div className="flex flex-row items-center space-x-2">
                                            <div><p className="text-gray-500 text-xs">{new Date(postContent.created_utc * 1000).toLocaleString()}</p></div>
                                            <div><div className="w-4 h-4 bg-no-repeat bg-contain" style={{ backgroundImage: "url('https://www.gstatic.com/images/icons/material/system_gm/1x/star_border_black_20dp.png')" }}></div></div>
                                            <div> <div className="  "> <ReplyIcon fontSize="small" /></div> </div>
                                            <div><div className="w-4 h-4 bg-no-repeat bg-contain" style={{ backgroundImage: "//ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/more_vert_baseline_nv700_20dp.png" }}></div></div>
                                        </div>
                                        <div>
                                            <p className="font-medium text-sm opacity-0">{postContent.author}</p>
                                        </div>
                                    </div>
                                </div>
                                <a href={postContent.url} target="_blank" className="text-sm text-blue-500 underline pl-14">{postContent.url}</a>
                                <p className="text-sm text-gray-500 pl-14">{postContent.selftext}</p>

                                <div className="ml-14 flex flex-col mt-6">
                                    {postContentComments.length === 0 ? (
                                        <p>No comments</p>
                                    ) : (
                                        postContentComments.map((comment, index) => (
                                            <div key={index} className="border-l-2 border-gray-300 pb-2" style={{ paddingLeft: `${comment.data.depth * 0.5 + 0.25}rem` }}>
                                                <h3 className="text-sm text-gray-700">{'u/' + comment.data.author}</h3>
                                                <p className="text-sm">{comment.data.body}</p>
                                            </div>
                                        ))
                                    )}
                                </div>
                            </div>
                        )}
                    </article>
                </div>

            </div>
                </div></div>
        </>
    )
}



export  default  TicketViewer
