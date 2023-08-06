import React, { useEffect, useState } from 'react';
import OurTeamCard from './OurTeamCard';

const OurTeam = () => {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/teams')
            .then(res => res.json())
            .then(data => setTeams(data))
    }, [])

    return (
        <div className='flex flex-col items-center'>
            <h2 className='text-3xl text-center uppercase font-semibold my-4'>Jerin's <span className='text-[#F63E7B]'>Lovely</span> Team</h2>
            <p className='text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione cumque a sequi accusamus. Culpa nemo voluptate dicta. Incidunt maxime maiores <br /> accusantium consequuntur, autem quisquam rem iure inventore blanditiis dolores ipsam.</p>
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