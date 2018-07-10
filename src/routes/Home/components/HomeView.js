import React from "react";

import AuthView from './AuthView';

export const HomeView = () => (
  <div className="home-container">
    <div className="container">
      <h1>
        Başlamak için mükemmel olmayı beklemen gerekmez, fakat mükemmel olmak
        için başlamak zorundasın.
      </h1>
      <h2>"Zig Ziglar"</h2>
      <AuthView/>
    </div>

  </div>
);

export default HomeView;
