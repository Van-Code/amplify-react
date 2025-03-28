import { useContext, useState, useEffect } from 'react';
import { generateClient } from "aws-amplify/api";
import { type Schema } from '../amplify/data/resource';
import { IUser } from "./types";
import ProfileCard from "./ProfileCard";
import { UserStore } from "./hooks";
import * as queries from './components/graphql/queries';

const client = generateClient<Schema>();

function Discover() {
    const { user, triggerUpdateUser } = useContext(UserStore);

    const [list, setList] = useState<IUser[]>([]);

    const id = user.id as keyof typeof user;

    const getAvailable = async () => {

        const variables = {
            filter: {
                and: [{ id: { ne: id } },
                    // { enabled: { eq: true } }
                ]
            }
        };

        const response = await client.graphql({
            query: queries.listUsers,
            variables: variables
        });
        // @ts-ignore
        setList(response?.data?.listUsers.items)
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
