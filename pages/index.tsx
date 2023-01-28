import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import { useSupabaseClient } from '@supabase/auth-helpers-react'

export default function Home() {
    const supabaseClient = useSupabaseClient();

    return (
        <>
            <h1 className={"text-4xl"}>Main Page</h1>
            <Auth
                appearance={{ theme: ThemeSupa }}
                supabaseClient={supabaseClient}
                providers={['discord']}
                socialLayout="horizontal"
            />
        </>
    )
}
