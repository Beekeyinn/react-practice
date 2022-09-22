import React, { useEffect, useState } from "react";
import { searchUser, userApi } from "../API/users";
import CardList from "../component/CardList";
import ErrorBoundary from "../component/ErrorBoundary";
import Loading from "../component/Loading";
import Scroll from "../component/Scroll";
import SearchBox from "../component/SearchBox";
import "../css/app.css";
const App = () => {
  const [robots, setRobots] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getRobots();
  }, []);

  const handleChange = (event) => {
    event.preventDefault();
    setSearchQuery(event.target.value);
    setTimeout(searchRobots, 1500);
  };
  const searchRobots = async () => {
    if (searchQuery === "") {
      getRobots();
    } else {
      const filteredUsers = await searchUser(searchQuery);
      setRobots(filteredUsers.users);
    }
  };

  const getRobots = async () => {
    const robotsData = await userApi();
    setRobots(robotsData);
    setLoading(false);
  };
  return (
    <div>
      <div className="dt w-100 vh-30">
        <div className="dtc tc v-mid">
          <h1 className="title">RoboFriends</h1>
          <SearchBox handleChange={handleChange} />
        </div>
      </div>
      {loading ? (
        <Loading />
      ) : robots.length ? (
        <Scroll>
          <ErrorBoundary>
            <CardList robots={robots} />
          </ErrorBoundary>
        </Scroll>
      ) : (
        <h1>No Data</h1>
      )}
    </div>
  );
};

export default App;
