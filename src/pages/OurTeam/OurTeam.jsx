import React, { useEffect, useState } from 'react';
import OurTeamCard from './OurTeamCard';

const OurTeam = () => {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        fetch('https://jerins-parlour-server-five.vercel.app/teams')
            .then(res => res.json())
            .then(data => setTeams(data))
    }, [])

    return (
        <div className='flex flex-col items-center'>
            <h2 className='text-3xl text-center uppercase font-semibold my-4'>Jerin's <span className='text-[#F63E7B]'>Lovely</span> Team</h2>
            <p className='text-center'>Meet the heart and hands behind Jerin's Parlour. Our lovely team of passionate professionals <br /> brings a wealth of experience and a genuine commitment to your beauty and well-being. With <br /> their skillful hands and warm hearts, they create a welcoming space where you can unwind and <br /> leave feeling your best. Get to know the faces that make Jerin's Parlour a place of beauty <br /> and connection.</p>
            <div className='grid grid-cols-1 md:grid-cols-4 mx-auto gap-16'>
                {
                    teams?.map(team => <OurTeamCard
                        key={team._id}
                        team={team}
                    ></OurTeamCard>)
                }
            </div>
        </div>

    );
};

export default OurTeam;