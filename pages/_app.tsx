import '@/styles/globals.css'

import type { AppProps } from 'next/app'
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { Session } from "@supabase/supabase-js";
import { useState } from "react";

import Header from "../components/header";

export default function App({ Component, pageProps }: AppProps<{ initialSession: Session }>) {

    const [supabaseClient] = useState(() => createBrowserSupabaseClient());

    return (
        <SessionContextProvider supabaseClient={supabaseClient} initialSession={pageProps.initialSession}>
            <div className={"app"}>
                <Header />
                <Component {...pageProps} />
            </div>
        </SessionContextProvider>
    );

}
