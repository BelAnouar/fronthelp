import Barchart from "../../components/Barchart.jsx";

import React, { useState, useEffect } from 'react';
import moment from 'moment-timezone';

const Dashboard = () => {
    const [greeting, setGreeting] = useState('');
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        const updateTimeAndGreeting = () => {
            const timeZone = 'Your/Desired/Timezone';
            const formattedTime = moment().tz(timeZone);
            const time = formattedTime.format('HH:mm');
            setCurrentTime(time);
            setGreeting(getGreeting(formattedTime));
        };

        updateTimeAndGreeting();

        const interval = setInterval(updateTimeAndGreeting, 60000);

        return () => clearInterval(interval);
    }, []);

    const getGreeting = (time) => {
        const hour = time.hours();
        if (hour >= 5 && hour < 12) {
            return 'Good morning';
        } else if (hour >= 12 && hour < 17) {
            return 'Good afternoon';
        } else if (hour >= 17 && hour < 21) {
            return 'Good evening';
        } else {
            return 'Good night';
        }
    };

    return (<>
        <div>
            <h3 className="text-xl font-semibold">{`${greeting}, Mr. belhassan`}</h3>
            <h6 className="flex items-center gap-2 font-medium text-zinc-400">
                <span>🌥️</span>
                <div>{currentTime}</div>
            </h6>
        </div>

    <div className={"grid lg:grid-cols-2 gap-7"}>
        <div className="lg:col-span-2">
            <div
                className="bg-zinc-100 rounded-xl border-[0.5px] border-custom-border-200 w-full grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-2  p-0.5 hover:shadow-4xl duration-300 [&amp;>div>a>div]:border-r [&amp;>div:last-child>a>div]:border-0 [&amp;>div>a>div]:border-custom-border-200 [&amp;>div:nth-child(2)>a>div]:border-0 [&amp;>div:nth-child(2)>a>div]:lg:border-r ">
                <div
                    className="w-full flex flex-col gap-2 hover:bg-zinc-80 rounded-tl-xl lg:rounded-l-xl">
                    <a className="py-4 duration-300 rounded-[10px] w-full "
                       href="/quis-magnirem-labor/workspace-views/assigned">
                        <div
                            className="relative flex pl-10 sm:pl-20 md:pl-20 lg:pl-20 items-center">
                            <div><h5 className="font-semibold text-xl">0</h5><p
                                className="text-custom-text-300 text-sm xl:text-base">Issues
                                assigned</p></div>
                        </div>
                    </a></div>
                <div
                    className="w-full flex flex-col gap-2 hover:bg-zinc-80 rounded-tr-xl lg:rounded-[0px]">
                    <a className="py-4 duration-300 rounded-[10px] w-full "
                       href="/quis-magnirem-labor/workspace-views/assigned?state_group=backlog,unstarted,started&amp;target_date=2024-03-19;before">
                        <div
                            className="relative flex pl-10 sm:pl-20 md:pl-20 lg:pl-20 items-center">
                            <div><h5 className="font-semibold text-xl">0</h5><p
                                className="text-custom-text-300 text-sm xl:text-base">Issues
                                overdue</p></div>
                        </div>
                    </a></div>
                <div
                    className="w-full flex flex-col gap-2 hover:bg-zinc-80 rounded-bl-xl lg:rounded-[0px]">
                    <a className="py-4 duration-300 rounded-[10px] w-full "
                       href="/quis-magnirem-labor/workspace-views/created">
                        <div
                            className="relative flex pl-10 sm:pl-20 md:pl-20 lg:pl-20 items-center">
                            <div><h5 className="font-semibold text-xl">0</h5><p
                                className="text-custom-text-300 text-sm xl:text-base">Issues
                                created</p></div>
                        </div>
                    </a></div>
                <div
                    className="w-full flex flex-col gap-2 hover:bg-zinc-80 rounded-xl lg:rounded-r-xl">
                    <a className="py-4 duration-300 rounded-[10px] w-full "
                       href="/quis-magnirem-labor/workspace-views/assigned?state_group=completed">
                        <div
                            className="relative flex pl-10 sm:pl-20 md:pl-20 lg:pl-20 items-center">
                            <div><h5 className="font-semibold text-xl">0</h5><p
                                className="text-custom-text-300 text-sm xl:text-base">Issues
                                completed</p></div>
                        </div>
                    </a></div>
            </div>
        </div>

        <Barchart/>
    </div>
    </>);
}


export default  Dashboard
