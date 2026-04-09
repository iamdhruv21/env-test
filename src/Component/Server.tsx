import React, {Fragment} from 'react';
import config from "@/lib/config";

function Client() {
  const appName = config.get("NEXT_PUBLIC_APP_NAME");
  const secret = config.getServerSide("AMAZON_SECRET");

  return (
    <Fragment>
      <div className="h-[0.5px] w-full bg-gray-500"></div>
      <h2>Server Side</h2>
      <h1 className="text-4xl font-bold mb-8">Welcome to <span className="text-emerald-600 text-5xl font-bold">{appName}</span></h1>
      <h1 className="text-rose-600 text-4xl font-bold">{secret}</h1>
    </Fragment>
  );
}

export default Client;