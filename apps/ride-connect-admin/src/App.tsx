import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { DriverList } from "./driver/DriverList";
import { DriverCreate } from "./driver/DriverCreate";
import { DriverEdit } from "./driver/DriverEdit";
import { DriverShow } from "./driver/DriverShow";
import { RideList } from "./ride/RideList";
import { RideCreate } from "./ride/RideCreate";
import { RideEdit } from "./ride/RideEdit";
import { RideShow } from "./ride/RideShow";
import { RouteList } from "./route/RouteList";
import { RouteCreate } from "./route/RouteCreate";
import { RouteEdit } from "./route/RouteEdit";
import { RouteShow } from "./route/RouteShow";
import { PassengerList } from "./passenger/PassengerList";
import { PassengerCreate } from "./passenger/PassengerCreate";
import { PassengerEdit } from "./passenger/PassengerEdit";
import { PassengerShow } from "./passenger/PassengerShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"RideConnect"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Driver"
          list={DriverList}
          edit={DriverEdit}
          create={DriverCreate}
          show={DriverShow}
        />
        <Resource
          name="Ride"
          list={RideList}
          edit={RideEdit}
          create={RideCreate}
          show={RideShow}
        />
        <Resource
          name="Route"
          list={RouteList}
          edit={RouteEdit}
          create={RouteCreate}
          show={RouteShow}
        />
        <Resource
          name="Passenger"
          list={PassengerList}
          edit={PassengerEdit}
          create={PassengerCreate}
          show={PassengerShow}
        />
      </Admin>
    </div>
  );
};

export default App;
