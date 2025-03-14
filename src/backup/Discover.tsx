/* eslint-disable */
import { useContext, useState, useEffect } from 'react';
import { generateClient } from "aws-amplify/api";
import { type Schema } from '../amplify/data/resource';
import { IUser } from "./types";
import ProfileCard from "./ProfileCard";
import { UserStore } from "./hooks";


function Discover() {
    const { triggerUpdateUser } = useContext(UserStore);
    const client = generateClient<Schema>();
    const [list, setList] = useState<IUser[]>([]);

    const getAvailable = async () => {
        const { data: list } = await client.models.User.list();
        setList(list)
    }

    useEffect(() => {
        getAvailable();
    }, [])
    return (
        <>
            {list.map((user) => (
                <UserStore.Provider value={{ user, triggerUpdateUser }} key={user.id}>
                    <ProfileCard />
                </UserStore.Provider>
            ))}
        </>
    );

}

export default Discover;
