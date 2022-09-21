import React, { useEffect, useState } from "react";
import { searchUser, userApi } from "../API/users";
import CardList from "../hoc/CardList";
import Loading from "./Loading";
import SearchBox from "./SearchBox";
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
      <div className="dt w-100 vh-50 bg-light-green">
        <div className="dtc tc v-mid">
          <h1>RoboFriends</h1>
          <SearchBox handleChange={handleChange} />
        </div>
      </div>
      {loading ? (
        <Loading />
      ) : robots.length !== 0 ? (
        <CardList robots={robots} />
      ) : (
        <h1>No Data</h1>
      )}
    </div>
  );
};

export default App;
