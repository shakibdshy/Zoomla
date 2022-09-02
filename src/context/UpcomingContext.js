/* eslint-disable prettier/prettier */
import React, { createContext, useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { StreamChat } from "stream-chat";
import auth from "../../firebase/firebase.init";
import useFeedFetch from "../hooks/useFeedFetch";
import useFetch from "../hooks/useFetch";
import useStoryFetch from "../hooks/useStoryFetch";
import useUsers from "../hooks/useUsers";

const Context = createContext();
const FeedContext = createContext();
const StoryContext = createContext();
const UserContext = createContext()

export const StateContext = ({ children }) => {
  const [user] = useAuthState(auth);
  const apiKey = '3pznn44zcu9w';
  const client = StreamChat.getInstance(apiKey);

  const [users, setUser, Uloading] = useUsers(user);
  const [events, setEvents, loading, error] = useFetch();
  const [story, setStory, Sloading, Serror] = useStoryFetch()
  const [Feeds, setFeed, FLoading, FError] = useFeedFetch();

  const currentUser = users?.find(u => u?.email?.includes(client?.user?.name));

  return (
    <Context.Provider value={[events, setEvents, loading, error]}>
      <UserContext.Provider value={[currentUser, users, setUser, Uloading]}>
        <FeedContext.Provider value={[Feeds, setFeed, FLoading, FError]}>
          <StoryContext.Provider value={[story, setStory, Sloading, Serror]} >
            {children}
          </StoryContext.Provider> 
        </FeedContext.Provider>
      </UserContext.Provider>
    </Context.Provider>
  );
};

export const UseStateContext = () => useContext(Context);
export const UseFeedContext = () => useContext(FeedContext);
export const UseStoryContext = () => useContext(StoryContext)
export const UseUserContext = () => useContext(UserContext)
