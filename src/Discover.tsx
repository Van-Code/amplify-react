import { generateClient } from "aws-amplify/api";
import { type Schema } from '../amplify/data/resource';
import { IUser } from "./types";
import ProfileCard from "./ProfileCard";
import { useState, useEffect } from 'react';
import { UserStore } from "./hooks";


function Discover() {
    const client = generateClient<Schema>();
    const [list, setList] = useState<IUser[]>([]);

    const getAvailable = async () => {
        const { data: list } = await client.models.User.list();
        console.log("list", list);
        setList(list)
    }

    useEffect(() => {
        getAvailable()
    }, [])
    return (
        <>
            {list.map((item) => (
                <UserStore.Provider value={item} key={item.id}>
                    <ProfileCard user={item} />
                </UserStore.Provider>
            ))}
        </>
    );

}

export default Discover;
