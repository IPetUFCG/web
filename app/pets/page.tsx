"use client";

import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import PetsProvider from "@/src/context/PetsProvider";

function PetsPage() {
  const { data: session } = useSession();

  console.log({ session });

  return (
    <PetsProvider>
      <div>
        <h1>Protected Route</h1>
        <div className="ml-auto flex gap-2">
          {session?.user ? (
            <div>
              <p>{session.user.name}</p>
              <button onClick={() => signOut()}>Sign Out</button>
            </div>
          ) : (
            <button
              className="bg-white text-black p-2 border-r-4"
              onClick={() => signIn()}
            >
              Sign In
            </button>
          )}
        </div>
      </div>
    </PetsProvider>
  );
}

export default PetsPage;
