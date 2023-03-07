"use client";
import { Session } from "next-auth";
import { signIn, signOut } from "next-auth/react";

export default function LoginButton({ session }: { session: Session | null }) {
    if (session && session.user) {
        return (
            <>
                Signed in as {session.user.email} <br />
                <button onClick={() => signOut()}>Sign out</button>
            </>
        );
    }
    return (
        <>
            Not signed in <br />
            <button onClick={() => signIn()}>Sign in</button>
        </>
    );
}
