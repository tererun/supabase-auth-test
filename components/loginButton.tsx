import React, {useState} from "react";
import {useSession, useSessionContext, useSupabaseClient, useUser} from "@supabase/auth-helpers-react";

const LoginButton = () => {

    const { isLoading, session, error } = useSessionContext();
    const supabaseClient = useSupabaseClient();
    const user = useUser();

    async function signInWithDiscord() {
        const { data, error } = await supabaseClient.auth.signInWithOAuth({
            provider: 'discord',
        })
    }

    async function signout() {
        const { error } = await supabaseClient.auth.signOut()
    }

    return (
        <div className={"ml-12"}>
            {user ? (
                <>
                    <img src={user.user_metadata.avatar_url} className={"rounded-full h-12"}/>
                    <button className={"bg-white text-blue-400 px-8 py-3 rounded-3xl"} onClick={signout}>Signout</button>
                </>
            ) : (
                <>
                    <button className={"bg-white text-blue-400 px-8 py-3 rounded-3xl"} onClick={signInWithDiscord}>Signin</button>
                </>
            )
            }
        </div>
    );

};

export default LoginButton;