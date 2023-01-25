import React, { useEffect, useState } from "react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";

const LoginButton = () => {

    const supabaseClient = useSupabaseClient();
    const session = useSession();

    const [user, setUser] = useState<any | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const getUserProfile = async () => {
            if (session) {
                setIsLoading(true);
                setUser({
                    ...session?.user
                });
                setIsLoading(false);
            }
        }

        supabaseClient.auth.onAuthStateChange((event, session) => {
            console.log("changed");
            if ("SIGNED_IN" === event && session) {
                console.log('SIGNED_IN', session)
                getUserProfile().then(r => {
                    console.log("User state changed!");
                });
            } else if ("SIGNED_OUT" === event) {
                console.log('SIGNED_OUT', session);
                setUser(null);
            }
        });
    }, []);

    const login = async () => {
        await supabaseClient.auth.signInWithOAuth({
            provider: "discord",
        });
    };

    const logout = async () => {
        await supabaseClient.auth.signOut();
        setUser(null);
    };

    return (
        <div className={"ml-12"}>
            {user ? (
                <>
                    <img src={user.user_metadata.avatar_url} className={"rounded-full h-12"}/>
                    <button className={"bg-white text-blue-400 px-8 py-3 rounded-3xl"} onClick={logout}>Signout</button>
                </>
            ) : (
                <>
                    <button className={"bg-white text-blue-400 px-8 py-3 rounded-3xl"} onClick={login}>Signin</button>
                </>
            )
            }
        </div>
    );

};

export default LoginButton;