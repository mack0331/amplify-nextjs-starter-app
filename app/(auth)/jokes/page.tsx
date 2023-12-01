
"use client";
import type { Schema } from "../../../amplify/data/resource";
import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/api";
import { getCurrentUser } from "aws-amplify/auth/cognito";

const client = generateClient<Schema>();

export default function Events() {

  async function createItem() {
      const user = await getCurrentUser();
      const {data, errors} = await client.models.Joke.create({
      body: 'Here is a joke body',
      punchline: 'Here is the punchline: ' + Date.now().toString(),
      owner: user.userId
    },{authMode: "userPool"
    })
    if (errors) {
      console.log(errors)
    } else {
      console.log(data)
    }
  }
  async function deleteItem(gotId: string){
    await client.models.Joke.delete({
      id: gotId
    })
  }
  const [events, setEvents] = useState<Schema["Joke"][]>([]);

  function fetchEvents(){
    return client.models.Joke.observeQuery().subscribe({
      next(value) {
        setEvents([...value.items])
      },
    })
  };

  useEffect(() => {
    const sub = fetchEvents();
    return () => sub.unsubscribe()
  }, []);

  return (
    <div>
      <button onClick={createItem}>Do it, baby</button>
      <ul
        role="list"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {events.map((item, index) => (
          <li
            key={index}
            className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
          >
            <div className="flex w-full items-center justify-between space-x-6 p-6">
              <div className="flex-1 truncate">
                <div className="flex items-center space-x-3">
                  <h3 className="truncate text-sm font-medium text-gray-900">
                    {item.body}
                  </h3>
                  <span className="inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                    {item.punchline} : 
                  <button onClick={() => deleteItem(item.id)}>Delete</button>
                  </span>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}